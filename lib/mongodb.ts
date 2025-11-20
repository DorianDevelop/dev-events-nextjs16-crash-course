import mongoose from "mongoose";

/**
 * Mongoose connection helper with global cache.
 *
 * Why this exists:
 * - In Next.js (App Router) the server can hot-reload during development and
 *   re-evaluate modules multiple times. Creating a new DB connection on every
 *   reload would quickly exhaust MongoDB connection limits.
 * - We store the connection and the in-flight promise on the global object so
 *   re-imports reuse the same connection/promise.
 */

type MongooseCache = {
    /** An established Mongoose connection (set after the first successful connect). */
    conn: typeof mongoose | null;
    /** A pending connection attempt to avoid duplicate connects under concurrency. */
    promise: Promise<typeof mongoose> | null;
};

declare global {
    // eslint-disable-next-line no-var
    var mongoose: MongooseCache | undefined;
}

// Read once on module init. For production, ensure this value is set at process start.
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    // Fail fast with a clear message (helps both locally and in CI/CD).
    throw new Error("Missing MONGODB_URI. Please define it in your environment (e.g. .env.local)");
}

// Reuse the cache across module reloads in development.
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
    global.mongoose = cached;
}

/**
 * Establish (or reuse) a single MongoDB connection via Mongoose.
 *
 * This function is safe to call many times. The first call creates the
 * connection; subsequent calls reuse the same connection or the same in-flight
 * promise.
 */
async function connectDB(): Promise<typeof mongoose> {
    if (cached.conn){
        return cached.conn;
    }

    if(!cached.promise){
        // Minimal set of options; add pool sizes/timeouts here if needed.
        const options = {
            bufferCommands: false,
        } as const;

        // Do not use non-null assertion in production logic; MONGODB_URI is
        // guaranteed above, so cast here to satisfy TypeScript.
        cached.promise = mongoose.connect(MONGODB_URI as string, options).then((m) => m);
    }

    try {
        cached.conn = await cached.promise;
    } catch(error){
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}

export default connectDB;
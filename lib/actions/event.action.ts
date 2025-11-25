'use server';

import Event, {IEvent} from "@/database/event.model";
import connectDB from "@/lib/mongodb";

export async function getSimilarEventsBySlug(slug: string) {
    try {
        await connectDB();

        const event = await Event.findOne({ slug });

        if (!event) return [];

        return await Event.find({
            _id: { $ne: event._id },
            tags: { $in: event.tags }
        }).lean();
    } catch (error) {
        console.error(error);
        return [];
    }
}
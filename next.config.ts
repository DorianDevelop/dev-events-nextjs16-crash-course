import type { NextConfig } from "next";

/**
 * Next.js configuration
 *
 * - rewrites: Proxy PostHog EU endpoints to avoid ad/tracker blockers and enable
 *   same-origin requests from the client. Adjust to your data residency needs.
 * - skipTrailingSlashRedirect: Keep URLs stable without automatic redirects.
 */

const nextConfig: NextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'res.cloudinary.com'
            }
        ]
    },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;

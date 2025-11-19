// Centralized event seed data for the app
// This can be imported directly in pages/components, e.g.
// import { events } from "@/lib/constants";

export type EventItem = {
  title: string;
  image: string; // path under /public
  slug: string;
  location: string;
  date: string; // human-readable date string
  time: string; // human-readable time string
};

// Note: images reference files under public/images
// Current date: 2025-11-19. Use upcoming dates and popular recurring events.
export const events: EventItem[] = [
  {
    title: "JSConf EU 2026",
    image: "/images/event1.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "June 12–13, 2026",
    time: "09:00–18:00 CEST",
  },
  {
    title: "React Summit 2026",
    image: "/images/event2.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands + Online",
    date: "April 16–17, 2026",
    time: "09:30–17:30 CEST",
  },
  {
    title: "AWS re:Invent 2025",
    image: "/images/event3.png",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, NV, USA",
    date: "December 1–5, 2025",
    time: "08:30–18:00 PST",
  },
  {
    title: "Hack the North 2026",
    image: "/images/event4.png",
    slug: "hack-the-north-2026",
    location: "Waterloo, Ontario, Canada",
    date: "September 18–20, 2026",
    time: "All weekend (Hackathon)",
  },
  {
    title: "KubeCon + CloudNativeCon Europe 2026",
    image: "/images/event5.png",
    slug: "kubecon-eu-2026",
    location: "London, United Kingdom",
    date: "May 5–8, 2026",
    time: "09:00–18:00 BST",
  },
  {
    title: "Google I/O 2026",
    image: "/images/event6.png",
    slug: "google-io-2026",
    location: "Mountain View, CA, USA + Online",
    date: "May 12–13, 2026",
    time: "10:00–17:00 PDT",
  },
];

export default events;

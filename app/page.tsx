import React from 'react'
import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import {IEvent} from "@/database";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Page = async () => {
    const response = await fetch(`${BASE_URL}/api/events`);
    const { events } = await response.json();

    return (
        <section>
            {/* Hero heading */}
            <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>
            {/* CTA to explore the events page */}
            <ExploreBtn />

            <div className={"mt-20 space-y-7"}>
                <h3>Featured Events</h3>
                {/* Render a small, static list. In production, prefer stable unique keys (e.g., event.id) */}
                <ul className="events">
                    {events && events.length > 0 && events.map((event : IEvent) => (
                        <li key={event.title} className={"list-none"}>
                            <EventCard key={event.title} {...event} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default Page

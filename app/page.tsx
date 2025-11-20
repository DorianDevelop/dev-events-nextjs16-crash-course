import React from 'react'
import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import events from "@/lib/constants";

/**
 * Home page
 *
 * Static page that renders a hero and a small list of featured events.
 * In a real app, you might fetch events from a database or API route instead
 * of importing static constants.
 */

const Page = () => {
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
                    {events.map((event) => (
                        <EventCard key={event.title} {...event} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default Page

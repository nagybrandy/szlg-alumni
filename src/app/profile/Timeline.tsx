import React from 'react';
import events from './events.json'
import { EventCard } from './EventCard';

const Timeline = () => {
  return (
    <div className="container mx-auto pt-16 pl-16 min-w-96">
        <div className="relative flex flex-col"></div>
        {events.map((event, index) => (
            <EventCard key={index} {...event} index={index} />
        ))}
    </div>
  );
};

export default Timeline;

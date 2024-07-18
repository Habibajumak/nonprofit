import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.css';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/event/get')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="events">
      <h1>Events:-</h1>
      <h2>Join us to help the needed to make the world 
        better place to live for everyone </h2>
      <div className="events-list">
        {events.length > 0 ? (
          events.map(event => (
            <div key={event.id} className="event-card">
              {event.imageUrl && <img src={`data:image/jpeg;base64,${event.imageUrl}`} alt={event.title} />}
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>{event.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No events available</p>
        )}
      </div>
    </div>
  );
}

export default Events;

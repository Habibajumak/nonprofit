import React, { useState, useEffect } from 'react';

import axios from 'axios';
import EventForm from '../components/EventForm';
import './ManageEvents.css';

function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  

  useEffect(() => {
    axios.get('http://localhost:8080/event/get')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleSave = (formData) => {
    if (currentEvent) {
      
      axios.put(`http://localhost:8080/event/update/${currentEvent.id}`, formData)
        .then(response => {
          const updatedEvents = events.map(ev => ev.id === currentEvent.id ? response.data : ev);
          setEvents(updatedEvents);
          setCurrentEvent(null);
          setShowForm(false);
        })
        .catch(error => console.error('Error updating event:', error));
    } else {
      
      axios.post('http://localhost:8080/event/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => {
          setEvents([...events, response.data]);
          setShowForm(false);
        })
        .catch(error => console.error('Error creating event:', error));
    }
  };

  const handleEdit = (eventId) => {
    const eventToEdit = events.find(ev => ev.id === eventId);
    setCurrentEvent(eventToEdit);
    setShowForm(true);
  };

  const handleDelete = (eventId) => {
    axios.delete(`http://localhost:8080/event/delete/${eventId}`)
      .then(() => {
        const updatedEvents = events.filter(ev => ev.id !== eventId);
        setEvents(updatedEvents);
      })
      .catch(error => console.error('Error deleting event:', error));
  };

  const handleAddNew = () => {
    setCurrentEvent(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setCurrentEvent(null);
  };

  return (
    <div className="manage-events">
      <h2>Manage Events</h2>
      <button onClick={handleAddNew} className="add-new-btn">Add New Event</button>
      {showForm && (
        <EventForm event={currentEvent} onSave={handleSave} onCancel={handleCancel} />
      )}
      <div className="events-list">
        {events.length > 0 ? (
          events.map(event => (
            <div key={event.id} className="event-card">
              {event.imageUrl && <img src={`data:image/jpeg;base64,${event.imageUrl}`} alt={event.title} />}
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>{event.description}</p>
                <div className="event-actions">
                  <button onClick={() => handleEdit(event.id)}>Edit</button>
                  <button onClick={() => handleDelete(event.id)}>Delete</button>
                </div>
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

export default ManageEvents;

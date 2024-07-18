import React, { useState, useEffect } from 'react';
import './EventForm.css';

function EventForm({ event, onSave, onCancel }) {
  const [title, setTitle] = useState(event ? event.title : '');
  const [date, setDate] = useState(event ? event.date : '');
  const [description, setDescription] = useState(event ? event.description : '');
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDate(event.date);
      setDescription(event.description);
      setImageFile(null); // Reset the file input
    }
  }, [event]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('date', date);
    formData.append('description', description);
    if (imageFile) {
      formData.append('image', imageFile);
    }
    onSave(formData);
  };

  

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      
      
      <div className="form-actions">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default EventForm;

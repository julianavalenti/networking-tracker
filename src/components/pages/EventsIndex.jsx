import React, { useState } from 'react';
import { Link } from "react-router-dom";

function EventsIndex(props) {
    
    const [newForm, setNewForm] = useState({
      title: "",
      location: "",
      company: "",
      date: "",
      notes: "",
    });
    
    // handleChange function for form
    const handleChange = (event) => {
      const { name, value } = event.target;
      setNewForm({ ...newForm, [name]: value });
    };
      

    // handle submit function for form
    const handleSubmit = (event) => {
      event.preventDefault();
      props.createEvents(newForm);
      setNewForm({
        title: "",
      location: "",
      company: "",
      date: "",
      notes: "",
      });
      console.log(newForm);
    };
    
    const loaded = () => {
      return props.events.map((event) => (
        <div key={event._id} className="event">
          <Link to={`/events/${event._id}`}>
            <h1>{event.title}</h1>
          </Link>
          <h3>{event.location}</h3>
          <h3>{event.company}</h3>
          <h3>{event.date}</h3>
          <h3>{event.notes}</h3>
        </div>
      ));
    };
  
    const loading = () => {
      return <h1>Loading...</h1>;
    };
  
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.location}
            name="location"
            placeholder="location"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.company}
            name="company"
            placeholder="company"
            onChange={handleChange}
          />
          <input
            type="date"
            value={newForm.date}
            name="date"
            placeholder="date"
            onChange={handleChange}
          />
          
          <input
            type="text"
            value={newForm.notes}
            name="notes"
            placeholder="notes"
            onChange={handleChange}
          />
          <input id="submit-btn" type="submit" value="Add Event" />
        </form>
        {props.events ? loaded() : loading()}
      </section>
    );
}

export default EventsIndex;

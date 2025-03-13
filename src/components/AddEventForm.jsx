import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import { IoIosClose } from 'react-icons/io';
import {toast,ToastContainer } from 'react-toastify';



const AddEventForm = ({isFormOpen, setIsformOpen}) => {
  const [newEvent, setNewEvent] = useState({ title: "", description: "", date: "", location: "", category: "" });
  const {addEvent} = useContext(EventContext);



  // Handle input changes
  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };


  // Handle adding a new event
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newEvent.title || !newEvent.description || !newEvent.date || !newEvent.category || !newEvent.location ) return;
    addEvent(newEvent);
    toast.success("Event Added Successfully")
    setNewEvent({ title: "", description: "", date: "", location: "", category: "" });
    
    setTimeout(() => {
      setIsformOpen(false)
    }, 2000);
   
   
  };

  return (
    <div className='flex flex-col mt-10 mb-20 relative pt-10'>
      <IoIosClose  className='text-5xl absolute right-2 top-1 text-[#F4A261]' onClick={()=>setIsformOpen(false)}/>
      {/* Add Event Form */}
      <ToastContainer />
      <h3 className='text-center text-3xl my-2'>Add a New Event</h3>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
        <input className='add-event-form-input' type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleChange} required />
        <textarea className='add-event-form-input' name="description" rows={10} placeholder="Event Description" value={newEvent.description} onChange={handleChange} required></textarea>
        <input className='add-event-form-input' type="date" name="date" value={newEvent.date} onChange={handleChange} required />
        <input className='add-event-form-input' type="location" placeholder='enter the location of the event' name='location' value={newEvent.location} onChange={handleChange} required />
        <select className='add-event-form-input' name="category" value={newEvent.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
        <button type="submit" className='w-full bg-[#F4A261] py-3 rounded-md text-white border-0 outline-0 shadow-md hover:bg-[#0D3B66]'>Add Event</button>
      </form>
    </div>
  )
}

export default AddEventForm
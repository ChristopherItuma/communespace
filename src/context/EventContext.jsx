import { createContext, useState, useEffect } from "react";
import { demoEvents } from "../data/DemoEvents";
import { toast, ToastContainer } from "react-toastify";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  // Get events from localStorage
  const getStoredEvents = () => {
    const stored = localStorage.getItem("events");
    return stored ? JSON.parse(stored) : null;
  };

  // Initialize state
  const [events, setEvents] = useState(() => {
    const storedEvents = getStoredEvents();
    return storedEvents && storedEvents.length > 0 ? storedEvents : demoEvents;
  });

  // Ensure demoEvents are saved to localStorage if it's empty
  useEffect(() => {
    if (!getStoredEvents()) {
      localStorage.setItem("events", JSON.stringify(demoEvents));
      setEvents(demoEvents); //  Ensure state updates with demo data
    }
  }, []);

  // Update localStorage when events change
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem("events", JSON.stringify(events));
    }
  }, [events]);

  // Function to add a new event
  const addEvent = (newEvent) => {
    setEvents((prevEvents) => {
      const updatedEvents = [newEvent, ...prevEvents];
      localStorage.setItem("events", JSON.stringify(updatedEvents)); // Ensure localStorage updates immediately
      return updatedEvents;
    });
  };


  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;

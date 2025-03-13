import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import Navbar from "../components/Navbar";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import AddEventForm from "../components/AddEventForm";

const EventListing = () => {
  const {events} = useContext(EventContext);
  const [filter, setFilter] = useState("All Events");
  
    //used to toggle form visibiltiy
    const [isFormOpen, setIsformOpen]=useState(false)
  // Filter events
  const filteredEvents = filter === "All Events" ? events : events.filter(event => event.category === filter);

  return (
    <>
    <Navbar />

    <div className="px-[5%] py-[5%] md:py-[1%]">
      {
        isFormOpen && <AddEventForm isFormOpen={isFormOpen} setIsformOpen={setIsformOpen}/>
      }

      <div className="flex justify-between items-end mb-10 mt-10">
      <div>
      <h2 className="text-[1.8rem] font-semibold mb-2">Explore Events</h2>
      <button onClick={()=>setIsformOpen(!isFormOpen)} className="bg-green-100 rounded-full px-3 py-2 mt-3 font-semibold text-[#0D3B66]">Add New Event</button>
      </div>

      {/* Filter Section */}
      <select className="py-2 px-2 rounded-lg border-[#3A5A40] border-1" onChange={(e) => setFilter(e.target.value)}>
        <option value="All Events">All Events</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      </div>

      {/* Event List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 justify-items-center gap-x-5 gap-y-10 md:gap-x-5 mb-10">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div className="shadow-md px-5 py-15 rounded-md w-full relative" key={index}>
              <h3 className="text-2xl font-semibold">{event.title}</h3>
              <p className="py-2 text-lg font-light">{event.description}</p>
              <div className="flex justify-between flex-wrap">
              <p className="text-[#4A3F35] text-md font-light flex items-center md:text-sm"><CiCalendarDate className="inline text-md mr-3 text-[#8E3B46] md:text-md"/> {event.date}</p> 
              <p className="text-[#4A3F35] text-md font-light flex items-center md:text-sm"><CiLocationOn className="inline text-md mr-3 text-[#8E3B46] md:text-sm"/> {event.date}</p>
              </div>
              <p className="bg-[#F4A261] inline px-4 py-1 rounded-full shadow-md absolute bottom-2 mb-2 text-white">{event.category}</p>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default EventListing;

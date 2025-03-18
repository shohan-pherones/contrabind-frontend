import { events } from "@/data";
import Event from "./Event";
import SectionTitle from "./SectionTitle";

const Events = () => {
  return (
    <section className="flex flex-col gap-5">
      <SectionTitle>Events</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {events.map((eventItem) => (
          <Event key={eventItem.id} eventItem={eventItem} />
        ))}
      </div>
    </section>
  );
};

export default Events;

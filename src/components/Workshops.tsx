import { roboticsWorkshops } from "@/data";
import SectionTitle from "./SectionTitle";
import Workshop from "./Workshop";

const Workshops = () => {
  return (
    <section className="flex flex-col gap-5">
      <SectionTitle>Workshops</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {roboticsWorkshops.map((workshop) => (
          <Workshop key={workshop.id} workshop={workshop} />
        ))}
      </div>
    </section>
  );
};

export default Workshops;

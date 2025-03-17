export interface IWorkshop {
  id: string;
  image: string;
  status: "Upcoming" | "Running" | "Past";
  title: string;
  description: string;
  datetime: Date;
  venue: string;
  maxAttendees: number;
  attendees: { id: string; name: string; email: string }[];
  fees: number;
}

import { IEvent } from "@/interfaces";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { BadgeCent, CalendarDays, Clock, MapPin, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Event = ({ eventItem }: { eventItem: IEvent }) => {
  const availableTickets = eventItem.maxAttendees - eventItem.attendees.length;

  return (
    <Card className="pt-0 overflow-hidden">
      <AspectRatio ratio={16 / 9}>
        <Image
          src={eventItem.image}
          alt={eventItem.title}
          width={1280}
          height={720}
          priority
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <CardHeader>
        <Badge
          variant={
            eventItem.status === "Past"
              ? "secondary"
              : eventItem.status === "Running"
              ? "destructive"
              : "default"
          }
        >
          {eventItem.status}
        </Badge>
        <CardTitle>{eventItem.title}</CardTitle>
        <CardDescription>
          {eventItem.description.length > 100
            ? eventItem.description.substring(0, 100)
            : eventItem.description}
          {eventItem.description.length > 100 ? "..." : null}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2">
            <CalendarDays size={18} />
            {format(eventItem.datetime, "MMM dd, yyyy")}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={18} />
            {format(eventItem.datetime, "hh:mm a")}
          </p>
        </div>
        <p className="flex items-center gap-2">
          <MapPin size={18} />
          {eventItem.venue}
        </p>
        <p className="flex items-center gap-2">
          <BadgeCent size={18} />
          <span>${eventItem.fees} (non-refundable)</span>
        </p>
        <p className="flex items-center gap-2">
          <Ticket size={18} />
          <span>
            {availableTickets} ticket{availableTickets > 1 ? "s" : null}{" "}
            available
          </span>
        </p>
      </CardContent>
      <CardFooter className="flex gap-5 mt-auto">
        <Button className="flex-1 cursor-pointer">Register</Button>
        <Link
          href={`/events/${eventItem.id}`}
          className={cn(buttonVariants({ variant: "outline" }), "flex-1")}
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Event;

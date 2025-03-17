import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IWorkshop } from "@/interfaces";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button, buttonVariants } from "./ui/button";

const Workshop = ({ workshop }: { workshop: IWorkshop }) => {
  const availableTickets = workshop.maxAttendees - workshop.attendees.length;

  return (
    <Card className="pt-0 overflow-hidden">
      <AspectRatio ratio={16 / 9}>
        <Image
          src={workshop.image}
          alt={workshop.title}
          width={1280}
          height={720}
          priority
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <CardHeader>
        <Badge
          variant={
            workshop.status === "Past"
              ? "secondary"
              : workshop.status === "Running"
              ? "destructive"
              : "default"
          }
        >
          {workshop.status}
        </Badge>
        <CardTitle>{workshop.title}</CardTitle>
        <CardDescription>{workshop.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2">
            <CalendarDays size={18} />
            {format(workshop.datetime, "MMM dd, yyyy")}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={18} />
            {format(workshop.datetime, "hh:mm a")}
          </p>
        </div>
        <p className="flex items-center gap-2">
          <MapPin size={18} />
          {workshop.venue}
        </p>
        <p className="flex items-center gap-2">
          <Ticket size={18} />
          {availableTickets} ticket{availableTickets > 1 ? "s" : null} available
        </p>
      </CardContent>
      <CardFooter className="flex gap-5">
        <Button className="flex-1 cursor-pointer">Register</Button>
        <Link
          href={`/workshops/${workshop.id}`}
          className={cn(buttonVariants({ variant: "outline" }), "flex-1")}
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Workshop;

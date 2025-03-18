import { IEvent, IWorkshop } from "@/interfaces";

export const roboticsWorkshops: IWorkshop[] = [
  {
    id: "ws-001",
    image:
      "https://images.pexels.com/photos/7868836/pexels-photo-7868836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Upcoming",
    title: "Introduction to Arduino Robotics",
    description:
      "Learn the basics of Arduino programming and build your first robot. This workshop covers fundamental concepts of electronics, programming, and mechanical design suitable for beginners.",
    datetime: new Date("2025-04-10T14:00:00"),
    venue: "BUET Robotics Lab, Dhaka",
    maxAttendees: 20,
    attendees: [
      { id: "u1001", name: "Alex Johnson", email: "alex.j@example.com" },
      { id: "u1002", name: "Sara Williams", email: "sara.w@example.com" },
      { id: "u1003", name: "Mike Chen", email: "mike.c@example.com" },
    ],
    fees: 500,
  },
  {
    id: "ws-002",
    image:
      "https://images.pexels.com/photos/8438983/pexels-photo-8438983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Upcoming",
    title: "Advanced Sensor Integration",
    description:
      "Take your robotics projects to the next level by integrating multiple sensors. Learn about sensor fusion, data processing, and real-time decision making for autonomous robots.",
    datetime: new Date("2025-04-25T13:30:00"),
    venue: "DU Robotics Lab, Dhaka",
    maxAttendees: 15,
    attendees: [
      { id: "u2001", name: "James Wilson", email: "james.w@example.com" },
      { id: "u2002", name: "Priya Patel", email: "priya.p@example.com" },
    ],
    fees: 700,
  },
  {
    id: "ws-003",
    image:
      "https://images.pexels.com/photos/8438940/pexels-photo-8438940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Running",
    title: "Robot Arm Programming",
    description:
      "Hands-on workshop focused on programming industrial-style robot arms. Participants will learn inverse kinematics, trajectory planning, and object manipulation techniques.",
    datetime: new Date("2025-03-15T10:00:00"),
    venue: "NSU Engineering Lab, Dhaka",
    maxAttendees: 12,
    attendees: [
      { id: "u3001", name: "David Lee", email: "david.l@example.com" },
      { id: "u3002", name: "Emma Rodriguez", email: "emma.r@example.com" },
      { id: "u3003", name: "Jamal Washington", email: "jamal.w@example.com" },
      { id: "u3004", name: "Olivia Kim", email: "olivia.k@example.com" },
    ],
    fees: 1000,
  },
  {
    id: "ws-004",
    image:
      "https://images.pexels.com/photos/7869452/pexels-photo-7869452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Running",
    title: "Machine Vision for Robots",
    description:
      "Explore computer vision techniques for robotics applications. Learn to implement object detection, tracking, and visual SLAM for navigation using popular libraries and frameworks.",
    datetime: new Date("2025-03-17T15:30:00"),
    venue: "BRAC University Campus, Dhaka",
    maxAttendees: 18,
    attendees: [
      { id: "u4001", name: "Thomas Brown", email: "thomas.b@example.com" },
      { id: "u4002", name: "Lisa Garcia", email: "lisa.g@example.com" },
      { id: "u4003", name: "Robert Taylor", email: "robert.t@example.com" },
    ],
    fees: 800,
  },
];

export const events: IEvent[] = [
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Upcoming",
    title: "Annual Robotics Fest",
    description:
      "Celebrate the wonders of robotics with exhibitions, competitions, and interactive demos. Join enthusiasts and innovators from around the world.",
    datetime: new Date("2025-05-10T09:00:00"),
    venue: "Tech Arena, Dhaka",
    maxAttendees: 500,
    attendees: [
      { id: "a1", name: "John Doe", email: "john@example.com" },
      { id: "a2", name: "Jane Smith", email: "jane@example.com" },
    ],
    fees: 50,
  },
  {
    id: "2",
    image:
      "https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Upcoming",
    title: "EEE Annual Carnival",
    description:
      "The Electrical and Electronic Engineering community gathers for an electrifying day of tech exhibitions, interactive displays, and performances.",
    datetime: new Date("2025-06-15T10:00:00"),
    venue: "Engineering Auditorium, Stamford University",
    maxAttendees: 300,
    attendees: [
      { id: "b1", name: "Ali Khan", email: "ali@example.com" },
      { id: "b2", name: "Sara Rahman", email: "sara@example.com" },
    ],
    fees: 30,
  },
  {
    id: "3",
    image:
      "https://images.pexels.com/photos/2608512/pexels-photo-2608512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Upcoming",
    title: "CS Night Gala",
    description:
      "A grand night of celebration for the Computer Science community, featuring live music, a tech trivia contest, and food.",
    datetime: new Date("2025-07-20T18:00:00"),
    venue: "University Hall, Dhaka",
    maxAttendees: 400,
    attendees: [
      { id: "c1", name: "Tariq Ahmed", email: "tariq@example.com" },
      { id: "c2", name: "Meera Chowdhury", email: "meera@example.com" },
    ],
    fees: 40,
  },
  {
    id: "4",
    image:
      "https://images.pexels.com/photos/8761328/pexels-photo-8761328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Upcoming",
    title: "Space Exploration Festival",
    description:
      "Join us for a day celebrating space exploration with interactive exhibitions, talks from astronomers, and a night sky viewing event.",
    datetime: new Date("2025-08-05T14:00:00"),
    venue: "Science Park, Dhaka",
    maxAttendees: 600,
    attendees: [
      { id: "d1", name: "Rina Islam", email: "rina@example.com" },
      { id: "d2", name: "Zainul Abedin", email: "zainul@example.com" },
    ],
    fees: 25,
  },
];

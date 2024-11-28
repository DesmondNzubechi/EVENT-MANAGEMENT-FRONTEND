import { EventType } from "../types/types";
import eventImg1 from '../../public/images/event1.avif'
import eventImg2 from '../../public/images/event2.avif'
import eventImg3 from '../../public/images/event3.avif'


export const events: EventType[] = [
    {
      title: "Music Fiesta 2024",
      description: "An electrifying night with top music artists.",
      date: "2024-12-15",
      price: 50,
      location: "Madison Square Garden, New York",
      totalTicket: 1000,
      availableTicket: 300,
      image: eventImg1,
    },
    {
      title: "Tech Expo 2024",
      description: "Showcasing the latest in technology and innovation.",
      date: "2024-11-28",
      price: 20,
      location: "Silicon Valley Conference Center, California",
      totalTicket: 500,
      availableTicket: 120,
      image: eventImg2,
    },
    {
      title: "Food Carnival",
      description: "A gastronomic adventure with dishes from around the world.",
      date: "2024-10-05",
      price: 15,
      location: "Central Park, New York",
      totalTicket: 200,
      availableTicket: 50,
      image: eventImg3,
    },
    {
      title: "Art & Culture Festival",
      description: "A celebration of art, music, and traditions.",
      date: "2024-09-22",
      price: 30,
      location: "Art District, Los Angeles",
      totalTicket: 800,
      availableTicket: 200,
      image: eventImg1,
    },
    {
      title: "Sports Meet 2024",
      description: "Watch thrilling matches and meet your favorite athletes.",
      date: "2024-08-30",
      price: 40,
      location: "National Stadium, Chicago",
      totalTicket: 1500,
      availableTicket: 500,
      image: eventImg2,
    },
    {
      title: "Comedy Night",
      description: "Laugh out loud with top stand-up comedians.",
      date: "2024-07-20",
      price: 25,
      location: "Comedy Club, San Francisco",
      totalTicket: 300,
      availableTicket: 50,
      image: eventImg3,
    },
  ];
  
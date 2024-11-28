import { ObjectId } from "mongoose";

export interface userType {
    _id: ObjectId;
    fullName: string; 
    email: string;
    userName: string;
    images: string;
    phoneNumber: number;
    emailVerified: boolean;
    role: string;
}


export interface EventType {
    title: string;
    description: string;
    date: string;
    price: number;
    location: string;
    totalTicket: number;
    availableTicket: number;
    image: string | any;
  }
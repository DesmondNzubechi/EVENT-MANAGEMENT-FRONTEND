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
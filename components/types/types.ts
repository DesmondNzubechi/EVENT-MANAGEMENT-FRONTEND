import { ObjectId } from "mongoose"
import { IconType } from "react-icons"


export interface navType {
    name: String
    url: String | any
}

export interface ourServiceType {
    image: HTMLImageElement | any
    title: string
    descrip: string
    link : string
}

export interface propertyOverview {
   name: string
    location: string
    bedroom: string
    bathroom: string
    car: string
    imageNo: string
    images: HTMLImageElement | any
    video: string
    price: string
    status: string
}

export interface accountNav {
    name: string
    url: string
    icon : IconType
}

export interface loginDetail {
    email: string
    password : string
}

export interface userType {
    _id: ObjectId;
    firstName: string; 
    lastName: string;
    email: string;
    userName: string;
    images: string;
    phoneNumber: number;
    emailVerified: boolean;
    role: string;
    country: string;
    state: string;
}
  
export interface propertyType {
    name: string,
    _id: string,
    location: string,
    map: string,
    price: number | string,
    images: string[],
    description: string,
    developmentStatus: string,
    amenities: string,
    interiorFeatures: string,
    extriorFeatures: string,
    reviews: any,
    date: any
    status: string
    yearBuilt: string
    bedroom: string
    bathroom: string
    garadge: string
    type : string
}

export interface commentType {
    username: String,
    _id: String,
    blog: ObjectId,
    user: ObjectId | string,
    comment: String,
    createdAt : String
}

export interface blogType {
    title: string,
    slug: string,
    content: string,
    comments: commentType[],
    status: string,
    images: string,
    _id: ObjectId  | string,
    tag: String,
    date: any 
}


export interface landType {
    name: string,
    map: string | TrustedHTML | any,
    images: string[],
    description: string,
    location: string,
    date: string,
    price: number,
    _id: ObjectId | string
}

export interface reviewType{
    reviewerName: string,
    review: string,
    rating: number,
    property: ObjectId | string,
    user: ObjectId | string,
    createdAt: string,
    _id : string
}

export interface orderType{
    user: ObjectId | string,
    property: propertyType,
    status: string,
    orderDate: string,
    _id: ObjectId | string,
};
 
export interface propertyActivitiesType {
    property: propertyType,
    activityType: string
    timestamp: string
    user: string | ObjectId
}

export interface blogActivitiesType {
    blog: blogType,
    activityType: string
    timestamp: string
    user: string | ObjectId
}

export interface filteringPropsType {
    location: string
    type: string
    status : string
}

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BookingType, EventType, userType } from "../types/types";

interface userState {
  user: userType | null;
  setUser: (user: userState["user"]) => void;
  clearUser: () => void;
}

// Persisted User Store
export const useUserStore = create(
  persist<userState>(
    (set: any) => ({
      user: null,
      setUser: (user: any) => set({ user }),
      clearUser: () => set({ user: null, token: null }),
    }),
    {
      name: "user",
    
    }
  )
);


interface emailState {
  providedEmail: string
  setProvidedEmail: (providedEmail: emailState['providedEmail']) => void
}

// Persisted User Store
export const useEmailStore = create(
  persist<emailState>(
    (set: any) => ({
      providedEmail: '',
      setProvidedEmail: (providedEmail: string) => set({providedEmail}),
    }),
    {
      name: "providedEmail",
    
    }
  )
);



interface eventState {
  event: EventType[] | null;
  setEvent: (event: eventState["event"]) => void;
}

// Persisted Event Store
export const useEventStore = create(
  persist<eventState>(
    (set: any) => ({
      event: null,
      setEvent: (event: any) => set({ event }),
    }),
    {
      name: "event",
    
    }
  )
);


interface bookedEventState {
  bookedEvent: BookingType[] | null;
  setBookedEvent: (bookedEvent: bookedEventState["bookedEvent"]) => void;
}

// Persisted Booked Event Store
export const useBookedEventStore = create(
  persist<bookedEventState>(
    (set: any) => ({
      bookedEvent: null,
      setBookedEvent: (bookedEvent: any) => set({ bookedEvent }),
    }),
    {
      name: "bookedEvent",
    
    }
  )
);
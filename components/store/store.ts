import { create } from "zustand";
import { persist } from "zustand/middleware";
import { userType } from "../types/types";

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
      token: null,
      setUser: (user:any) => set({ user }),
      clearUser: () => set({ user: null, token: null }),
    }),
    {
      name: "user", // Key for localStorage
    }
  )
);

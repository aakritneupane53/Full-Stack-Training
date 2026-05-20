import { create } from "zustand";

export const useListOfPlayers = create((set, get) => ({
  players: ["John", "Jane", "Doe"],
  getPlayers: () => get().players,
}));

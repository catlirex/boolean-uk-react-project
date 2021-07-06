import create from "zustand";
import { createAPILink } from "./API";

const useStore = create((set, get) => ({
  modal: "",
  setModal: (modal) => set({ modal }),
  closeModal: () => set({ modal: "" }),
  searchResult: [],
  getSearchResult: (fromPostCode, toPostCode) => {
    fetch(createAPILink(fromPostCode, toPostCode))
      .then((resp) => resp.json())
      .then((data) => {
        let usefulData = data.routes;
        usefulData.map((routes) => {
          routes.route_parts.map((part) => {
            part.coordinates = part.coordinates.map(([lan, lon]) => [lon, lan]);
          });
        });
        set({ searchResult: [...usefulData] });
      });
  },

  searchHistory: [],
  addSearchHistory: (searchResult) => {
    let newHistory = {
      fromName: "LondonEye",
      fromPostcode: "E21DF",
      toName: "GreenPark",
      toPostCode: "E21DF",
    };
    set({ searchHistory: [...get().searchHistory, newHistory] });
  },
}));

export default useStore;

import create from "zustand";
import { createAPILink } from "./consistent";

const useStore = create((set, get) => ({
  viewHistory: false,
  setViewHistory: (boolean) => set({ viewHistory: boolean }),
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
      })
      .catch((error) => {
        console.error("Error:", error);
        set({ searchResult: [] });
      });
  },
  clearSearchResult: () => {
    set({ searchResult: null });
  },
  searchValue: {},
  updateSearchValue: (fromPostcode, toPostcode) => {
    set({ searchValue: { fromPostcode, toPostcode } });
  },

  noLoginSearchHistory: [],
  addNoLoginSearchHistory: (newHistory) =>
    set({
      noLoginSearchHistory: [newHistory, ...get().noLoginSearchHistory],
    }),
  delLoginSearchHistory: (historyArray) =>
    set({ noLoginSearchHistory: historyArray }),

  mapCenterCoordinates: [],
  updateMapCenterCoordinates: (array) => {
    set({ mapCenterCoordinates: array });
  },

  map: null,
  updateMap: (newMap) => set({ map: newMap }),
  zoomScaleControl: null,
  setZoomScaleControl: (zoomLevel) => set({ zoomScaleControl: zoomLevel }),
}));

export default useStore;

import create from "zustand";
import { getUser, patchUpdateUser } from "./consistent";

const useAcStore = create((set, get) => ({
  loginUser: null,
  setLogInUser: (e) => {
    getUser(e.target.username.value).then((data) => {
      if (data.password && data.password === e.target.password.value)
        set({ loginUser: data });
      else alert("Username or Password incorrect");
    });
  },
  logoutUser: () => {
    set({ loginUser: null });
  },
  newRegUserSetLogin: (newRegUser) => set({ loginUser: newRegUser }),
  addHistoryToLoginUser: (newHistory) => {
    console.log("newHistory", newHistory);
    let history = [newHistory, ...get().loginUser.history];
    console.log("history", history);

    patchUpdateUser(get().loginUser.id, { history }).then((data) =>
      set({ loginUser: data })
    );
  },
  updateHistory: (newHistory) => {
    patchUpdateUser(get().loginUser.id, { history: newHistory }).then((data) =>
      set({ loginUser: data })
    );
  },
  updateJourney: (newJourney) => {
    patchUpdateUser(get().loginUser.id, { "saved-journey": newJourney }).then(
      (data) => set({ loginUser: data })
    );
  },

  addSavePlace: (updatedObj) => {
    patchUpdateUser(get().loginUser.id, { "saved-place": updatedObj }).then(
      (data) => set({ loginUser: data })
    );
  },
  selectedBookmarkPostcode: null,
  setSelectedBookmarkPostcode: (postcode) =>
    set({ selectedBookmarkPostcode: postcode }),
}));

export default useAcStore;

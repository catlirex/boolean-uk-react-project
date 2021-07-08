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
}));

export default useAcStore;

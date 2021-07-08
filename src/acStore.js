import create from "zustand";
import { getUser } from "./consistent";

const useAcStore = create((set, get) => ({
  //   userList: [],
  //   getUserList: () => {
  //     fetch("http://localhost:4000/users")
  //       .then((resp) => resp.json())
  //       .then((users) => set({ userList: [...users] }));
  //   },
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
  addHistoryToLoginUser: (newHistory) =>
    set({
      loginUser: {
        ...get().loginUser,
        history: [newHistory, ...get().loginUser.history],
      },
    }),
}));

export default useAcStore;

import {create} from "zustand";

export const useTokenStore = create((set) => ({
    token: localStorage.getItem("auth-token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    role: null,
    name: null,

    login: (newToken, newUser, role, name) => {
        
        localStorage.setItem("auth-token", newToken);
        localStorage.setItem("user", JSON.stringify(newUser));
        set({token: newToken, user: newUser, role: role, name: name});
    },

    logout: () => {
        localStorage.removeItem("auth-token");
        localStorage.removeItem("user");
        set({token: null, user: null, role: null, name: null});
    }
}));
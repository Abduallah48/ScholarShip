import { create } from "zustand";

export const useTokenStore = create((set) => ({
    
    token: localStorage.getItem("auth_token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    role: localStorage.getItem("role") || null,
    name: localStorage.getItem("name") || null,

    login: (newToken, newUser, role, name) => {
        
        localStorage.setItem("auth_token", newToken);
        localStorage.setItem("user", JSON.stringify(newUser));
        localStorage.setItem("role", role);
        localStorage.setItem("name", name);
        
        set({ token: newToken, user: newUser, role: role, name: name });
    },

    logout: () => {
        
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        localStorage.removeItem("name");
        
        set({ token: null, user: null, role: null, name: null });
    }
}));
import { create } from "zustand";
import { io } from "socket.io-client";

export const useNotificationStore = create((set, get) => ({
    // --- STATE VARIABLES ---
    notifications: [],
    socket: null,
    unRead: 0,
    isConnected: false,

    // --- METHODS ---
    connectSocket: (token) => {
        const currentSocket = get().socket;
        
        // Guard: Don't create a new connection if one already exists
        if (currentSocket?.connected) return;

        // 1. Connect to the NEW Node.js server port (4000)
        // Notice we removed auth: { token } because your backend handles it via an event now
        const socket = io("http://localhost:4000");
        
        set({ socket });

        // 2. When the socket connects, immediately send the token to authenticate
        socket.on("connect", () => {
            console.log("Connected to Socket server. Sending auth token...");
            socket.emit("authenticate", token); 
        });

        // 3. Listen for the backend's custom 'authenticated' response
        socket.on("authenticated", (response) => {
            if (response.success) {
                set({ isConnected: true }); 
                console.log(`Authenticated successfully! Joined room for User ${response.userId}`);
            } else {
                console.error("Socket authentication failed. Invalid token.");
                socket.disconnect(); // Hang up if the backend rejected us
                set({ isConnected: false });
            }
        });

        // Catch general connection drops
        socket.on("connect_error", (err) => {
            console.warn("Backend socket server is offline or unreachable.",err);
            set({ isConnected: false });
        });

        // Listen for new notifications
        socket.on("new_notification", (notification) => {
            get().addNotification(notification);
        });

        socket.on("disconnect", () => {
            set({ isConnected: false });
            console.log("Socket disconnected.");
        });
    },

    disconnectSocket: () => {
        const { socket } = get();
        if (socket) {
            socket.disconnect();
            set({ socket: null, isConnected: false });
        }
    },

    addNotification: (notification) => {
        set((state) => ({
            notifications: [...state.notifications, notification],
            unRead: state.unRead + 1
        }));
    },

    markAsRead: (id) => {
        set((state) => {
            const target = state.notifications.find(n => n.id === id);
            if (!target || target.isRead) return state;

            return {
                notifications: state.notifications.map((notification) => 
                    notification.id === id 
                        ? { ...notification, isRead: true } 
                        : notification
                ),
                unRead: state.unRead - 1
            };
        });
    },

    markAllAsRead: () => {
        set((state) => ({
            notifications: state.notifications.map((notification) => ({
                ...notification, 
                isRead: true
            })),
            unRead: 0
        }));
    }
}));
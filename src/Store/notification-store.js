import { create } from "zustand";
import { io } from "socket.io-client";

export const useNotificationStore = create((set, get) => ({
  // --- STATE VARIABLES ---
  notifications: [],
  socket: null,
  unRead: 0,
  isConnected: false,

  // Ingest API response data
  setInitialNotifications: (apiData) => {
    set({
      notifications: apiData?.notifications || [],
      unRead: apiData?.unread_count || 0,
    });
  },

  // --- METHODS ---
  connectSocket: (token) => {
    const currentSocket = get().socket;
    if (currentSocket?.connected) return;

    const socket = io("http://localhost:4000");
    set({ socket });

    socket.on("connect", () => {
      console.log("Connected to Socket server. Sending auth token...");
      socket.emit("authenticate", token);
    });

    socket.on("authenticated", (response) => {
      if (response.success) {
        set({ isConnected: true });
        console.log(`Authenticated successfully! Joined room for User ${response.userId}`);
      } else {
        console.error("Socket authentication failed. Invalid token.");
        socket.disconnect();
        set({ isConnected: false });
      }
    });

    socket.on("connect_error", (err) => {
      console.warn("Backend socket server is offline or unreachable.", err);
      set({ isConnected: false });
    });

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
      notifications: [notification, ...state.notifications],
      unRead: state.unRead + 1,
    }));
  },

  deleteNotification: (id) => {
    set((state) => {
      const target = state.notifications.find((n) => n.id === id);
      const wasUnread = target && !target.isRead;
      return {
        notifications: state.notifications.filter((n) => n.id !== id),
        unRead: wasUnread ? Math.max(0, state.unRead - 1) : state.unRead,
      };
    });
  },

  markAsRead: (id) => {
    set((state) => {
      const target = state.notifications.find((n) => n.id === id);
      if (!target || target.isRead) return state;

      return {
        notifications: state.notifications.map((notification) =>
          notification.id === id
            ? { ...notification, isRead: true }
            : notification
        ),
        unRead: Math.max(0, state.unRead - 1),
      };
    });
  },

  markAllAsRead: () => {
    set((state) => ({
      notifications: state.notifications.map((notification) => ({
        ...notification,
        isRead: true,
      })),
      unRead: 0,
    }));
  },
}));

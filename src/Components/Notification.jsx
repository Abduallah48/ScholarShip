import { useNotificationStore } from "../Store/notification-store.js";

function Notification({ notificationListOpen, setNotificationListOpen }) {
  const notifications = useNotificationStore((state) => state.notifications);
  const deleteNotification = useNotificationStore((state) => state.deleteNotification);
  const markAsRead = useNotificationStore((state) => state.markAsRead);
  const markAllAsRead = useNotificationStore((state) => state.markAllAsRead);

  if (!notificationListOpen) return null;

  return (
    <div className="absolute right-30 top-12 z-50 w-80 md:right-90 lg:right-160 md:w-96 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col max-h-[28rem]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">الإشعارات</h3>
        <div className="flex items-center gap-2">
          {notifications.length > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 font-semibold cursor-pointer"
            >
              تحديد الكل كتقروء
            </button>
          )}
          <button
            onClick={() => setNotificationListOpen(false)}
            className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 text-lg leading-none cursor-pointer p-1"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Notification List */}
      <div className="overflow-y-auto flex-1 divide-y divide-slate-100 dark:divide-slate-700">
        {notifications.length === 0 ? (
          <div className="p-6 text-center text-slate-0 dark:text-slate-300 text-sm">
            لا توجد إشعارات حالياً
          </div>
        ) : (
          notifications.map((item) => (
            <div
              key={item.id}
              onClick={() => markAsRead(item.id)}
              className={`flex items-start justify-between gap-3 p-3 transition-colors cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 ${
                !item.isRead ? "bg-indigo-50/50 dark:bg-slate-800/90" : ""
              }`}
            >
              <div className="flex items-start gap-2 flex-1">
                {!item.isRead && (
                  <span className="h-2 w-2 mt-2 rounded-full bg-indigo-600 shrink-0" />
                )}
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-snug">
                    {item.message || item.title || "إشعار جديد"}
                  </p>
                  {item.createdAt && (
                    <span className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                      {item.createdAt}
                    </span>
                  )}
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents triggering markAsRead click event
                  deleteNotification(item.id);
                }}
                className="text-slate-400 hover:text-red-600 dark:hover:text-red-400 text-sm p-1 rounded transition-colors cursor-pointer shrink-0"
                title="حذف الإشعار"
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Notification;
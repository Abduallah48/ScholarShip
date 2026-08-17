import { useNotificationStore } from "../Store/notification-store.js";
import { useNavigate } from "react-router-dom"; // استيراد الـ Navigate
import { Link } from "react-router-dom"; 
function Notification({ notificationListOpen, setNotificationListOpen }) {
  const navigate = useNavigate();
  const notifications = useNotificationStore((state) => state.notifications);
  const deleteNotification = useNotificationStore((state) => state.deleteNotification);
  const markAsRead = useNotificationStore((state) => state.markAsRead);
  const markAllAsRead = useNotificationStore((state) => state.markAllAsRead);

  if (!notificationListOpen) return null;

  // دالة التعامل مع الضغط على الإشعار
  const handleNotificationClick = (item) => {
    // 1. تحديد الإشعار كمقروء
    markAsRead(item.id);
    
    // 2. إغلاق قائمة الإشعارات بعد الضغط (اختياري لتحسين تجربة المستخدم)
    setNotificationListOpen(false);

    // 3. التوجيه إلى صفحة المنحة
    // بناءً على الصورة المرفقة للباك إند، البيانات تأتي داخل حقل data غالباً
    if (item.data && item.data.scholarship_id) {
        navigate(`/detailsPage/${item.data.scholarship_id}`);
    } else if (item.data && item.data.link) {
        // حالة احتياطية إذا كنت تفضل استخدام الرابط القادم من الباك إند مباشرة
        <Link to={item.data.link} />;
    }
  };

  return (
    <div className="absolute top-full right-0 md:left-20 md:right-0 mt-2 z-50 w-80 md:w-96 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col max-h-[28rem]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">الإشعارات</h3>
        <div className="flex items-center gap-2">
          {notifications.length > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 font-semibold cursor-pointer"
            >
              تحديد الكل كمقروء
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
          <div className="p-6 text-center text-slate-500 dark:text-slate-400 text-sm">
            لا توجد إشعارات حالياً
          </div>
        ) : (
          notifications.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNotificationClick(item)} // استخدام الدالة الجديدة هنا
              className={`flex items-start justify-between gap-3 p-3 transition-colors cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 ${
                !item.isRead ? "bg-indigo-50/50 dark:bg-slate-800/90" : ""
              }`}
            >
              <div className="flex items-start gap-2 flex-1">
                {!item.isRead && (
                  <span className="h-2 w-2 mt-2 rounded-full bg-indigo-600 shrink-0" />
                )}
                
                {/* بناءً على بيانات Laravel المرفقة في الصورة */}
                <div className="flex flex-col">
                  {item.data && item.data.scholarship_name ? (
                    <>
                      {/* اسم المنحة بخط عريض */}
                      <p className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                        {item.data.scholarship_name}
                      </p>
                      {/* البلد والاختصاص بخط أصغر */}
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                        {item.data.country_name} | {item.data.specialization_name}
                      </p>
                    </>
                  ) : (
                    /* حالة احتياطية للإشعارات العادية التي لا تحتوي بيانات منحة */
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-snug">
                      {item.message || item.title || "إشعار جديد"}
                    </p>
                  )}
                  
                  {/* وقت الإشعار */}
                  {item.createdAt && (
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">
                      {item.createdAt}
                    </span>
                  )}
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // هذه الدالة تمنع تفعيل onClick الخاص بالإشعار (التوجيه) عند كبس الحذف
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
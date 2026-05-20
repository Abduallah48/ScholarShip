
function About() {
    return(
        <div id="about" className="p-6">
                <div className="max-w-3xl mx-auto p-6 md:p-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 dark:text-indigo-400 mb-8">
        عن المنصة
    </h2>

    <div className="space-y-6 text-right">
        <p className="text-gray-700 dark:text-gray-300 leading-loose">
            هي منصة مركزية تهدف إلى جمع المعلومات الخاصة بالمنح الدراسية في مكان واحد، 
            لتوفير الوقت والجهد على الباحثين عن فرص تعليمية.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-loose">
            نؤمن بأن العثور على المنحة المناسبة لا يجب أن يكون معقداً أو مرهقاً. 
            لذلك صممنا موقعنا ليكون:
        </p>

        <div className="space-y-2 pr-4">
            <p className="text-gray-700 dark:text-gray-300"><span className="font-bold text-indigo-700 dark:text-indigo-400">بسيطاً :</span> واجهة سهلة، بحث سريع، ونتائج واضحة.</p>
            <p className="text-gray-700 dark:text-gray-300"><span className="font-bold text-indigo-700 dark:text-indigo-400">مركزياً :</span> كل المنح المتاحة تجدها هنا، مصنفة ومفهرسة.</p>
            <p className="text-gray-700 dark:text-gray-300"><span className="font-bold text-indigo-700 dark:text-indigo-400">موثوقاً :</span> يتم تحديث المعلومات بشكل دوري مع ذكر المصادر ومواعيد التقديم.</p>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-indigo-800 dark:text-indigo-400 mt-8 mb-4">
            ماذا يمكنك أن تفعل في المنصة؟
        </h3>

        <div className="space-y-2 pr-4">
            <p className="text-gray-700 dark:text-gray-300">• البحث عن المنح حسب التخصص، البلد، أو المستوى الدراسي</p>
            <p className="text-gray-700 dark:text-gray-300">• حفظ المنح التي تهمك في قائمة المفضلة</p>
            <p className="text-gray-700 dark:text-gray-300">• تفعيل الإشعارات لتصلك التنبيهات عند إضافة منح جديدة</p>
            <p className="text-gray-700 dark:text-gray-300">• الاطلاع على طريقة التقديم خطوة بخطوة لكل منحة</p>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-loose mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            المنصة متاحة بالكامل للمستخدمين المسجلين، ولا تحتاج إلى تعبئة ملف شخصي أو سيرة ذاتية للبدء.
        </p>
    </div>
    </div>
            </div>
    );
}

export default About
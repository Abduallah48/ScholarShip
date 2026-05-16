//import React, {useState, useEffect} from "react";
import photo from './assets/messi.png'

function Card() {

    return(
        <div className='flex items-center justify-center'>
        <div className="flex flex-col gap-2 border max-w-sm p-4 rounded-xl shadow-lg shadow-indigo-700 hover:shadow-md transition-all duration-300 bg-white
                        dark:bg-slate-800">
            <img src={photo} alt="logo" className='rounded-lg object-cover '/>
            <h2 className='text-right text-2xl font-bold text-slate-900 mb-6
                            dark:text-slate-50' >
                                المنحة الايطالية للعلوم
            </h2>
            <div className='flex flex-wrap gap-4 justify-end '>
                <span className='bg-slate-200 p-2 rounded-xl font-bold text-lg
                                    dark:text-slate-300 dark:bg-slate-700'>
                    ميلان
                </span>
                <span className='bg-slate-200 p-2 rounded-xl font-bold text-lg
                                    dark:text-slate-300 dark:bg-slate-700'>
                    تمويل كامل
                </span>
                <span className='bg-slate-200 p-2 rounded-xl font-bold text-lg
                                    dark:text-slate-300 dark:bg-slate-700'>
                    ماجستير
                </span>
                <span className='bg-slate-200 p-2 rounded-xl font-bold text-lg
                                    dark:text-slate-300 dark:bg-slate-700'>
                    Computer Science
                </span>
            </div>
            <div className='flex gap-4 justify-end'>
                <button className="bg-indigo-500 font-semibold text-white rounded-2xl px-4 py-2 cursor-pointer shadow-xl/20  hover:bg-indigo-600 transition-all duration-300">عرض تفاصيل المنحة </button>
                <button className="bg-indigo-600 font-semibold text-slate-100 rounded-2xl px-4 py-2 cursor-pointer shadow-xl/20 hover:bg-indigo-700 transition-all duration-300">حفظ</button>
            </div>
            <span className='text-lg text-red-600 font-semibold '>باقي 48 يوم</span>
        </div>
        </div>
        
    );

}

export default Card
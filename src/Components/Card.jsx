//import React, {useState, useEffect} from "react";
//import photo from '../assets/messi.png';

import { useNavigate } from "react-router-dom";
import { useTokenStore } from "../Store/token-store";

function Card({scholarship}) {
    const token = useTokenStore((state) => state.token);
    const navigate = useNavigate();

    return(
        <div key={scholarship.id} className='flex items-center justify-center'>
        <div className="flex flex-col gap-2 border max-w-sm p-4 rounded-xl shadow-lg shadow-indigo-700 hover:shadow-md transition-all duration-300 bg-white
                        dark:bg-slate-800">
            <img src={scholarship.photo_url} alt="logo" className='rounded-lg object-cover w-full h-[250px]'/>
            <h2 className='text-right text-2xl font-bold text-slate-900 mb-6
                            dark:text-slate-50' >
                {scholarship.scholarship_name}
            </h2>
            <div className='flex flex-wrap gap-4 justify-end '>
                <span className='bg-slate-200 p-2 rounded-xl font-bold text-lg
                                    dark:text-slate-300 dark:bg-slate-700'>
                             {scholarship.city_name}           
                </span>
                <span className='bg-slate-200 p-2 rounded-xl font-bold text-lg
                                    dark:text-slate-300 dark:bg-slate-700'>
                   {scholarship.finance}
                </span>
                <span className='bg-slate-200 p-2 rounded-xl font-bold text-lg
                                    dark:text-slate-300 dark:bg-slate-700'>
                                        {scholarship.degree}
                        </span>
                <span className='bg-slate-200 p-2 rounded-xl font-bold text-lg
                                    dark:text-slate-300 dark:bg-slate-700'>
                    {scholarship.specialization_name} 
                </span>
            </div>
            <div className='flex gap-4 justify-end'>
                <button className="bg-indigo-500 font-semibold text-white rounded-2xl px-4 py-2 cursor-pointer shadow-xl/20  hover:bg-indigo-600 transition-all duration-300" onClick={() => navigate('/detailsPage')}>
                    عرض تفاصيل المنحة
                </button>
                {token && <button className="bg-indigo-600 font-semibold text-slate-100 rounded-2xl px-4 py-2 cursor-pointer shadow-xl/20 hover:bg-indigo-700 transition-all duration-300">حفظ</button>}
            </div>
            <span className='text-lg text-red-600 font-semibold '>{scholarship.start_status}  </span>
        </div>
        </div>
        
    );

}

export default Card
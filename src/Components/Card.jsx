import {useState} from "react";
//import photo from '../assets/messi.png';

import { useNavigate } from "react-router-dom";
import { useTokenStore } from "../Store/token-store";

function Card({scholarship}) {
    const token = useTokenStore((state) => state.token);
    const navigate = useNavigate();
    const scholarshipID = scholarship.id;
    
    
    const [isFavorite, setIsFavorite] = useState(scholarship.is_favorite || false);

    

    async function addScholarshipToFavurates(id) {
        try{
            const res = await fetch(`http://127.0.0.1:8000/api/favorites/${id}`,{
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                Authorization: `Bearer ${token}`
            },
            
        });
        if(res.ok){
            console.log("Scholarship added succeffuly");
            setIsFavorite(true);
        }else{
            console.log("something went wrong in the fetching process")
        }
        }catch(error){
            console.error("somthing went wrong",error)
        }
    }

    async function deleteScholarshipFromFavurites(id) {
        try{
            const res = await fetch(`http://127.0.0.1:8000/api/favorites/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type" : "Application/json",
                Authorization : `Bearer ${token}`
            }
        });
        if(res.ok){
            console.log("Scholarship removed from favurites succefully");
            setIsFavorite(false);
        }
        else{
            console.log("fetched error response not ok")
        }
        }catch(error){
            console.error("something went wrong", error)
        }
    }

    return(
        <div key={scholarship.id} className='flex items-center justify-center h-full'>
        <div className="flex flex-col justify-content w-full h-full  gap-2 border max-w-sm  p-4 rounded-xl shadow-lg shadow-indigo-700 hover:shadow-md transition-all duration-300 bg-white
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
                <button className="bg-indigo-500 font-semibold text-white rounded-2xl px-4 py-2 cursor-pointer shadow-xl/20  hover:bg-indigo-600 transition-all duration-300" onClick={() => navigate(`/detailsPage/${scholarshipID}`)}>
                    عرض تفاصيل المنحة
                </button>
                {token && <button onClick={isFavorite ? () =>  deleteScholarshipFromFavurites(scholarshipID) : () => addScholarshipToFavurates(scholarshipID)} className={`${!isFavorite ? "bg-indigo-600 font-semibold text-slate-100 rounded-2xl px-4 py-2 cursor-pointer shadow-xl/20 hover:bg-indigo-700 transition-all duration-300" 
                                                                                                                                                                                         : "bg-black text-white rounded-2xl px-4 py-2 cursor-pointer"}    `}>{isFavorite ? "تم الحفظ" : "حفظ"}</button>}
            </div>
            <span className='text-lg text-red-600 font-semibold '>{scholarship.start_status}  </span>
        </div>
        </div>
        
    );

}

export default Card
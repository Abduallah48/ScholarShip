import Card from "./Card.jsx";
import {useState, useEffect} from "react";

function ScholarshipSection() {

    const [scholarships, SetScholarships] = useState([]);
    const [isLoading, SetIsLoading] = useState(false);
    const [errorMesage, SetErrorMessage] = useState("");

    useEffect(() => {
        const getData = async () => {
            SetIsLoading(true);
            const res = await fetch("http://127.0.0.1:8000/api/top-scholarships");
            
            const data = await res.json();
            console.log(data)
            if(res.ok) {
                SetIsLoading(false);
                SetScholarships(data.data);
            }
            else {
                SetIsLoading(false);
                SetErrorMessage("something went wrong");
            }
        };
        getData();
    },[])


    return(
        <div className="grid gap-y-8 
                                    md:grid-cols-2 
                                    lg:grid-cols-3 ">

                        {errorMesage && <p className="text-4xl font-bold text center text-indigo-950
                                                        dark:text-indigo-white">{errorMesage}</p>}
                        {isLoading && (
                                        <div className="col-span-full flex flex-col items-center justify-center py-12 gap-4">
                                            <div className="w-12 h-12 border-4 border-slate-400 border-t-indigo-600 rounded-full animate-spin
                                                            dark:border-slate-200 dark:border-t-indigo-600"></div>       
                                            <p className="text-xl font-semibold text-slate-600 dark:text-slate-300 animate-pulse">
                                                 جاري تحميل المنح...
                                            </p>
                                        </div>
)}
                        
                        {scholarships && scholarships.map((scholarship) => (
                            <Card key={scholarship.id} scholarship={scholarship} />
                        ))}
                        
                    </div>
    );

}

export default ScholarshipSection
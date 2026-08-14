import { useEffect, useState } from "react";
import Card from "./Card";

const ScholarshipSection = ({ currentScholarshipId }) => {
    const [similarScholarships, setSimilarScholarships] = useState([]);

    useEffect(() => {
        const getSimilar = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/scholarships/${currentScholarshipId}/similar`);
                
                if(response.ok){
                const result = await response.json();
                
                setSimilarScholarships(result.data || result);
                console.log(scholarship)
                }else{
                    console.log("status not ok", response.status);
                }
            } catch (error) {
                console.error(error);
            }
        };

        if (currentScholarshipId) {
            getSimilar();
        }
    }, [currentScholarshipId]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {similarScholarships.map((item,index) => (
                <Card key={index} scholarship={item}></Card>
            ))}
        </div>
    );
};

export default ScholarshipSection;
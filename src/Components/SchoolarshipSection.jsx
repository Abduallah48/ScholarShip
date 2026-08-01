import { useEffect, useState } from "react";
import Card from "./Card.jsx";

function SchoolarshipSection({ currentScholarshipId }) {
    const [similar, setSimilar] = useState([])
    // const []
    useEffect(() => {
        if (currentScholarshipId) {
            fetch(`http://127.0.0.1:8000/api/scholarships/${currentScholarshipId}/similar`)
                .then((res) => res.json())
                .then((data) => {
                    setSimilar(data.data);
                })
                .catch((error) => {
                    console.error("خطأ في جلب المنح المشابهة:", error);
                });
        }
    }, [currentScholarshipId]);
    return (
        <div>
            <div className="flex flex-col gap-5 md:flex-row">
                {similar.map((item) => (
                    <div key={item.id}>
                        <Card key={item.id} scholarship ={item} />
                    </div>
                ))}
            </div>
        </div>
    );

}

export default SchoolarshipSection
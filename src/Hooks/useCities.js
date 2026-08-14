import { useState,useEffect } from "react";
import { useTokenStore } from "../Store/token-store";

const useCities = () => {
    const [cities , setCities] = useState([]);

    const token = useTokenStore((state)=> state.token);

    useEffect (()=> {
        const fetchCities = async () => {
            try {
                console.log('🔄 Fetching cities...');
                const response = await fetch(`http://127.0.0.1:8000/api/cities/by-country/6`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
                const data = await response.json();
                console.log('📦 Full response:', data);
                if (data.status === 'success' && Array.isArray(data.data)) {
                    console.log('✅ Cities array:', data.data);
                    setCities(data.data);
                } else {
                    console.error('❌ Invalid data format:', data);
                    setError('تنسيق البيانات غير صحيح');
                }
                setLoading(false);
            } catch (err) {
                console.error('❌ Fetch error:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCities();
    }, [token])
    return { cities };
}
export default useCities;

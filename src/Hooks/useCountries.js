// src/Hooks/useCountries.js
import { useState, useEffect } from 'react';

const useCountries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                console.log('🔄 Fetching countries...');
                const response = await fetch('http://127.0.0.1:8000/api/countries', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                console.log('📦 Full response:', data);
                if (data.status === 'success' && Array.isArray(data.data)) {
                    console.log('✅ Countries array:', data.data);
                    setCountries(data.data);
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

        fetchCountries();
    }, []);

    return { countries, loading, error };
};

export default useCountries;
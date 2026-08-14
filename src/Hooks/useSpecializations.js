// src/Hooks/useSpecializations.js
import { useState, useEffect } from 'react';
import { useTokenStore } from '../Store/token-store';

const useSpecializations = () => {
    const [specializations, setSpecializations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = useTokenStore((state) => state.token);

    useEffect(() => {
        const fetchSpecializations = async () => {
            try {
                console.log('🔄 Fetching specializations...');
                const response = await fetch('http://127.0.0.1:8000/api/specializations',{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
                const data = await response.json();
                console.log('📦 Specializations response:', data);
                
                if (data.status === 'success') {
                    setSpecializations(data.data);
                } else {
                    setError(data.message || 'حدث خطأ أثناء جلب التخصصات');
                }
                setLoading(false);
            } catch (err) {
                console.error('❌ Fetch error:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchSpecializations();
    }, [token]);

    return { specializations, loading, error };
};

export default useSpecializations;
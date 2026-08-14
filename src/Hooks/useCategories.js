// src/Hooks/useCategories.js
import { useState, useEffect } from 'react';
import { useTokenStore } from '../Store/token-store';

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = useTokenStore((state)=> state.token);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                console.log('🔄 Fetching categories...');
                const response = await fetch('http://127.0.0.1:8000/api/categories',{
                    "method": "GET",
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                const data = await response.json();
                console.log('📦 Categories response:', data);
                
                if (data.status === 'success') {
                    setCategories(data.data);
                } else {
                    setError(data.message || 'حدث خطأ أثناء جلب الفئات');
                }
                setLoading(false);
            } catch (err) {
                console.error('❌ Fetch error:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCategories();
    }, [token]);

    return { categories, loading, error };
};

export default useCategories;
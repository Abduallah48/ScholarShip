// src/Hooks/useCategories.js
import { useState, useEffect } from 'react';

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                console.log('🔄 Fetching categories...');
                const response = await fetch('http://127.0.0.1:8000/api/categories');
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
    }, []);

    return { categories, loading, error };
};

export default useCategories;
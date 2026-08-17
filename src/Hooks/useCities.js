// 📁 Hooks/useCities.js
import { useState, useEffect } from "react";
import { useTokenStore } from "../Store/token-store";
import { useCitiesByCountryStore } from "../Store/citiesByCountry-store";

const useCities = () => {
    const [cities, setCities] = useState([]);
    const token = useTokenStore((state) => state.token);
    const selectedCountryId = useCitiesByCountryStore((state) => state.selectedCountryId);

    useEffect(() => {
        // Stop execution if no country is selected yet
        if (!selectedCountryId) {
            
            return;
        }

        const fetchCities = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/cities/by-country/${selectedCountryId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
                const data = await response.json();
                if (data.status === 'success' && Array.isArray(data.data)) {
                    setCities(data.data);
                }
            } catch (err) {
                console.error('❌ Fetch error:', err);
            }
        };

        fetchCities();
    }, [token, selectedCountryId]);

    return { cities };
}

export default useCities;
import { useState } from 'react';
import { useFiltersStore } from '../Store/filters-store';
import useCountries from '../Hooks/useCountries';
import useCategories from '../Hooks/useCategories';

function FiltersButtons() {
    const display = useFiltersStore((state) => state.display);

    const setCountry = useFiltersStore((state) => state.setCountry);
    const setCategory = useFiltersStore((state) => state.setCategory);
    const setDegree = useFiltersStore((state) => state.setDegree);
    const setFinance = useFiltersStore((state) => state.setFinance);
    const resetFilters = useFiltersStore((state) => state.resetFilters);

    const [isCountry, SetIsCountry] = useState(false);
    const [isCategory, SetIsCategory] = useState(false);
    const [isFinance, SetIsFinance] = useState(false);
    const [isDegree, SetIsDegree] = useState(false);

    const degrees = ["ثانوية عامة", "ماجستير", "دكتوراه", "بكالوريوس"];
    const finance = ["ممولة بالكامل", "ممولة جزئيا", "غير ممولة"];

    const { countries } = useCountries();
    const { categories } = useCategories(); // NOW WE USE THIS!

    
    const toggleDropdown = (dropdownName) => {
        SetIsCountry(dropdownName === 'country' ? !isCountry : false);
        SetIsCategory(dropdownName === 'category' ? !isCategory : false);
        SetIsFinance(dropdownName === 'finance' ? !isFinance : false);
        SetIsDegree(dropdownName === 'degree' ? !isDegree : false);
    };

    return (
        <div className='flex flex-row-reverse flex-wrap gap-4 mt-4'>
            <span className='text-xl text-slate-800 font-bold py-2 px-4 dark:text-slate-200'>:فرز حسب</span>
            
            <button onClick={resetFilters} className='bg-indigo-600 text-slate-200 font-semibold border border-indigo-700 rounded-lg py-2 px-4 cursor-pointer dark:bg-indigo-600 dark:text-slate-100 dark:border-indigo-700'>
                إعادة تعيين الفلاتر
            </button>

            {/* Country Filter */}
            <div className="relative">
                <button onClick={() => toggleDropdown('country')}
                    className="bg-slate-600 text-slate-200 border border-slate-400 rounded-lg py-2 px-4 ml-4 cursor-pointer dark:bg-slate-600 dark:text-slate-100 dark:border-slate-700">
                    {display.country}
                </button>
                {isCountry && (
                    <div className='flex flex-col absolute top-full right-0 z-50 mt-1 px-2 border border-slate-400 bg-slate-600 rounded-lg gap-3 py-2 max-h-60 overflow-y-auto dark:bg-slate-600'>
                        {countries.map((country) => (
                            <button 
                                key={country.id} 
                                onClick={() => { 
                                    setCountry(country.id, country.country_name); 
                                    SetIsCountry(false); // Close dropdown after selection
                                }} 
                                className='border border-slate-400 rounded-lg p-2 cursor-pointer text-slate-100'
                            >
                                {country.country_name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Category Filter */}
            <div className="relative">
                <button onClick={() => toggleDropdown('category')}
                    className="bg-slate-600 text-white border border-slate-400 rounded-lg py-2 px-4 ml-2 cursor-pointer dark:bg-slate-600 dark:text-slate-100 dark:border-slate-700">
                    {display.category}
                </button>
                {isCategory && (
                    <div className='flex flex-col absolute top-full right-2.5 z-50 mt-1 px-2 border border-slate-400 text-white bg-slate-600 rounded-lg gap-3 py-2 max-h-60 overflow-y-auto dark:bg-slate-600'>
                        
                        {categories.map((category) => (
                            <button 
                                key={category.id} 
                                onClick={() => { 
                                    setCategory(category.id, category.category_name); 
                                    SetIsCategory(false); // Close dropdown after selection
                                }} 
                                className='border border-slate-400 rounded-lg p-2 cursor-pointer'
                            >
                                {category.category_name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Finance Filter */}
            <div className="relative">
                <button onClick={() => toggleDropdown('finance')}
                    className="bg-slate-600 text-white border border-slate-400 rounded-lg py-2 px-4 cursor-pointer dark:bg-slate-600 dark:text-slate-100 dark:border-slate-700">
                    {display.finance}
                </button>
                {isFinance && (
                    <div className='flex flex-col absolute top-full right-0 z-50 mt-1 px-3 border border-slate-400 bg-slate-600 text-white rounded-lg gap-3 py-2 max-h-60 overflow-y-auto dark:bg-slate-600'>
                        {/* We map over the local array we defined at the top */}
                        {finance.map((fin) => (
                            <button 
                                key={fin} 
                                onClick={() => { 
                                    setFinance(fin, fin);
                                    SetIsFinance(false); 
                                }} 
                                className='border border-slate-400 rounded-lg p-2 cursor-pointer'
                            >
                                {fin}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Degree Filter */}
            <div className="relative">
                <button onClick={() => toggleDropdown('degree')}
                    className="bg-slate-600 text-white border border-slate-400 rounded-lg px-4 py-2 cursor-pointer dark:bg-slate-600 dark:text-slate-100 dark:border-slate-700">
                    {display.degree}
                </button>
                {isDegree && (
                    <div className='flex flex-col absolute top-full right-0 z-50 mt-1 px-3 border border-slate-400 bg-slate-600 text-white rounded-lg gap-3 py-2 max-h-60 overflow-y-auto dark:bg-slate-600'>
                         {/* We map over the local array we defined at the top */}
                         {degrees.map((deg) => (
                            <button 
                                key={deg} 
                                onClick={() => { 
                                    setDegree(deg, deg); 
                                    SetIsDegree(false); 
                                }} 
                                className='border border-slate-400 rounded-lg p-2 cursor-pointer'
                            >
                                {deg}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FiltersButtons;
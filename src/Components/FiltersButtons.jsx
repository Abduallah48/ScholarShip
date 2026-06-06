import { useState } from 'react';
import { useFiltersStore } from '../Store/filters-store';

function FiltersButtons() {
    
    const country = useFiltersStore((state) => state.country);
    const category = useFiltersStore((state) => state.category);
    const degree = useFiltersStore((state) => state.degree);
    const finance = useFiltersStore((state) => state.finance);

    const setCountry = useFiltersStore((state) => state.setCountry);
    const setCategory = useFiltersStore((state) => state.setCategory);
    const setDegree = useFiltersStore((state) => state.setDegree);
    const setFinance = useFiltersStore((state) => state.setFinance);

    const [isCountry, SetIsCountry] = useState(false);
    const [isCategory, SetIsCategory] = useState(false);
    const [isFinance, SetIsFinance] = useState(false);
    const [isDegree, SetIsDegree] = useState(false);

    return (
        <div className='flex flex-row-reverse flex-wrap gap-4 mt-4'>
            <span className='text-xl text-slate-800 font-bold py-2 px-4 dark:text-slate-200'>:فرز حسب</span>
            
            {/* Country Filter */}
            <div className="relative">
                <button onClick={() => SetIsCountry(!isCountry)}
                    className="bg-slate-600 text-slate-200 border border-slate-400 rounded-lg py-2 px-4 ml-4 cursor-pointer dark:bg-slate-600 dark:text-slate-100 dark:border-slate-700">
                    {country}
                </button>
                {isCountry && (
                    <div className='flex flex-col absolute top-full right-0 z-50 mt-1 px-2 border border-slate-400 bg-slate-600 rounded-lg gap-3 py-2 max-h-60 overflow-y-auto dark:bg-slate-600'>
                        <button onClick={() => { setCountry("إيطاليا"); SetIsCountry(!isCountry); }} className='border text-slate-100 border-slate-400 rounded-lg bg-slate-600 p-2 cursor-pointer'>إيطاليا</button>
                        <button onClick={() => { setCountry("ألمانيا"); SetIsCountry(!isCountry); }} className='border text-slate-100 border-slate-400 rounded-lg p-2 cursor-pointer'>ألمانيا</button>
                        <button onClick={() => { setCountry("روسيا"); SetIsCountry(!isCountry); }} className='border text-slate-100 border-slate-400 rounded-lg p-2 cursor-pointer'>روسيا</button>
                        <button onClick={() => { setCountry("رومانيا"); SetIsCountry(!isCountry); }} className='border text-slate-100 border-slate-400 rounded-lg p-2 cursor-pointer'>رومانيا</button>
                        <button onClick={() => { setCountry("هنغاريا"); SetIsCountry(!isCountry); }} className='border text-slate-100 border-slate-400 rounded-lg p-2 cursor-pointer'>هنغاريا</button>
                        <button onClick={() => { setCountry("تركيا"); SetIsCountry(!isCountry); }} className='border text-slate-100 border-slate-400 rounded-lg p-2 cursor-pointer'>تركيا</button>
                    </div>
                )}
            </div>

            {/* Category Filter */}
            <div className="relative">
                <button onClick={() => SetIsCategory(!isCategory)}
                    className="bg-slate-600 text-white border border-slate-400 rounded-lg py-2 px-4 ml-2 cursor-pointer dark:bg-slate-600 dark:text-slate-100 dark:border-slate-700">
                    {category}
                </button>
                {isCategory && (
                    <div className='flex flex-col absolute top-full right-2.5 z-50 mt-1 px-2 border border-slate-400 text-white bg-slate-600 rounded-lg gap-3 py-2 max-h-60 overflow-y-auto dark:bg-slate-600'>
                        <button onClick={() => { setCategory("IT"); SetIsCategory(!isCategory); }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>IT</button>
                        <button onClick={() => { setCategory("إقتصاد"); SetIsCategory(!isCategory); }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>إقتصاد</button>
                        <button onClick={() => { setCategory("العمارة"); SetIsCategory(!isCategory); }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>العمارة</button>
                        <button onClick={() => { setCategory("اللغات الأجنبية"); SetIsCategory(!isCategory); }} className='border border-slate-400 rounded-lg p-2'>اللغات الاجنبية</button>
                        <button onClick={() => { setCategory("العلوم"); SetIsCategory(!isCategory); }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>العلوم</button>
                    </div>
                )}
            </div>

            {/* Finance Filter */}
            <div className="relative">
                <button onClick={() => SetIsFinance(!isFinance)}
                    className="bg-slate-600 text-white border border-slate-400 rounded-lg py-2 px-4 cursor-pointer dark:bg-slate-600 dark:text-slate-100 dark:border-slate-700">
                    {finance}
                </button>
                {isFinance && (
                    <div className='flex flex-col absolute top-full right-0 z-50 mt-1 px-3 border border-slate-400 bg-slate-600 text-white rounded-lg gap-3 py-2 max-h-60 overflow-y-auto dark:bg-slate-600'>
                        <button onClick={() => { setFinance("ممولة بالكامل"); SetIsFinance(!isFinance); }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>ممولة بالكامل</button>
                        <button onClick={() => { setFinance("ممولة جزئيا"); SetIsFinance(!isFinance); }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>ممولة جزئيا</button>
                        <button onClick={() => { setFinance("غير ممولة"); SetIsFinance(!isFinance); }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>غير ممولة</button>
                    </div>
                )}
            </div>

            {/* Degree Filter */}
            <div className="relative">
                <button onClick={() => SetIsDegree(!isDegree)}
                    className="bg-slate-600 text-white border border-slate-400 rounded-lg  px-4 py-2 cursor-pointer dark:bg-slate-600 dark:text-slate-100 dark:border-slate-700">
                    {degree}
                </button>
                {isDegree && (
                    <div className='flex flex-col absolute top-full right-0 z-50 mt-1 px-3 border border-slate-400 bg-slate-600 text-white rounded-lg gap-3 py-2 max-h-60 overflow-y-auto dark:bg-slate-600'>
                        <button onClick={() => { setDegree("ثانوية عامة"); SetIsDegree(!isDegree); }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>ثانوية عامة</button>
                        <button onClick={() => { setDegree("بكالوريوس"); SetIsDegree(!isDegree); }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>بكالوريوس</button>
                        <button onClick={() => { setDegree("ماجستير"); SetIsDegree(!isDegree); }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>ماجستير</button>
                        <button onClick={() => { setDegree("دكتوراه"); SetIsDegree(!isDegree); }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>دكتوراه</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FiltersButtons;
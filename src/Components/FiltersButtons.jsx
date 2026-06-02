import {useState} from 'react';
function FiltersButtons() {
    const [country, SetCountry] = useState("البلد");
    const [category, SetCategory] = useState("التخصص");
    const [finance, SetFinance] = useState("التمويل");
    const [degree, SetDegree] = useState("الدرجة العلمية");

    const [isCountry, SetIsCountry] = useState(false);
    const [isCategory, SetIsCategory] = useState(false);
    const [isFinance, SetIsFinance] = useState(false);
    const [isDegree, SetIsDegree] = useState(false);

    
    return(
        
        <div className='flex flex-row-reverse flex-wrap gap-4 mt-4'>
            <span className='text-xl text-slate-800 font-bold py-2 px-4
                             dark:text-slate-200'>:فرز حسب
            </span>
            <button onClick={() => SetIsCountry(!isCountry)}
                    className="relative bg-slate-600  text-slate-200 border border-slate-400 rounded-lg px-4 ml-4 cursor-pointer
                                  dark:bg-slate-600 dark:text-slate-100 dark:border-slate-700 ">
                {country}

                {isCountry && <div className='flex flex-col absolute top-full right-0 z-50 mt-1 px-2 border border-slate-400  bg-slate-600 rounded-lg gap-3 py-2 max-h-60 overflow-y-auto 
                                                dark:bg-slate-600'>
                                <button onClick={() => {SetCountry("إيطاليا")
                                                        SetIsCountry(!isCountry)
                                }} className='border border-slate-400 rounded-lg bg-slate-600 p-2 cursor-pointer'>إيطاليا
                                </button>
                                <button onClick={() => {SetCountry("ألمانيا")
                                                        SetIsCountry(!isCountry)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>ألمانيا

                                </button>
                                <button onClick={() => {SetCountry("روسيا")
                                                        SetIsCountry(!isCountry)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>روسيا

                                </button>
                                <button onClick={() => {SetCountry("رمانيا")
                                                        SetIsCountry(!isCountry)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>رمانيا

                                </button>
                                <button onClick={() => {SetCountry("هنغاريا")
                                                        SetIsCountry(!isCountry)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>هنغاريا

                                </button>
                                <button onClick={() => {SetCountry("تركيا")
                                                        SetIsCountry(!isCountry)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>تركيا

                                </button>
                          </div>}
            </button>
            
            <button  onClick={() => SetIsCategory(!isCategory)}
             className="relative bg-slate-600 text-white border border-slate-400 rounded-lg px-4 ml-2 cursor-pointer
                                  dark:bg-slate-600 dark:text-slate-100 dark:border-slate-700 ">
                {category}

                {isCategory && <div className='flex flex-col absolute top-full right-2.5 z-50 mt-1 px-2 border border-slate-400 text-white  bg-slate-600 rounded-lg gap-3 py-2 max-h-60 overflow-y-auto
                                                dark:bg-slate-600'>
                                <button onClick={() => {SetCategory("IT")
                                                        SetIsCategory(!isCategory)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>IT

                                </button>
                                <button onClick={() => {SetCategory("إقتصاد")
                                                        SetIsCategory(!isCategory)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>
                                    إقتصاد</button>
                                <button onClick={() => {SetCategory("العمارة")
                                                        SetIsCategory(!isCategory)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>العمارة

                                </button>
                                <button onClick={() => {SetCategory("اللغات الأجنبية")
                                                        SetIsCategory(!isCategory)
                                }} className='border border-slate-400 rounded-lg p-2'>اللغات الاجنبية

                                </button>
                                <button onClick={() => {SetCategory("العلوم")
                                                        SetIsCategory(!isCategory)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>العلوم

                                </button>
                          </div>}
            </button>
            
            <button onClick={() => SetIsFinance(!isFinance)}
                    className="relative bg-slate-600 text-white border border-slate-400 rounded-lg px-4 cursor-pointer
                                  dark:bg-slate-600 dark:text-slate-100 dark:border-slate-700 ">
                {finance}

                {isFinance && <div className='flex flex-col absolute top-full right-0 z-50 mt-1 px-3 border border-slate-400  bg-slate-600 text-white rounded-lg gap-3 py-2 max-h-60 overflow-y-auto
                                                dark:bg-slate-600'>
                                <button onClick={() => {SetFinance("ممولة بالكامل")
                                                        SetIsFinance(!isFinance)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>ممولة بالكامل

                                </button>
                                <button onClick={() => {SetFinance("ممولة جزئيا")
                                                        SetIsFinance(!isFinance)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>ممولة جزئيا

                                </button>
                                <button onClick={() => {SetFinance("غير ممولة")
                                                        SetIsFinance(!isFinance)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>غير ممولة

                                </button>
                          </div>}
            </button>
            
            <button onClick={() => SetIsDegree(!isDegree)}
                    className="relative bg-slate-600  text-white border border-slate-400 rounded-lg px-4 py-2 cursor-pointer
                                  dark:bg-slate-600 dark:text-slate-100 dark:border-slate-700 ">
                {degree}

                {isDegree && <div className='flex flex-col absolute top-full right-0 z-50 mt-1 px-3 border border-slate-400  bg-slate-600 text-white rounded-lg gap-3 py-2 max-h-60 overflow-y-auto
                                                dark:bg-slate-600'>
                                <button onClick={() => {SetDegree("ثانوية عامة")
                                                        SetIsDegree(!isDegree)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>ثانوية عامة

                                </button>
                                <button onClick={() => {SetDegree("بكالوريوس")
                                                        SetIsDegree(!isDegree)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>بكالوريوس

                                </button>
                                <button onClick={() => {SetDegree("ماجستير")
                                                        SetIsDegree(!isDegree)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>ماجستير

                                </button>
                                <button onClick={() => {SetDegree("دكتوراه")
                                                        SetIsDegree(!isDegree)
                                }} className='border border-slate-400 rounded-lg p-2 cursor-pointer'>دكتوراه

                                </button>

                          </div>}
            </button>
            
        </div>
    );
}

export default FiltersButtons
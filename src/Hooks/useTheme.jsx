import {useState, useEffect} from 'react';

function useTheme() {
    const [isDark, SetIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme) {
            return savedTheme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(()=> {
        if(isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => SetIsDark(!isDark);
    return{isDark, toggleTheme};
}

export default useTheme;
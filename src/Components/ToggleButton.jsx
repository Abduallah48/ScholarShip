import useTheme from './Hooks/useTheme.jsx';

function ToggleButton() {
    const {isDark, toggleTheme} = useTheme();

    return(
        <button onClick={toggleTheme} className='text-2xl p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all shadow-lg'>
            {isDark ? '☀️' : '🌙'}
        </button>
    );
}

export default ToggleButton
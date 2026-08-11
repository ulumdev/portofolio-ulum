import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/Contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ?  (
          <MoonIcon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
      ) : (
          <SunIcon className="w-5 h-5 text-amber-500 dark:text-amber-400" />
      )}
    </button>
  );
}

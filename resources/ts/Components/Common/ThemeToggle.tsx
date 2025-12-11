import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/Contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ?  (
        <>
          <MoonIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm">Dark</span>
        </>
      ) : (
        <>
          <SunIcon className="w-5 h-5 text-amber-500 dark:text-amber-400" />
          <span className="text-sm">Light</span>
        </>
      )}
    </button>
  );
}

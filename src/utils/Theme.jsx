'use client';
import localforage from 'localforage';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await localforage.getItem('theme');
      const finalTheme = savedTheme === 'dark' ? true : false;

      if (finalTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      setDarkMode(finalTheme);
    };

    loadTheme();
  }, []);

  // Toggle theme
  const toggleTheme = async () => {
    const newTheme = !darkMode;

    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }

    setDarkMode(newTheme);
    await localforage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-red-500 hover:bg-red-800 dark:bg-gray-700 hover:scale-105 transition"
      title={`Switch to ${darkMode ? 'Light' : 'Dark'} mode`}
    >
      {darkMode ? (
        <Sun className="text-yellow-300 w-6 h-6" />
      ) : (
        <Moon className="text-gray-900 w-6 h-6" />
      )}
    </button>
  );
};

export default Theme;
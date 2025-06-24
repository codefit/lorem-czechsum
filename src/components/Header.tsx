"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Switch } from "@heroui/react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

export function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Načti uložené nastavení theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleSupport = () => {
    // Můžete zde přidat logiku pro support (např. otevření modalu, přesměrování na kontaktní stránku)
    alert('Support funkce - můžete zde přidat kontaktní informace nebo otevřít modal');
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={120}
              height={30}
              className="dark:invert"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
                Český Lorem Ipsum
              </h1>
            </div>
          </div>

          {/* Pravá strana - Theme toggle a Support */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <div className="flex items-center space-x-2">
              <SunIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <Switch
                isSelected={isDark}
                onValueChange={toggleTheme}
                size="sm"
                color="primary"
              />
              <MoonIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </div>

            {/* Support button */}
            <Button
              color="primary"
              variant="flat"
              size="sm"
              onClick={handleSupport}
              className="hidden sm:flex"
            >
              Support
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 
"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Switch, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [scrollBehavior] = React.useState("inside" as const);

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

  return (
    <>
      <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
               <Link href="/">
                  <Image
                  src="/logo.svg"
                  alt="Codefit.cz Logo"
                  width={120}
                  height={30}
                  className="dark:invert"
                />
               </Link>
            </div>

            {/* Navigace */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/about">
                 O aplikaci
              </Link>
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
                onPress={onOpen}
                className="hidden sm:flex"
              >
                Support
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Support Modal */}
     <Modal 
      isOpen={isOpen} 
      placement="top-center" 
      scrollBehavior={scrollBehavior} 
      onOpenChange={onOpenChange}
      motionProps={{
      variants: {
        enter: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2 } },
        exit:  { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.2 } }
      }
    }}
      >
        <ModalContent>
          {(onClose) => (
            <>
          <ModalHeader className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">Podpora tvůrce</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Podpořte vývoj této aplikace
            </p>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">O aplikaci</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Český Lorem Ipsum Generator je open-source aplikace vyvinutá společností Codefit Webdesign. 
                  Aplikace využívá AI technologii pro generování kvalitního českého placeholder textu s možností 
                  HTML formátování.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Jak můžete podpořit</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                  Pokud se vám aplikace líbí a chcete podpořit její další vývoj, můžete tak učinit prostřednictvím 
                  naší podpory na HeroHero.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-200 text-sm font-medium mb-2">
                    🎯 Podpořte nás na HeroHero
                  </p>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
                    Každá podpora pomáhá udržovat a vylepšovat tuto aplikaci.
                  </p>
                  <Button
                    as="a"
                    href="https://herohero.co/marvelousuvwyuneknbyie"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    size="sm"
                    className="w-full"
                  >
                    Podpořit na HeroHero
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Kontakt</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Máte dotazy nebo návrhy na vylepšení? Neváhejte nás kontaktovat na našem webu 
                  <a 
                    href="https://www.codefit.cz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
                  >
                    codefit.cz
                  </a>
                </p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
          </ModalFooter>
          </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
} 
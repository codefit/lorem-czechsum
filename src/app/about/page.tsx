"use client";

import React from "react";
import { Button} from "@heroui/react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            O aplikaci
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Český Lorem Ipsum Generator je moderní open-source aplikace pro generování kvalitního českého placeholder textu
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* O aplikaci */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              O aplikaci
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Český Lorem Ipsum Generator je inovativní nástroj, který řeší problém s generováním 
                kvalitního českého placeholder textu pro webové projekty. Na rozdíl od klasického 
                Lorem Ipsum, který je v latině, naše aplikace generuje text v češtině.
              </p>
              <p>
                Aplikace využívá pokročilé AI technologie pro vytváření přirozeně znějícího textu, 
                který je gramaticky správný a kontextově relevantní. Text je generován s ohledem na 
                českou gramatiku, interpunkci a stylistiku.
              </p>
              <p>
                Kromě základního textu aplikace podporuje také generování HTML formátovaného obsahu, 
                což umožňuje vytvářet strukturované placeholder texty s nadpisy, odstavci a dalšími 
                HTML elementy.
              </p>
            </div>
          </div>

          {/* Funkce */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Klíčové funkce
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">AI generování</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Pokročilé AI modely pro přirozený český text
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">HTML formátování</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Podpora pro strukturovaný HTML obsah
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Responzivní design</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Moderní UI s podporou světlého a tmavého režimu
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Open source</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Volně dostupný kód pod MIT licencí
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tvůrce */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            O tvůrci
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Aplikace byla vyvinuta společností <strong>Codefit Webdesign</strong>, která se specializuje 
                na moderní webové aplikace a digitální řešení. Naše mise je vytvářet kvalitní, uživatelsky 
                přívětivé aplikace, které řeší reálné problémy.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Věříme v open-source přístup a sdílení znalostí s komunitou. Proto je Český Lorem Ipsum 
                Generator volně dostupný a jeho kód je otevřený pro další vývojáře.
              </p>
              <div className="flex space-x-4">
                <Button
                  as="a"
                  href="https://www.codefit.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  variant="flat"
                >
                  Navštívit Codefit
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">CF</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Codefit Webdesign</h3>
              <p className="text-gray-600 dark:text-gray-400">Moderní webové řešení</p>
            </div>
          </div>
        </div>

        {/* Podpora */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Podpořte vývoj aplikace
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Pokud se vám aplikace líbí a chcete podpořit její další vývoj a vylepšení, 
              můžete tak učinit prostřednictvím naší podpory na HeroHero. Každá podpora 
              pomáhá udržovat a vylepšovat tuto aplikaci.
            </p>
            
          </div>
        </div>

        {/* Zpět na hlavní stránku */}
        <div className="text-center mt-12">
          <Link href="/">
            ← Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    </div>
  );
} 
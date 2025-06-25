"use client";

import React from "react";
import { Card, CardBody, CardHeader, Button, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import Link from "next/link";

export default function AboutPage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [scrollBehavior] = React.useState("inside" as const);

  return (
    <>
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm min-h-screen">
        <div className="p-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
                O aplikaci
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Český Lorem Ipsum Generator - moderní nástroj pro generování kvalitního českého placeholder textu
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* O aplikaci */}
              <Card className="w-full">
                <CardHeader className="pb-3">
                  <h2 className="text-2xl font-semibold">O aplikaci</h2>
                </CardHeader>
                <CardBody className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Český Lorem Ipsum Generator je open-source webová aplikace, která využívá pokročilé AI technologie 
                    pro generování kvalitního českého placeholder textu. Aplikace je určena pro designéry, vývojáře 
                    a všechny, kteří potřebují český text pro své projekty.
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">Klíčové funkce:</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        AI-powered generování českého textu
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Možnost HTML formátování
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Nastavitelný počet slov
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Podpora pro odstavce, nadpisy a seznamy
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Moderní responzivní design
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>

              {/* Technologie */}
              <Card className="w-full">
                <CardHeader className="pb-3">
                  <h2 className="text-2xl font-semibold">Použité technologie</h2>
                </CardHeader>
                <CardBody className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Aplikace je postavena na moderním tech stacku, který zajišťuje rychlost, spolehlivost 
                    a skvělou uživatelskou zkušenost.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Chip color="primary" variant="flat">Next.js 15</Chip>
                    <Chip color="secondary" variant="flat">React 18</Chip>
                    <Chip color="success" variant="flat">TypeScript</Chip>
                    <Chip color="warning" variant="flat">Tailwind CSS</Chip>
                    <Chip color="danger" variant="flat">HeroUI</Chip>
                    <Chip color="default" variant="flat">Google Gemini API</Chip>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Tvůrce aplikace */}
            <Card className="w-full mb-12">
              <CardHeader className="pb-3">
                <h2 className="text-2xl font-semibold">Tvůrce aplikace</h2>
              </CardHeader>
              <CardBody className="space-y-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">CW</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      Codefit Webdesign
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      Jsme kreativní webová agentura specializující se na moderní webové aplikace, 
                      e-commerce řešení a digitální marketing. Naše zkušenosti zahrnují vývoj 
                      komplexních webových aplikací, optimalizaci pro vyhledávače a vytváření 
                      uživatelsky přívětivých rozhraní.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button
                        as="a"
                        href="https://www.codefit.cz"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                        variant="flat"
                        size="sm"
                      >
                        Navštívit web
                      </Button>
                      <Button
                        color="secondary"
                        variant="flat"
                        size="sm"
                        onPress={onOpen}
                      >
                        Podpořit projekt
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Podpora a kontakt */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="w-full">
                <CardHeader className="pb-3">
                  <h2 className="text-xl font-semibold">Podpořte projekt</h2>
                </CardHeader>
                <CardBody className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Pokud se vám aplikace líbí a chcete podpořit její další vývoj, můžete tak učinit 
                    prostřednictvím naší podpory na HeroHero.
                  </p>
                  <Button
                    color="primary"
                    className="w-full"
                    onPress={onOpen}
                  >
                    Podpořit na HeroHero
                  </Button>
                </CardBody>
              </Card>

              <Card className="w-full">
                <CardHeader className="pb-3">
                  <h2 className="text-xl font-semibold">Kontakt</h2>
                </CardHeader>
                <CardBody className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Máte dotazy, návrhy na vylepšení nebo zájem o spolupráci? 
                    Neváhejte nás kontaktovat.
                  </p>
                  <Button
                    as="a"
                    href="https://www.codefit.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="secondary"
                    variant="flat"
                    className="w-full"
                  >
                    Kontaktovat Codefit
                  </Button>
                </CardBody>
              </Card>
            </div>

            {/* Zpět na hlavní stránku */}
            <div className="text-center mt-12">
              <Link href="/">
                <Button
                  color="default"
                  variant="flat"
                  size="lg"
                >
                  ← Zpět na hlavní stránku
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

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
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Zavřít
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
} 
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Home, Book, Palette, Gamepad2, Trophy, Users, Menu, X } from "lucide-react"
import Image from "next/image"

const menuItems = [
  {
    title: "Início",
    href: "/",
    icon: Home,
  },
  {
    title: "Histórias Mágicas",
    href: "/historias",
    icon: Book,
  },
  {
    title: "Desenho Criativo",
    href: "/desenho",
    icon: Palette,
  },
  {
    title: "Jogos Divertidos",
    href: "/jogos",
    icon: Gamepad2,
  },
  {
    title: "Conquistas",
    href: "/conquistas",
    icon: Trophy,
  },
  {
    title: "Espaço dos responsáveis",
    href: "/responsaveis",
    icon: Users,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out",
          "md:translate-x-0 md:static md:z-auto",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="MundoMio" width={32} height={32} className="rounded-full" />
              <span className="text-xl font-bold text-gray-800">MundoMio</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200",
                        "hover:bg-blue-50 hover:text-blue-600",
                        isActive ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-600",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}

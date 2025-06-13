"use client"
import { Sidebar } from "@/components/sidebar"
import { UserProfile } from "@/components/user-profile"
import { Card, CardContent } from "@/components/ui/card"
import { Book, Gamepad2, Palette, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Sidebar />

      <main className="flex-1 p-6">
        <UserProfile />

        <div className="max-w-6xl mx-auto mt-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Olá, pequeno explorador!</h1>
              <p className="text-xl text-gray-600">O que você gostaria de fazer hoje?</p>
            </div>

            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Mascote MundoMio"
                width={200}
                height={200}
                className="animate-bounce"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/historias">
              <Card className="group hover:scale-105 transition-transform duration-300 cursor-pointer bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-purple-300 rounded-2xl">
                      <Book className="w-8 h-8 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Histórias Mágicas</h3>
                      <p className="text-gray-600">Leia e interaja com histórias incríveis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/jogos">
              <Card className="group hover:scale-105 transition-transform duration-300 cursor-pointer bg-gradient-to-br from-green-100 to-green-200 border-green-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-green-300 rounded-2xl">
                      <Gamepad2 className="w-8 h-8 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Games</h3>
                      <p className="text-gray-600">Aprenda brincando com desafios</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/desenho">
              <Card className="group hover:scale-105 transition-transform duration-300 cursor-pointer bg-gradient-to-br from-orange-100 to-orange-200 border-orange-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-orange-300 rounded-2xl">
                      <Palette className="w-8 h-8 text-orange-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Desenho Criativo</h3>
                      <p className="text-gray-600">Deixe sua imaginação fluir com cores</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/conquistas">
              <Card className="group hover:scale-105 transition-transform duration-300 cursor-pointer bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-blue-300 rounded-2xl">
                      <Trophy className="w-8 h-8 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Conquistas</h3>
                      <p className="text-gray-600">Veja suas medalhas e progresso</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

"use client"
import { Sidebar } from "@/components/sidebar"
import { UserProfile } from "@/components/user-profile"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Play, Clock, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const historias = [
  {
    id: 1,
    titulo: "A Aventura do Dragão Amigável",
    descricao: "Ajude o pequeno dragão a encontrar seus amigos perdidos na floresta mágica",
    duracao: "15 min",
    nivel: "Iniciante",
    participantes: 1,
    imagem: "/placeholder.svg?height=200&width=300",
    cor: "from-green-400 to-blue-500",
    disponivel: true,
  },
  {
    id: 2,
    titulo: "O Castelo das Cores",
    descricao: "Descubra os segredos do castelo onde as cores ganharam vida",
    duracao: "20 min",
    nivel: "Intermediário",
    participantes: 1,
    imagem: "/placeholder.svg?height=200&width=300",
    cor: "from-purple-400 to-pink-500",
    disponivel: true,
  },
  {
    id: 3,
    titulo: "Viagem ao Fundo do Mar",
    descricao: "Explore as profundezas do oceano com criaturas fantásticas",
    duracao: "25 min",
    nivel: "Avançado",
    participantes: 1,
    imagem: "/placeholder.svg?height=200&width=300",
    cor: "from-blue-400 to-cyan-500",
    disponivel: false,
  },
]

export default function HistoriasPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Sidebar />

      <main className="flex-1 p-6">
        <UserProfile />

        <div className="max-w-6xl mx-auto mt-8">
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" size="icon" className="mr-4">
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Histórias Mágicas</h1>
              <p className="text-xl text-gray-600">Escolha uma aventura e deixe sua imaginação voar!</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historias.map((historia) => (
              <Card
                key={historia.id}
                className={`group hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden ${
                  !historia.disponivel ? "opacity-60" : ""
                }`}
              >
                <div className={`h-48 bg-gradient-to-r ${historia.cor} relative`}>
                  <Image
                    src={historia.imagem || "/placeholder.svg"}
                    alt={historia.titulo}
                    fill
                    className="object-cover mix-blend-overlay"
                  />
                  {!historia.disponivel && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        Em Breve
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{historia.titulo}</CardTitle>
                  <p className="text-gray-600 text-sm">{historia.descricao}</p>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {historia.duracao}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {historia.participantes}
                      </div>
                    </div>
                    <Badge variant="outline">{historia.nivel}</Badge>
                  </div>

                  <Link href={historia.disponivel ? `/historias/${historia.id}` : "#"}>
                    <Button className="w-full" disabled={!historia.disponivel}>
                      <Play className="w-4 h-4 mr-2" />
                      {historia.disponivel ? "Começar Aventura" : "Indisponível"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

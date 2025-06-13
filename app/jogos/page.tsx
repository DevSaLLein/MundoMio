"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { UserProfile } from "@/components/user-profile"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Play, Star, Clock, Trophy, Brain, Calculator, Gamepad2 } from "lucide-react"
import Link from "next/link"

const jogos = [
  {
    id: 1,
    titulo: "Alfabeto Mágico",
    descricao: "Aprenda as letras de forma divertida com animações",
    categoria: "Alfabetização",
    dificuldade: "Fácil",
    tempo: "10 min",
    pontos: 50,
    icone: Brain,
    cor: "from-green-400 to-blue-500",
    disponivel: true,
  },
  {
    id: 2,
    titulo: "Números Aventureiros",
    descricao: "Resolva problemas matemáticos em uma aventura",
    categoria: "Matemática",
    dificuldade: "Médio",
    tempo: "15 min",
    pontos: 75,
    icone: Calculator,
    cor: "from-purple-400 to-pink-500",
    disponivel: true,
  },
  {
    id: 3,
    titulo: "Memória das Cores",
    descricao: "Teste sua memória com sequências coloridas",
    categoria: "Memória",
    dificuldade: "Fácil",
    tempo: "8 min",
    pontos: 40,
    icone: Gamepad2,
    cor: "from-orange-400 to-red-500",
    disponivel: true,
  },
  {
    id: 4,
    titulo: "Palavras Cruzadas Jr.",
    descricao: "Forme palavras e expanda seu vocabulário",
    categoria: "Vocabulário",
    dificuldade: "Médio",
    tempo: "20 min",
    pontos: 100,
    icone: Brain,
    cor: "from-cyan-400 to-blue-500",
    disponivel: false,
  },
]

const categorias = ["Todos", "Alfabetização", "Matemática", "Memória", "Vocabulário"]

export default function JogosPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos")

  const jogosFiltrados = categoriaAtiva === "Todos" ? jogos : jogos.filter((jogo) => jogo.categoria === categoriaAtiva)

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 to-cyan-50">
      <Sidebar />

      <main className="flex-1 p-6">
        <UserProfile />

        <div className="max-w-6xl mx-auto mt-8">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" size="icon" className="mr-4">
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Jogos Educativos</h1>
              <p className="text-xl text-gray-600">Aprenda brincando com desafios divertidos!</p>
            </div>
          </div>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categorias.map((categoria) => (
              <Button
                key={categoria}
                variant={categoriaAtiva === categoria ? "default" : "outline"}
                onClick={() => setCategoriaAtiva(categoria)}
                className="rounded-full"
              >
                {categoria}
              </Button>
            ))}
          </div>

          {/* Grid de Jogos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jogosFiltrados.map((jogo) => {
              const IconeJogo = jogo.icone
              return (
                <Card
                  key={jogo.id}
                  className={`group hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden ${
                    !jogo.disponivel ? "opacity-60" : ""
                  }`}
                >
                  <div className={`h-32 bg-gradient-to-r ${jogo.cor} flex items-center justify-center relative`}>
                    <IconeJogo className="w-16 h-16 text-white" />
                    {!jogo.disponivel && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="secondary" className="text-sm px-3 py-1">
                          Em Breve
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-gray-800">{jogo.titulo}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {jogo.categoria}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm">{jogo.descricao}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {jogo.tempo}
                      </div>
                      <div className="flex items-center">
                        <Trophy className="w-4 h-4 mr-1" />
                        {jogo.pontos} pts
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        variant={
                          jogo.dificuldade === "Fácil"
                            ? "default"
                            : jogo.dificuldade === "Médio"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {jogo.dificuldade}
                      </Badge>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>

                    <Link href={jogo.disponivel ? `/jogos/${jogo.id}` : "#"}>
                      <Button className="w-full" disabled={!jogo.disponivel}>
                        <Play className="w-4 h-4 mr-2" />
                        {jogo.disponivel ? "Jogar Agora" : "Indisponível"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

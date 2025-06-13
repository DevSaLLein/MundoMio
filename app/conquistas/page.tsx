"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { UserProfile } from "@/components/user-profile"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Trophy, Star, Medal, Crown, Zap, Book, Palette, Gamepad2 } from "lucide-react"
import Link from "next/link"

const conquistas = [
  {
    id: 1,
    titulo: "Primeiro Desenho",
    descricao: "Complete seu primeiro desenho criativo",
    icone: Palette,
    categoria: "Arte",
    pontos: 50,
    conquistada: true,
    data: "2024-01-15",
    cor: "from-orange-400 to-pink-500",
  },
  {
    id: 2,
    titulo: "Leitor Iniciante",
    descricao: "Leia sua primeira história completa",
    icone: Book,
    categoria: "Leitura",
    pontos: 75,
    conquistada: true,
    data: "2024-01-10",
    cor: "from-purple-400 to-blue-500",
  },
  {
    id: 3,
    titulo: "Gamer Jr.",
    descricao: "Complete 5 jogos educativos",
    icone: Gamepad2,
    categoria: "Jogos",
    pontos: 100,
    conquistada: false,
    progresso: 60,
    cor: "from-green-400 to-cyan-500",
  },
  {
    id: 4,
    titulo: "Artista Criativo",
    descricao: "Crie 10 desenhos únicos",
    icone: Crown,
    categoria: "Arte",
    pontos: 200,
    conquistada: false,
    progresso: 30,
    cor: "from-yellow-400 to-orange-500",
  },
  {
    id: 5,
    titulo: "Explorador de Histórias",
    descricao: "Complete todas as histórias disponíveis",
    icone: Medal,
    categoria: "Leitura",
    pontos: 300,
    conquistada: false,
    progresso: 15,
    cor: "from-indigo-400 to-purple-500",
  },
]

const estatisticas = {
  totalPontos: 125,
  conquistasDesbloqueadas: 2,
  totalConquistas: 5,
  nivel: 1,
  proximoNivel: 200,
}

export default function ConquistasPage() {
  const [filtro, setFiltro] = useState<"todas" | "conquistadas" | "pendentes">("todas")

  const conquistasFiltradas = conquistas.filter((conquista) => {
    if (filtro === "conquistadas") return conquista.conquistada
    if (filtro === "pendentes") return !conquista.conquistada
    return true
  })

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
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
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Suas Conquistas</h1>
              <p className="text-xl text-gray-600">Veja todo seu progresso e medalhas conquistadas!</p>
            </div>
          </div>

          {/* Estatísticas Gerais */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <Trophy className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{estatisticas.totalPontos}</div>
                <div className="text-sm opacity-90">Pontos Totais</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
              <CardContent className="p-6 text-center">
                <Medal className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{estatisticas.conquistasDesbloqueadas}</div>
                <div className="text-sm opacity-90">Conquistas</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">Nível {estatisticas.nivel}</div>
                <div className="text-sm opacity-90">Atual</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
              <CardContent className="p-6 text-center">
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{estatisticas.proximoNivel - estatisticas.totalPontos}</div>
                <div className="text-sm opacity-90">Para Próximo Nível</div>
              </CardContent>
            </Card>
          </div>

          {/* Progresso do Nível */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Crown className="w-5 h-5 mr-2" />
                Progresso do Nível
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Nível {estatisticas.nivel}</span>
                <span className="text-sm font-medium text-gray-800">
                  {estatisticas.totalPontos}/{estatisticas.proximoNivel} pontos
                </span>
              </div>
              <Progress value={(estatisticas.totalPontos / estatisticas.proximoNivel) * 100} className="h-3" />
            </CardContent>
          </Card>

          {/* Filtros */}
          <div className="flex gap-2 mb-6">
            <Button variant={filtro === "todas" ? "default" : "outline"} onClick={() => setFiltro("todas")}>
              Todas
            </Button>
            <Button
              variant={filtro === "conquistadas" ? "default" : "outline"}
              onClick={() => setFiltro("conquistadas")}
            >
              Conquistadas
            </Button>
            <Button variant={filtro === "pendentes" ? "default" : "outline"} onClick={() => setFiltro("pendentes")}>
              Pendentes
            </Button>
          </div>

          {/* Lista de Conquistas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conquistasFiltradas.map((conquista) => {
              const IconeConquista = conquista.icone
              return (
                <Card
                  key={conquista.id}
                  className={`group hover:scale-105 transition-all duration-300 overflow-hidden ${
                    !conquista.conquistada ? "opacity-75" : ""
                  }`}
                >
                  <div className={`h-24 bg-gradient-to-r ${conquista.cor} flex items-center justify-center relative`}>
                    <IconeConquista className={`w-12 h-12 ${conquista.conquistada ? "text-white" : "text-white/60"}`} />
                    {conquista.conquistada && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-white/20 text-white border-white/30">✓</Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-gray-800">{conquista.titulo}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {conquista.categoria}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm">{conquista.descricao}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Trophy className="w-4 h-4 mr-1" />
                        {conquista.pontos} pontos
                      </div>
                      {conquista.conquistada && conquista.data && (
                        <div className="text-xs text-gray-400">
                          {new Date(conquista.data).toLocaleDateString("pt-BR")}
                        </div>
                      )}
                    </div>

                    {!conquista.conquistada && conquista.progresso !== undefined && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">Progresso</span>
                          <span className="text-sm font-medium text-gray-800">{conquista.progresso}%</span>
                        </div>
                        <Progress value={conquista.progresso} className="h-2" />
                      </div>
                    )}

                    {conquista.conquistada && (
                      <Badge className="w-full justify-center bg-green-100 text-green-800 hover:bg-green-100">
                        Conquistada!
                      </Badge>
                    )}
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

"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { UserProfile } from "@/components/user-profile"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Volume2, VolumeX, Palette } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HistoriaInterativa({ params }: { params: { id: string } }) {
  const [progresso, setProgresso] = useState(25)
  const [somAtivo, setSomAtivo] = useState(true)
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<number | null>(null)

  const historia = {
    titulo: "A Aventura do Dragão Amigável",
    capitulo: "Capítulo 1: O Encontro",
    texto:
      "Era uma vez um pequeno dragão chamado Fogo que vivia em uma caverna colorida. Um dia, ele ouviu um barulho estranho vindo da floresta. O que você acha que Fogo deveria fazer?",
    imagem: "/placeholder.svg?height=300&width=500",
    opcoes: [
      { id: 1, texto: "Investigar o barulho corajosamente", emoji: "🦸" },
      { id: 2, texto: "Chamar seus amigos para ajudar", emoji: "👥" },
      { id: 3, texto: "Observar de longe primeiro", emoji: "👀" },
    ],
  }

  const handleEscolha = (opcaoId: number) => {
    setOpcaoSelecionada(opcaoId)
    // Aqui seria implementada a lógica de progressão da história
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Sidebar />

      <main className="flex-1 p-6">
        <UserProfile />

        <div className="max-w-4xl mx-auto mt-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Link href="/historias">
                <Button variant="ghost" size="icon" className="mr-4">
                  <ArrowLeft className="w-6 h-6" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{historia.titulo}</h1>
                <p className="text-gray-600">{historia.capitulo}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={() => setSomAtivo(!somAtivo)}>
                {somAtivo ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </Button>
              <Link href="/desenho">
                <Button variant="outline" size="icon">
                  <Palette className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Progresso */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Progresso da História</span>
              <span className="text-sm font-medium text-gray-800">{progresso}%</span>
            </div>
            <Progress value={progresso} className="h-3" />
          </div>

          {/* Conteúdo Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Imagem da História */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 bg-gradient-to-br from-green-200 to-blue-200">
                  <Image
                    src={historia.imagem || "/placeholder.svg"}
                    alt="Cena da história"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Texto e Opções */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">{historia.texto}</p>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Escolha sua aventura:</h3>

                    {historia.opcoes.map((opcao) => (
                      <Button
                        key={opcao.id}
                        variant={opcaoSelecionada === opcao.id ? "default" : "outline"}
                        className="w-full justify-start text-left h-auto p-4 hover:scale-105 transition-transform"
                        onClick={() => handleEscolha(opcao.id)}
                      >
                        <span className="text-2xl mr-3">{opcao.emoji}</span>
                        <span className="text-base">{opcao.texto}</span>
                      </Button>
                    ))}
                  </div>

                  {opcaoSelecionada && (
                    <div className="mt-6 pt-4 border-t">
                      <Button className="w-full" size="lg">
                        Continuar História
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

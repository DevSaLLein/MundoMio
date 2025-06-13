"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { UserProfile } from "@/components/user-profile"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Clock, TrendingUp, Shield, Settings, Eye, Calendar, BarChart3 } from "lucide-react"
import Link from "next/link"

const atividadeRecente = [
  {
    id: 1,
    atividade: "História: A Aventura do Dragão Amigável",
    tempo: "15 min",
    data: "Hoje, 14:30",
    tipo: "historia",
    pontos: 50,
  },
  {
    id: 2,
    atividade: "Desenho Criativo: Castelo Mágico",
    tempo: "20 min",
    data: "Hoje, 10:15",
    tipo: "desenho",
    pontos: 30,
  },
  {
    id: 3,
    atividade: "Jogo: Alfabeto Mágico",
    tempo: "12 min",
    data: "Ontem, 16:45",
    tipo: "jogo",
    pontos: 40,
  },
]

const estatisticasSemanais = {
  tempoTotal: "2h 30min",
  atividadesCompletas: 8,
  pontosGanhos: 320,
  metaSemanal: 400,
}

const configuracoes = {
  tempoMaximoDiario: 60,
  notificacoes: true,
  relatorioPais: true,
  filtroConteudo: "moderado",
}

export default function ResponsaveisPage() {
  const [configAtual, setConfigAtual] = useState(configuracoes)

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
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
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Painel dos Responsáveis</h1>
              <p className="text-xl text-gray-600">Acompanhe o progresso e gerencie a experiência da criança</p>
            </div>
          </div>

          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="atividades" className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Atividades
              </TabsTrigger>
              <TabsTrigger value="relatorios" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Relatórios
              </TabsTrigger>
              <TabsTrigger value="configuracoes" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Configurações
              </TabsTrigger>
            </TabsList>

            {/* Dashboard */}
            <TabsContent value="dashboard" className="space-y-6">
              {/* Estatísticas Gerais */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{estatisticasSemanais.tempoTotal}</div>
                    <div className="text-sm opacity-90">Tempo Semanal</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{estatisticasSemanais.atividadesCompletas}</div>
                    <div className="text-sm opacity-90">Atividades</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                  <CardContent className="p-6 text-center">
                    <BarChart3 className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{estatisticasSemanais.pontosGanhos}</div>
                    <div className="text-sm opacity-90">Pontos</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Segurança</div>
                  </CardContent>
                </Card>
              </div>

              {/* Progresso da Meta Semanal */}
              <Card>
                <CardHeader>
                  <CardTitle>Meta Semanal de Pontos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progresso</span>
                    <span className="text-sm font-medium text-gray-800">
                      {estatisticasSemanais.pontosGanhos}/{estatisticasSemanais.metaSemanal} pontos
                    </span>
                  </div>
                  <Progress
                    value={(estatisticasSemanais.pontosGanhos / estatisticasSemanais.metaSemanal) * 100}
                    className="h-3"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Faltam {estatisticasSemanais.metaSemanal - estatisticasSemanais.pontosGanhos} pontos para atingir a
                    meta!
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Atividades Recentes */}
            <TabsContent value="atividades" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {atividadeRecente.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              item.tipo === "historia"
                                ? "bg-purple-500"
                                : item.tipo === "desenho"
                                  ? "bg-orange-500"
                                  : "bg-green-500"
                            }`}
                          />
                          <div>
                            <h4 className="font-medium text-gray-800">{item.atividade}</h4>
                            <p className="text-sm text-gray-500">{item.data}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="mb-1">
                            {item.tempo}
                          </Badge>
                          <p className="text-sm text-gray-500">+{item.pontos} pts</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Relatórios */}
            <TabsContent value="relatorios" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tempo por Categoria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Histórias</span>
                          <span className="text-sm font-medium">45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Desenho</span>
                          <span className="text-sm font-medium">30%</span>
                        </div>
                        <Progress value={30} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Jogos</span>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Evolução Semanal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <TrendingUp className="w-16 h-16 mx-auto text-green-500 mb-4" />
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Progresso Excelente!</h3>
                      <p className="text-gray-600">A criança está se desenvolvendo muito bem em todas as áreas.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Configurações */}
            <TabsContent value="configuracoes" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Controles Parentais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Tempo Máximo Diário</h4>
                        <p className="text-sm text-gray-500">Limite de uso por dia</p>
                      </div>
                      <Badge variant="outline">{configAtual.tempoMaximoDiario} min</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Notificações</h4>
                        <p className="text-sm text-gray-500">Alertas de atividade</p>
                      </div>
                      <Badge variant={configAtual.notificacoes ? "default" : "secondary"}>
                        {configAtual.notificacoes ? "Ativo" : "Inativo"}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Relatório para Pais</h4>
                        <p className="text-sm text-gray-500">Resumo semanal por email</p>
                      </div>
                      <Badge variant={configAtual.relatorioPais ? "default" : "secondary"}>
                        {configAtual.relatorioPais ? "Ativo" : "Inativo"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Segurança e Privacidade</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Filtro de Conteúdo</h4>
                        <p className="text-sm text-gray-500">Nível de moderação</p>
                      </div>
                      <Badge variant="outline">{configAtual.filtroConteudo}</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Dados Coletados</h4>
                        <p className="text-sm text-gray-500">Apenas progresso educacional</p>
                      </div>
                      <Badge variant="default">Seguro</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Conformidade LGPD</h4>
                        <p className="text-sm text-gray-500">Proteção de dados garantida</p>
                      </div>
                      <Badge variant="default">✓ Ativo</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline">Exportar Relatório</Button>
                    <Button variant="outline">Redefinir Configurações</Button>
                    <Button variant="outline">Contatar Suporte</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

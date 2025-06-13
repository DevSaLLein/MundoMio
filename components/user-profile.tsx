"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, Settings } from "lucide-react"

export function UserProfile() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Avatar className="w-12 h-12 border-2 border-blue-200">
          <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Avatar" />
          <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">XM</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Xaolin Matador de Porco</h2>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-xs">
              Nível 1
            </Badge>
            <span className="text-sm text-gray-500">0 Pontos</span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

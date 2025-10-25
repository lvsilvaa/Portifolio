"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full">
          <span className="text-sm font-medium text-secondary">Disponível para novos projetos</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">Leonardo Silva</h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">Desenvolvedor Full Stack</p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Transformando ideias em soluções tecnológicas escaláveis e eficientes. Especializado em desenvolvimento Full
          Stack com <span className="text-foreground font-medium">14 anos de experiência</span> em criar aplicações
          robustas e análises de dados impactantes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="group">
            <a href="#projects">
              Ver Projetos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Entre em Contato</a>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">14+</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">5</div>
            <div className="text-sm text-muted-foreground">Empresas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">20+</div>
            <div className="text-sm text-muted-foreground">Projetos Entregues</div>
          </div>
        </div>
      </div>
    </section>
  )
}

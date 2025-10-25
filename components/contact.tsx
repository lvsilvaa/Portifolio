"use client"

import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estou disponível para novos projetos e oportunidades. Vamos conversar!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:leonardoo.silvaa2012@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    leonardoo.silvaa2012@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefone</h3>
                  <a href="tel:+5521991713469" className="text-muted-foreground hover:text-primary transition-colors">
                    (21) 99171-3469
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Localização</h3>
                  <p className="text-muted-foreground">Rio de Janeiro, RJ - Brasil</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea id="message" placeholder="Sua mensagem..." rows={5} />
              </div>
              <Button type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Você também pode me encontrar em:</p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" asChild>
              <a href="https://github.com/lvsilvaa" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/leonardosilva-826083231" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Leonardo Silva. Todos os direitos reservados.</p>
        </footer>
      </div>
    </section>
  )
}

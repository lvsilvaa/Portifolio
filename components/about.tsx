import { Code2, Database, LineChart } from "lucide-react"
import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Desenvolvedor em formação com foco em Full Stack e Análise de Dados, com experiência prática em projetos
            acadêmicos e profissionais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Desenvolvimento Full Stack</h3>
            <p className="text-muted-foreground leading-relaxed">
              Experiência sólida em desenvolvimento front-end e back-end, criando interfaces responsivas e sistemas
              escaláveis com React, Node.js e Python.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Banco de Dados</h3>
            <p className="text-muted-foreground leading-relaxed">
              Domínio em MySQL, PostgreSQL e integração de sistemas com bancos de dados, garantindo performance e
              segurança nas aplicações.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <LineChart className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Análise de Dados</h3>
            <p className="text-muted-foreground leading-relaxed">
              Especialista em Power BI e análise de dados, transformando dados brutos em insights estratégicos para
              tomada de decisões.
            </p>
          </Card>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Formação Acadêmica</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold">Bacharelado em Sistema de Informação</h4>
                  <p className="text-muted-foreground">Universidade Estácio de Sá</p>
                </div>
                <span className="text-sm text-muted-foreground">2016 - 2022</span>
              </div>
            </div>
            <div className="border-t border-border pt-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Técnico em Informática</h4>
                  <p className="text-muted-foreground">Instituto de Educação Geraldo de Almeida</p>
                </div>
                <span className="text-sm text-muted-foreground">2007 - 2009</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

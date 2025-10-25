import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Sistema de Gestão Empresarial",
    description:
      "Plataforma completa para gestão de processos empresariais com dashboards interativos, relatórios em tempo real e integração com múltiplos sistemas.",
    tags: ["React", "Node.js", "PostgreSQL", "Power BI"],
    image: "/business-management-dashboard.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard de Análise de Dados",
    description:
      "Sistema de visualização de dados com gráficos interativos, filtros avançados e exportação de relatórios para tomada de decisões estratégicas.",
    tags: ["Python", "Power BI", "SQL", "Excel"],
    image: "/data-analytics-dashboard.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Aplicação Web Responsiva",
    description:
      "Interface moderna e responsiva com foco em experiência do usuário, integração com APIs RESTful e autenticação segura.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    image: "/modern-web-application.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Sistema de Gerenciamento de Banco de Dados",
    description:
      "Ferramenta para administração e otimização de bancos de dados com queries complexas, backup automatizado e monitoramento de performance.",
    tags: ["MySQL", "Python", "Node.js"],
    image: "/database-management-system.png",
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Alguns dos projetos que desenvolvi ao longo da minha carreira
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Projeto
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

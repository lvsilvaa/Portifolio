import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Linguagens",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Bibliotecas",
    skills: ["React", "Next.js", "Node.js", "Vue.js", "jQuery", "Bootstrap"],
  },
  {
    title: "Banco de Dados",
    skills: ["MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    title: "Ferramentas & Plataformas",
    skills: ["Git", "GitHub", "AWS", "Azure DevOps", "Power BI", "Excel Avançado", "Figma"],
  },
  {
    title: "Metodologias",
    skills: ["Scrum", "Kanban", "CI/CD", "Testes Funcionais"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">Certificações & Cursos</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <p className="font-medium">Treinamento em AWS</p>
                <p className="text-sm text-muted-foreground">Amazon Web Services</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <p className="font-medium">Desenvolvimento Full Stack</p>
                <p className="text-sm text-muted-foreground">Aplicações Modernas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <p className="font-medium">Power BI para Análise de Dados</p>
                <p className="text-sm text-muted-foreground">Business Intelligence</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <p className="font-medium">Azure DevOps (CI/CD)</p>
                <p className="text-sm text-muted-foreground">Microsoft Azure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

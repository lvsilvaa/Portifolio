import { Briefcase, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"

const experiences = [
  {
    company: "ASR Brasil",
    role: "Desenvolvedor Front-end",
    location: "Rio de Janeiro, RJ",
    period: "04/2025 - Atual",
    description: [
      "Desenvolvimento de interfaces responsivas utilizando React.js, Next.js e Angular.",
      "Implementação de consumo de APIs REST para exibição dinâmica de dados.",
      "Criação de componentes reutilizáveis, garantindo padronização e escalabilidade.",
      "Otimização de performance e SEO, reduzindo tempo de carregamento das aplicações.",
      "Aplicação de boas práticas de acessibilidade (WCAG) e UI/UX.",
      "Atuação em times ágeis com Scrum/Kanban, versionamento com Git e code review.",

    ],
  },
  {
    company: "Exército Brasileiro",
    role: "Desenvolvedor Front-end e Técnico de TI",
    location: "Niterói, RJ",
    period: "02/2017 - 03/2025",
    description: [
      "Manutenção e atualização de sistemas e aplicações críticas",
      "Testes e validação de soluções desenvolvidas, garantindo alta performance",
      "Revisões de código, assegurando qualidade e consistência",
      "Atuação em suporte técnico, redes e servidores.",
      "Desenvolvimento de scripts em Python para automação de processos administrativos.",
      "Suporte à infraestrutura de TI, garantindo segurança e disponibilidade dos sistemas.",
    ],
  },
  {
    company: "GEOHUB",
    role: "Programador de Sistemas",
    location: "Jacarepaguá, RJ",
    period: "03/2013 - 09/2015",
    description: [
      "Desenvolvimento back-end em .NET para aplicações web",
      "Implementação de sistemas de informação empresariais",
      "Treinamento de clientes para uso eficiente das soluções",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Profissional</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mais de uma década construindo soluções tecnológicas em empresas de diversos segmentos
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all hover:border-primary/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-medium text-foreground">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

'use server'

export async function getCourses() {
  return {
    courses: [
      {
        id: 1,
        title: "UX Design Fundamentals",
        short_description: "Aprenda os fundamentos de UX Design e crie experiências incríveis",
        full_description: "Este curso aborda os princípios fundamentais de User Experience Design, desde pesquisa com usuários até prototipagem...",
        category: "Design",
        level: "iniciante",
        duration_hours: 20,
        image_url: "https://media.istockphoto.com/id/1356364268/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-keyboard-screens-show-coding.webp?a=1&b=1&s=612x612&w=0&k=20&c=rLOBLfP2c6SKAXPAoZZndGm0OhF6QT-t3a_kQvzIePU=",
        modules: [
          { title: "Introdução ao UX Design", lessons: 4 },
          { title: "Pesquisa com Usuários", lessons: 5 },
          { title: "Prototipagem e Testes", lessons: 6 }
        ]
      },
      {
        id: 2,
        title: "React Avançado",
        short_description: "Domine conceitos avançados de React e construa aplicações complexas",
        full_description: "Este curso aprofunda os conceitos avançados do React...",
        category: "Desenvolvimento",
        level: "avancado",
        duration_hours: 30,
        image_url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D",
        modules: [
          { title: "Hooks Avançados", lessons: 7 },
          { title: "Gerenciamento de Estado", lessons: 8 },
          { title: "Performance e Otimização", lessons: 6 },
          { title: "Testes e Deployment", lessons: 5 }
        ]
      },
      {
        id: 3,
        title: "Product Management 101",
        short_description: "Inicie sua carreira em gestão de produtos digitais",
        full_description: "Este curso introdutório à Gestão de Produtos aborda desde a definição de visão e estratégia...",
        category: "Produto",
        level: "iniciante",
        duration_hours: 25,
        image_url: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D",
        modules: [
          { title: "Fundamentos de Produto", lessons: 5 },
          { title: "Descoberta e Validação", lessons: 6 },
          { title: "Métricas e Analytics", lessons: 4 },
          { title: "Execução e Delivery", lessons: 5 }
        ]
      },
      {
        id: 4,
        title: "Data Science para Produto",
        short_description: "Use dados para tomar melhores decisões de produto",
        full_description: "Este curso ensina como utilizar ciência de dados para embasar decisões de produto...",
        category: "Dados",
        level: "intermediario",
        duration_hours: 35,
        image_url: "https://media.istockphoto.com/id/1349104991/photo/e-learning-online-education-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=mG2l86JNDQmEP9t2NkJ4Nvc8rL-OGdXoU55ZrS1LDhA=",
        modules: [
          { title: "Fundamentos de Análise de Dados", lessons: 6 },
          { title: "Métricas para Produto", lessons: 5 },
          { title: "Testes A/B", lessons: 7 },
          { title: "Modelos Preditivos", lessons: 8 }
        ]
      },
      {
        id: 5,
        title: "IA Generativa para Designers",
        short_description: "Aprenda a usar IA para potencializar seu trabalho de design",
        full_description: "Este curso explora como designers podem utilizar Inteligência Artificial generativa...",
        category: "Design",
        level: "intermediario",
        duration_hours: 18,
        image_url: "https://media.istockphoto.com/id/1952157878/photo/online-education-internet-lessons-teleconferencing-studying-safely-from-viruses-internet.webp?a=1&b=1&s=612x612&w=0&k=20&c=VTXLjHoIHx9b0EBSuFrkbaZKcpYdPlnJFAp_sa7RG9E=",
        modules: [
          { title: "Fundamentos de IA Generativa", lessons: 4 },
          { title: "Ferramentas de IA para Design", lessons: 6 },
          { title: "Prompts e Direção Criativa", lessons: 5 },
          { title: "Integrando IA no Fluxo de Trabalho", lessons: 3 }
        ]
      },
      {
        id: 6,
        title: "Full-Stack JavaScript",
        short_description: "Desenvolva aplicações completas com JavaScript",
        full_description: "Este curso abrangente ensina desenvolvimento full-stack com JavaScript...",
        category: "Desenvolvimento",
        level: "intermediario",
        duration_hours: 45,
        image_url: "https://plus.unsplash.com/premium_photo-1661288470822-01f802dd3fd4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D",
        modules: [
          { title: "Front-end com React", lessons: 10 },
          { title: "Back-end com Node.js", lessons: 12 },
          { title: "Bancos de Dados", lessons: 8 },
          { title: "Autenticação e Segurança", lessons: 6 },
          { title: "Deployment e DevOps", lessons: 5 }
        ]
      },
      {
        id: 7,
        title: "Product Leadership",
        short_description: "Desenvolva habilidades de liderança em produto",
        full_description: "Este curso avançado aborda os desafios e estratégias de liderança em produto...",
        category: "Produto",
        level: "avancado",
        duration_hours: 30,
        image_url: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D",
        modules: [
          { title: "Liderança e Gestão de Times", lessons: 7 },
          { title: "Estratégia e Visão de Produto", lessons: 8 },
          { title: "Relacionamento com Stakeholders", lessons: 5 },
          { title: "Métricas e OKRs", lessons: 6 },
          { title: "Cultura de Produto", lessons: 4 }
        ]
      },
      {
        id: 8,
        title: "Análise de Dados com Python",
        short_description: "Aprenda a analisar e visualizar dados com Python",
        full_description: "Este curso ensina análise e visualização de dados utilizando Python...",
        category: "Dados",
        level: "iniciante",
        duration_hours: 28,
        image_url: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww",
        modules: [
          { title: "Introdução ao Python para Dados", lessons: 6 },
          { title: "Manipulação de Dados com Pandas", lessons: 8 },
          { title: "Visualização com Matplotlib e Seaborn", lessons: 7 },
          { title: "Análise Estatística Básica", lessons: 5 }
        ]
      }
    ]
  }
}

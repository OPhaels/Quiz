// QUESTÕES GERAIS ------------------------------------ QUESTÕES GERAIS \\

const questions = {
  estrutura: [ // Estrutura de Computadores -- perguntas atualizadas.
    {
      question: "Qual dispositivo de rede é mais apropriado para fornecer serviços de filtragem de pacotes com estado, filtragem de email e VPN?",
      options: [
        "Roteador",
        "Serviços de gerenciamento de terminal",
        "Servidor proxy",
        "UTM firewall",
        "IDS (Sistema de Detecção de Intrusão)"
      ],
      correct: 3
    },
    {
      question: "Este tipo de conector leva alimentação elétrica para discos rígidos padrão IDE, unidades ópticas e outros dispositivos:",
      options: [
        "Conector Molex",
        "Conector Berg",
        "Conector eSATA",
        "Conector SATA",
        "Conector de 20 pinos"
      ],
      correct: 0
    },
    {
      question: "Qual das seguintes soluções é recomendada para aumentar significativamente a velocidade do computador em um servidor lento?",
      options: [
        "Aumentar a quantidade de memória RAM",
        "Instalar uma placa de vídeo mais potente",
        "Limpar os arquivos temporários e desfragmentar o HDD",
        "Substituir o disco rígido (HDD) por um SSD",
        "Substituir o processador por um mais potente"
      ],
      correct: 3
    },
    {
      question: "Qual dos endereços IP pertence à mesma rede que 128.112.31.10 com máscara 255.0.0.0?",
      options: [
        "172.16.50.10",
        "129.112.31.15",
        "255.112.31.15",
        "128.255.255.254",
        "129.112.31.10"
      ],
      correct: 3
    },
    {
      question: "Qual dos endereços IP NÃO pertence à mesma rede de 192.168.55.11 com máscara 255.255.0.0?",
      options: [
        "192.168.10.10",
        "192.168.55.15",
        "192.167.55.10",
        "192.168.0.1",
        "Nenhuma das respostas anteriores"
      ],
      correct: 2
    },
    {
      question: "A ESD (descarga eletrostática) pode ocorrer quando:",
      options: [
        "Há acúmulo de carga elétrica em uma superfície que toca outra com carga diferente e pode causar danos ao equipamento",
        "Há acúmulo de carga elétrica e não causa danos",
        "Há acúmulo de corrente elétrica e pode causar danos",
        "Há acúmulo de corrente elétrica sem causar danos",
        "Há acúmulo de potência elétrica e pode causar danos"
      ],
      correct: 0
    },
    {
      question: "Que tipo de malware se replica automaticamente sem a ação do usuário ao explorar vulnerabilidades?",
      options: [
        "Vírus",
        "Ransomware",
        "Spyware",
        "Adware",
        "Worm"
      ],
      correct: 4
    },
    {
      question: "Qual dispositivo de rede toma decisões de encaminhamento com base no endereço MAC de destino?",
      options: [
        "Repetidor",
        "Hub",
        "Switch",
        "Roteador",
        "Nenhuma das alternativas"
      ],
      correct: 2
    },
    {
      question: "Se as partes metálicas de um equipamento se tornarem energizadas, o que fornece caminho de menor resistência?",
      options: [
        "Terra",
        "Disjuntor",
        "Neutro",
        "Capacitor",
        "Fusível"
      ],
      correct: 0
    },
    {
      question: "Qual camada do modelo OSI é responsável pelo estabelecimento de conexões únicas e autenticadas?",
      options: [
        "Camada de Sessão",
        "Camada Física",
        "Camada de Enlace",
        "Camada de Rede",
        "Camada de Apresentação"
      ],
      correct: 0
    },
    {
      question: "Nos computadores pessoais, qual componente da placa-mãe controla dispositivos de alta velocidade como a memória e o slot PCIe?",
      options: [
        "Chipset ponte sul",
        "Chipset ponte norte",
        "Cache",
        "Registradores",
        "Chip de memória RAM"
      ],
      correct: 1
    },
    {
      question: "Qual alternativa associa corretamente os tipos de memória ROM, PROM, EPROM e Flash?",
      options: [
        "2-1-3-4",
        "1-3-4-2",
        "3-4-2-1",
        "2-1-4-3",
        "1-2-3-4"
      ],
      correct: 4
    },
    {
      question: "O BIOS possui várias funções. Quais itens estão corretos?",
      options: [
        "I, III e V",
        "I, II e III",
        "II e III",
        "II, III e V",
        "I, III e IV"
      ],
      correct: 3
    },
    {
      question: "Qual endereço IP está na mesma rede de 172.16.55.11 com máscara 255.255.255.0?",
      options: [
        "172.16.50.10",
        "172.16.50.15",
        "172.16.56.100",
        "172.16.55.25",
        "172.18.55.11"
      ],
      correct: 3
    },
    {
      question: "Selecione a opção que identifica corretamente os chipsets e a CPU:",
      options: [
        "1-CPU, 2-northbridge, 3-southbridge",
        "1-northbridge, 2-CPU, 3-southbridge",
        "1-southbridge, 2-CPU, 3-northbridge",
        "1-CPU, 2-southbridge, 3-northbridge",
        "1-southbridge, 2-northbridge, 3-CPU"
      ],
      correct: 0
    }
  ],
  arquitetura: [ // atualizada
    {
      question: "Quais são as principais limitações dos bancos de dados relacionais quando se trabalha com dados não estruturados?",
      options: [
        "Dificuldade em armazenar grandes volumes de dados",
        "Necessidade de esquema fixo",
        "Baixa performance para operações complexas",
        "Falta de suporte a escalabilidade horizontal",
        "Todas as anteriores",
      ],
      correct: 4,
    },
    {
      question: "Sobre a implementação de uma arquitetura de sistemas em uma organização, qual alternativa está correta?",
      options: [
        "Pode ser realizada sem planejamento prévio",
        "Dispensa a análise de impacto nos negócios",
        "É exclusivamente uma responsabilidade de TI",
        "É algo alheio a questões de segurança dos dados",
        "Requer planejamento estratégico e técnico",
      ],
      correct: 4,
    },
    {
      question: "Marque a alternativa correta sobre os benefícios da comunicação assíncrona entre serviços:",
      options: [
        "Facilita a integração entre serviços, permitindo que a disponibilidade de um serviço não impacte diretamente outro",
        "Elimina a necessidade de filas de mensagens",
        "É ideal para transações financeiras que requerem confirmação imediata",
        "Não pode ser utilizada em sistemas que precisam de alta disponibilidade",
        "Exige que todos os serviços estejam disponíveis simultaneamente",
      ],
      correct: 0,
    },
    {
      question: "Sobre as vantagens da arquitetura orientada a serviços (SOA), marque a alternativa correta:",
      options: [
        "Facilita a escalabilidade e a modularidade",
        "Garante consistência de dados em tempo real",
        "Depende de uma base de dados monolítica",
        "Evita a necessidade de qualquer forma de monitoramento",
        "Simplifica a integração de serviços legados",
      ],
      correct: 0,
    },
    {
      question: "Sobre os desafios na implementação e manutenção de uma arquitetura de sistemas, marque a alternativa correta:",
      options: [
        "Todos os sistemas são inerentemente simples de integrar",
        "Inexistem desafios no caso de arquiteturas monolíticas atualmente",
        "A escalabilidade é automaticamente garantida pelo blockchain",
        "A comunicação entre serviços distribuídos pode ser complexa",
        "Os custos são irrelevantes na escolha da arquitetura",
      ],
      correct: 3,
    },
    {
      question: "Considere as seguintes afirmativas sobre resiliência em sistemas de software:",
      options: [
        "Arquiteturas baseadas em microservices permitem maior resiliência",
        "A replicação ativa-ativa diminui a resiliência",
        "Ferramentas de monitoramento como Prometheus e Grafana melhoram a resiliência",
        "Todas estão corretas",
        "Nenhuma está correta",
      ],
      correct: 3,
    },
    {
      question: "Sobre a aplicação do padrão MVP (Model-View-Presenter), qual afirmativa é correta?",
      options: [
        "O Presenter atua como controlador direto do banco de dados",
        "A View comunica-se diretamente com o Model",
        "O Presenter interage com o Model e atualiza a View",
        "O Model recebe eventos da View diretamente",
        "O MVP não se aplica a interfaces gráficas",
      ],
      correct: 2,
    },
    {
      question: "No padrão MVC, qual das seguintes assertivas é verdadeira?",
      options: [
        "O Controller atua como intermediário entre a View e o Model",
        "A View realiza o controle das regras de negócio",
        "O Model é responsável apenas por exibir os dados",
        "O Controller não interage com o usuário",
        "A View atualiza o Model diretamente",
      ],
      correct: 0,
    },
    {
      question: "No contexto do DevOps, marque a alternativa correta sobre responsabilidade compartilhada:",
      options: [
        "Os operadores assumem total responsabilidade pela correção de falhas",
        "As equipes de desenvolvimento concentram-se apenas em novas funcionalidades",
        "Elimina a necessidade de colaboração entre equipes",
        "Reduz a necessidade de automação",
        "Promove maior cuidado com o código, pois devs também operam em produção",
      ],
      correct: 4,
    },
    {
      question: "Considere as afirmações a seguir sobre segurança em sistemas:",
      options: [
        "Somente a I",
        "Somente I e III",
        "Somente a III",
        "Somente I e II",
        "Somente II e III",
      ],
      correct: 1,
    },
    {
      question: "Sobre as tendências em arquitetura de software, marque a alternativa correta:",
      options: [
        "V - F - V",
        "V - F - F",
        "V - V - F",
        "F - V - V",
        "F - F - V",
      ],
      correct: 0,
    },
    {
      question: "Sobre a manutenção de sistemas, quais assertivas são verdadeiras?",
      options: [
        "Somente a I",
        "Somente I e III",
        "Somente a III",
        "Somente I e II",
        "Somente a II",
      ],
      correct: 1
    },
    {
      question:
        "Qual é a principal limitação do modelo de banco de dados chave-valor?",
      options: [
        "Dificuldade de armazenar dados complexos",
        "Falta de escalabilidade",
        "Necessidade de transações complexas",
        "Dificuldade em realizar buscas eficientes",
        "Falta de flexibilidade no esquema",
      ],
      correct: 0,
    },
    {
      question:
        "Qual é a principal vantagem do modelo de banco NoSQL de colunas para aplicações analíticas?",
      options: [
        "Armazenamento eficiente de dados tabulares",
        "Otimização para consultas de agregação e leitura de grandes volumes",
        "Suporte a relacionamentos entre dados",
        "Fácil de usar com SQL",
        "Baixa latência nas operações de leitura e escrita",
      ],
      correct: 1,
    },
    {
      question:
        "Qual tecnologia é comumente usada para facilitar a replicação e a consistência em bancos de dados NoSQL?",
      options: [
        "MapReduce",
        "Sharding",
        "Consistência forte",
        "CAP Theorem",
        "Eventos de stream",
      ],
      correct: 3,
    },
    {
      question:
        "Em qual situação seria mais vantajoso utilizar um banco de dados NoSQL em vez de um relacional?",
      options: [
        "Quando a aplicação requer suporte a transações complexas e fortes garantias de consistência",
        "Quando os dados são altamente estruturados e não mudam com frequência",
        "Quando a aplicação precisa armazenar grandes volumes de dados variáveis e não estruturados",
        "Quando o acesso a dados requer muitas junções entre tabelas",
        "Quando a aplicação exige transações ACID em tempo real",
      ],
      correct: 2,
    },
    {
      question:
        "Quais são as vantagens da arquitetura de armazenamento distribuído em bancos de dados NoSQL?",
      options: [
        "Aumento na complexidade de gerenciamento",
        "Melhora da disponibilidade e escalabilidade do sistema",
        "Redução de custos de hardware",
        "Fácil implementação em bancos relacionais",
        "Redução da necessidade de replicação",
      ],
      correct: 1,
    },
  ],

  programacao:  // Programação para dispositivos móveis | Atualizadas.
    [
      {
        question:
          "Qual a principal linguagem usada no desenvolvimento de apps Android?",
        options: ["Swift", "Kotlin", "JavaScript", "Objective-C", "Ruby"],
        correct: 1,
      },
      {
        question: "Qual é a IDE recomendada para o desenvolvimento Android?",
        options: [
          "Xcode",
          "Eclipse",
          "Android Studio",
          "Visual Studio",
          "IntelliJ IDEA",
        ],
        correct: 2,
      },
      {
        question:
          "No desenvolvimento para dispositivos móveis, qual dos seguintes fatores é mais importante para a experiência do usuário?",
        options: [
          "Capacidade de processamento do dispositivo",
          "Design e usabilidade",
          "Tamanho da memória",
          "Bateria de longo prazo",
          "Capacidade de armazenamento",
        ],
        correct: 1,
      },
      {
        question:
          "O que o Android Studio fornece como ferramenta principal para o desenvolvimento?",
        options: [
          "Editor de código",
          "Gerenciador de dependências",
          "Emulador",
          "Debugger",
          "Todas as anteriores",
        ],
        correct: 4,
      },
      {
        question:
          "Qual é a principal linguagem usada para o desenvolvimento de apps iOS?",
        options: ["Swift", "Java", "Kotlin", "JavaScript", "Objective-C"],
        correct: 0,
      },
      {
        question:
          "Qual é o sistema de gerenciamento de banco de dados local usado no Android?",
        options: ["MySQL", "PostgreSQL", "SQLite", "Firebase", "MongoDB"],
        correct: 2,
      },
      {
        question:
          "Qual biblioteca facilita o uso de interfaces gráficas em apps móveis híbridos?",
        options: [
          "React Native",
          "SwiftUI",
          "Flutter",
          "Kotlin Multiplatform",
          "ReactJS",
        ],
        correct: 0,
      },
      {
        question:
          "No iOS, qual framework é utilizado para criar interfaces gráficas?",
        options: ["UIKit", "Flutter", "React Native", "Core Data", "Xcode"],
        correct: 0,
      },
      {
        question: "Qual é o padrão de navegação que é comum no Android?",
        options: [
          "Gestos de deslizar",
          "Navigation Drawer",
          "Tab Bar",
          "Action Bar",
          "Gestos de toque",
        ],
        correct: 1,
      },
      {
        question: "No iOS, qual é o método principal de navegação entre telas?",
        options: [
          "ViewControllers e NavigationControllers",
          "Fragments",
          "Sliding menus",
          "Push notifications",
          "Widgets",
        ],
        correct: 0,
      },
      {
        question: "O que é o `Floating Action Button` no Android?",
        options: [
          "Um botão flutuante para ações principais",
          "Uma barra de navegação",
          "Uma notificação push",
          "Um widget de formulário",
          "Uma transição de tela",
        ],
        correct: 0,
      },
      {
        question: "Quais são os dois principais sistemas operacionais para desenvolvimento móvel mencionados no texto?",
        options: [
          "Windows e macOS",
          "Nenhuma das respostas anteriores",
          "Java e Swift",
          "Linux e Ubuntu",
          "Android e iOS",
        ],
        correct: 4,
      },
      {
        question: "Quais recursos podem ser explorados no desenvolvimento de aplicativos móveis?",
        options: [
          "Nenhuma das alternativas",
          "Microfone, teclado virtual e monitor interno",
          "Câmera, localização geográfica e sensores diversos",
          "Teclado físico, monitor externo e impressora",
          "Scanner de documentos, mouse e touchpad",
        ],
        correct: 2,
      },
      {
        question: "Por que o mercado de aplicativos móveis é considerado em franca expansão?",
        options: [
          "Pela preferência dos usuários por dispositivos móveis",
          "Pela constante inovação e crescimento do setor",
          "Pela disponibilidade de recursos exclusivos nos smartphones",
          "Todas as respostas anteriores",
          "Pelo baixo custo de desenvolvimento de aplicativos móveis",
        ],
        correct: 3,
      },
      {
        question: "Quais são os objetivos de aprender sobre design de interação para aplicativos móveis?",
        options: [
          "Compreender as diretrizes para o design de interação",
          "Nenhuma das respostas anteriores",
          "Todas as alternativas anteriores",
          "Identificar os principais desafios de desenvolvimento de aplicativos móveis",
          "Operacionalizar as diretrizes de interação",
        ],
        correct: 2,
      },
      {
        question: "Para quais aspectos do desenvolvimento de aplicativos as diretrizes fornecem ajuda aos desenvolvedores?",
        options: [
          "Depuração e testes",
          "Configuração do servidor backend",
          "Nenhuma das respostas anteriores",
          "Design da interface do usuário",
          "Estratégias de marketing de aplicativos",
        ],
        correct: 3,
      },
      {
        question: "Por que o desenvolvimento de aplicativos móveis pode ser desafiador no início?",
        options: [
          "Nenhuma das alternativas",
          "Devido à falta de criatividade na utilização dos recursos",
          "Devido às restrições de tela dos smartphones",
          "Por conta das limitações de hardware dos dispositivos móveis",
          "Pelas diferentes linguagens e plataformas envolvidas",
        ],
        correct: 4,
      },
      {
        question: "Qual é uma das vantagens do desenvolvimento de aplicativos móveis em relação à computação convencional?",
        options: [
          "Todas as opções anteriores",
          "Maior capacidade de processamento",
          "Acesso a recursos como câmera e sensores diversos",
          "Interface de usuário mais intuitiva",
          "Maior segurança dos dados",
        ],
        correct: 0,
      }
    ],

  fundamentos: // Fundamentos de sistemas de informação
    [
      {
        question: "Sobre o conceito de CRM, assinale a alternativa correta:",
        options: [
          "CRM é um sistema focado apenas na logística de transporte e armazenagem de produtos.",
          "CRM é um modelo de gestão voltado exclusivamente para fornecedores e cadeia de suprimentos.",
          "CRM é utilizado para monitorar exclusivamente o desempenho de máquinas e sistemas.",
          "CRM é um conjunto de estratégias com foco no cliente, visando entender e antecipar suas necessidades.",
        ],
        correct: 3,
      },
      {
        question:
          "Em relação a dados, informação e conhecimento, qual afirmativa está correta?",
        options: [
          "Dados e conhecimento são a mesma coisa e têm estrutura idêntica.",
          "Informações são dados organizados e com significado, úteis na tomada de decisão.",
          "Conhecimento é mais fácil de modelar e transferir que dados.",
          "Dados são conclusões extraídas de informações bem estruturadas.",
        ],
        correct: 1,
      },
      {
        question:
          "Qual dos itens abaixo não é uma etapa do Planejamento Estratégico de TI?",
        options: [
          "Cursos online com realidade virtual e aumentada para todos os funcionários.",
          "Definir missão, visão e valores da empresa.",
          "Diagnóstico estratégico com Matriz SWOT.",
          "Estabelecer objetivos estratégicos, como retorno sobre investimentos.",
        ],
        correct: 0,
      },
      {
        question: "O ciclo de vida de um software corresponde a:",
        options: [
          "As etapas que um software percorre, da concepção até sua descontinuação.",
          "O tempo de vida útil do hardware onde o software está instalado.",
          "O prazo de garantia de um sistema de software comercial.",
          "O ciclo de produção de peças de hardware que executam software.",
        ],
        correct: 0,
      },
      {
        question:
          "Qual é a representação correta dos números decimais 15, 16 e 17 no sistema hexadecimal?",
        options: ["15, 16, 17", "F, 11, 12", "F, 10, 11", "F, 15, 16"],
        correct: 2,
      },
      {
        question:
          "Qual das alternativas apresenta características corretas sobre sistemas ERP?",
        options: [
          "São desenvolvidos apenas internamente pelas empresas e não seguem padrões.",
          "Utilizam bancos de dados não relacionais e operam sem integração entre setores.",
          "São voltados apenas para gestão de pequenas empresas, sem escalabilidade.",
          "São pacotes de software modulares que integram processos, usam banco relacional e seguem boas práticas.",
        ],
        correct: 3,
      },
      {
        question:
          "Qual princípio dos Sistemas de Informação é essencial para a gestão do conhecimento?",
        options: [
          "Isolamento dos setores da empresa.",
          "Centralização de decisões em uma única pessoa.",
          "Compartilhamento de informações entre setores.",
          "Proibição de acesso remoto aos sistemas.",
        ],
        correct: 2,
      },
      {
        question:
          "Quais são os principais componentes de uma arquitetura de computadores?",
        options: [
          "Memória principal, ULA, unidade de controle e dispositivos de entrada/saída.",
          "CPU, modem, impressora e sistema operacional.",
          "Banco de dados, software, drivers e interface gráfica.",
          "Planilhas, arquivos de texto, software de edição e teclado.",
        ],
        correct: 0,
      },
      {
        question:
          "Qual é o objetivo principal da Política de Segurança da Informação (PSI)?",
        options: [
          "Restringir o uso de internet para os funcionários.",
          "Impedir o uso de software de código aberto.",
          "Estabelecer regras para o uso e proteção de informações organizacionais.",
          "Controlar a produtividade dos funcionários com rastreamento constante.",
        ],
        correct: 2,
      },
      {
        question: "Quais são os processos que compõem um Sistema de Informação?",
        options: [
          "Processamento, desligamento, backup e reinício.",
          "Entrada, processamento, saída e feedback.",
          "Registro, impressão, compactação e envio.",
          "Leitura, criptografia, envio e eliminação.",
        ],
        correct: 1,
      },
      {
        question: "De acordo com Laudon, um Sistema de Informação é:",
        options: [
          "Um hardware especializado em processamento gráfico de informações.",
          "Um conjunto de componentes interligados que coletam, processam, armazenam e distribuem informações.",
          "Um programa específico usado em laboratórios.",
          "Um modelo de segurança com foco em redes sociais.",
        ],
        correct: 1,
      },
      {
        question:
          "O conceito descrito como um conjunto de atividades logicamente relacionadas que coordenam o trabalho em uma empresa é:",
        options: [
          "Processo de Negócio.",
          "Arquitetura de Hardware.",
          "Linguagem de Programação.",
          "Protocolo de Comunicação.",
        ],
        correct: 0,
      },
      {
        question: "O que é um Sistema de Apoio à Decisão (SAD)?",
        options: [
          "Um sistema que substitui a tomada de decisão humana por completo.",
          "Um sistema que auxilia os gestores na tomada de decisões, com base em dados e modelos analíticos.",
          "Um sistema voltado exclusivamente para o controle de acesso físico à empresa.",
          "Um sistema que realiza cálculos matemáticos sem interferência em processos empresariais.",
        ],
        correct: 1,
      },
      {
        question:
          "Qual a função principal de um sistema SCM (Supply Chain Management)?",
        options: [
          "Controlar exclusivamente o estoque da empresa.",
          "Gerenciar toda a cadeia de suprimentos, desde fornecedores até a entrega ao cliente final.",
          "Criar campanhas de marketing em redes sociais.",
          "Monitorar o tempo de resposta de servidores de e-mail.",
        ],
        correct: 1,
      },
      {
        question: "A sigla SGSI se refere a que tipo de sistema?",
        options: [
          "Sistema de Gerenciamento de Serviços Industriais.",
          "Sistema Global de Segurança Integrada.",
          "Sistema de Gestão de Segurança da Informação.",
          "Sistema de Gerência de Sistemas de Internet.",
        ],
        correct: 2,
      },
      {
        question:
          'Qual das opções melhor define o conceito de "feedback" em sistemas de informação?',
        options: [
          "A avaliação final de desempenho do usuário.",
          "A devolutiva do sistema para reavaliar processos e permitir ajustes.",
          "A quantidade de cliques em uma página de internet.",
          "A velocidade com que um software carrega os dados.",
        ],
        correct: 1,
      },
      {
        question:
          "O que caracteriza o Modelo em Cascata de desenvolvimento de software?",
        options: [
          "Um processo caótico e desorganizado de desenvolvimento iterativo.",
          "Um ciclo de vida baseado em atualizações contínuas e testes simultâneos.",
          "Um modelo linear e sequencial com etapas rígidas e definidas.",
          "Um modelo usado apenas em ambientes de prototipação rápida.",
        ],
        correct: 2,
      },
      {
        question:
          "Qual das alternativas representa um benefício direto da implantação de um sistema ERP?",
        options: [
          "Redução da comunicação entre setores.",
          "Integração dos processos e informações de toda a empresa em um único sistema.",
          "Substituição completa da força de trabalho por automação.",
          "Centralização de dados apenas no setor financeiro.",
        ],
        correct: 1,
      },
      {
        question:
          "Em relação à TI nas empresas, o termo “Governança de TI” refere-se a:",
        options: [
          "A capacidade do setor de TI de desenvolver softwares de forma autônoma.",
          "A restrição do acesso a redes sociais no ambiente corporativo.",
          "A definição de políticas sobre a forma de descarte de lixo eletrônico.",
          "O conjunto de processos que garantem que a TI esteja alinhada aos objetivos estratégicos da empresa.",
        ],
        correct: 3,
      },
      {
        question: "Um Data Warehouse é mais utilizado para:",
        options: [
          "Armazenar arquivos de imagem e vídeo usados no marketing.",
          "Consolidar grandes volumes de dados para análise e apoio à decisão.",
          "Hospedar sites institucionais com alta performance.",
          "Armazenar os dados temporários de sessões de usuários.",
        ],
        correct: 1,
      },
    ],
};

// ESCRITAS --------------------------------- ESCRITAS \\

const escritas = [
  {
    escritaArquitetura: [ // atualizadas
      {
        question:
          "Descreva como técnicas de retry & fallback podem ser utilizadas para aumentar a resiliência do sistema, minimizando os impactos das falhas.",
        options: [
          "A resiliência em um sistema de microservices pode ser implementada através de técnicas de retry & fallback, que permitem ao sistema tentar novamente uma operação em caso de falha, ou recorrer a um método alternativo caso a operação falhe repetidamente. Por exemplo, no serviço de pagamento, se uma tentativa de processar um pagamento falhar devido a uma indisponibilidade temporária do serviço, o sistema pode automaticamente tentar novamente após um intervalo de tempo definido (retry). Se após várias tentativas o serviço ainda estiver indisponível, o sistema pode então acionar um fallback, como a utilização de um método de pagamento alternativo ou a colocação do pedido em uma fila para processamento posterior.",
        ],
        correct: 0,
      },
      {
        question:
          "Explique como o padrão MVP facilita a manutenção e a evolução de uma aplicação, utilizando um exemplo prático para ilustrar a interação entre o Model, a View e o Presenter.",
        options: [
          "O padrão MVP facilita a manutenção e evolução de uma aplicação ao desacoplar as responsabilidades entre Model, View e Presenter. Isso permite que mudanças em um componente sejam feitas de forma isolada, sem afetar os outros componentes. Por exemplo, o Model contém a lógica de negócio, o Presenter atua como intermediário, processando a lógica e atualizando a View, enquanto a View se limita à interface com o usuário.",
        ],
        correct: 0,
      },
      {
        question:
          "Descreva como a prática de responsabilidade compartilhada e monitoramento contínuo no DevOps contribui para a estabilidade e resiliência do sistema.",
        options: [
          "A responsabilidade compartilhada no DevOps garante que as equipes de desenvolvimento estejam diretamente envolvidas na operação do software em produção, o que contribui para uma maior atenção aos detalhes durante o processo de desenvolvimento. Ferramentas como Prometheus e Grafana permitem o monitoramento em tempo real e alertas imediatos, facilitando a detecção e resolução rápida de falhas, aumentando a estabilidade e resiliência do sistema.",
        ],
        correct: 0,
      }
    ],
    escritaFundamentos: [
      {
        question:
          "O que são sistemas de informação e como eles contribuem para o funcionamento das empresas?",
        options: [
          "Sistemas de informação são conjuntos de componentes inter-relacionados que coletam, processam, armazenam e distribuem informações para apoiar as operações, a tomada de decisões, o controle organizacional e a análise estratégica. Eles ajudam as empresas a melhorar a eficiência operacional, a comunicação e a tomada de decisões informadas.",
        ],
        correct: 0,
      },
      {
        question:
          "Quais são os principais tipos de sistemas de informação utilizados nas empresas e qual a função de cada um?",
        options: [
          "Os principais tipos de sistemas de informação nas empresas são: Sistema de Processamento de Transações (SPT), que registra transações diárias; Sistema de Informação Gerencial (SIG), que fornece relatórios e apoio à decisão; Sistema de Apoio à Decisão (SAD), que auxilia nas decisões estratégicas; e Sistema de Informação Executiva (SIE), que fornece informações resumidas para os altos executivos.",
        ],
        correct: 0,
      },
      {
        question:
          "Como a implementação de um ERP (Enterprise Resource Planning) pode beneficiar uma organização?",
        options: [
          "A implementação de um ERP pode integrar todos os processos empresariais em um único sistema, melhorando a comunicação entre departamentos, aumentando a eficiência operacional, reduzindo erros e custos operacionais, e proporcionando uma visão em tempo real das operações, o que facilita a tomada de decisões estratégicas.",
        ],
        correct: 0,
      },
      {
        question:
          "Quais são os principais desafios na implementação de um sistema de informação em uma organização?",
        options: [
          "Os principais desafios incluem: resistência à mudança por parte dos funcionários, custos elevados de implementação e manutenção, necessidade de treinamento contínuo, integração com sistemas legados e a adaptação do sistema às necessidades específicas da organização.",
        ],
        correct: 0,
      },
    ],
    escritaEstrutura: [ // atualizada
      {
        question:
          "Explique como o padrão MVP (Model-View-Presenter) facilita a manutenção e evolução de uma aplicação, utilizando um exemplo prático.",
        options: [
          "O padrão MVP separa responsabilidades entre Model (dados e lógica), View (interface) e Presenter (coordenação entre ambos). Isso permite alterações em cada parte sem impactar as outras. Por exemplo, uma alteração na lógica de negócios no Presenter não exige mudanças na View. Isso facilita testes, manutenções e evolução da aplicação.",
        ],
        correct: 0,
      },
      {
        question:
          "Descreva como técnicas de retry e fallback podem ser utilizadas para aumentar a resiliência em uma arquitetura de microservices, com exemplos práticos.",
        options: [
          "As técnicas de retry e fallback garantem continuidade do serviço mesmo com falhas. Retry tenta novamente uma operação após falha temporária. Fallback fornece uma alternativa quando o serviço permanece indisponível. Por exemplo, se o serviço de pagamento falhar, o sistema pode reencaminhar o pedido para uma fila ou oferecer outro meio de pagamento.",
        ],
        correct: 0,
      },
      {
        question:
          "Explique como a prática de responsabilidade compartilhada e monitoramento contínuo no DevOps contribui para a estabilidade e resiliência dos sistemas.",
        options: [
          "A responsabilidade compartilhada assegura que desenvolvedores também cuidem da operação do sistema, gerando mais atenção à qualidade. O monitoramento contínuo com ferramentas como Prometheus e Grafana permite detectar falhas rapidamente e agir proativamente. Por exemplo, se houver sobrecarga em um servidor, o sistema pode escalar recursos automaticamente.",
        ],
        correct: 0,
      }
    ],
    escritaSistemas: [
      {
        question:
          "Explique o que é um sistema operacional e qual é sua principal função em um computador.",
        options: [
          "Um sistema operacional é um software essencial que atua como uma ponte entre o hardware e os programas do usuário. Ele gerencia recursos como memória, processador, dispositivos de entrada/saída e arquivos, além de fornecer uma interface para que os usuários e aplicativos possam interagir com o sistema de forma organizada e eficiente.",
        ],
        correct: 0,
      },
      {
        question:
          "Qual a diferença entre multitarefa cooperativa e multitarefa preemptiva em sistemas operacionais?",
        options: [
          "Na multitarefa cooperativa, cada processo é responsável por liberar o controle da CPU, o que pode causar travamentos se um processo não colaborar. Já na multitarefa preemptiva, o sistema operacional decide quando interromper um processo para executar outro, garantindo que todos tenham tempo de CPU de forma justa e controlada.",
        ],
        correct: 0,
      },
      {
        question:
          "Como o gerenciamento de memória é realizado em um sistema operacional moderno?",
        options: [
          "O gerenciamento de memória em sistemas operacionais modernos é feito por meio de técnicas como paginação e segmentação. Essas técnicas permitem que os programas usem mais memória do que a fisicamente disponível, utilizando memória virtual, além de proteger áreas de memória entre processos, evitando acessos indevidos e falhas.",
        ],
        correct: 0,
      },
      {
        question:
          "O que é escalonamento de processos e por que ele é importante?",
        options: [
          "O escalonamento de processos é o mecanismo pelo qual o sistema operacional decide qual processo será executado pela CPU. Ele é importante para garantir que os recursos sejam distribuídos de forma eficiente, justa e que os processos mais críticos tenham prioridade adequada, melhorando o desempenho geral do sistema.",
        ],
        correct: 0,
      },
      {
        question:
          "Descreva o papel do sistema de arquivos dentro de um sistema operacional.",
        options: [
          "O sistema de arquivos organiza e gerencia como os dados são armazenados e recuperados no disco rígido ou em outros dispositivos de armazenamento. Ele permite que os arquivos sejam criados, lidos, modificados e deletados, mantendo a integridade dos dados e o controle de acesso por usuários e programas.",
        ],
        correct: 0,
      },
      {
        question:
          "Explique o conceito de deadlock e como ele pode ser evitado em sistemas operacionais.",
        options: [
          "Deadlock é uma situação em que dois ou mais processos ficam bloqueados, esperando indefinidamente por recursos que estão sendo usados uns pelos outros. Ele pode ser evitado com estratégias como a prevenção (evitando condições que levam ao deadlock), a detecção (identificando ciclos de espera) e a recuperação (encerrando processos ou liberando recursos para resolver o impasse).",
        ],
        correct: 0,
      },
    ],

    escritaProgramacao: [
      {
        question:
          "Quais são as principais plataformas para desenvolvimento de aplicativos móveis e quais suas características?",
        options: [
          "As principais plataformas são Android (usando Java ou Kotlin) e iOS (usando Swift ou Objective-C). Android é mais popular globalmente, enquanto iOS oferece uma base de usuários mais engajada. Ambas as plataformas possuem kits de desenvolvimento (SDKs) próprios e oferecem ferramentas para criar aplicativos nativos, mas existem também frameworks híbridos como React Native e Flutter que permitem desenvolvimento multiplataforma.",
        ],
        correct: 0,
      },
      {
        question:
          "Qual é a diferença entre aplicativos nativos e híbridos no desenvolvimento para dispositivos móveis?",
        options: [
          "Aplicativos nativos são desenvolvidos especificamente para uma plataforma (Android ou iOS), aproveitando ao máximo os recursos do dispositivo, como câmeras e sensores. Já os aplicativos híbridos são criados utilizando tecnologias web (HTML, CSS, JavaScript) e podem ser executados em várias plataformas, mas podem ter desempenho inferior e menos acesso a recursos do dispositivo.",
        ],
        correct: 0,
      },
      {
        question:
          "Quais são as principais vantagens de usar o framework Flutter para o desenvolvimento de aplicativos móveis?",
        options: [
          "O Flutter permite o desenvolvimento de aplicativos nativos para Android e iOS a partir de uma única base de código. As vantagens incluem alta performance, devido ao seu mecanismo gráfico nativo, um rico conjunto de widgets para interface do usuário e a possibilidade de criar aplicativos visualmente atraentes com um único código para múltiplas plataformas.",
        ],
        correct: 0,
      },
      {
        question:
          "Quais são os principais desafios no desenvolvimento de aplicativos móveis e como superá-los?",
        options: [
          "Os principais desafios incluem garantir uma boa performance em dispositivos variados, gerenciar o consumo de bateria, lidar com diferentes resoluções de tela e manter a segurança dos dados. Para superar esses desafios, é importante otimizar o código, testar em diversos dispositivos e utilizar técnicas como compactação de imagens, armazenamento local eficiente e criptografia para proteção de dados.",
        ],
        correct: 0,
      },
    ],
  },
];





// START ------------------------------------ START \\

// Embaralhar array (usado para perguntas e opções)
function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function loadQuestions(subject) {
  const questionContainer = document.querySelector(".quiz-list");
  questionContainer.innerHTML = "";

  if (!questions[subject]) return;

  const shuffledQuestions = shuffleArray(questions[subject]).slice(0, 10);

  shuffledQuestions.forEach((q, index) => {
    const li = document.createElement("li");
    li.classList.add("quiz-question");

    const optionsWithIndex = q.options.map((opt, i) => ({
      text: opt,
      originalIndex: i,
    }));

    const shuffledOptions = shuffleArray(optionsWithIndex);
    const newCorrectIndex = shuffledOptions.findIndex(
      (opt) => opt.originalIndex === q.correct
    );

    shuffledQuestions[index].options = shuffledOptions.map((opt) => opt.text);
    shuffledQuestions[index].correct = newCorrectIndex;

    li.innerHTML = `
      
      <p class="numero">${String(index + 1).padStart(
      2,
      "0"
    )}</p> <p class="questao"> ${q.question}</p>
      ${shuffledOptions
        .map(
          (option, i) => `
        <div class="option-container">
          <input type="radio" name="question${index}" value="${i}" id="q${index}o${i}" class="quiz-option">
          <label for="q${index}o${i}" class="quiz-label">${option.text}</label>
          <p class="ansers"><p>
        </div>
      `
        )
        .join("")}
    `;

    questionContainer.appendChild(li);
  });

  window.currentQuestions = shuffledQuestions;
}

function checkAnswers() {
  if (!window.currentQuestions) return;

  let correctCount = 0;

  window.currentQuestions.forEach((q, index) => {
    const selected = document.querySelector(
      `input[name='question${index}']:checked`
    );
    const questionLi = document.querySelector(
      `.quiz-question:nth-child(${index + 1})`
    );

    questionLi.querySelectorAll(".quiz-label").forEach((label) => {
      label.style.backgroundColor = "white";
      label.style.color = "black";
    });

    if (selected) {
      const selectedValue = parseInt(selected.value);
      const correctValue = q.correct;

      // Primeiro, deixa todos os labels da pergunta com opacidade 0.3
      const allOptions = document.querySelectorAll(
        `input[name='question${index}']`
      );
      allOptions.forEach((opt) => {
        opt.nextElementSibling.style.opacity = "0.3";
      });

      if (selectedValue === correctValue) {
        correctCount++;
        selected.nextElementSibling.style.backgroundColor = "green";
        selected.nextElementSibling.style.color = "white";
        selected.nextElementSibling.style.opacity = "1"; // mantém visível
      } else {
        const selectedLabel = selected.nextElementSibling;
        selectedLabel.style.backgroundColor = "#f7c5c5";
        selectedLabel.style.color = "red";
        selectedLabel.style.border = "2px solid red";
        selectedLabel.style.opacity = "1"; // mantém visível

        const correctLabel = document.querySelector(
          `input[name='question${index}'][value='${correctValue}']`
        ).nextElementSibling;
        correctLabel.style.color = "green";
        correctLabel.style.border = "2px dashed green";
        correctLabel.style.opacity = "1"; // mantém visível
      }
    } else {
      // Nenhuma resposta selecionada: apenas destaque a correta
      const allOptions = document.querySelectorAll(
        `input[name='question${index}']`
      );
      allOptions.forEach((opt) => {
        opt.nextElementSibling.style.opacity = "0.3";
      });

      const correctLabel = document.querySelector(
        `input[name='question${index}'][value='${q.correct}']`
      ).nextElementSibling;

      correctLabel.style.border = "3px dashed green";
      correctLabel.style.color = "green";
      correctLabel.style.opacity = "1"; // mantém visível
    }
  });

  // Exibir pontuação
  const scoreDisplay = document.getElementById("score-counter");
  scoreDisplay.textContent = `Você acertou ${correctCount} de ${window.currentQuestions.length} perguntas!`;
  scoreDisplay.style.display = "block";
  scoreDisplay.style.color = "Yellow";
}

document.addEventListener("DOMContentLoaded", () => {
  const startQuizButton = document.getElementById("start-quiz");
  if (startQuizButton) {
    startQuizButton.onclick = function () {
      const subjectSelect = document.getElementById("subject-select");
      const subject = subjectSelect.value;

      if (subject) {
        localStorage.setItem("selectedSubject", subject);
        window.location.href = "home.html";
      }
    };
  }

  const subjectTitles = {
    estrutura: "Estrutura de Computadores",
    sistemas: "Sistemas Operacionais",
    arquitetura: "Arquitetura de Dados Não Relacionais",
    fundamentos: "Fundamentos de Sistemas de Informação",
    programacao: "Programação para Dispositivos Móveis",
  };

  const subject = localStorage.getItem("selectedSubject");
  if (subject) {
    const titulo = document.getElementById("materia-titulo");
    if (titulo && subjectTitles[subject]) {
      titulo.textContent = subjectTitles[subject];
    }
    loadQuestions(subject);
  } else {
    alert("Selecione uma matéria para acessar as perguntas, boa sorte!");
  }
});

const checkAnswersButton = document.getElementById("check-answers");
if (checkAnswersButton) {
  checkAnswersButton.onclick = function () {
    checkAnswers();
  };
}
const reloadQuizButton = document.getElementById("reload-quiz");
if (reloadQuizButton) {
  reloadQuizButton.onclick = function () {
    const subject = localStorage.getItem("selectedSubject");
    if (subject) {
      loadQuestions(subject);

      const scoreDisplay = document.getElementById("score-counter");
      scoreDisplay.textContent = "";
      scoreDisplay.style.display = "none";

      const checkAnswersButton = document.getElementById("check-answers");
      if (checkAnswersButton) {
        checkAnswersButton.style.display = "block";
      }
    }
  };
}

const discursivaBtn = document.getElementById("btn-discursivas");

if (discursivaBtn) {
  discursivaBtn.addEventListener("click", () => {
    const subject = localStorage.getItem("selectedSubject");
    const questionContainer = document.querySelector(".quiz-list");

    // Ocultar o botão de "Verificar Respostas" quando for clicado em "Discursivas"
    const checkAnswersButton = document.getElementById("check-answers");
    if (checkAnswersButton) {
      checkAnswersButton.style.display = "none"; // Esconde o botão
    }

    questionContainer.innerHTML = "";

    if (!subject) {
      questionContainer.innerHTML =
        "<p>Matéria não selecionada. Por favor, escolha uma matéria antes de continuar.</p>";
      return;
    }

    const key = `escrita${subject.charAt(0).toUpperCase() + subject.slice(1)}`;

    console.log("Matéria selecionada:", subject);
    console.log("Chave de acesso às questões:", key);

    const questions = escritas[0][key];

    if (questions && Array.isArray(questions)) {
      questions.forEach((q, index) => {
        const li = document.createElement("li");
        li.classList.add("quiz-question");

        li.innerHTML = `
          <p class="questao">${q.question}</p>
          <div class="resposta-modelo">
            <p>${q.options[0]}</p>
          </div>
        `;

        questionContainer.appendChild(li);
      });
    } else {
      questionContainer.innerHTML =
        "<p>Não há questões discursivas disponíveis para esta matéria.</p>";
    }
  });
}

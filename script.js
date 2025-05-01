const questions = {
  arquitetura: [
    {
      question:
        "Quais são as principais limitações dos bancos de dados relacionais quando se trabalha com dados não estruturados?",
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
      question:
        "Qual é a principal vantagem dos bancos NoSQL sobre os relacionais para aplicações que lidam com Big Data?",
      options: [
        "Maior flexibilidade e escalabilidade",
        "Melhor suporte a transações",
        "Suporte a relacionamentos complexos",
        "Consultas otimizadas para dados tabulares",
        "Consistência forte por padrão",
      ],
      correct: 0,
    },
    {
      question:
        "Em um banco de dados NoSQL baseado em documentos, qual é o formato mais comum para armazenar dados?",
      options: ["JSON", "XML", "BSON", "YAML", "CSV"],
      correct: 0,
    },
    {
      question:
        "Qual tipo de banco NoSQL é mais indicado para armazenar dados que precisam ser consultados com base em relações complexas entre entidades?",
      options: ["Documentos", "Grafos", "Colunar", "Chave-Valor", "Relações"],
      correct: 1,
    },
    {
      question:
        "Quais são os principais benefícios da escalabilidade horizontal em bancos de dados NoSQL?",
      options: [
        "Permite adicionar mais servidores para melhorar o desempenho",
        "Reduz os custos de manutenção com servidores dedicados",
        "Garante alta consistência em transações",
        "Fácil de implementar em bancos relacionais",
        "Melhora a performance apenas com o aumento de hardware",
      ],
      correct: 0,
    },
    {
      question:
        "No modelo de banco de dados NoSQL, o que caracteriza a 'consistência eventual'?",
      options: [
        "Os dados são consistentes em todos os nós ao mesmo tempo",
        "O banco garante que os dados sempre estarão disponíveis",
        "Os dados podem não estar sincronizados entre os nós no início, mas eventualmente se alinham",
        "Os dados são sincronizados imediatamente entre os nós",
        "Todos os nós têm acesso instantâneo aos dados",
      ],
      correct: 2,
    },
    {
      question:
        "Qual é a principal diferença entre um banco de dados NoSQL colunar e um banco de dados relacional?",
      options: [
        "A estrutura de dados em tabelas no banco relacional e em colunas no banco NoSQL colunar",
        "A capacidade de realizar joins entre diferentes tabelas",
        "O suporte a dados não estruturados",
        "O uso de linguagens de consulta baseadas em SQL",
        "A exigência de esquema fixo no NoSQL",
      ],
      correct: 0,
    },
    {
      question:
        "Qual modelo de banco de dados NoSQL é mais apropriado para armazenar e gerenciar grandes volumes de dados de sensores em tempo real (IoT)?",
      options: [
        "Banco de documentos",
        "Banco de grafos",
        "Banco chave-valor",
        "Banco colunar",
        "Banco relacional",
      ],
      correct: 3,
    },
    {
      question: "No contexto de bancos de dados NoSQL, o que é 'sharding'?",
      options: [
        "Uma técnica de replicação de dados para alta disponibilidade",
        "O processo de dividir dados em múltiplos servidores para escalabilidade",
        "Uma técnica de backup de dados",
        "O processo de normalização de dados",
        "A estratégia de gerenciamento de conexões simultâneas",
      ],
      correct: 1,
    },
    {
      question:
        "Quais são as principais desvantagens de usar bancos NoSQL para sistemas que requerem transações complexas e consistência forte?",
      options: [
        "Falta de suporte a transações ACID",
        "Dificuldade em escalar horizontalmente",
        "Baixa performance em consultas simples",
        "Suporte inadequado para dados não estruturados",
        "Todas as anteriores",
      ],
      correct: 0,
    },
    {
      question:
        "Qual das seguintes opções é um exemplo de um banco de dados NoSQL chave-valor?",
      options: ["MongoDB", "Neo4j", "Cassandra", "Redis", "CouchDB"],
      correct: 3,
    },
    {
      question:
        "Qual é a principal característica dos bancos de dados NoSQL baseados em grafos?",
      options: [
        "Eles armazenam dados em tabelas e colunas",
        "Eles modelam dados como uma rede de nós e arestas",
        "Eles são otimizados para armazenar grandes volumes de dados",
        "Eles utilizam o modelo chave-valor",
        "Eles são projetados apenas para dados temporários",
      ],
      correct: 1,
    },
    {
      question:
        "Quais são os principais desafios de manter a consistência em sistemas distribuídos, como bancos de dados NoSQL?",
      options: [
        "Garantir que todos os nós têm os mesmos dados ao mesmo tempo",
        "Garantir alta performance com grandes volumes de dados",
        "Manter a baixa latência em transações complexas",
        "Armazenar dados temporários sem necessidade de replicação",
        "Gerenciar a distribuição de dados em diferentes zonas geográficas",
      ],
      correct: 0,
    },
    {
      question:
        "Qual banco de dados NoSQL é mais indicado para armazenar e analisar grandes volumes de dados analíticos e de séries temporais?",
      options: ["Cassandra", "MongoDB", "Neo4j", "Redis", "HBase"],
      correct: 4,
    },
    {
      question:
        "Quando se usa um banco de dados NoSQL baseado em documentos, qual vantagem ele oferece sobre um banco relacional para o armazenamento de dados estruturados e semi-estruturados?",
      options: [
        "Capacidade de armazenar dados com esquemas flexíveis",
        "Capacidade de realizar operações de junção entre múltiplas coleções",
        "Suporte a transações complexas ACID",
        "Armazenamento eficiente de dados de séries temporais",
        "Exigência de esquemas fixos para todos os documentos",
      ],
      correct: 0,
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
  programacao: [
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
      question:
        "Qual dos seguintes é um framework de desenvolvimento híbrido para apps móveis?",
      options: ["Vue.js", "Angular", "Flutter", "Ember.js", "Express"],
      correct: 2,
    },
    {
      question:
        "No iOS, qual dos seguintes componentes de UI é utilizado para transições entre telas?",
      options: [
        "Tab Bar",
        "Page Control",
        "Navigation Bar",
        "Gesture Recognizers",
        "Alert View",
      ],
      correct: 2,
    },
    {
      question: "No Android, o que é o `RecyclerView`?",
      options: [
        "Uma lista para exibir dados em tela",
        "Uma transição de tela",
        "Um tipo de banco de dados",
        "Um framework de UI",
        "Uma biblioteca de áudio",
      ],
      correct: 0,
    },
    {
      question: "O que são **Widgets** no contexto de dispositivos móveis?",
      options: [
        "Elementos de interface que podem ser usados em várias telas",
        "Recursos para interagir com a câmera",
        "Funções de rede",
        "Componentes de armazenamento local",
        "Configurações de áudio",
      ],
      correct: 0,
    },
    {
      question: "Qual é o objetivo principal do **Flutter**?",
      options: [
        "Desenvolver apps nativos para Android",
        "Desenvolver apps móveis multiplataforma",
        "Criar sites interativos",
        "Criar interfaces para dispositivos desktop",
        "Criar bancos de dados locais",
      ],
      correct: 1,
    },
    {
      question: "No desenvolvimento Android, qual a função do `Manifest.xml`?",
      options: [
        "Definir a interface do usuário",
        "Gerenciar as dependências do projeto",
        "Configurar permissões e atividades do app",
        "Criar banco de dados local",
        "Definir transições entre telas",
      ],
      correct: 2,
    },
    {
      question: "No iOS, o que são **Gestures**?",
      options: [
        "Comandos de voz",
        "Ações de interação do usuário com a tela (toque, deslizar, etc.)",
        "Botões de navegação",
        "Controles de hardware",
        "Gestões de armazenamento local",
      ],
      correct: 1,
    },
    {
      question: "O que é o **Firebase** no contexto de desenvolvimento móvel?",
      options: [
        "Uma ferramenta para criar interfaces de usuário",
        "Uma plataforma de backend como serviço",
        "Um framework de desenvolvimento",
        "Uma biblioteca de animação",
        "Um sistema de gerenciamento de banco de dados local",
      ],
      correct: 1,
    },
    {
      question: "O que são **Notificações Push**?",
      options: [
        "Mensagens enviadas pelo servidor para o dispositivo móvel",
        "Funções de rede",
        "Alertas gerados pelo sistema operacional",
        "Armazenamento de dados no dispositivo",
        "Animações entre telas",
      ],
      correct: 0,
    },
  ],
  fundamentos: [
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

const escritas = [
  {
    escritaFundamentos: [
      {
        question:
          "Imagine uma pequena empresa de móveis que não possui presença digital. Como CIO de TI, indique 5 ações práticas para modernizá-la.",
        options: [
          "A empresa pode melhorar criando um site para vendas online, adotando sistemas integrados como ERP e CRM para organização e relacionamento com clientes, garantindo a segurança das informações e capacitando os funcionários para usar essas tecnologias de forma eficiente.",
        ],
        correct: 0,
      },
      {
        question:
          "Na área de TI, quais são três mecanismos de segurança conhecidos? Explique brevemente.",
        options: [
          "A segurança da informação pode ser reforçada com criptografia para proteger os dados, firewall e antivírus para evitar ataques, e VPN para garantir conexões seguras entre redes e dispositivos.",
        ],
        correct: 0,
      },
    ],
  },
];

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
      <p class="question-text"><p class="numero">Questão ${index + 1}</p> ${
      q.question
    }</p>
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

      correctLabel.style.border = "2px dashed green";
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

      // Esconde e zera o contador de acertos
      const scoreDisplay = document.getElementById("score-counter");
      scoreDisplay.textContent = "";
      scoreDisplay.style.display = "none";
    }
  };
}

const discursivaBtn = document.getElementById("btn-discursivas");
if (discursivaBtn) {
  discursivaBtn.addEventListener("click", () => {
    const subject = localStorage.getItem("selectedSubject");
    const questionContainer = document.querySelector(".quiz-list");

    questionContainer.innerHTML = "";

    const key = `escrita${subject.charAt(0).toUpperCase() + subject.slice(1)}`;

    if (subject && escritas[0][key]) {
      const questions = escritas[0][key];

      questions.forEach((q, index) => {
        const li = document.createElement("li");
        li.classList.add("quiz-question");

        li.innerHTML = `
          <p class="question-text"><strong>${index + 1}:</strong> ${
          q.question
        }</p>
          <div class="resposta-modelo">
            <strong>Resposta:</strong>
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

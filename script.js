const questions = {
  arquitetura: [
    {
      question: "O que caracteriza um banco de dados NoSQL?",
      options: [
        "Uso exclusivo de SQL",
        "Estrutura tabular rígida",
        "Alta flexibilidade e escalabilidade",
        "Compatibilidade apenas com Oracle",
      ],
      correct: 2,
    },
    {
      question: "Um exemplo de banco de dados orientado a documentos é:",
      options: ["MySQL", "MongoDB", "Oracle", "SQLite"],
      correct: 1,
    },
    {
      question: "NoSQL é mais adequado para:",
      options: [
        "Transações bancárias complexas",
        "Grandes volumes de dados não estruturados",
        "Planilhas simples",
        "Sistemas embarcados",
      ],
      correct: 1,
    },
    {
      question: "Os bancos de dados chave-valor armazenam dados como:",
      options: [
        "Linhas e colunas",
        "JSON e XML",
        "Par de chave e valor",
        "Tabelas relacionais",
      ],
      correct: 2,
    },
    {
      question: "Cassandra é um exemplo de banco de dados:",
      options: ["Relacional", "Grafos", "Chave-valor", "Colunar"],
      correct: 3,
    },
    {
      question: "Qual das opções é uma vantagem do NoSQL?",
      options: [
        "Rígido esquema de dados",
        "Baixa performance",
        "Alta escalabilidade horizontal",
        "Dependência de joins complexos",
      ],
      correct: 2,
    },
    {
      question: "Bases orientadas a grafos são ideais para:",
      options: [
        "Transações bancárias",
        "Análise de redes sociais",
        "Relatórios fiscais",
        "Armazenamento de imagens",
      ],
      correct: 1,
    },
    {
      question: "NoSQL surgiu para atender principalmente:",
      options: [
        "Desenvolvedores desktop",
        "Redes locais",
        "Aplicações web escaláveis",
        "Ambientes de computação científica",
      ],
      correct: 2,
    },
    {
      question: "O que é sharding?",
      options: [
        "Compactação de dados",
        "Criptografia de banco de dados",
        "Particionamento de dados entre servidores",
        "Backup automático",
      ],
      correct: 2,
    },
    {
      question:
        "Em bancos de dados NoSQL, os dados geralmente são armazenados:",
      options: [
        "Em colunas fixas",
        "Como registros binários",
        "De forma flexível e sem esquema definido",
        "Em tabelas com foreign keys",
      ],
      correct: 2,
    },
    {
      question: "Redis é um banco de dados do tipo:",
      options: ["Grafos", "Colunar", "Chave-valor", "Orientado a objetos"],
      correct: 2,
    },
    {
      question: "O que representa a consistência eventual?",
      options: [
        "Dados consistentes imediatamente após escrita",
        "Dados nunca são consistentes",
        "Consistência garantida após certo tempo",
        "Ausência de transações",
      ],
      correct: 2,
    },
    {
      question: "Bancos NoSQL geralmente utilizam:",
      options: [
        "SQL padrão",
        "Consultas com joins complexos",
        "Modelagem relacional",
        "Consultas baseadas em documentos ou chaves",
      ],
      correct: 3,
    },
    {
      question: "Um banco orientado a colunas armazena dados:",
      options: [
        "Por colunas ao invés de linhas",
        "Apenas em tabelas temporárias",
        "Como objetos Java",
        "Na RAM apenas",
      ],
      correct: 0,
    },
    {
      question: "CouchDB utiliza qual modelo de dados?",
      options: [
        "Chave-valor",
        "Orientado a documentos",
        "Grafos",
        "Relacional",
      ],
      correct: 1,
    },
    {
      question: "MapReduce é uma técnica associada a:",
      options: [
        "Banco de dados relacional",
        "Análise de dados distribuída",
        "Programação orientada a objetos",
        "Redes neurais",
      ],
      correct: 1,
    },
    {
      question: "O que é uma collection no MongoDB?",
      options: [
        "Um índice primário",
        "Uma linha de dados",
        "Um agrupamento de documentos",
        "Um backup incremental",
      ],
      correct: 2,
    },
    {
      question: "Em NoSQL, a ausência de joins pode ser compensada por:",
      options: [
        "Normalização extrema",
        "Redundância controlada de dados",
        "Particionamento vertical",
        "Stored procedures",
      ],
      correct: 1,
    },
    {
      question: "Neo4j é especializado em qual tipo de dado?",
      options: [
        "Chaves e valores",
        "Redes e relações entre entidades",
        "Documentos JSON",
        "Colunas independentes",
      ],
      correct: 1,
    },
    {
      question: "A replicação de dados em NoSQL serve para:",
      options: [
        "Gerar relatórios",
        "Aumentar segurança e disponibilidade",
        "Criar tabelas temporárias",
        "Limpar cache",
      ],
      correct: 1,
    },
    {
      question:
        "Bases NoSQL tendem a sacrificar qual princípio do modelo ACID?",
      options: ["Consistência", "Atomicidade", "Isolamento", "Durabilidade"],
      correct: 0,
    },
    {
      question: "O que é o CAP teorema?",
      options: [
        "Modelo de estrutura relacional",
        "Limite entre consistência, disponibilidade e particionamento",
        "Método de criptografia",
        "Ferramenta para logs",
      ],
      correct: 1,
    },
    {
      question:
        "A escalabilidade horizontal é uma vantagem em NoSQL porque permite:",
      options: [
        "Adicionar mais CPUs ao servidor",
        "Aumentar espaço em disco",
        "Adicionar servidores para lidar com mais carga",
        "Reduzir consumo de memória",
      ],
      correct: 2,
    },
    {
      question: "Em bancos chave-valor, a performance é otimizada para:",
      options: [
        "Joins entre tabelas",
        "Consultas SQL complexas",
        "Busca direta pela chave",
        "Consultas analíticas",
      ],
      correct: 2,
    },
    {
      question: "Documentos em MongoDB são geralmente escritos em:",
      options: ["XML", "JSON ou BSON", "CSV", "YAML"],
      correct: 1,
    },
  ],
  programacao: [
    {
      question:
        "Qual linguagem é mais comum no desenvolvimento nativo para Android?",
      options: ["Swift", "Kotlin", "C#", "JavaScript"],
      correct: 1,
    },
    {
      question:
        "O Swift é usado principalmente para desenvolver aplicativos em:",
      options: ["Android", "Windows Phone", "iOS", "Linux"],
      correct: 2,
    },
    {
      question: "O que é um APK?",
      options: [
        "Um tipo de banco de dados",
        "Um arquivo de instalação para Android",
        "Uma linguagem de programação",
        "Um servidor de backend",
      ],
      correct: 1,
    },
    {
      question: "Flutter é um framework desenvolvido por:",
      options: ["Microsoft", "Apple", "Facebook", "Google"],
      correct: 3,
    },
    {
      question: "No Flutter, a linguagem de programação utilizada é:",
      options: ["Kotlin", "Swift", "Java", "Dart"],
      correct: 3,
    },
    {
      question: "React Native permite desenvolver aplicativos móveis usando:",
      options: ["Java puro", "C++", "JavaScript e React", "Python"],
      correct: 2,
    },
    {
      question: "Uma das vantagens do desenvolvimento híbrido é:",
      options: [
        "Performance superior ao nativo",
        "Menos bugs",
        "Código compartilhado entre plataformas",
        "Uso exclusivo de SQL",
      ],
      correct: 2,
    },
    {
      question: "A Play Store é a loja de aplicativos oficial da plataforma:",
      options: ["iOS", "Windows", "Android", "Linux"],
      correct: 2,
    },
    {
      question: "Para publicar apps na App Store, é necessário utilizar:",
      options: ["Android Studio", "Xcode", "Visual Studio Code", "NetBeans"],
      correct: 1,
    },
    {
      question: "Um emulador no desenvolvimento mobile serve para:",
      options: [
        "Testar aplicativos em diferentes dispositivos virtuais",
        "Reduzir o tamanho do app",
        "Criptografar o app",
        "Aumentar a velocidade da CPU",
      ],
      correct: 0,
    },
    {
      question: "O que é responsividade em apps móveis?",
      options: [
        "Capacidade de rodar apenas offline",
        "Interface adaptável a diferentes tamanhos de tela",
        "Resposta rápida a toques",
        "Resposta a e-mails automáticos",
      ],
      correct: 1,
    },
    {
      question:
        "O ciclo de vida de uma Activity no Android inclui estados como:",
      options: [
        "Load, Show, Hide",
        "Open, Stay, End",
        "OnCreate, OnPause, OnDestroy",
        "Start, Sleep, Reboot",
      ],
      correct: 2,
    },
    {
      question: "No iOS, a interface gráfica é gerenciada por:",
      options: ["Android Layouts", "UIKit", "Windows Forms", "Material UI"],
      correct: 1,
    },
    {
      question: "O que são permissões em aplicativos móveis?",
      options: [
        "Erros de programação",
        "Componentes visuais",
        "Autorização para acessar recursos do dispositivo",
        "Temas visuais para o app",
      ],
      correct: 2,
    },
    {
      question:
        "Qual é o nome do ambiente de desenvolvimento oficial para Android?",
      options: ["Eclipse", "Visual Studio", "Android Studio", "Xcode"],
      correct: 2,
    },
    {
      question: "Um app nativo é:",
      options: [
        "Feito para múltiplas plataformas com um único código",
        "Desenvolvido diretamente para uma plataforma específica",
        "Feito em HTML e CSS",
        "Sempre offline",
      ],
      correct: 1,
    },
    {
      question: "Os arquivos XML no Android servem principalmente para:",
      options: [
        "Controlar o banco de dados",
        "Definir interfaces gráficas",
        "Executar funções Java",
        "Gerar sons no app",
      ],
      correct: 1,
    },
    {
      question: "Push notifications são usadas para:",
      options: [
        "Reduzir o uso de memória RAM",
        "Enviar mensagens ao usuário mesmo com o app fechado",
        "Atualizar o banco de dados",
        "Aumentar o FPS",
      ],
      correct: 1,
    },
    {
      question: "O conceito de 'mobile first' significa:",
      options: [
        "Desenvolver primeiro a versão para desktop",
        "Focar inicialmente na experiência móvel",
        "Ignorar dispositivos móveis",
        "Desenvolver para tablets apenas",
      ],
      correct: 1,
    },
    {
      question: "SQLite é comumente usado para:",
      options: [
        "Gerar arquivos APK",
        "Desenvolver interfaces",
        "Persistência de dados local em apps",
        "Controle de autenticação via Google",
      ],
      correct: 2,
    },
    {
      question:
        "Qual das opções abaixo é um componente essencial de apps Android?",
      options: ["Controllers", "Fragments", "Scenes", "Routers"],
      correct: 1,
    },
    {
      question: "O que são assets em um projeto mobile?",
      options: [
        "Partes do código Java",
        "Imagens, fontes e outros recursos de mídia",
        "Frameworks externos",
        "Comandos do terminal",
      ],
      correct: 1,
    },
    {
      question:
        "Um app pode ser publicado tanto na App Store quanto na Play Store se for:",
      options: [
        "Feito em Java",
        "Compilado como EXE",
        "Desenvolvido com frameworks multiplataforma",
        "Programado em Assembly",
      ],
      correct: 2,
    },
    {
      question: "Hot Reload no Flutter permite:",
      options: [
        "Reduzir o tamanho do app",
        "Recarregar o app do zero",
        "Atualizar mudanças no código instantaneamente",
        "Criar novos pacotes de instalação",
      ],
      correct: 2,
    },
    {
      question:
        "Qual framework mobile é baseado em componentes reutilizáveis e JavaScript?",
      options: ["Xamarin", "Cordova", "React Native", "Jetpack Compose"],
      correct: 2,
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
      <p class="question-text">${q.question}</p>
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

const btnsTop = document.querySelectorAll("#btns-top");

// Botão "Discursivas" é o terceiro (índice 2)
btnsTop[2].addEventListener("click", () => {
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
        <p class="question-text"><strong>Pergunta ${index + 1}:</strong> ${
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

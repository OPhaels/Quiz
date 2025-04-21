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
      question: "O que é um Sistema de Informação (SI)?",
      options: [
        "Um software de design",
        "Conjunto de elementos que coleta, processa e distribui informações",
        "Um hardware para processamento gráfico",
        "Um tipo de rede de internet",
      ],
      correct: 1,
    },
    {
      question: "Um dos principais objetivos dos SI é:",
      options: [
        "Aumentar o uso de papel",
        "Eliminar todos os cargos administrativos",
        "Apoiar a tomada de decisões",
        "Desligar computadores automaticamente",
      ],
      correct: 2,
    },
    {
      question: "ERP é um tipo de sistema usado para:",
      options: [
        "Controle financeiro pessoal",
        "Gerenciar recursos empresariais",
        "Redes sociais",
        "Envio de e-mails",
      ],
      correct: 1,
    },
    {
      question: "CRM é um sistema voltado para:",
      options: [
        "Gestão de estoque",
        "Gestão do relacionamento com o cliente",
        "Automação de fábrica",
        "Controle de ponto",
      ],
      correct: 1,
    },
    {
      question: "A informação se diferencia do dado porque:",
      options: [
        "Dados são sempre corretos",
        "Informação é dado processado com significado",
        "Dados são imagens e informação são textos",
        "Informação é sempre digital",
      ],
      correct: 1,
    },
    {
      question: "O que é Business Intelligence (BI)?",
      options: [
        "Análise de tendências musicais",
        "Ferramenta de redes sociais",
        "Conjunto de técnicas para análise de dados e apoio à decisão",
        "Sistema de segurança digital",
      ],
      correct: 2,
    },
    {
      question: "Um exemplo de entrada em um SI é:",
      options: [
        "Relatório impresso",
        "Decisão gerencial",
        "Dados inseridos por um usuário",
        "Mensagem de erro",
      ],
      correct: 2,
    },
    {
      question: "A saída de um sistema de informação pode ser:",
      options: [
        "Um banco de dados",
        "Informações geradas para usuários",
        "Dados brutos",
        "Fontes de alimentação",
      ],
      correct: 1,
    },
    {
      question: "Qual é a função do banco de dados em um SI?",
      options: [
        "Transmitir energia ao servidor",
        "Armazenar e organizar os dados utilizados e produzidos",
        "Gerar gráficos em tempo real",
        "Fornecer senhas",
      ],
      correct: 1,
    },
    {
      question:
        "Qual profissional geralmente está envolvido na análise de sistemas?",
      options: [
        "Engenheiro civil",
        "Médico",
        "Analista de sistemas",
        "Designer gráfico",
      ],
      correct: 2,
    },
    {
      question: "A sigla TI significa:",
      options: [
        "Transporte Interno",
        "Tecnologia da Informação",
        "Tráfego Instantâneo",
        "Técnico de Imagem",
      ],
      correct: 1,
    },
    {
      question: "O que caracteriza um sistema de apoio à decisão (SAD)?",
      options: [
        "Suporte para decisões operacionais e estratégicas",
        "Controle de estoques em tempo real",
        "Design gráfico de aplicativos",
        "Gestão de RH automatizada",
      ],
      correct: 0,
    },
    {
      question: "Big Data se refere a:",
      options: [
        "Jogos em realidade virtual",
        "Grandes volumes de dados gerados constantemente",
        "Imagens em alta resolução",
        "Servidores com problemas",
      ],
      correct: 1,
    },
    {
      question: "Em SI, o termo 'interface' refere-se a:",
      options: [
        "Área de design gráfico",
        "Canal de comunicação entre o usuário e o sistema",
        "Código-fonte principal",
        "Banco de dados interno",
      ],
      correct: 1,
    },
    {
      question: "Sistemas transacionais são focados em:",
      options: [
        "Design 3D",
        "Redes sociais",
        "Rotinas operacionais e repetitivas",
        "Jogos digitais",
      ],
      correct: 2,
    },
    {
      question:
        "Qual tecnologia costuma ser usada para proteger informações em sistemas?",
      options: ["HTML", "CSS", "Criptografia", "Excel"],
      correct: 2,
    },
    {
      question: "O que é um Dashboard em BI?",
      options: [
        "Um painel de controle visual com indicadores e métricas",
        "Um botão de acesso ao sistema",
        "Uma função de limpeza de dados",
        "Uma rede de usuários",
      ],
      correct: 0,
    },
    {
      question: "Um exemplo de dado estruturado é:",
      options: [
        "Imagem PNG",
        "Vídeo no YouTube",
        "Tabela em banco de dados",
        "Áudio em MP3",
      ],
      correct: 2,
    },
    {
      question: "O termo 'automação de processos' significa:",
      options: [
        "Desligar computadores",
        "Eliminar todos os funcionários",
        "Executar tarefas com mínima intervenção humana",
        "Criar apresentações de slides",
      ],
      correct: 2,
    },
    {
      question: "O que é necessário para um sistema funcionar adequadamente?",
      options: [
        "Somente hardware",
        "Somente software",
        "Integração entre pessoas, processos e tecnologia",
        "Wi-Fi de alta velocidade",
      ],
      correct: 2,
    },
    {
      question: "A governança de TI busca:",
      options: [
        "Reduzir o uso de software",
        "Controlar o tempo dos funcionários",
        "Alinhar TI com os objetivos estratégicos da organização",
        "Gerar relatórios visuais",
      ],
      correct: 2,
    },
    {
      question: "Um sistema legado é aquele que:",
      options: [
        "Foi herdado de um sistema em nuvem",
        "Está sempre atualizado",
        "É antigo, mas ainda em uso",
        "É utilizado apenas em celulares",
      ],
      correct: 2,
    },
    {
      question: "A arquitetura de um SI define:",
      options: [
        "A velocidade de internet",
        "A estrutura organizacional da empresa",
        "Componentes e forma de integração do sistema",
        "A paleta de cores da interface",
      ],
      correct: 2,
    },
    {
      question: "Transformação digital está relacionada a:",
      options: [
        "Impressão de documentos",
        "Mudança nos canais de comunicação apenas",
        "Uso estratégico de tecnologia para inovação nos negócios",
        "Comprar computadores novos",
      ],
      correct: 2,
    },
    {
      question:
        "O ciclo de vida de um sistema de informação inclui etapas como:",
      options: [
        "Reunião, marketing, entrega",
        "Análise, desenvolvimento, testes e manutenção",
        "Compra, instalação e uso",
        "Design, pintura e exportação",
      ],
      correct: 1,
    },
  ],
};
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

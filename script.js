const questions = {
  arquitetura: [
    {
      question: "Arquitetura de sistemas refere-se a:",
      options: ["Hardware", "Software", "Ambos", "Nenhum"],
      correct: 2,
    },
    {
      question: "Um servidor é um tipo de:",
      options: ["Cliente", "Dispositivo", "Sistema", "Rede"],
      correct: 1,
    },
    {
      question: "O que é uma API?",
      options: [
        "Interface de Programação de Aplicações",
        "Um tipo de banco de dados",
        "Um sistema operacional",
        "Uma linguagem de programação",
      ],
      correct: 0,
    },
    {
      question: "Arquitetura cliente-servidor envolve:",
      options: [
        "Apenas dispositivos móveis",
        "Dispositivos que se comunicam sem rede",
        "Um cliente requisitando serviços de um servidor",
        "Dois servidores se comunicando entre si",
      ],
      correct: 2,
    },
    {
      question: "O que é middleware?",
      options: [
        "Sistema de arquivos",
        "Banco de dados relacional",
        "Software entre aplicações e sistema operacional",
        "Rede de dispositivos móveis",
      ],
      correct: 2,
    },
    {
      question: "Microserviços são caracterizados por:",
      options: [
        "Dependência entre módulos",
        "Serviços independentes",
        "Código unificado",
        "Único ponto de falha",
      ],
      correct: 1,
    },
    {
      question: "A camada de apresentação é responsável por:",
      options: [
        "Gerenciar o banco de dados",
        "Executar lógica de negócios",
        "Interação com o usuário",
        "Criptografar dados",
      ],
      correct: 2,
    },
    {
      question: "REST é um estilo de arquitetura para:",
      options: [
        "Interfaces gráficas",
        "Serviços web",
        "Redes locais",
        "Drivers de dispositivos",
      ],
      correct: 1,
    },
    {
      question: "SOA significa:",
      options: [
        "Sistema Operacional Avançado",
        "Serviço Online Aberto",
        "Arquitetura Orientada a Serviços",
        "Ambiente de Operação Simples",
      ],
      correct: 2,
    },
    {
      question: "O que caracteriza uma arquitetura monolítica?",
      options: [
        "Serviços independentes",
        "Divisão por camadas",
        "Código centralizado e único",
        "Uso exclusivo de APIs",
      ],
      correct: 2,
    },
    {
      question: "O que é escalabilidade horizontal?",
      options: [
        "Adicionar mais núcleos de CPU",
        "Adicionar servidores à rede",
        "Trocar o banco de dados",
        "Reduzir a latência",
      ],
      correct: 1,
    },
    {
      question: "A principal função de um servidor web é:",
      options: [
        "Criar bancos de dados",
        "Distribuir páginas da web",
        "Criar senhas seguras",
        "Monitorar tráfego de rede",
      ],
      correct: 1,
    },
    {
      question: "Em uma arquitetura de 3 camadas, a camada intermediária é:",
      options: ["Apresentação", "Dados", "Negócio", "Conexão"],
      correct: 2,
    },
    {
      question: "O uso de containers como Docker permite:",
      options: [
        "Compactar arquivos",
        "Isolar e empacotar aplicações",
        "Desenvolver aplicativos móveis",
        "Criptografar sistemas operacionais",
      ],
      correct: 1,
    },
    {
      question: "Arquitetura em nuvem é baseada em:",
      options: [
        "Dispositivos locais",
        "Execução de software offline",
        "Serviços distribuídos acessados remotamente",
        "Uso exclusivo de servidores dedicados",
      ],
      correct: 2,
    },
  ],

  estrutura: [
    {
      question: "Qual das estruturas de dados é LIFO (Last In, First Out)?",
      options: ["Fila", "Pilha", "Árvore", "Lista ligada"],
      correct: 1,
    },
    {
      question:
        "Qual estrutura de dados segue o modelo FIFO (First In, First Out)?",
      options: ["Pilha", "Fila", "Grafo", "Hash table"],
      correct: 1,
    },
    {
      question: "O que é uma árvore binária?",
      options: [
        "Estrutura onde cada nó tem no máximo dois filhos",
        "Lista ordenada de dados",
        "Conjunto de filas",
        "Estrutura de busca hash",
      ],
      correct: 0,
    },
    {
      question: "Qual estrutura de dados é ideal para busca binária?",
      options: ["Lista ligada", "Árvore AVL", "Fila", "Pilha"],
      correct: 1,
    },
    {
      question: "O que é um nó em uma lista ligada?",
      options: [
        "Um valor constante",
        "Um elemento que aponta para o próximo",
        "Um tipo de variável",
        "Uma função",
      ],
      correct: 1,
    },
    {
      question: "Hash tables são eficientes para:",
      options: [
        "Ordenar dados",
        "Buscar valores por chave",
        "Armazenar imagens",
        "Criar algoritmos recursivos",
      ],
      correct: 1,
    },
    {
      question: "Qual é a complexidade média de busca em uma hash table?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correct: 0,
    },
    {
      question: "Qual estrutura é usada em algoritmos de backtracking?",
      options: ["Fila", "Pilha", "Árvore", "Grafo"],
      correct: 1,
    },
    {
      question: "Qual das opções representa um grafo direcionado?",
      options: [
        "Rede sem direção",
        "Lista linear",
        "Conjunto com conexões unilaterais",
        "Árvore AVL",
      ],
      correct: 2,
    },
    {
      question: "Uma árvore balanceada serve para:",
      options: [
        "Evitar repetição de dados",
        "Melhorar a visualização gráfica",
        "Melhorar a eficiência da busca",
        "Organizar arquivos binários",
      ],
      correct: 2,
    },
    {
      question: "O que define uma árvore AVL?",
      options: [
        "Todos os nós são folhas",
        "Balanceamento automático após inserção/remoção",
        "Filhos iguais para todos os nós",
        "Uso exclusivo em redes",
      ],
      correct: 1,
    },
    {
      question: "Uma lista duplamente ligada difere por:",
      options: [
        "Não conter ponteiros",
        "Ter ponteiros para frente e para trás",
        "Armazenar apenas inteiros",
        "Ser usada apenas em pilhas",
      ],
      correct: 1,
    },
    {
      question: "A operação 'enqueue' está associada a qual estrutura?",
      options: ["Pilha", "Fila", "Árvore", "Hash"],
      correct: 1,
    },
    {
      question: "O que é uma fila de prioridade?",
      options: [
        "Fila onde os elementos são removidos em ordem aleatória",
        "Fila onde cada elemento tem uma prioridade associada",
        "Fila que nunca remove elementos",
        "Fila que só aceita números primos",
      ],
      correct: 1,
    },
    {
      question:
        "Qual estrutura é mais adequada para representar mapas e rotas?",
      options: ["Lista ligada", "Grafo", "Árvore binária", "Pilha"],
      correct: 1,
    },
  ],

  sistemas: [
    {
      question: "Qual é a principal função de um sistema operacional?",
      options: [
        "Executar antivírus",
        "Criar documentos",
        "Gerenciar hardware e software",
        "Enviar e-mails",
      ],
      correct: 2,
    },
    {
      question: "Um processo é:",
      options: [
        "Uma sequência de dados",
        "Um programa em execução",
        "Um arquivo de texto",
        "Um tipo de memória",
      ],
      correct: 1,
    },
    {
      question: "A memória RAM é gerenciada pelo:",
      options: ["BIOS", "Sistema Operacional", "Processador", "Disco rígido"],
      correct: 1,
    },
    {
      question: "O que é escalonamento de processos?",
      options: [
        "Organização de arquivos",
        "Priorizar a execução de processos",
        "Criação de usuários",
        "Inicialização do sistema",
      ],
      correct: 1,
    },
    {
      question: "Qual sistema operacional é de código aberto?",
      options: ["Windows", "macOS", "Linux", "iOS"],
      correct: 2,
    },
    {
      question: "O que é um deadlock?",
      options: [
        "Erro de disco",
        "Conflito de memória",
        "Dois ou mais processos esperando recursos indefinidamente",
        "Desligamento inesperado",
      ],
      correct: 2,
    },
    {
      question: "Um sistema multitarefa:",
      options: [
        "Executa um único processo",
        "Suporta múltiplos usuários",
        "Executa múltiplos processos simultaneamente",
        "Apenas grava arquivos",
      ],
      correct: 2,
    },
    {
      question: "O que é um sistema de arquivos?",
      options: [
        "Processador de texto",
        "Método de organização de dados em disco",
        "Servidor web",
        "Driver de impressora",
      ],
      correct: 1,
    },
    {
      question: "Qual é a função do kernel?",
      options: [
        "Gerar gráficos",
        "Controlar jogos",
        "Gerenciar recursos do sistema",
        "Formatar HDs",
      ],
      correct: 2,
    },
    {
      question: "O que é swap em sistemas operacionais?",
      options: [
        "Troca de usuários",
        "Área no disco para simular RAM",
        "Troca de arquivos",
        "Atualização automática",
      ],
      correct: 1,
    },
    {
      question: "O que diferencia o Linux do Windows?",
      options: [
        "Linux é pago",
        "Linux é de código fechado",
        "Linux é de código aberto",
        "Linux não possui terminal",
      ],
      correct: 2,
    },
    {
      question: "O comando 'ls' no terminal Linux serve para:",
      options: [
        "Encerrar o sistema",
        "Listar arquivos e diretórios",
        "Editar arquivos",
        "Abrir o navegador",
      ],
      correct: 1,
    },
    {
      question: "Qual destes é um sistema operacional em tempo real?",
      options: ["Windows", "macOS", "RTOS", "Ubuntu"],
      correct: 2,
    },
    {
      question: "Um sistema operacional distribuído:",
      options: [
        "Executa em um único processador",
        "É usado para jogos",
        "Gerencia recursos em múltiplos computadores interligados",
        "Armazena vídeos apenas",
      ],
      correct: 2,
    },
    {
      question: "O que é uma chamada de sistema?",
      options: [
        "Ligação telefônica via software",
        "Pedido de serviço ao sistema operacional feito por um programa",
        "Instalação de aplicativos",
        "Configuração de firewall",
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
        <input type="radio" name="question${index}" value="${i}" id="q${index}o${i}" class="quiz-option">
        <label for="q${index}o${i}" class="quiz-label">${option.text}</label><br>
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

      if (selectedValue === correctValue) {
        selected.nextElementSibling.style.backgroundColor = "green";
        selected.nextElementSibling.style.color = "white";
      } else {
        selected.nextElementSibling.style.backgroundColor = "red";
        selected.nextElementSibling.style.color = "white";
      }

      const correctLabel = document.querySelector(
        `input[name='question${index}'][value='${correctValue}']`
      ).nextElementSibling;
      correctLabel.style.backgroundColor = "green";
      correctLabel.style.color = "white";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const startQuizButton = document.getElementById("start-quiz");
  if (startQuizButton) {
    startQuizButton.onclick = function () {
      const subjectSelect = document.getElementById("subject-select");
      const subject = subjectSelect.value;

      if (subject) {
        localStorage.setItem("selectedSubject", subject);
        window.location.href = "index.html";
      } else {
        alert("Por favor, selecione uma matéria.");
      }
    };
  }

  const subject = localStorage.getItem("selectedSubject");
  if (subject) {
    document.getElementById("materia-titulo").textContent =
      subject.charAt(0).toUpperCase() + subject.slice(1).replace("_", " ");
    loadQuestions(subject);
  } else {
    alert("Nenhuma matéria selecionada. Volte para a página inicial.");
    window.location.href = "index.html";
  }

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
        loadQuestions(subject); // Carrega 10 novas perguntas aleatórias
      }
    };
  }
});

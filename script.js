const questions = [
    {
        question: "¿Cómo te describirían tus amigos?",
        options: [
            "Carismático/a y sociable",
            "Valiente y decidido/a",
            "Inteligente y analítico/a",
            "Responsable y respetado/a",
            "Idealista y apasionado/a"
        ]
    },
    {
        question: "¿Qué te parece más importante en una revolución?",
        options: [
            "Crear espacios para el diálogo y la cultura",
            "Luchar hasta el final, sin rendirse",
            "Informar al pueblo y educar",
            "Mantener la unidad entre los líderes",
            "Defender las ideas aunque molesten"
        ]
    },
    {
        question: "¿Con qué causa actual te sentirías más identificado/a?",
        options: [
            "Derechos culturales y de género",
            "Justicia social e igualdad",
            "Educación pública y libertad de prensa",
            "Seguridad y organización institucional",
            "Libertad de pensamiento y crítica al poder"
        ]
    },
    {
        question: "¿Qué te molesta más?",
        options: [
            "Que no te escuchen cuando proponés ideas",
            "Las injusticias hacia los que menos tienen",
            "Que no haya voluntad real de cambio",
            "El caos o la falta de coordinación",
            "La censura o el silencio forzado"
        ]
    },
    {
        question: "En una discusión, vos...",
        options: [
            "Tratás de mediar y encontrar puntos en común",
            "Defendés con pasión tu postura",
            "Argumentás con datos y fundamentos",
            "Cerrás el tema",
            "Planteás nuevas ideas aunque incomoden"
        ]
    },
    {
        question: "¿Qué objeto te representa más?",
        options: [
            "Una guitarra en una reunión",
            "Una espada en alto",
            "Un lápiz sobre papel",
            "Una bandera en el cuartel",
            "Un micrófono en una plaza"
        ]
    }
];

const results = {
    A: {
        name: "Mariquita Sánchez de Thompson",
        description: "Figura central de la vida social y cultural de la Revolución de Mayo. Su casa fue sede de tertulias patrióticas, donde se debatían ideas revolucionarias. Fue una mujer decidida y defensora de la educación y la participación femenina en la vida pública."
    },
    B: {
        name: "Juana Azurduy",
        description: "Una guerrera de la independencia. Participó activamente en batallas por la libertad en el Alto Perú. Fue teniente coronel y símbolo de coraje, justicia y lucha social. Su vida demuestra que el rol de las mujeres en la historia fue clave."
    },
    C: {
        name: "Mariano Moreno",
        description: "Abogado, periodista y revolucionario, miembro de la Primera Junta. Fundó la 'Gazeta de Buenos Ayres' y luchó por la libertad de expresión, la educación y la transformación profunda de la sociedad. Sus ideas siguen inspirando."
    },
    D: {
        name: "Cornelio Saavedra",
        description: "Presidente de la Primera Junta de Gobierno. Su perfil fue más moderado, priorizando la organización y el orden dentro del proceso revolucionario. Fue una figura clave en mantener la unidad en los comienzos del cambio político."
    },
    E: {
        name: "Juan José Castelli",
        description: "Orador brillante y revolucionario radical. Representó a la Primera Junta en el Alto Perú, donde llevó adelante reformas profundas. Defendía la libertad, la igualdad y la ruptura total con el dominio español, sin medias tintas."
    }
};

let currentQuestion = 0;
let answers = [];

function startQuiz() {
    currentQuestion = 0;
    answers = [];
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    questionContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    const question = questions[currentQuestion];
    document.getElementById('question-text').textContent = question.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(answerIndex) {
    answers.push(answerIndex);
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    const answerCounts = answers.reduce((acc, answer) => {
        acc[answer]++;
        return acc;
    }, [0, 0, 0, 0, 0]);

    const maxIndex = answerCounts.indexOf(Math.max(...answerCounts));
    const resultKey = String.fromCharCode(65 + maxIndex);
    const result = results[resultKey];

    document.getElementById('character-result').textContent = result.name;
    document.getElementById('character-description').textContent = result.description;
}

document.getElementById('restart-button').addEventListener('click', startQuiz);

// Iniciar el quiz cuando se carga la página
window.onload = startQuiz; 
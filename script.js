// =======================
// TABELA ESCALA SEMANAL
// =======================

const escala = {
    "SEGUNDA": [
        "MARCOS FERREIRA BENEDITO — 08:00 às 12:00",
        "ANA PAULA DOS SANTOS GOMES — 8:30 às 12:30",
        "CRISTINA CARVALHO DE MELO — 11:40 às 13:40",
        "CAMILLA AYALA FELISBERTO SILVA — 13:00 às 17:00",
        "ANA PAULA DOS SANTOS GOMES — 13:00 às 15:00",
        "ELIZABETH RODRIGUES BRITO IBRAHIM — 14:00 às 17:00",
        "CRISTINA CARVALHO DE MELO — 15:00 às 19:00",
        "ELISA SIQUEIRA — 14:00 às 21:00",
        "MARCOS FERREIRA BENEDITO — 16:00 às 21:00"
    ],
    "TERÇA": [
        "ELIZABETH RODRIGUES BRITO IBRAHIM — 13:00 às 17:00",
        "ANA AMELIA FONSECA VIANA CRUZ — 08:30 às 12:30",
        "ANA AMELIA FONSECA VIANA CRUZ — 13:30 às 17:30",
        "ANA PAULA DOS SANTOS GOMES — 14:30 às 19:00",
        "MARCOS FERREIRA BENEDITO — 14:00 às 18:00",
        "CAMILLA AYALA FELISBERTO SILVA — 15:00 às 19:00",
        "DANIEL PORTELA DIAS MACHADO — 15:00 às 19:00",
        "ELISA SIQUEIRA — 14:00 às 19:00",
        "CRISTINA CARVALHO DE MELO — 15:00 às 20:30"
    ],
    "QUARTA": [
        "ELISA SIQUEIRA — 08:00 às 13:00",
        "MARCOS FERREIRA BENEDITO — 17:00 às 21:00",
        "ELIZABETH RODRIGUES BRITO IBRAHIM — 17:00 às 21:00"
    ],
    "QUINTA": [
        "DANIEL PORTELA DIAS MACHADO — 08:00 às 12:00",
        "CAMILLA AYALA FELISBERTO SILVA — 13:00 às 17:00",
        "DANIEL PORTELA DIAS MACHADO — 17:00 às 19:00",
        "ELIZABETH RODRIGUES BRITO IBRAHIM — 13:00 às 17:00",
        "ANA AMELIA FONSECA VIANA CRUZ — 13:00 às 21:00",
        "DANIEL PORTELA DIAS MACHADO — 15:00 às 21:00"
    ],
    "SEXTA": [
        "CAMILLA AYALA FELISBERTO SILVA — 09:00 às 13:00",
        "CRISTINA CARVALHO DE MELO — 14:30 às 19:00",
        "MARCOS FERREIRA BENEDITO — 17:00 às 19:00",
        "ELIZABETH RODRIGUES BRITO IBRAHIM — 17:00 às 21:00"
    ]
};

const scheduleDiv = document.getElementById("schedule");
const days = document.querySelectorAll(".day");
let currentDayIndex = 0;

// Renderiza o dia atual
function renderDay(day) {
    scheduleDiv.innerHTML = "";
    escala[day].forEach(item => {
        const div = document.createElement("div");
        div.className = "schedule-item";
        div.innerHTML = `<span>${item}</span>`;
        scheduleDiv.appendChild(div);
    });

    days.forEach(d => d.classList.remove("active"));
    days[currentDayIndex].classList.add("active");
}

days.forEach((d, i) => {
    d.addEventListener("click", () => {
        currentDayIndex = i;
        renderDay(d.dataset.day);
    });
});

document.getElementById("prevDay").onclick = () => {
    currentDayIndex = (currentDayIndex - 1 + 5) % 5;
    renderDay(days[currentDayIndex].dataset.day);
};

document.getElementById("nextDay").onclick = () => {
    currentDayIndex = (currentDayIndex + 1) % 5;
    renderDay(days[currentDayIndex].dataset.day);
};

renderDay("SEGUNDA");

// =======================
// COORDENADORES & CURSOS
// =======================

const coordenadores = [
    {
        nome: "ANA AMELIA FONSECA VIANA CRUZ",
        email: "ana.vicruz@ulife.com.br",
        cursos: [
            "Biomedicina",
            "Biomedicina (Semipresencial) 30/70",
            "Fisioterapia",
            "Fisioterapia (Semipresencial) 30/70",
            "Estética e Cosmética",
            "Estética e Cosmética (Semipresencial) 30/70"
        ]
    },
    {
        nome: "ANA PAULA DOS SANTOS GOMES",
        email: "ana.paula1@animaeducacao.com.br",
        cursos: [
            "Nutrição",
            "Nutrição (Semipresencial) 30/70",
            "Psicologia"
        ]
    },
    {
        nome: "CAMILLA AYALA FELISBERTO SILVA",
        email: "camilla.felisberto@animaeducacao.com.br",
        cursos: [
            "Análise e Desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas (Semipresencial) 30/70",
            "Ciência da Computação",
            "Ciência da Computação (Semipresencial) 30/70",
            "Sistemas de Informação",
            "Sistemas de Informação (Semipresencial) 30/70",
            "Engenharia de Software"
        ]
    },
    {
        nome: "CRISTINA CARVALHO DE MELO",
        email: "cristina.melo@animaeducacao.com.br",
        cursos: [
            "Administração",
            "Administração (Semipresencial) 30/70",
            "Ciências Contábeis",
            "Ciências Contábeis (Semipresencial) 30/70",
            "Ciências Econômicas",
            "Ciências Econômicas (Semipresencial) 30/70"
        ]
    },
    {
        nome: "DANIEL PORTELA DIAS MACHADO",
        email: "daniel.portela@animaeducacao.com.br",
        cursos: [
            "Medicina Veterinária",
            "Comércio Exterior",
            "Educação Física",
            "Educação Física (Semipresencial) 30/70"
        ]
    },
    {
        nome: "ELISA CARVALHO DE SIQUEIRA",
        email: "elisa.siqueira@animaeducacao.com.br",
        cursos: [
            "Odontologia"
        ]
    },
    {
        nome: "ELIZABETH RODRIGUES BRITO IBRAHIM",
        email: "elizabeth.ibrahim@animaeducacao.com.br",
        cursos: [
            "Arquitetura e Urbanismo",
            "Design de Interiores",
            "Design Gráfico",
            "Design Gráfico (Semipresencial) 30/70"
        ]
    }
];

// Render coordenadores
const coordDiv = document.getElementById("coordenadores");

coordenadores.forEach(c => {
    const card = document.createElement("div");
    card.className = "coord-card";

    card.innerHTML = `
        <div class="coord-header">
            <strong>${c.nome}</strong>
            <a class="coord-email" href="mailto:${c.email}">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"/>
            </a>
        </div>
        <div class="cursos">${c.cursos.join(" • ")}</div>
    `;

    coordDiv.appendChild(card);
});

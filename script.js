// ==== DATA ATUAL ====
function updateDateTime() {
    const now = new Date();
    const format = now.toLocaleString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
    document.getElementById("date-time").textContent = format;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// ======== BASE DE DADOS ========
const coordinatorData = {
    "ANA PAULA DOS SANTOS GOMES": {
        email: "ana.paula1@animaeducacao.com.br",
        courses: [
            "Nutrição",
            "Nutrição (Semipresencial 30/70)",
            "Psicologia"
        ]
    },
    "CAMILLA AYALA FELISBERTO SILVA": {
        email: "camilla.felisberto@animaeducacao.com.br",
        courses: [
            "Análise e Desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas 30/70",
            "Ciência da Computação",
            "Direito",
            "Sistemas de Informação",
            "Sistemas de Informação 30/70"
        ]
    },
    "CRISTINA CARVALHO DE MELO": {
        email: "cristina.melo@animaeducacao.com.br",
        courses: [
            "Administração / Administração 30/70",
            "Ciências Contábeis / Ciências Contábeis 30/70",
            "Comércio Exterior",
            "Educação Física / Educação Física 30/70"
        ]
    },
    "DANIEL PORTELA DIAS MACHADO": {
        email: "daniel.portela@animaeducacao.com.br",
        courses: [
            "Medicina Veterinária",
            "Ciências Econômicas / 30/70"
        ]
    },
    "ELISA CARVALHO DE SIQUEIRA": {
        email: "elisa.siqueira@animaeducacao.com.br",
        courses: [
            "Odontologia",
            "Design de Interiores",
            "Design Gráfico",
            "Design Gráfico 30/70"
        ]
    },
    "ELIZABETH RODRIGUES BRITO IBRAHIM": {
        email: "elizabeth.ibrahim@animaeducacao.com.br",
        courses: [
            "Farmácia",
            "Farmácia 30/70",
            "História",
            "Pedagogia",
            "Pedagogia 30/70"
        ]
    },
    "MARCOS FERREIRA BENEDITO": {
        email: "marcos.benedito@animaeducacao.com.br",
        courses: [
            "Arquitetura e Urbanismo",
            "Enfermagem",
            "Design de Interiores",
            "Farmácia"
        ]
    }
};

// ======== ESCALA POR DIA (ÍNDICE: 0 = SEG) ========
const schedule = [
    [
        "MARCOS FERREIRA BENEDITO 08:00 às 12:00",
        "ANA PAULA DOS SANTOS GOMES 8:30 às 12:30",
        "CRISTINA CARVALHO DE MELO 11:40 às 13:40",
        "CAMILLA AYALA FELISBERTO SILVA 13:00 às 17:00",
        "ANA PAULA DOS SANTOS GOMES 13:00 às 15:00",
        "ELIZABETH RODRIGUES BRITO IBRAHIM 14:00 às 17:00",
        "CRISTINA CARVALHO DE MELO 15:00 às 19:00",
        "ELISA CARVALHO DE SIQUEIRA 14:00 às 21:00",
        "MARCOS FERREIRA BENEDITO 16:00 às 21:00"
    ],
    [
        "ELIZABETH RODRIGUES BRITO IBRAHIM 13:00 às 17:00",
        "ANA AMELIA FONSECA VIANA CRUZ 08:30 às 12:30",
        "ANA AMELIA FONSECA VIANA CRUZ 13:30 às 17:30",
        "ANA PAULA DOS SANTOS GOMES 14:30 às 19:00",
        "MARCOS FERREIRA BENEDITO 14:00 às 18:00",
        "CAMILLA AYALA FELISBERTO SILVA 15:00 às 19:00",
        "DANIEL PORTELA DIAS MACHADO 15:00 às 19:00",
        "ELISA CARVALHO DE SIQUEIRA 14:00 às 19:00",
        "CRISTINA CARVALHO DE MELO 15:00 às 20:30"
    ],
    [
        "ELISA SIQUEIRA 8:00 às 13:00",
        "MARCOS FERREIRA BENEDITO 17:00 às 21:00",
        "ELIZABETH RODRIGUES BRITO IBRAHIM 17:00 às 21:00"
    ],
    [
        "DANIEL PORTELA DIAS MACHADO 08:00 às 12:00",
        "CAMILLA AYALA FELISBERTO SILVA 13:00 às 17:00",
        "ELIZABETH RODRIGUES BRITO IBRAHIM 13:00 às 17:00",
        "ANA PAULA DOS SANTOS GOMES 15:30 às 21:00",
        "ANA AMELIA FONSECA VIANA CRUZ 13:00 às 21:00",
        "DANIEL PORTELA DIAS MACHADO 15:00 às 21:00"
    ],
    [
        "CAMILLA AYALA FELISBERTO SILVA 09:00 às 13:00",
        "CRISTINA CARVALHO DE MELO 14:30 às 19:00",
        "MARCOS FERREIRA BENEDITO 17:00 às 19:00",
        "ELIZABETH RODRIGUES BRITO IBRAHIM 17:00 às 21:00"
    ]
];

let currentDay = 0;

// ==== Renderizar dia ====
function renderDay(dayIndex) {
    currentDay = dayIndex;

    document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.day-btn[data-day="${dayIndex}"]`).classList.add("active");

    const container = document.getElementById("coordinator-list");
    container.innerHTML = "";

    schedule[dayIndex].forEach(entry => {
        const [name, time] = entry.split(/ (.+)/);

        const data = coordinatorData[name] || null;

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Horário:</strong> ${time}</p>
            ${data ? `
                <p><strong>Cursos:</strong></p>
                <ul>${data.courses.map(c => `<li>${c}</li>`).join("")}</ul>
                <a class="email-btn" href="mailto:${data.email}">
                    <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png">
                </a>
            ` : `<p style="opacity:.6;">(Sem cursos cadastrados)</p>`}
        `;

        container.appendChild(card);
    });
}

// ==== Eventos ====
document.querySelectorAll(".day-btn").forEach(btn => {
    btn.addEventListener("click", () => renderDay(Number(btn.dataset.day)));
});

document.getElementById("prev-day").onclick = () => {
    currentDay = (currentDay - 1 + 5) % 5;
    renderDay(currentDay);
};

document.getElementById("next-day").onclick = () => {
    currentDay = (currentDay + 1) % 5;
    renderDay(currentDay);
};

// Inicia na segunda-feira
renderDay(0);

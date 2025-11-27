const coordinators = [
{
    name: "ANA AMELIA FONSECA VIANA CRUZ",
    email: "ana.vicruz@ulife.com.br",
    courses: [
        "Biomedicina",
        "Biomedicina (Semipresencial) 30/70",
        "Fisioterapia",
        "Fisioterapia (Semipresencial) 30/70",
        "Estética e Cosmética",
        "Estética e Cosmética (Semipresencial) 30/70"
    ]
},
{
    name: "ANA PAULA DOS SANTOS GOMES",
    email: "ana.paula1@animaeducacao.com.br",
    courses: [
        "Nutrição",
        "Nutrição (Semipresencial) 30/70",
        "Psicologia"
    ]
},
{
    name: "CAMILLA AYALA FELISBERTO SILVA",
    email: "camilla.felisberto@animaeducacao.com.br",
    courses: [
        "Análise e Desenvolvimento de Sistemas",
        "Análise e Desenvolvimento de Sistemas (Semipresencial) 30/70",
        "Ciência da Computação (Semipresencial) 30/70",
        "Ciências da Computação",
        "Direito",
        "Sistemas de Informação",
        "Sistemas de Informação (Semipresencial) 30/70"
    ]
},
{
    name: "CRISTINA CARVALHO DE MELO",
    email: "cristina.melo@animaeducacao.com.br",
    courses: [
        "Administração / Administração (Semipresencial) 30/70",
        "Ciências Contábeis / Ciências Contábeis (Semipresencial) 30/70",
        "Ciências Econômicas / Ciências Econômicas (Semipresencial) 30/70",
        "Comércio Exterior",
        "Educação Física / Educação Física (Semipresencial) 30/70",
        "Gestão Comercial",
        "Gestão Comercial (Semipresencial) 30/70",
        "Gestão da Inovação e Empreendedorismo Digital",
        "Gestão da Produção Industrial",
        "Gestão da Qualidade",
        "Gestão da Qualidade (Semipresencial) 30/70",
        "Gestão da Tecnologia da Informação",
        "Gestão de Processos e Projetos Ágeis",
        "Gestão de Recursos Humanos",
        "Gestão Financeira",
        "Gestão Pública (Semipresencial) 30/70",
        "Governança Corporativa e Consultoria",
        "Investimento e formação de Traders",
        "Logística",
        "Marketing",
        "Marketing Digital",
        "Negócios Imobiliários",
        "Processos Gerenciais"
    ]
},
{
    name: "DANIEL PORTELA DIAS MACHADO",
    email: "daniel.portela@animaeducacao.com.br",
    courses: [
        "Medicina Veterinária"
    ]
},
{
    name: "ELISA CARVALHO DE SIQUEIRA",
    email: "elisa.siqueira@animaeducacao.com.br",
    courses: [
        "Odontologia"
    ]
},
{
    name: "ELIZABETH RODRIGUES BRITO IBRAHIM",
    email: "elizabeth.ibrahim@animaeducacao.com.br",
    courses: [
        "Arquitetura e Urbanismo",
        "Design de Interiores",
        "Design Gráfico",
        "Design Gráfico (Semipresencial) 30/70",
        "Engenharia Civil",
        "Engenharia Civil (Semipresencial) 30/70",
        "Engenharia da Computação",
        "Engenharia de Controle e Automação",
        "Engenharia de Produção",
        "Engenharia de Produção (Semipresencial) 30/70",
        "Engenharia de Software",
        "Engenharia Elétrica",
        "Engenharia Elétrica (Semipresencial) 30/70",
        "Engenharia Mecânica",
        "Engenharia Mecânica (Semipresencial) 30/70",
        "Jornalismo",
        "Publicidade e Propaganda"
    ]
}
];

function changeDay(day) {
    document.getElementById("dayTitle").innerText = "Escala de " + day;

    renderCoordinators();
}

function renderCoordinators() {
    const container = document.getElementById("coordinatorContainer");
    container.innerHTML = "";

    coordinators.forEach(c => {
        const div = document.createElement("div");
        div.className = "coordinator-card";

        div.innerHTML = `
            <h3>${c.name}</h3>
            <img class="email-icon" src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                 onclick="window.location.href='mailto:${c.email}'">
            <div class="course-list">
                ${c.courses.map(course => `<div>• ${course}</div>`).join("")}
            </div>
        `;

        container.appendChild(div);
    });
}

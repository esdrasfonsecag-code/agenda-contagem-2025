const emails = {
    "Ana Amelia Fonseca Viana Cruz": "ana.vicruz@ulife.com.br",
    "Ana Paula dos Santos Gomes": "ana.paula1@animaeducacao.com.br",
    "Camilla Ayala Felisberto Silva": "camilla.felisberto@animaeducacao.com.br",
    "Cristina Carvalho de Melo": "cristina.melo@animaeducacao.com.br",
    "Daniel Portela Dias Machado": "daniel.portela@animaeducacao.com.br",
    "Elisa Carvalho de Siqueira": "elisa.siqueira@animaeducacao.com.br",
    "Elizabeth Rodrigues Brito Ibrahim": "elizabeth.ibrahim@animaeducacao.com.br",
    "Marcos Ferreira Benedito": "marcos.benedito@animaeducacao.com.br"
};

// Exemplo simples de dias
const dias = [
    {
        nome: "Segunda-feira",
        horarios: [
            "Marcos Ferreira Benedito — 08:00 às 12:00",
            "Ana Paula dos Santos Gomes — 08:30 às 12:30"
        ]
    },
    {
        nome: "Terça-feira",
        horarios: [
            "Elizabeth Rodrigues Brito Ibrahim — 13:00 às 17:00",
            "Ana Amelia Fonseca Viana Cruz — 08:30 às 12:30"
        ]
    }
];

const coordenadores = {
    "Ana Amelia Fonseca Viana Cruz": {
        email: "ana.vicruz@ulife.com.br",
        cursos: ["Biomedicina","Fisioterapia"]
    },
    "Ana Paula dos Santos Gomes": {
        email: "ana.paula1@animaeducacao.com.br",
        cursos: ["Nutrição","Psicologia"]
    },
    "Camilla Ayala Felisberto Silva": {
        email: "camilla.felisberto@animaeducacao.com.br",
        cursos: ["Análise e Desenvolvimento de Sistemas","Direito"]
    },
    "Cristina Carvalho de Melo": {
        email: "cristina.melo@animaeducacao.com.br",
        cursos: ["Administração","Ciências Contábeis"]
    },
    "Daniel Portela Dias Machado": {
        email: "daniel.portela@animaeducacao.com.br",
        cursos: ["Medicina Veterinária","Engenharia Civil"]
    },
    "Elisa Carvalho de Siqueira": {
        email: "elisa.siqueira@animaeducacao.com.br",
        cursos: ["Odontologia","Design de Interiores"]
    },
    "Elizabeth Rodrigues Brito Ibrahim": {
        email: "elizabeth.ibrahim@animaeducacao.com.br",
        cursos: ["Arquitetura e Urbanismo","Farmácia"]
    },
    "Marcos Ferreira Benedito": {
        email: "marcos.benedito@animaeducacao.com.br",
        cursos: ["Enfermagem"]
    }
};

let index = 0;

function gerarBotaoEmail(nome){
    const email = emails[nome];
    if(!email) return "";
    return `<a class="email-btn" href="mailto:${email}">📧 Enviar Email</a>`;
}

function atualizar(){
    const diaAtual = document.getElementById("dia-atual");
    const conteudo = document.getElementById("conteudo");

    diaAtual.innerText = dias[index].nome;
    conteudo.innerHTML = dias[index].horarios.map(h => {
        const [nome, horario] = h.split(" — ");
        return `
            <div class="card">
                <div class="card-info">
                    <p class="nome">${nome}</p>
                    <p class="horario">${horario}</p>
                </div>
                ${gerarBotaoEmail(nome)}
            </div>
        `;
    }).join('');
}

function renderCoordenadores(){
    const container = document.getElementById("coordenadores");
    container.innerHTML = Object.keys(coordenadores).map(nome=>{
        const c = coordenadores[nome];
        return `
            <div class="card">
                <p class="nome"><strong>${nome}</strong></p>
                <p class="email">${c.email}</p>
                <ul class="cursos">
                    ${c.cursos.map(course=>`<li>${course}</li>`).join('')}
                </ul>
            </div>
        `;
    }).join('');
}

document.getElementById("prev").onclick = ()=>{
    index = (index === 0)? dias.length-1 : index-1;
    atualizar();
};
document.getElementById("next").onclick = ()=>{
    index = (index === dias.length-1)? 0 : index+1;
    atualizar();
};

atualizar();
renderCoordenadores();

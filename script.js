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

// Escala completa por dia
const dias = [
    {nome:"Segunda-feira", horarios:[
        "Marcos Ferreira Benedito — 08:00 às 12:00",
        "Ana Paula dos Santos Gomes — 08:30 às 12:30",
        "Cristina Carvalho de Melo — 11:40 às 13:40",
        "Camilla Ayala Felisberto Silva — 13:00 às 17:00",
        "Ana Paula dos Santos Gomes — 13:00 às 15:00",
        "Elizabeth Rodrigues Brito Ibrahim — 14:00 às 17:00",
        "Cristina Carvalho de Melo — 15:00 às 19:00",
        "Elisa Carvalho de Siqueira — 14:00 às 21:00",
        "Marcos Ferreira Benedito — 16:00 às 21:00"
    ]},
    {nome:"Terça-feira", horarios:[
        "Elizabeth Rodrigues Brito Ibrahim — 13:00 às 17:00",
        "Ana Amelia Fonseca Viana Cruz — 08:30 às 12:30",
        "Ana Amelia Fonseca Viana Cruz — 13:30 às 17:30",
        "Ana Paula dos Santos Gomes — 14:30 às 19:00",
        "Marcos Ferreira Benedito — 14:00 às 18:00",
        "Camilla Ayala Felisberto Silva — 15:00 às 19:00",
        "Elisa Carvalho de Siqueira — 14:00 às 19:00",
        "Daniel Portela Dias Machado — 15:00 às 19:00",
        "Cristina Carvalho de Melo — 15:00 às 20:30"
    ]},
    {nome:"Quarta-feira", horarios:[
        "Elisa Carvalho de Siqueira — 08:00 às 13:00",
        "Marcos Ferreira Benedito — 17:00 às 21:00",
        "Elizabeth Rodrigues Brito Ibrahim — 17:00 às 21:00"
    ]},
    {nome:"Quinta-feira", horarios:[
        "Daniel Portela Dias Machado — 08:00 às 12:00",
        "Camilla Ayala Felisberto Silva — 13:00 às 17:00",
        "Daniel Portela Dias Machado — 15:00 às 21:00",
        "Ana Amelia Fonseca Viana Cruz — 13:00 às 21:00",
        "Elizabeth Rodrigues Brito Ibrahim — 13:00 às 17:00"
    ]},
    {nome:"Sexta-feira", horarios:[
        "Camilla Ayala Felisberto Silva — 09:00 às 13:00",
        "Daniel Portela Dias Machado — 17:00 às 19:00",
        "Cristina Carvalho de Melo — 14:30 às 19:00",
        "Marcos Ferreira Benedito — 17:00 às 19:00",
        "Elizabeth Rodrigues Brito Ibrahim — 17:00 às 21:00"
    ]}
];

// Coordenadores completos
const coordenadores = [
    {nome:"Ana Amelia Fonseca Viana Cruz", email:"ana.vicruz@ulife.com.br", cursos:["Biomedicina","Biomedicina (Semipresencial) 30/70","Fisioterapia","Fisioterapia (Semipresencial) 30/70","Estética e Cosmética","Estética e Cosmética (Semipresencial) 30/70"]},
    {nome:"Ana Paula dos Santos Gomes", email:"ana.paula1@animaeducacao.com.br", cursos:["Nutrição","Nutrição (Semipresencial) 30/70","Psicologia"]},
    {nome:"Camilla Ayala Felisberto Silva", email:"camilla.felisberto@animaeducacao.com.br", cursos:["Análise e Desenvolvimento de sistemas","Análise e Desenvolvimento de Sistemas (Semipresencial) 30/70","Ciência da Computação (Semipresencial) 30/70","Ciências da Computação","Direito","Sistemas de Informação","Sistemas de Informação (Semipresencial) 30/70"]},
    {nome:"Cristina Carvalho de Melo", email:"cristina.melo@animaeducacao.com.br", cursos:["Administração / Administração (Semipresencial) 30/70","Ciências Contábeis/Ciências Contábeis (Semipresencial) 30/70","Ciências Econômicas / Ciências Econômicas (Semipresencial) 30/70","Comércio Exterior","Educação física / Educação Física (Semipresencial) 30/70","Gestão Comercial","Gestão Comercial (Semipresencial) 30/70","Gestão da Inovação e Empreendedorismo Digital","Gestão da Produção Industrial","Gestão da Qualidade","Gestão da Qualidade (Semipresencial) 30/70","Gestão da Tecnologia da Informação / Gestão da Tecnologia da Informação (Semipresencial) 30/70","Gestão de Processos e Projetos Ágeis","Gestão de Recursos Humanos / Gestão de Recursos Humanos (Semipresencial) 30/70","Gestão Financeira / Gestão Financeira (Semipresencial) 30/70","Gestão Pública (Semipresencial) 30/70","Governança Corporativa e Consultoria de Negócios","Investimento e formação de Traders","Logística / Logística (Semipresencial) 30/70","Marketing / Marketing (Semipresencial) 30/70","Marketing Digital","Negócios Imobiliários","Processos Gerenciais / Processos Gerenciais (Semipresencial) 30/70"]},
    {nome:"Daniel Portela Dias Machado", email:"daniel.portela@animaeducacao.com.br", cursos:["Medicina Veterinária"]},
    {nome:"Elisa Carvalho de Siqueira", email:"elisa.siqueira@animaeducacao.com.br", cursos:["Odontologia","Design de Interiores","Design Gráfico","Design Gráfico (Semipresencial) 30/70"]},
    {nome:"Elizabeth Rodrigues Brito Ibrahim", email:"elizabeth.ibrahim@animaeducacao.com.br", cursos:["Arquitetura e Urbanismo","Farmácia","Farmácia (Semipresencial) 30/70","História","Pedagogia","Pedagogia (Semipresencial) 30/70"]},
    {nome:"Marcos Ferreira Benedito", email:"marcos.benedito@animaeducacao.com.br", cursos:["Enfermagem"]}
];

// Botão email ícone
function gerarBotaoEmail(nome){
    const email = emails[nome];
    if(!email) return "";
    return `<a class="email-btn" href="mailto:${email}"><i class="fas fa-envelope"></i></a>`;
}

// Agenda
let index = 0;
function atualizar(){
    document.getElementById("dia-atual").innerText = dias[index].nome;
    document.getElementById("conteudo").innerHTML = dias[index].horarios.map(h=>{
        const [nome, horario] = h.split(" — ");
        return `<div class="card">
            <div class="card-info">
                <p class="nome">${nome}</p>
                <p class="horario">${horario}</p>
            </div>
            ${gerarBotaoEmail(nome)}
        </div>`;
    }).join('');
}

// Renderiza coordenadores
function renderCoordenadores(){
    const container = document.getElementById("coordenadores");
    container.innerHTML = coordenadores.map(c=>`
        <div class="coordenador-card">
            <div>
                <h3>${c.nome}</h3>
                <p><a class="email-btn" href="mailto:${c.email}"><i class="fas fa-envelope"></i></a> ${c.email}</p>
                <ul class="cursos">
                    ${c.cursos.map(course=>`<li>${course}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

document.getElementById("prev").onclick = ()=>{
    index = (index===0)? dias.length-1 : index-1;
    atualizar();
};
document.getElementById("next").onclick = ()=>{
    index = (index===dias.length-1)? 0 : index+1;
    atualizar();
};

atualizar();
renderCoordenadores();

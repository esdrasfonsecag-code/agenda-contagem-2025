window.onload = function() {

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

const dias = [
    { nome: "Segunda-feira", horarios: [
        "Marcos Ferreira Benedito — 08:00 às 12:00",
        "Ana Paula dos Santos Gomes — 08:30 às 12:30",
        "Cristina Carvalho de Melo — 11:40 às 13:40",
        "Camilla Ayala Felisberto Silva — 13:00 às 17:00"
    ]},
    { nome: "Terça-feira", horarios: [
        "Elizabeth Rodrigues Brito Ibrahim — 13:00 às 17:00",
        "Ana Amelia Fonseca Viana Cruz — 08:30 às 12:30"
    ]},
    { nome: "Quarta-feira", horarios: [
        "Elisa Carvalho de Siqueira — 08:00 às 13:00",
        "Marcos Ferreira Benedito — 17:00 às 21:00"
    ]},
    { nome: "Quinta-feira", horarios: [
        "Daniel Portela Dias Machado — 08:00 às 12:00",
        "Camilla Ayala Felisberto Silva — 13:00 às 17:00"
    ]},
    { nome: "Sexta-feira", horarios: [
        "Camilla Ayala Felisberto Silva — 09:00 às 13:00",
        "Daniel Portela Dias Machado — 17:00 às 19:00"
    ]}
];

const coordenadores = {
    "Ana Amelia Fonseca Viana Cruz": {
        email: "ana.vicruz@ulife.com.br",
        cursos: [
            "Biomedicina", "Biomedicina (Semipresencial) 30/70",
            "Fisioterapia", "Fisioterapia (Semipresencial) 30/70",
            "Estética e Cosmética", "Estética e Cosmética (Semipresencial) 30/70"
        ]
    },
    "Ana Paula dos Santos Gomes": {
        email: "ana.paula1@animaeducacao.com.br",
        cursos: ["Nutrição", "Nutrição (Semipresencial) 30/70", "Psicologia"]
    },
    "Camilla Ayala Felisberto Silva": {
        email: "camilla.felisberto@animaeducacao.com.br",
        cursos: ["Análise e Desenvolvimento de Sistemas","Análise e Desenvolvimento de Sistemas (Semipresencial) 30/70",
        "Ciência da Computação (Semipresencial) 30/70",

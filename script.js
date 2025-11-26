console.log("Script carregado!");

const dias = [
    {
        nome: "Segunda-feira",
        horarios: [
            "Marcos Ferreira Benedito — 08:00 às 12:00",
            "Ana Paula dos Santos Gomes — 8:30 às 12:30",
            "Cristina Carvalho de Melo — 11:40 às 13:40",
            "Camilla Ayala Felisberto Silva — 13:00 às 17:00",
            "Ana Paula dos Santos Gomes — 13:00 às 15:00",
            "Elizabeth Rodrigues Brito Ibrahim — 14:00 às 17:00",
            "Cristina Carvalho de Melo — 15:00 às 19:00",
            "Elisa Siqueira — 14:00 às 21:00",
            "Marcos Ferreira Benedito — 16:00 às 21:00"
        ]
    },

    {
        nome: "Terça-feira",
        horarios: [
            "Elizabeth Rodrigues Brito Ibrahim — 13:00 às 17:00",
            "Ana Amelia Fonseca Viana Cruz — 08:30 às 12:30",
            "Ana Amelia Fonseca Viana Cruz — 13:30 às 17:30",
            "Ana Paula dos Santos Gomes — 14:30 às 19:00",
            "Marcos Ferreira Benedito — 14:00 às 18:00",
            "Camilla Ayala Felisberto Silva — 15:00 às 19:00",
            "Elisa Siqueira — 14:00 às 19:00",
            "Cristina Carvalho de Melo — 15:00 às 20:30"
        ]
    },

    {
        nome: "Quarta-feira",
        horarios: [
            "Elisa Siqueira — 8:00 às 13:00",
            "Marcos Ferreira Benedito — 17:00 às 21:00",
            "Elizabeth Rodrigues Brito Ibrahim — 17:00 às 21:00"
        ]
    },

    {
        nome: "Quinta-feira",
        horarios: [
            "Daniel Portela Dias Machado — 08:00 às 12:00",
            "Camilla Ayala Felisberto Silva — 13:00 às 17:00",
            "Danielle Portela Dias Machado — 15:00 às 21:00",
            "Ana Amelia Fonseca Viana Cruz — 13:00 às 21:00"
        ]
    },

    {
        nome: "Sexta-feira",
        horarios: [
            "Camilla Ayala Felisberto Silva — 9:00 às 13:00",
            "Daniel Portela Dias Machado — 17:00 às 19:00",
            "Cristina Carvalho de Melo — 14:30 às 19:00",
            "Marcos Ferreira Benedito — 17:00 às 19:00",
            "Elizabeth Rodrigues Brito Ibrahim — 17:00 às 21:00"
        ]
    }
];

let index = 0;

function atualizar() {
    document.getElementById("dia-atual").innerText = dias[index].nome;

    document.getElementById("conteudo").innerHTML =
        dias[index].horarios.map(h => `<p>${h}</p>`).join("");
}

document.getElementById("prev").onclick = () => {
    index = (index === 0) ? dias.length - 1 : index - 1;
    atualizar();
};

document.getElementById("next").onclick = () => {
    index = (index === dias.length - 1) ? 0 : index + 1;
    atualizar();
};

atualizar();

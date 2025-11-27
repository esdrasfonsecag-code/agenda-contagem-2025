// Dados da escala (organizados em colunas)
const agenda = {
    segunda: [
        { nome: "Marcos Ferreira", hora: "08:00–12:00", email: "marcos.benedito@animaeducacao.com.br" },
        { nome: "Ana Paula", hora: "08:30–12:30", email: "ana.paula@animaeducacao.com.br" },
        { nome: "Cristina Melo", hora: "11:40–13:40", email: "cristina.melo@animaeducacao.com.br" },
        { nome: "Camilla Ayala", hora: "13:00–17:00", email: "camilla.silva@animaeducacao.com.br" },
        { nome: "Ana Paula", hora: "13:00–15:00", email: "ana.paula@animaeducacao.com.br" },
        { nome: "Elizabeth Ibrahim", hora: "14:00–17:00", email: "elizabeth.ibrahim@animaeducacao.com.br" },
        { nome: "Cristina Melo", hora: "15:00–19:00", email: "cristina.melo@animaeducacao.com.br" },
        { nome: "Elisa Siqueira", hora: "14:00–21:00", email: "elisa.siqueira@animaeducacao.com.br" },
        { nome: "Marcos Ferreira", hora: "16:00–21:00", email: "marcos.benedito@animaeducacao.com.br" }
    ],

    terça: [
        { nome: "Elizabeth Ibrahim", hora: "13:00–17:00", email: "elizabeth.ibrahim@animaeducacao.com.br" },
        { nome: "Ana Amélia", hora: "08:30–12:30", email: "ana.cruz@animaeducacao.com.br" },
        { nome: "Ana Amélia", hora: "13:30–17:30", email: "ana.cruz@animaeducacao.com.br" },
        { nome: "Ana Paula", hora: "14:30–19:00", email: "ana.paula@animaeducacao.com.br" },
        { nome: "Marcos Ferreira", hora: "14:00–18:00", email: "marcos.benedito@animaeducacao.com.br" },
        { nome: "Camilla Ayala", hora: "15:00–19:00", email: "camilla.silva@animaeducacao.com.br" },
        { nome: "Daniel Portela", hora: "15:00–19:00", email: "daniel.portela@animaeducacao.com.br" },
        { nome: "Cristina Melo", hora: "15:00–20:30", email: "cristina.melo@animaeducacao.com.br" },
        { nome: "Elisa Siqueira", hora: "14:00–19:00", email: "elisa.siqueira@animaeducacao.com.br" }
    ],

    quarta: [
        { nome: "Elisa Siqueira", hora: "08:00–13:00", email: "elisa.siqueira@animaeducacao.com.br" },
        { nome: "Marcos Ferreira", hora: "17:00–21:00", email: "marcos.benedito@animaeducacao.com.br" },
        { nome: "Elizabeth Ibrahim", hora: "17:00–21:00", email: "elizabeth.ibrahim@animaeducacao.com.br" }
    ],

    quinta: [
        { nome: "Daniel Portela", hora: "08:00–12:00", email: "daniel.portela@animaeducacao.com.br" },
        { nome: "Camilla Ayala", hora: "13:00–17:00", email: "camilla.silva@animaeducacao.com.br" },
        { nome: "Ana Paula", hora: "15:30–21:00", email: "ana.paula@animaeducacao.com.br" },
        { nome: "Ana Amélia", hora: "13:00–21:00", email: "ana.cruz@animaeducacao.com.br" },
        { nome: "Daniel Portela", hora: "15:00–21:00", email: "daniel.portela@animaeducacao.com.br" }
    ],

    sexta: [
        { nome: "Camilla Ayala", hora: "09:00–13:00", email: "camilla.silva@animaeducacao.com.br" },
        { nome: "Daniel Portela", hora: "17:00–19:00", email: "daniel.portela@animaeducacao.com.br" },
        { nome: "Cristina Melo", hora: "14:30–19:00", email: "cristina.melo@animaeducacao.com.br" },
        { nome: "Marcos Ferreira", hora: "17:00–19:00", email: "marcos.benedito@animaeducacao.com.br" },
        { nome: "Elizabeth Ibrahim", hora: "17:00–21:00", email: "elizabeth.ibrahim@animaeducacao.com.br" }
    ]
};

// Preenchendo a tabela dinamicamente
const dias = ["segunda", "terça", "quarta", "quinta", "sexta"];
const tabela = document.getElementById("agenda");
let linhas = "";

// Descobrir o maior número de linhas
const maxLinhas = Math.max(...dias.map(d => agenda[d].length));

for (let i = 0; i < maxLinhas; i++) {
    linhas += "<tr>";

    dias.forEach(dia => {
        const item = agenda[dia][i];

        if (item) {
            linhas += `
                <td>
                    <b>${item.nome}</b><br>
                    ${item.hora}<br>
                    <a href="mailto:${item.email}">
                        <i class="fas fa-envelope email-btn"></i>
                    </a>
                </td>`;
        } else {
            linhas += "<td></td>";
        }
    });

    linhas += "</tr>";
}

tabela.innerHTML = linhas;

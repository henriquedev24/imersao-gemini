let lugares = [
    {
        titulo: "Londres",
        descricao: "Londres, capital da Inglaterra e do Reino Unido, é uma metrópole cosmopolita que combina a rica história com a modernidade. Desde a época romana, a cidade cresceu e se tornou um centro financeiro, cultural e político de importância global. Monumentos históricos como o Big Ben e o Palácio de Buckingham coexistem com uma vibrante cena artística e musical.",
        link: "https://www.visitlondon.com/"
    },
    {
        titulo: "Salvador",
        descricao: "Salvador, a primeira capital do Brasil, é uma cidade vibrante e cheia de história. Conhecida como a 'Roma Negra', possui um rico patrimônio cultural e histórico, com construções coloniais, igrejas barrocas e uma culinária afro-brasileira única. O Carnaval de Salvador é um dos maiores do mundo.",
        link: "https://www.salvador.ba.gov.br/turismo/"
    },
    {
        titulo: "Fernando de Noronha",
        descricao: "Fernando de Noronha é um arquipélago paradisíaco localizado no Oceano Atlântico, conhecido por suas praias de águas cristalinas, recifes de corais e vida marinha exuberante. É um destino ideal para quem busca contato com a natureza e praticar atividades como mergulho e snorkeling.",
        link: "https://www.noronha.pe.gov.br/"
    }
];

function pesquisar() {
    let section = document.getElementById("resultpesquisa")
   
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa){
        section.innerHTML = "<h2>Nenhum local encontrado</h2>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultado = ""
    let titulo = ""
    let descricao = ""

    for (let local of lugares) {
        titulo = local.titulo.toLowerCase()
        descricao = local.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
           resultado +=
            `<div class="item-resultado">
            <h2><a href="#" target="_blank">${local.titulo}</a></h2>
            <p>${local.descricao}</p>
            <a href=${local.link} target="_blank">Mais informações</a>
            </div>` 
        }

        if (!resultado){
            resultado = "<h2>Nenhum local encontrado</h2>"
        }
    }
    section.innerHTML = resultado
}






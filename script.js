function getInitialFriday() {
  return new Date("01/03/2020");
}

function getLastFriday() {
  var d = new Date(),
    day = d.getDay(),
    diff = (day <= 5) ? (7 - 5 + day) : (day - 5);

  d.setDate(d.getDate() - diff);
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);

  return d.getTime();
}

function dataFormatada(data) {
  let dia = data.getDate().toString(),
    diaF = (dia.length == 1) ? '0' + dia : dia,
    mes = (data.getMonth() + 1).toString(),
    mesF = (mes.length == 1) ? '0' + mes : mes;
  return diaF + "/" + mesF;
}

function addDays(date, days) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function diffWeeks(date1, date2) {
  var timeDiff = date2.getTime() - date1.getTime();
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return (diffDays - 1) / 7;
}

function retornaNotasGenericas() {
  const frases = [
    "Bolinho de queijo crocante é muito bom",
    "Comendo e Recomendo!",
    "Cookie é bom ninguém quer dar"];

  return frases[Math.floor(Math.random() * frases.length)];
}

function retornaReclamacoesGenericas() {
  const frases = [
    "o risoles de palmito acabou rapidinho",
    "esfiha de carne é muito seca",
    "faltou bolo",
    "foda é pagar R$ 563.423.196,55 no refri...",
    "coca-quente é de f#d$r",
    "sobrou coxinha"];

  return frases[Math.floor(Math.random() * frases.length)];
}

function retornaRecomendacoesGenericas() {
  const frases = [
    "Quero brownie",
    "E se rolar um japa dessa vez?",
    "Dá pra trazer sorvete também?",
    "- coxinha default + coxinha com catupiry"];

  return frases[Math.floor(Math.random() * frases.length)];
}

const sequencia = [
  {
    nome: "Pedro II",
    img: ""
  },
  {
    nome: "Leonardo",
    img: "leonardo.jpg"
  },
  {
    nome: "Mina do Edílio",
    img: "rafael.jpg"
  },
  {
    nome: "Barone",
    img: "baroni.jpeg"
  },
  {
    nome: "Natália",
    img: "natalia.jpeg"
  },
  {
    nome: "Crossfit",
    img: "crossfit.jpg"
  },
  {
    nome: "Costa Rica",
    img: "costa-rica.jpeg"
  },
  {
    nome: "Chefaço",
    img: "chefaco.jpg"
  },
  {
    nome: "Laion",
    img: "laion.jpg"
  },
  {
    nome: "Fernando",
    img: "fernando.jpg"
  },
  {
    nome: "Baby Face",
    img: "babyface.jpg"
]

function start() {
  // Configura datas próximas -1 0 1 2
  let datas = document.getElementsByClassName("f2 heading--sanSerif");
  const dataBase = new Date(getLastFriday());

  let imagens = document.getElementsByClassName("tl-bg");

  for (let i = 0; i < 4; i++) {
    let dataCoxinha = addDays(dataBase, i * 7);
    let semanaAtual = diffWeeks(getInitialFriday(), dataCoxinha);
    datas[i].innerHTML = dataFormatada(dataCoxinha);

    imagens[i].style.backgroundImage = "url('./img/" + sequencia[semanaAtual].img + "')";
  }


  // Depoimento para última data
  let depoimentosE = document.getElementsByClassName("depoimento");
  depoimentosE[0].innerHTML = retornaNotasGenericas() + "<br> mas, " + retornaReclamacoesGenericas();

  // Sugestoes
  let sugestoes = document.getElementsByClassName("sugestoes");
  sugestoes[0].innerHTML = retornaRecomendacoesGenericas();
  sugestoes[1].innerHTML = "Padaria Real - (15) 3234-9474";
}
window.onload = start;



const pegarTexto = () =>{
    let pontuacao = ",.?!"
    let texto = document.querySelector(".main__corpo__texto").value;
    let textoSemPonto = texto.split("").filter(ponto => pontuacao.indexOf(ponto)<0).join("");
    let arrayTexto = textoSemPonto.split(" ");

    let map = criarMap(arrayTexto);

    for (var [palavra, valor] of Object.entries(map)) {
        construirNuvem(palavra,valor);
    }

}

const criarMap = (arrayTexto) =>{
    let map = {};

    for (palavra of arrayTexto){
        if(map[palavra]==undefined){
            map[palavra]=1;
        }else{
            map[palavra]++;
        }
    }

    return map

}

const construirNuvem = (palavra,valor) =>{
    let corpoNuvem = document.querySelector('.main__nuvem');

    let p = document.createElement("p");
    p.innerHTML = `${palavra}`;

    let pStyle =  addStyle(p,valor);

    corpoNuvem.appendChild(pStyle);

}

const addStyle = (p,valor)=>{
    p.style.fontSize = `${15*valor}px`;
    p.style.display="inline-block";
    p.style.padding="0px 1px";
    p.style.margin="0px";
    p.style.position = "relative";

    p.style.color = `#${9*valor}${2*valor}${3*valor}`

    return p ;
}

let button = document.querySelector(".main__corpo__botao");

button.addEventListener("click", ()=>{
    pegarTexto();
})

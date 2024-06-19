function show_Header(){
    // Declara 'tela' para receber a primeira tag 'header'
    let tela = document.getElementsByTagName('header')[0];

    // Se a tela for tiver a largura menor ou igual a 768px, insere 
    if(window.screen.width <= 768){
        tela.innerHTML = 
        `
        <div class="row">
            <div class="col-10" id="col_tit_header">
                <a class="cabecalho_links" href="./index.html">
                    <h1 class="cabecalho_titulo">ConstruSite</h1>
                </a>
            </div>
            <div class="col-2">
                    <button id="btn_menu" type="button" onclick="show_Menu(event)"><img src="assets/img/menu.png" 
                            alt="Três linhas na vertical, espaçadas uma da outra verticalmente" id="img_menu"></button>
            </div>
        </div>
        `
    }

    else{
        tela.innerHTML = 
        `
        <div class="row">
            <div class="col-4" id="col_tit_header">
                <a class="cabecalho_links" href="./index.html">
                    <h1 class="cabecalho_titulo">ConstruSite</h1>
                </a>
            </div>
            <div class="col-8">
                <div class="row cabecalho_opcoes">
                    <div class="col-5 col-lg-4">
                        <a class="cabecalho_links" href="./departamentos.html">
                            <h2 class="cabecalho_subtitulo">Departamentos</h2>
                        </a>
                    </div>
                    <div class="col-4 col-lg-4">
                        <a class="cabecalho_links" href="./promocoes.html">
                            <h2 class="cabecalho_subtitulo">Promoções</h2>
                        </a>
                    </div>
                    <div class="col-1 col-lg-1">
                        <a class="cabecalho_links" href="./favoritos.html"><img class="cabecalho_icone"
                            src="assets/img/estrela.png" alt="Estrela"></a>
                    </div>
                    <div class="col-1 col-lg-1">
                        <a class="cabecalho_links" href="./favoritos.html"><img class="cabecalho_icone"
                            src="assets/img/vista-lateral-vazia-do-carrinho-de-compras.png" alt="Carrinho"></a>
                    </div>
                    <div class="col-1 col-lg-1">
                        <a class="cabecalho_links" href="./cadastro.html"><img class="cabecalho_icone"
                            src="assets/img/do-utilizador.png" alt="Usuario"></a>
                    </div>
                </div>
            </div>
        </div>
        `
    }

}



function show_Menu(event){
    event.preventDefault();
    document.getElementById("mySidebar").style.width = "250px";
}

function hide_Menu(event){
    event.preventDefault();
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
}

// Declara os botões

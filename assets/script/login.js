let tela = document.getElementsByTagName('main')[0];
document.getElementById('formulario_cadastro').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('email').value;
    const password = document.getElementById('senha').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simulação de autenticação
    const validUsername = 'arthurhenrym@gmail.com';
    const validPassword = '12345';

    if (username === validUsername && password === validPassword) {
        tela.innerHTML =
            `     
   
    
    <main class="conteudo">

            <div class="container-fluid" id="cadastro">

                <div class="row">
                    <h1 class="tit_main">Perfil</h1>
                </div>

                <div class="row">
                    <div class="col-4">
                        <img id="img_perfil" src="assets/img/foto_perf_default.png" alt="Foto de Perfil">
                    </div>

                    <div class="col-8">
                        <div class="row" id="dados_cadastrais">
                            <!-- Dados cadastrais -->
                            <span class="tit_secao">Dados Cadastrais</span>

                            <div class="col-6">
                                <span class="tit_campo">Nome Completo</span>
                                <p id="n_completo" class="cont_campo">Exemplo</p>
                            </div>

                            <div class="col-6">
                                <span class="tit_campo">CPF</span>
                                <p id="cpf" class="cont_campo">000.000.000-00</p>
                            </div>

                            <div class="col-6">
                                <span class="tit_campo">Data de Nascimento</span>
                                <p id="data_nasc" class="cont_campo">01/01/1970</p>
                            </div>

                            <div class="col-6">
                                <span class="tit_campo">Número de Celular</span>
                                <p id="num_cel" class="cont_campo">(00) 0 0000-0000</p>
                            </div>

                            <div class="col-6">
                                <span class="tit_campo">E-mail</span>
                                <p id="email" class="cont_campo">exemplo@exemplo.com</p>
                            </div>

                            <div class="col-6">
                                <span class="tit_campo">Número de Telefone</span>
                                <p id="num_tel" class="cont_campo">(00) 0000-0000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <!-- Dados do Endereço -->
                    <span class="tit_secao">Endereço</span>

                    <div class="col-4">
                        <span class="tit_campo">Estado</span>
                        <p id="estado" class="cont_campo">MG</p>
                    </div>

                    <div class="col-4">
                        <span class="tit_campo">Cidade</span>
                        <p id="cidade" class="cont_campo">Cidade Tal</p>
                    </div>

                    <div class="col-4">
                        <span class="tit_campo">Rua</span>
                        <p id="rua" class="cont_campo">Rua Tal</p>
                    </div>

                    <div class="col-4">
                        <span class="tit_campo">Número</span>
                        <p id="num" class="cont_campo">Número Tal</p>
                    </div>

                    <div class="col-4">
                        <span class="tit_campo">Bairro</span>
                        <p id="bairro" class="cont_campo">Bairro Tal</p>
                    </div>

                    <div class="col-4">
                        <span class="tit_campo">Complemento</span>
                        <p id="complemento" class="cont_campo">Complemento Tal</p>
                    </div>
                </div>
            </div>
    </main>`
        // Redirecionar para outra página ou realizar outras ações

    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos';
        errorMessage.style.display = 'block';
    }


});
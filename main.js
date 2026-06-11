document.addEventListener('DOMContentLoaded', () => {
    // Seleção de Elementos do DOM
    const menuBotao = document.getElementById('botao-acessibilidade');
    const menuOpcoes = document.getElementById('opcoes-acessibilidade');
    const btnAumentar = document.getElementById('aumentar-fonte');
    const btnDiminuir = document.getElementById('diminuir-fonte');
    const btnContraste = document.getElementById('alterna-contrastes');

    // Configurações de Estado
    let tamanhoAtualFonte = 1.0;
    const FONTE_MAX = 2.0;
    const FONTE_MIN = 0.8;
    const PASSO_FONTE = 0.1;

    // --- Funções de Ação ---

    const alternarMenuAcessibilidade = () => {
        menuBotao.classList.toggle('rotacao-botao');
        menuOpcoes.classList.toggle('apresenta-lista');

        const estaExpandido = menuBotao.getAttribute('aria-expanded') === 'true';
        menuBotao.setAttribute('aria-expanded', !estaExpandido);
    };

    const alterarTamanhoFonte = (modificador) => {
        const novoTamanho = tamanhoAtualFonte + modificador;

        // Validação de limites (Garante que fique entre 0.8 e 2.0)
        if (novoTamanho >= FONTE_MIN && novoTamanho <= FONTE_MAX) {
            tamanhoAtualFonte = novoTamanho;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    };

    const alternarAltoContraste = () => {
        const ativo = document.body.classList.toggle('alto-contraste');
        btnContraste.setAttribute('aria-pressed', ativo);
    };

    // --- Ouvintes de Eventos (Listeners) ---

    menuBotao.addEventListener('click', menuBotao);
    btnAumentar.addEventListener('click', () => alterarTamanhoFonte(PASSO_FONTE));
    btnDiminuir.addEventListener('click', () => alterarTamanhoFonte(-PASSO_FONTE));
    btnContraste.addEventListener('click', alternarAltoContraste);
});
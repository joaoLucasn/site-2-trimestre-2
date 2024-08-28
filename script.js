document.addEventListener('DOMContentLoaded', () => {


    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoJogarNovamente = document.querySelector(".novamente-btn");
    const botaoIniciar = document.querySelector(".iniciar-btn");


    const perguntas = [
        {
            enunciado: "Clebinho encontra uma goiaba e uma sopa de macaco. O que ele escolhe?",
            alternativas: [
                {
                    texto: "Clebinho decide pegar a goiaba.",
                    afirmacao: "Clebinho escolheu a goiaba porque é doce e suculenta."
                },


                {
                    texto: "Clebinho opta pela sopa de macaco.",
                    afirmacao: "Clebinho preferiu a sopa de macaco por ser uma escolha exótica e aventureira."
                }
            ]
        },






        {
            enunciado: "Após escolher, Clebinho sente uma leve dúvida. O que ele faz?",
            alternativas: [
                {
                    texto: "Clebinho reafirma sua escolha e dá uma mordida na goiaba.",
                    afirmacao: "Ele aproveitou o sabor fresco e doce da goiaba, sem arrependimentos."
                },
                {
                    texto: "Clebinho reconsidera e prova a sopa de macaco.",
                    afirmacao: "A curiosidade venceu e Clebinho experimentou o sabor único da sopa de macaco."
                }
            ]

        },




        {
            enunciado: "Clebinho agora precisa decidir como usar sua energia após a refeição. Qual é a próxima ação?",
            alternativas: [
                {
                    texto: "Clebinho decide descansar sob uma árvore.",
                    afirmacao: "Ele relaxou e aproveitou a sombra, reenergizando-se para novas aventuras."
                },
                {
                    texto: "Clebinho escolhe explorar uma floresta próxima.",
                    afirmacao: "Ele decidiu explorar e descobrir novos caminhos, repleto de energia."
                }
            ]
        },




        {
            enunciado: "Durante a exploração, Clebinho encontra uma bifurcação no caminho. O que ele faz?",
            alternativas: [
                {
                    texto: "Clebinho pega o caminho à esquerda, que parece mais seguro.",
                    afirmacao: "Ele optou pela segurança e seguiu por um caminho tranquilo e familiar."
                },
                {
                    texto: "Clebinho escolhe o caminho à direita, que parece mais desafiador.",
                    afirmacao: "Ele seguiu seu espírito aventureiro e enfrentou os desafios que o aguardavam."
                }
            ]
        },




        {
            enunciado: "Clebinho chega a uma caverna misteriosa. Qual é a sua decisão?",
            alternativas: [
                {
                    texto: "Clebinho decide entrar na caverna e explorar.",
                    afirmacao: "Sua curiosidade o levou a descobrir tesouros escondidos e novos conhecimentos."
                },
                {
                    texto: "Clebinho decide não entrar e continuar seu caminho.",
                    afirmacao: "Ele preferiu continuar sua jornada, deixando a caverna como um mistério a ser resolvido outro dia."
                }
            ]
        }
    ];






    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
              return;
        }
        perguntaAtual = perguntas[atual];
                        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.innerHTML = "";
        mostraAlternativas();
    }

    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
                        const botaoAlternativas = document.createElement("button");
             botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
                            caixaAlternativas.appendChild(botaoAlternativas);
        }
        caixaPerguntas.classList.remove('hidden');
            caixaAlternativas.classList.remove('hidden');
    }

    function respostaSelecionada(opcaoSelecionada) {
         const afirmacoes = opcaoSelecionada.afirmacao;
            historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado() {
        caixaPerguntas.classList.add('hidden');
                caixaAlternativas.classList.add('hidden');
        caixaResultado.classList.remove('hidden');
         textoResultado.textContent = historiaFinal;
    }

    function iniciarQuestionario() {
        botaoIniciar.classList.add('hidden');
                caixaPerguntas.classList.remove('hidden');
            caixaAlternativas.classList.remove('hidden');
        mostraPergunta();
    }

    botaoJogarNovamente.addEventListener("click", () => {
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.add('hidden');
        botaoIniciar.classList.remove('hidden');
    });

    botaoIniciar.addEventListener("click", iniciarQuestionario);

    caixaPerguntas.classList.add('hidden');
    caixaAlternativas.classList.add('hidden');
});

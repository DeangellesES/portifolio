// trocar cores
let escuro = true;

function trocarTema() {
    if (escuro) {
        // muda para tema claro
        document.documentElement.style.setProperty('--cor-fundo', '#fff3f3');
        document.documentElement.style.setProperty('--cor-texto', 'black');
    } else {
        // volta para tema escuro
        document.documentElement.style.setProperty('--cor-fundo', 'black');
        document.documentElement.style.setProperty('--cor-texto', '#fff3f3');
    }

    escuro = !escuro;
}

// troca icone de sol pra lua e vice versa
const toggleBtn = document.getElementById('toggleBtn');
const toggleIcon = document.getElementById('toggleIcon');

toggleBtn.addEventListener('click', () => {
    toggleIcon.classList.toggle('fa-sun');
    toggleIcon.classList.toggle('fa-moon');
});

// troca icone de sol pra lua e vice versa responsivo
const toggleBtnResponsivo = document.getElementById('cabecalho-toggleBtn');
const toggleIconResponsivo = document.getElementById('cabecalho-toggleIcon');

toggleBtnResponsivo.addEventListener('click', () => {
    toggleIconResponsivo.classList.toggle('fa-sun');
    toggleIconResponsivo.classList.toggle('fa-moon');
});

function menuClick() {
    const menuClick = document.querySelector('header .esconder-bars')
    const nav = document.querySelector('header .menu')

    menuClick.addEventListener('click', clicou)

    function clicou() {
        nav.classList.toggle("ativo")
    }
}

menuClick()

// colocar musica para tocar
const botao = document.getElementById("playButton");
const musica = document.getElementById("musica");

let tocando = false;

botao.addEventListener("click", () => {
    if (!tocando) {
        musica.play();
        tocando = true;
        botao.innerHTML = '<i class="fa-solid fa-pause"></i> <i class="fa-solid fa-music"></i>';
    } else {
        musica.pause();
        tocando = false;
        botao.innerHTML = '<i class="fa-solid fa-play"></i> <i class="fa-solid fa-music"></i>';
    }
});

// colocar musica para tocar responsivo
const botaoResponsivo = document.getElementById("cabecalho-playButton");
const musicaResponsivo = document.getElementById("cabecalho-musica");

let tocandoResponsivo = false;

botaoResponsivo.addEventListener("click", () => {
    if (!tocandoResponsivo) {
        musicaResponsivo.play();
        tocandoResponsivo = true;
        botaoResponsivo.innerHTML = '<i class="fa-solid fa-pause"></i> <i class="fa-solid fa-music"></i>';
    } else {
        musicaResponsivo.pause();
        tocandoResponsivo = false;
        botaoResponsivo.innerHTML = '<i class="fa-solid fa-play"></i> <i class="fa-solid fa-music"></i>';
    }
});

// funcionalidade traduzir textos
const translations = {
    pt: {
        heroText: [
            "Olá, Meu Nome é Felipe Deangelles",
            "Sou Desenvolvedor de Software",
            "Estou Graduando Engenharia de Software",
            "Seja Bem-Vindo ao Meu Portifólio!"
        ],
        item: "Início",
        item1: "Sobre Mim",
        item2: "Habilidades",
        item3: "Projetos",
        item4: "Contato",
        apresentacaoNome: "Olá, Meu Nome é Felipe Deangelles",
        apresentacaoSou: "Sou Desenvolvedor de Software",
        apresentacaoSeja: "Seja Bem-Vindo ao Meu Portifólio!",
        vamosConversar: "Vamos conversar",
        aboutMe: "Sobre Mim",
        apresentacaoPessoal: "Apresentação Pessoal",
        apresentacaoTexto: "Meu nome é Felipe Deangelles, sou natural de Minas Gerais. Sou desenvolvedor de Software e estou graduando em Engenharia de Software.Tenho 29 anos e sou um programador Full-Stack apaixonado por tecnologia. Desde muito cedo desenvolvi um amor pela forma como a tecnologia influencia o mundo ao nosso redor, desde de sempre fui encantado e tive muito interesse e curisosidade por tecnologia e o universo da computação. Foi na programação que encontrei meu verdadeiro propósito. Sou apaixonado por criar soluções tecnológicas que resolvem problemas reais e que agregam valor aos usuários. Estou sempre em busca de conhecimento e me mantenho atualizado com as últimas tendências e tecnologias do mundo da programação. Quero poder desenvolver todo o tipo de software independente da tecnologia. Tenho experiência em projetos acadêmicos e pessoais.",
        profissaoFromacao: "Formação",
        profissaoCurso: "Engenharia de Software",
        profissaoStatus: "Em andamento",
        minhasEspecialidades: "Minhas Especialidades",
        lojasOnline: "Lojas Online",
        aplicativosMobile: "Aplicativos Mobile",
        ferramentasDigitais: "Ferramentas Digitais",
        minhasHabilidades: "Minhas Habilidades",
        tecnologiasFerramentas: "Tecnologias e ferramentas que domino para criar experiências incríveis",
        projetosTitulo: "Projetos",
        vamosConversar1: "Vamos conversar?",
        entreEmContato: "Entre em Contato",
        estouSempre: "Estou sempre aberto a novas oportunidades e projetos interessantes. Vamos criar algo incrível juntos! Entre em contato e vamos conversar!",
        telefone: "Telefone",
        localizacao: "Localização",
        nome: "Nome",
        assunto: "Assunto",
        mensagem: "Mensagem",
        enviar: "Enviar Mensagem",
        direitos: "© 2025 Felipe Deangelles. Todos os direitos reservados.",
    },
    en: {
        heroText: [
            "Hello, My Name is Felipe Deangelles",
            "I am a Software Developer",
            "I am Studying Software Engineering",
            "Welcome to My Portfolio!"
        ],
        item: "Start",
        item1: "About Me",
        item2: "Skills",
        item3: "Projects",
        item4: "Contact",
        apresentacaoNome: "Hello, My Name is Felipe Deangelles",
        apresentacaoSou: "I am a Software Developer",
        apresentacaoSeja: "Welcome to My Portfolio!",
        vamosConversar: "Let's talk",
        aboutMe: "About Me",
        apresentacaoPessoal: "Personal Presentation",
        apresentacaoTexto: "My name is Felipe Deangelles, I'm from Minas Gerais, Brazil. I'm a Software Developer and I'm graduating in Software Engineering. I'm 29 years old and a Full-Stack programmer passionate about technology. From a very young age, I developed a love for how technology influences the world around us; I've always been fascinated and had a great interest and curiosity in technology and the world of computing. It was in programming that I found my true purpose. I'm passionate about creating technological solutions that solve real problems and add value to users. I'm always seeking knowledge and keeping up-to-date with the latest trends and technologies in the world of programming. I want to be able to develop all types of software, regardless of technology. I have experience in academic and personal projects.",
        profissaoFromacao: "Training",
        profissaoCurso: "Software Engineering",
        profissaoStatus: "In progress",
        minhasEspecialidades: "My Specialties",
        lojasOnline: "Online Stores",
        aplicativosMobile: "Mobile Applications",
        ferramentasDigitais: "Digital Tools",
        minhasHabilidades: "My Skills",
        tecnologiasFerramentas: "Technologies and tools I master to create incredible experiences",
        projetosTitulo: "Projects",
        vamosConversar1: "Let's talk?",
        entreEmContato: "Get in touch",
        estouSempre: "I'm always open to new opportunities and interesting projects. Let's create something amazing together! Get in touch and let's talk!",
        telefone: "Telephone",
        localizacao: "Location",
        nome: "Name",
        assunto: "Subject",
        mensagem: "Message",
        enviar: "Send message",
        direitos: "© 2025 Felipe Deangelles. All rights reserved.",
    },
    es: {
        heroText: [
            "Hola, mi Nombre es Felipe Deangelles",
            "Soy Desarrollador de Software",
            "Me graduaré con un título en Ingeniería de Software",
            "¡Bienvenidos a mi Portafolio!"
        ],
        item: "Comenzar",
        item1: "Acerca de mí",
        item2: "Habilidades",
        item3: "Proyectos",
        item4: "Contacto",
        apresentacaoNome: "Hola, mi Nombre es Felipe Deangelles",
        apresentacaoSou: "Soy Desarrollador de Software",
        apresentacaoSeja: "¡Bienvenidos a mi Portafolio!",
        vamosConversar: "hablemos",
        aboutMe: "Acerca de mí",
        apresentacaoPessoal: "Presentación Personal",
        apresentacaoTexto: "Me llamo Felipe Deangelles y soy de Minas Gerais, Brasil. Soy desarrollador de software y me estoy graduando en Ingeniería de Software. Tengo 29 años y soy programador full-stack, apasionado por la tecnología. Desde muy pequeño, me ha fascinado cómo la tecnología influye en el mundo que nos rodea; siempre he sentido una gran curiosidad e interés por la tecnología y el mundo de la informática. Fue en la programación donde encontré mi verdadera vocación. Me apasiona crear soluciones tecnológicas que resuelvan problemas reales y aporten valor a los usuarios. Siempre estoy buscando aprender y manteniéndome al día con las últimas tendencias y tecnologías en el mundo de la programación. Quiero ser capaz de desarrollar todo tipo de software, independientemente de la tecnología. Tengo experiencia en proyectos académicos y personales.",
        profissaoFromacao: "Capacitación",
        profissaoCurso: "Ingeniería de software",
        profissaoStatus: "En curso",
        minhasEspecialidades: "Mis especialidades",
        lojasOnline: "Tiendas en línea",
        aplicativosMobile: "Aplicaciones móviles",
        ferramentasDigitais: "Herramientas digitales",
        minhasHabilidades: "Mis habilidades",
        tecnologiasFerramentas: "Tecnologías y herramientas que he dominado para crear experiencias increíbles.",
        projetosTitulo: "Proyectos",
        vamosConversar1: "¿Hablamos?",
        entreEmContato: "Ponte en contacto",
        estouSempre: "Siempre estoy abierta a nuevas oportunidades y proyectos interesantes. ¡Creemos algo increíble juntos! ¡Contáctanos y hablemos!",
        telefone: "Teléfono",
        localizacao: "Ubicación",
        nome: "Nombre",
        assunto: "Sujeto",
        mensagem: "Mensaje",
        enviar: "Enviar Mensaje",
        direitos: "© 2025 Felipe Deangelles. Todos los derechos reservados.",
    }
};

const langSwitcher = document.getElementById("lang-switcher");

langSwitcher.addEventListener("change", () => {
    const selectedLang = langSwitcher.value;
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[selectedLang][key];
    });
});

// TRADUZIR TELA RESPONSIVA
const langSwitcherResponsivo = document.getElementById("cabecalho-lang-switcher");

langSwitcherResponsivo.addEventListener("change", () => {
    const selectedLang = langSwitcherResponsivo.value;
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[selectedLang][key];
    });
});

// inicio animação de escrever texto
let arrayText = translations.pt.heroText

// const arrayText = [
//     "Olá, Meu Nome é Felipe Deangelles",
//     "Sou Desenvolvedor de Software",
//     "Estou Graduando Engenharia de Software",
//     "Seja Bem-Vindo ao Meu Portifólio!"
// ]

const writeTime = 80
const removeTime = 1000

let indexSentence = 0
let indexChar = 0

const element = document.querySelector("#text")

function writeText() {
    if (indexChar <= arrayText[indexSentence].length) {
        element.textContent = arrayText[indexSentence].substring(0, indexChar)
        indexChar++
        setTimeout(writeText, writeTime)
    } else {
        setTimeout(removeText, removeTime)
    }
}

function removeText() {
    if (indexChar >= 0) {
        element.textContent = arrayText[indexSentence].substring(0, indexChar)
        indexChar--
        setTimeout(removeText, writeTime)
    } else {
        indexSentence++
        if (indexSentence >= arrayText.length) {
            indexSentence = 0
        }
        setTimeout(writeText, removeTime)
    }
}

langSwitcher.addEventListener("change", () => {
    const selectedLang = langSwitcher.value
    arrayText = translations[selectedLang].heroText
    // reinicia a animação com o novo idioma
    indexSentence = 0
    indexChar = 0
    // writeText()
})

writeText()

// FUNCIONALIDADE SWIPER HABILIDADES
const swiper1 = new Swiper('.swiperHabilidades', {
    slidesPerView: 'auto',
    loop: false,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    //   freeMode: true,
    freeModeMomentum: false,
    // allowTouchMove: false,

});

// FUNCIONALIDADE DE ENVIAR FORMULARIO PARA O EMAIL
emailjs.init({
    publicKey: "FxE8Olj2XwpB1cro3",
});

document.getElementById("contact_form").addEventListener("submit", function (event) {
    event.preventDefault()

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    const serviceId = "service_06lw2vc"
    const templateID = "template_qc7puld"
    const submitButton = document.getElementById("submit_button")
    submitButton.textContent = "Enviando..."
    submitButton.disabled = true;


    emailjs.send(serviceId, templateID, formData)
        .then(() => {
            Toastify({
                text: "E-mail enviado com sucesso!",
                duration: 3000,
                style: {
                    background: "#28a745",
                    color: "#f4f4f4"
                }
            }).showToast();

            document.getElementById("contact_form").reset()
        })
        .catch((error) => {
            Toastify({
                text: "Erro ao enviar o e-mail!",

                style: {
                    background: "#dc3545",
                    color: "#f4f4f4"
                }
            }).showToast();
        })
        .finally(() => {
            submitButton.innerHTML = 'Enviar menssagem <i class="fa-solid fa-paper-plane"></i>'
        })

})

// CARROSSEL NO PROJETOS
const swiper = new Swiper('.swiper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 5,
    speed: 600,
    preventClicks: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    },
    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex);
        },
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


// FUNCIONALIDADE SETA PARA SUBIR
setInterval(setaSubir, 4500)

let setaCima = document.querySelector('.seta-subir')

function setaSubir() {
    setaCima.classList.add('esconder')
}

window.onscroll = () => {
    setaCima.classList.remove('esconder')
}



// INICIO DESCRIÇÕES DOS PROJETOS CHUMBADOS
// FUNÇÃO APARECER ICON NO PROJETOS
const area = document.getElementById("projetos-icone-caixa");
const icone = document.getElementById("projetos-icone");
const descricao = document.getElementById("descricao");

area.addEventListener("mouseover", () => {
  icone.style.display = "inline";
});

area.addEventListener("mouseout", () => {
  icone.style.display = "none";
});

// FUNÇÃO MOSTRAR DESCRIÇÃO AO CLICAR
icone.addEventListener("click", () => {
    descricao.classList.toggle('mostrar');
    icone.classList.toggle('fa-square-caret-up');
    icone.classList.toggle('fa-square-caret-down');
})

// FAZER COM QUE A DIV DE DESCRCAO SUBA SUAVEMENTE
document.getElementById("projetos-icone").onclick = () => {
  document.getElementById("descricao").classList.add("show");
};

// FAZER COM QUE A DESCRIÇÃO SAIA AO CLICKAR NO X
const fechar = document.getElementById("fechar")
fechar.addEventListener("click", () => {
    descricao.classList.toggle('mostrar');
})



// DESCRIÇÃO PROJETO 2
const area1 = document.getElementById("projetos-icone-caixa-um");
const icone1 = document.getElementById("projetos-icone-um");
const descricao1 = document.getElementById("descricao-um");

area1.addEventListener("mouseover", () => {
  icone1.style.display = "inline";
});

area1.addEventListener("mouseout", () => {
  icone1.style.display = "none";
});

// FUNÇÃO MOSTRAR DESCRIÇÃO AO CLICAR
icone1.addEventListener("click", () => {
    descricao1.classList.toggle('mostrar');
    icone1.classList.toggle('fa-square-caret-up');
    icone1.classList.toggle('fa-square-caret-down');
})

// FAZER COM QUE A DIV DE DESCRCAO SUBA SUAVEMENTE
document.getElementById("projetos-icone-um").onclick = () => {
  document.getElementById("descricao-um").classList.add("show");
};

const fecharUm = document.getElementById("fecharUm")
fecharUm.addEventListener("click", () => {
    descricao1.classList.toggle('mostrar');
})


// DESCRIÇÃO PROJETO 3
const area2 = document.getElementById("projetos-icone-caixa-dois");
const icone2 = document.getElementById("projetos-icone-dois");
const descricao2 = document.getElementById("descricao-dois");

area2.addEventListener("mouseover", () => {
  icone2.style.display = "inline";
});

area2.addEventListener("mouseout", () => {
  icone2.style.display = "none";
});

// FUNÇÃO MOSTRAR DESCRIÇÃO AO CLICAR
icone2.addEventListener("click", () => {
    descricao2.classList.toggle('mostrar');
    icone1.classList.toggle('fa-square-caret-up');
    icone1.classList.toggle('fa-square-caret-down');
})

// FAZER COM QUE A DIV DE DESCRCAO SUBA SUAVEMENTE
document.getElementById("projetos-icone-dois").onclick = () => {
  document.getElementById("descricao-dois").classList.add("show");
};

const fecharDois = document.getElementById("fecharDois")
fecharDois.addEventListener("click", () => {
    descricao2.classList.toggle('mostrar');
})

// DESCRIÇÃO PROJETO 4
const area3 = document.getElementById("projetos-icone-caixa-tres");
const icone3 = document.getElementById("projetos-icone-tres");
const descricao3 = document.getElementById("descricao-tres");

area3.addEventListener("mouseover", () => {
  icone3.style.display = "inline";
});

area3.addEventListener("mouseout", () => {
  icone3.style.display = "none";
});

// FUNÇÃO MOSTRAR DESCRIÇÃO AO CLICAR
icone3.addEventListener("click", () => {
    descricao3.classList.toggle('mostrar');
    icone3.classList.toggle('fa-square-caret-up');
    icone3.classList.toggle('fa-square-caret-down');
})

// FAZER COM QUE A DIV DE DESCRCAO SUBA SUAVEMENTE
document.getElementById("projetos-icone-tres").onclick = () => {
  document.getElementById("descricao-tres").classList.add("show");
};

const fecharTres = document.getElementById("fecharTres")
fecharTres.addEventListener("click", () => {
    descricao3.classList.toggle('mostrar');
})



// DESCRIÇÃO PROJETO 5
const area4 = document.getElementById("projetos-icone-caixa-quatro");
const icone4 = document.getElementById("projetos-icone-quatro");
const descricao4 = document.getElementById("descricao-quatro");

area4.addEventListener("mouseover", () => {
  icone4.style.display = "inline";
});

area4.addEventListener("mouseout", () => {
  icone4.style.display = "none";
});

// FUNÇÃO MOSTRAR DESCRIÇÃO AO CLICAR
icone4.addEventListener("click", () => {
    descricao4.classList.toggle('mostrar');
    icone4.classList.toggle('fa-square-caret-up');
    icone4.classList.toggle('fa-square-caret-down');
})

// FAZER COM QUE A DIV DE DESCRCAO SUBA SUAVEMENTE
document.getElementById("projetos-icone-quatro").onclick = () => {
  document.getElementById("descricao-quatro").classList.add("show");
};

const fecharQuatro = document.getElementById("fecharQuatro")
fecharQuatro.addEventListener("click", () => {
    descricao4.classList.toggle('mostrar');
})


// DESCRIÇÃO PROJETO 6
const area5 = document.getElementById("projetos-icone-caixa-cinco");
const icone5 = document.getElementById("projetos-icone-cinco");
const descricao5 = document.getElementById("descricao-cinco");

area5.addEventListener("mouseover", () => {
  icone5.style.display = "inline";
});

area5.addEventListener("mouseout", () => {
  icone5.style.display = "none";
});

// FUNÇÃO MOSTRAR DESCRIÇÃO AO CLICAR
icone5.addEventListener("click", () => {
    descricao5.classList.toggle('mostrar');
    icone5.classList.toggle('fa-square-caret-up');
    icone5.classList.toggle('fa-square-caret-down');
})

// FAZER COM QUE A DIV DE DESCRCAO SUBA SUAVEMENTE
document.getElementById("projetos-icone-cinco").onclick = () => {
  document.getElementById("descricao-cinco").classList.add("show");
};

const fecharCinco = document.getElementById("fecharCinco")
fecharCinco.addEventListener("click", () => {
    descricao5.classList.toggle('mostrar');
})


// DESCRIÇÃO PROJETO 7
const area6 = document.getElementById("projetos-icone-caixa-seis");
const icone6 = document.getElementById("projetos-icone-seis");
const descricao6 = document.getElementById("descricao-seis");

area6.addEventListener("mouseover", () => {
  icone6.style.display = "inline";
});

area6.addEventListener("mouseout", () => {
  icone6.style.display = "none";
});

// FUNÇÃO MOSTRAR DESCRIÇÃO AO CLICAR
icone6.addEventListener("click", () => {
    descricao6.classList.toggle('mostrar');
    icone6.classList.toggle('fa-square-caret-up');
    icone6.classList.toggle('fa-square-caret-down');
})

// FAZER COM QUE A DIV DE DESCRCAO SUBA SUAVEMENTE
document.getElementById("projetos-icone-seis").onclick = () => {
  document.getElementById("descricao-seis").classList.add("show");
};

const fecharSeis = document.getElementById("fecharSeis")
fecharSeis.addEventListener("click", () => {
    descricao6.classList.toggle('mostrar');
})



// DESCRIÇÃO PROJETO 8
const area7 = document.getElementById("projetos-icone-caixa-sete");
const icone7 = document.getElementById("projetos-icone-sete");
const descricao7 = document.getElementById("descricao-sete");

area7.addEventListener("mouseover", () => {
  icone7.style.display = "inline";
});

area7.addEventListener("mouseout", () => {
  icone7.style.display = "none";
});

// FUNÇÃO MOSTRAR DESCRIÇÃO AO CLICAR
icone7.addEventListener("click", () => {
    descricao7.classList.toggle('mostrar');
    icone7.classList.toggle('fa-square-caret-up');
    icone7.classList.toggle('fa-square-caret-down');
})

// FAZER COM QUE A DIV DE DESCRCAO SUBA SUAVEMENTE
document.getElementById("projetos-icone-sete").onclick = () => {
  document.getElementById("descricao-sete").classList.add("show");
};

const fecharSete = document.getElementById("fecharSete")
fecharSete.addEventListener("click", () => {
    descricao7.classList.toggle('mostrar');
})



// DESCRIÇÃO PROJETO 9
const area8 = document.getElementById("projetos-icone-caixa-oito");
const icone8 = document.getElementById("projetos-icone-oito");
const descricao8 = document.getElementById("descricao-oito");

area8.addEventListener("mouseover", () => {
  icone8.style.display = "inline";
});

area8.addEventListener("mouseout", () => {
  icone8.style.display = "none";
});

// FUNÇÃO MOSTRAR DESCRIÇÃO AO CLICAR
icone8.addEventListener("click", () => {
    descricao8.classList.toggle('mostrar');
    icone8.classList.toggle('fa-square-caret-up');
    icone8.classList.toggle('fa-square-caret-down');
})

// FAZER COM QUE A DIV DE DESCRCAO SUBA SUAVEMENTE
document.getElementById("projetos-icone-oito").onclick = () => {
  document.getElementById("descricao-oito").classList.add("show");
};

const fecharOito = document.getElementById("fecharOito")
fecharOito.addEventListener("click", () => {
    descricao8.classList.toggle('mostrar');
})




// DESCRIÇÃO PROJETO 10
const area9 = document.getElementById("projetos-icone-caixa-nove");
const icone9 = document.getElementById("projetos-icone-nove");
const descricao9 = document.getElementById("descricao-nove");

area9.addEventListener("mouseover", () => {
  icone9.style.display = "inline";
});

area9.addEventListener("mouseout", () => {
  icone9.style.display = "none";
});

// FUNÇÃO MOSTRAR DESCRIÇÃO AO CLICAR
icone9.addEventListener("click", () => {
    descricao9.classList.toggle('mostrar');
    icone9.classList.toggle('fa-square-caret-up');
    icone9.classList.toggle('fa-square-caret-down');
})

// FAZER COM QUE A DIV DE DESCRCAO SUBA SUAVEMENTE
document.getElementById("projetos-icone-nove").onclick = () => {
  document.getElementById("descricao-nove").classList.add("show");
};

const fecharNove = document.getElementById("fecharNove")
fecharNove.addEventListener("click", () => {
    descricao9.classList.toggle('mostrar');
})




// DESCRIÇÃO PROJETO 11
const area10 = document.getElementById("projetos-icone-caixa-dez");
const icone10 = document.getElementById("projetos-icone-dez");
const descricao10 = document.getElementById("descricao-dez");

area10.addEventListener("mouseover", () => {
  icone10.style.display = "inline";
});

area10.addEventListener("mouseout", () => {
  icone10.style.display = "none";
});

// FUNÇÃO MOSTRAR DESCRIÇÃO AO CLICAR
icone10.addEventListener("click", () => {
    descricao10.classList.toggle('mostrar');
    icone10.classList.toggle('fa-square-caret-up');
    icone10.classList.toggle('fa-square-caret-down');
})

// FAZER COM QUE A DIV DE DESCRCAO SUBA SUAVEMENTE
document.getElementById("projetos-icone-dez").onclick = () => {
  document.getElementById("descricao-dez").classList.add("show");
};

const fecharDez = document.getElementById("fecharDez")
fecharDez.addEventListener("click", () => {
    descricao10.classList.toggle('mostrar');
})



// DESCRIÇÃO PROJETO 12
const area11 = document.getElementById("projetos-icone-caixa-onze");
const icone11 = document.getElementById("projetos-icone-onze");
const descricao11 = document.getElementById("descricao-onze");

area11.addEventListener("mouseover", () => {
  icone11.style.display = "inline";
});

area11.addEventListener("mouseout", () => {
  icone11.style.display = "none";
});

// FUNÇÃO MOSTRAR DESCRIÇÃO AO CLICAR
icone11.addEventListener("click", () => {
    descricao11.classList.toggle('mostrar');
    icone11.classList.toggle('fa-square-caret-up');
    icone11.classList.toggle('fa-square-caret-down');
})

// FAZER COM QUE A DIV DE DESCRCAO SUBA SUAVEMENTE
document.getElementById("projetos-icone-onze").onclick = () => {
  document.getElementById("descricao-onze").classList.add("show");
};

const fecharOnze = document.getElementById("fecharOnze")
fecharOnze.addEventListener("click", () => {
    descricao11.classList.toggle('mostrar');
})




// DESCRIÇÃO PROJETO 13
const area12 = document.getElementById("projetos-icone-caixa-doze");
const icone12 = document.getElementById("projetos-icone-doze");
const descricao12 = document.getElementById("descricao-doze");

area12.addEventListener("mouseover", () => {
  icone12.style.display = "inline";
});

area11.addEventListener("mouseout", () => {
  icone12.style.display = "none";
});

// FUNÇÃO MOSTRAR DESCRIÇÃO AO CLICAR
icone12.addEventListener("click", () => {
    descricao12.classList.toggle('mostrar');
    icone12.classList.toggle('fa-square-caret-up');
    icone12.classList.toggle('fa-square-caret-down');
})

// FAZER COM QUE A DIV DE DESCRCAO SUBA SUAVEMENTE
document.getElementById("projetos-icone-doze").onclick = () => {
  document.getElementById("descricao-doze").classList.add("show");
};

const fecharDoze = document.getElementById("fecharDoze")
fecharDoze.addEventListener("click", () => {
    descricao12.classList.toggle('mostrar');
})
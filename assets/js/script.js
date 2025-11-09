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

// troca icone de sol pra lua e vice versa
const toggleBtn = document.getElementById('toggleBtn');
const toggleIcon = document.getElementById('toggleIcon');

toggleBtn.addEventListener('click', () => {
    toggleIcon.classList.toggle('fa-sun');
    toggleIcon.classList.toggle('fa-moon');
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
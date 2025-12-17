document.addEventListener('DOMContentLoaded', () => {
    // --- Data Source ---
    const locationData = {
        'akihabara': {
            title: 'Akihabara',
            keywords: ['akihabara', 'anime', 'electronics', 'arcade'],
            description: `
                <p>Akihabara é conhecida mundialmente como o coração da cultura otaku e geek. Antigamente famosa apenas por eletrônicos, hoje é o paraíso dos animes, mangás e jogos.</p>
                <p>Durante nossa visita, vocês verão prédios inteiros dedicados a colecionáveis e os famosos Maid Cafés. É um lugar vibrante, cheio de luzes e sons!</p>
                <p><strong>Curiosidade:</strong> Muitas tendências de tecnologia começam aqui antes de ir para o resto do mundo.</p>`
        },
        'pokemon': {
            title: 'Pokémon Center DX',
            keywords: ['pokemon', 'pikachu', 'nintendo', 'plush'],
            description: `
                <p>O Pokémon Center DX é uma das maiores lojas oficiais de Pokémon do Japão. É um sonho para qualquer fã!</p>
                <p>Além de pelúcias exclusivas que só são vendidas aqui, a loja tem uma decoração incrível com estátuas em tamanho real. Preparem as câmeras!</p>
                <p>Ao lado fica o Pokémon Café, onde até a comida tem formato de Pokémon.</p>`
        },
        'asakusa': {
            title: 'Templo Senso-ji, Asakusa',
            keywords: ['sensoji', 'tokyo temple', 'lantern', 'asakusa'],
            description: `
                <p>O Senso-ji é o templo budista mais antigo de Tóquio, fundado no ano 628! A lenda diz que dois irmãos pescaram uma estátua da deusa Kannon no rio Sumida e o templo foi construído para ela.</p>
                <p>A entrada principal é o Portão Kaminarimon (Portão do Trovão), famoso pela sua lanterna vermelha gigante que pesa 700kg.</p>
                <p>Não esqueçam de purificar as mãos na fonte de água antes de entrar!</p>`
        },
        'ueno': {
            title: 'Parque Ueno',
            keywords: ['ueno park', 'museum tokyo', 'cherry blossom', 'panda'],
            description: `
                <p>O Parque Ueno é um oásis verde no meio da cidade. É famoso pelas suas milhares de cerejeiras e por abrigar o Zoológico de Ueno, onde vivem os pandas gigantes.</p>
                <p>Dentro do parque também existem vários museus importantes, como o Museu Nacional de Tóquio e o Museu Nacional de Ciência e Natureza.</p>`
        },
        'hanamai': {
            title: 'Hana no Mai (Ryogoku)',
            keywords: ['sumo', 'japanese food', 'edo period', 'sashimi'],
            description: `
                <p>Este restaurante é uma experiência única! Ele fica no bairro de Ryogoku, famoso pelo Sumô.</p>
                <p>O restaurante tem um ringue de Sumô real no centro (dohyo). A decoração imita a era Edo, fazendo você se sentir num filme de samurai enquanto janta.</p>`
        },
        'imperial': {
            title: 'Palácio Imperial',
            keywords: ['imperial palace tokyo', 'castle wall', 'tokyo moat', 'garden'],
            description: `
                <p>O Palácio Imperial é a residência oficial do Imperador do Japão. Ele foi construído no local do antigo Castelo de Edo.</p>
                <p>Embora não possamos entrar nos prédios privados, os Jardins do Leste são abertos ao público e são lindíssimos, com muralhas de pedra gigantescas e fossos cheios de água.</p>`
        },
        'tower': {
            title: 'Tokyo Tower',
            keywords: ['tokyo tower', 'red tower', 'view tokyo', 'cityscape'],
            description: `
                <p>Construída em 1958, a Tokyo Tower é um símbolo do renascimento do Japão pós-guerra. Ela tem 333 metros de altura e foi inspirada na Torre Eiffel.</p>
                <p>Sua cor laranja e branca é para segurança aérea. Do observatório, em dias claros, dá para ver até o Monte Fuji!</p>`
        },
        'shibuya': {
            title: 'Cruzamento de Shibuya',
            keywords: ['shibuya crossing', 'tokyo crowd', 'neon lights', 'hachiko'],
            description: `
                <p>Conhecido como "The Scramble", é o cruzamento mais movimentado do mundo. Dizem que até 3.000 pessoas atravessam a rua de uma vez só quando o sinal fecha para os carros!</p>
                <p>Ali perto também fica a estátua do Hachiko, o cachorro fiel que esperou seu dono por anos na estação.</p>`
        },
        'skytree': {
            title: 'Tokyo Skytree',
            keywords: ['tokyo skytree', 'highest building', 'sunset tokyo', 'skyline'],
            description: `
                <p>A Skytree é a torre de transmissão mais alta do mundo, com 634 metros! O número 6-3-4 pode ser lido como "Musashi", o nome antigo da região de Tóquio.</p>
                <p>Seus elevadores são super rápidos (600m/min). A vista do deck superior é de tirar o fôlego.</p>`
        },
        'xmas': {
            title: 'Praça da Skytree (Natal)',
            keywords: ['christmas market', 'illumination tokyo', 'night lights', 'winter'],
            description: `
                <p>Durante o inverno, a base da Skytree se transforma em um mercado de Natal mágico, com milhares de luzes LED iluminando a praça.</p>
                <p>É o lugar, perfeito para tirar fotos bonitas e comer comidas de rua deliciosas para fechar o dia com chave de ouro.</p>`
        },
        'chinatown': {
            title: 'Yokohama Chinatown',
            keywords: ['yokohama chinatown', 'dim sum', 'chinese gate', 'red lanterns'],
            description: `
                <p>A Chinatown de Yokohama é a maior do Japão e uma das maiores do mundo. Existem mais de 600 lojas aqui!</p>
                <p>A entrada é marcada por quatro portões coloridos e elaborados. É o melhor lugar para provar Nikuman (pãozinho cozido no vapor) e ver templos chineses coloridos.</p>`
        },
        'jica': {
            title: 'Museu da Migração (JICA)',
            keywords: ['japanese migration', 'museum', 'history', 'ship'],
            description: `
                <p>O Museu da Migração Marítima Japonesa conta a história dos japoneses que emigraram para o exterior, incluindo o Brasil.</p>
                <p>Para nós, é muito emocionante ver como nossos antepassados viajaram e construíram uma nova vida em outros países.</p>`
        },
        'retorno': {
            title: 'Retorno para Kikugawa',
            keywords: ['school bus', 'sunset road', 'happy students', 'memories'],
            description: `
                <p>Fim da viagem! Agora é hora de descansar no ônibus.</p>
                <p>Esperamos que vocês tenham gostado de aprender e se divertir em Tóquio. Não esqueçam de conferir se não esqueceram nada no hotel!</p>`
        }
    };

    // --- Modal Logic ---
    const modalObserverOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const modalObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, modalObserverOptions);

    const modal = document.getElementById('detail-modal');
    const closeBtn = modal.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-description');
    const modalCarousel = document.getElementById('modal-carousel');

    function openModal(id) {
        const data = locationData[id];
        if (!data) return;

        // Populate Content
        modalTitle.textContent = data.title;
        modalDesc.innerHTML = data.description;

        // Populate Carousel
        modalCarousel.innerHTML = '';
        for (let i = 1; i <= 4; i++) {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            const img = document.createElement('img');
            img.src = `images/${id}-${i}.jpg`;
            img.alt = `${data.title} - Foto ${i}`;
            img.loading = 'lazy';
            slide.appendChild(img);
            modalCarousel.appendChild(slide);
        }

        // Show Modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Carousel Navigation
    const prevBtn = modal.querySelector('.c-prev');
    const nextBtn = modal.querySelector('.c-next');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (modalCarousel.scrollLeft <= 10) {
                modalCarousel.scrollTo({ left: modalCarousel.scrollWidth, behavior: 'smooth' });
            } else {
                modalCarousel.scrollBy({ left: -modalCarousel.offsetWidth, behavior: 'smooth' });
            }
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const maxScroll = modalCarousel.scrollWidth - modalCarousel.clientWidth;
            if (modalCarousel.scrollLeft >= maxScroll - 10) {
                modalCarousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                modalCarousel.scrollBy({ left: modalCarousel.offsetWidth, behavior: 'smooth' });
            }
        });
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event Listeners
    document.querySelectorAll('.glass-card[data-id]').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            openModal(card.dataset.id);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Escape Key to Close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // --- Original Scroll Logic (Preserved) ---
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    const nextButtons = document.querySelectorAll('.next-btn');
    const fab = document.querySelector('.fab');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, modalObserverOptions);

    function observeElements() {
        const hiddenElements = document.querySelectorAll('.scroll-reveal');
        hiddenElements.forEach((el) => observer.observe(el));
    }

    function switchTab(tabId) {
        navItems.forEach(item => item.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        const targetNav = document.querySelector(`.nav-item[data-target="${tabId}"]`);
        const targetSection = document.getElementById(tabId);

        if (targetNav && targetSection) {
            targetNav.classList.add('active');
            targetSection.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(observeElements, 100);
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.currentTarget.dataset.target; // Fixed bug (was closest)
            switchTab(target);
        });
    });

    nextButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const nextTarget = e.currentTarget.dataset.next;
            switchTab(nextTarget);
        });
    });

    // FAB Click Event (Emergency Modal)
    if (fab) {
        fab.addEventListener('click', () => {
            const emModal = document.getElementById('emergency-modal');
            if (emModal) {
                emModal.classList.add('active');
                document.body.style.overflow = 'hidden';

                // Close logic for this specific modal
                const emClose = emModal.querySelector('.close-btn');
                emClose.onclick = () => {
                    emModal.classList.remove('active');
                    document.body.style.overflow = '';
                };
                emModal.onclick = (e) => {
                    if (e.target === emModal) {
                        emModal.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                };
            }
        });
    }

    observeElements();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registered', reg))
            .catch(err => console.log('Service Worker registration failed', err));
    }
});

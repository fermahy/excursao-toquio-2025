document.addEventListener('DOMContentLoaded', () => {
    // --- Data Source ---
    const locationData = {
        'akihabara': {
            title: 'Akihabara',
            keywords: ['akihabara', 'anime', 'electronics', 'arcade'],
            description: `
                <p>Conhecida mundialmente como <em>"Electric Town"</em> (Cidade Elétrica), Akihabara consolidou-se historicamente como o principal polo de comércio de eletrônicos e componentes de computador do Japão. A região é famosa por suas ruas iluminadas por neons e lojas de departamentos verticais que oferecem as últimas novidades tecnológicas.</p>

                <p>Nas últimas décadas, o bairro transformou-se no epicentro global da cultura Otaku. Hoje, é possível visitar prédios inteiros dedicados exclusivamente a <em>hobbies</em>, com andares repletos de mangás, jogos retrô, plastimodelismo e itens colecionáveis raros que atraem fãs do mundo todo.</p>

                <p><strong>Curiosidade Técnica:</strong> O nome "Akihabara" significa "Campo de Folhas de Outono" e vem de um antigo santuário construído no local em 1869 para proteger a área contra incêndios.</p>`
        },
        'pokemon': {
            title: 'Pokémon Center DX',
            keywords: ['pokemon', 'pikachu', 'nintendo', 'plush'],
            description: `
                <p>Inaugurado em 2018, o Pokémon Center DX está localizado em Nihonbashi, uma área de grande importância histórica. O sufixo "DX" significa <em>Deluxe</em>, representando uma evolução das lojas tradicionais com um espaço mais amplo e interativo, onde os visitantes são recebidos na entrada por estátuas em tamanho real de Pikachu, Snorlax e Mew.</p>

                <p>Esta unidade é única por abrigar o primeiro <strong>Pokémon Café</strong> permanente do Japão, onde a comida é artisticamente modelada no formato dos personagens. A loja também possui uma "Pokédex Touch" gigante, permitindo que os fãs interajam digitalmente com a história da franquia em vários idiomas.</p>

                <p><strong>Curiosidade:</strong> Por estar situada no "ponto zero" das estradas do Japão antigo (Nihonbashi), esta loja possui uma linha exclusiva de produtos com temática tradicional japonesa, incluindo o famoso "Pikachu Cavalheiro" vestido com trajes de época, que você não encontra em nenhum outro lugar.</p>`
        },
        'asakusa': {
            title: 'Asakusa',
            keywords: ['temple', 'culture', 'history', 'traditional'],
            description: `
    <p>Asakusa é o coração espiritual de Tóquio, um local onde a atmosfera do antigo Japão (Era Edo) ainda está viva. A entrada principal é marcada pelo majestoso <strong>Kaminarimon</strong> (Portão do Trovão), famoso por sua lanterna vermelha gigante que pesa 700kg. Ao passar por ele, atravessamos a Nakamise-dori, uma rua comercial vibrante repleta de doces tradicionais e artesanato.</p>

    <p>No final do caminho está o <strong>Senso-ji</strong>, o templo budista mais antigo da cidade. Antes de subir ao salão principal, é tradição purificar as mãos e a boca na fonte de água (Chozuya) e banhar-se com a fumaça do incenso, que dizem trazer saúde e sabedoria.</p>

    <p><strong>Curiosidade Histórica:</strong> A lenda conta que, no ano de 628, dois irmãos pescadores encontraram uma estátua dourada da deusa Kannon no Rio Sumida. Mesmo tentando devolvê-la ao rio, a estátua sempre voltava para eles. O templo foi construído naquele local para abrigá-la, tornando-se um lugar sagrado há quase 1400 anos.</p>`
        },
        'ueno': {
            title: 'Museus do Parque Ueno',
            keywords: ['museum', 'art', 'nature', 'park', 'panda'],
            description: `
    <p>Um verdadeiro santuário do conhecimento. O complexo abriga instituições de renome mundial, como o <strong>Museu Nacional de Tóquio</strong> — o mais antigo do país, guardião de tesouros nacionais milenares — e o <strong>Museu Nacional de Natureza e Ciência</strong>, onde é possível ver desde a evolução tecnológica japonesa até fósseis de dinossauros.</p>

    <p>É o lugar perfeito para entender a alma do Japão, explorando acervos que narram tanto a saga dos samurais quanto os avanços científicos que transformaram a nação em uma potência moderna.</p>

    <p><strong>Curiosidade Histórica:</strong> Todo este terreno pertencia originalmente ao Kan'ei-ji, um templo colossal que protegia o Castelo Edo. Após sua destruição em uma batalha em 1868, a área renasceu como um dos primeiros parques públicos do país, dedicado à educação.</p>`
        },
        'hanamai': {
            title: 'Hana no Mai',
            keywords: ['sumo', 'japanese food', 'edo period', 'sashimi'],
            description: `
    <p>Localizado no bairro de Ryogoku, o coração do Sumô em Tóquio, este restaurante oferece uma imersão completa na cultura tradicional japonesa. O salão principal é dominado por um <em>Dohyo</em> (ringue de Sumô) em tamanho real, o mesmo tipo usado nos torneios oficiais.</p>

    <p>A decoração reproduz fielmente as ruas da Era Edo (1603-1868), com lanternas, madeira escura e pinturas clássicas. É o lugar ideal para provar pratos típicos como o <em>Chanko Nabe</em> (o cozido rico em proteínas dos lutadores) e sentir como se estivesse dentro de um filme de época.</p>

    <p><strong>Curiosidade:</strong> O Sumô não é apenas um esporte, mas um ritual xintoísta dedicado aos deuses para garantir boas colheitas. Até hoje, os rituais de entrada no ringue (como jogar sal para purificação) são mantidos exatamente como eram há séculos.</p>`
        },
        'imperial': {
            title: 'Palácio Imperial',
            keywords: ['imperial palace tokyo', 'castle wall', 'tokyo moat', 'garden'],
            description: `
    <p>Localizado no centro exato de Tóquio, o Palácio Imperial (<em>Kōkyo</em>) é a residência oficial da Família Imperial Japonesa. O complexo é um oásis verde cercado por fossos gigantescos e muralhas de pedra maciça, criando um contraste impressionante com os arranha-céus do distrito financeiro ao redor.</p>

    <p>Nossa visita será nos <strong>Jardins Leste (Higashi Gyoen)</strong>, a área histórica aberta ao público. É aqui que ficava a torre principal do antigo <strong>Castelo Edo</strong>, a fortaleza dos Xoguns Tokugawa que governaram o Japão por mais de 250 anos.</p>

    <p><strong>Curiosidade Histórica:</strong> No auge da Era Edo, este castelo possuía a torre mais alta do Japão. Embora a torre tenha sido destruída por um incêndio em 1657, as fundações de pedra ainda estão lá e são tão grandes que serviam para intimidar qualquer inimigo que tentasse atacar o Xogun.</p>`
        },
        'tower': {
            title: 'Torre de Tóquio',
            keywords: ['tokyo tower', 'observatory', 'red tower', 'view'],
            description: `
    <p>Inaugurada em 1958, a Torre de Tóquio é um ícone da recuperação econômica do Japão no pós-guerra. Com 333 metros de altura, ela foi projetada para superar a Torre Eiffel de Paris, tornando-se a estrutura de aço autossustentável mais alta do mundo na época de sua construção.</p>

    <p>O acesso previsto é ao <strong>Main Deck (150 metros)</strong>, o observatório principal que oferece uma visão 360 graus da metrópole. Um dos destaques do local é a "Skywalk Window", janelas de vidro no chão que permitem olhar diretamente para baixo — um teste de coragem divertido para os visitantes.</p>

    <p><strong>Curiosidade Técnica:</strong> A pintura nas cores laranja internacional e branco não é apenas estética, mas uma exigência da Lei de Aeronáutica do Japão para garantir a visibilidade da torre para aviões e helicópteros. A renovação da pintura ocorre a cada 5 anos e consome cerca de 28.000 litros de tinta.</p>`
        },
        'shibuya': {
            title: 'Shibuya',
            keywords: ['shibuya crossing', 'tokyo crowd', 'neon lights', 'hachiko'],
            description: `
    <p>Shibuya é mundialmente reconhecida como o centro da cultura jovem e da moda em Tóquio. O marco mais impressionante é o <strong>Shibuya Scramble Crossing</strong>, considerado o cruzamento mais movimentado do planeta. A cada abertura de sinal, estima-se que até 3.000 pessoas atravessem simultaneamente em todas as direções, cercadas por gigantescos painéis de neon e telões de publicidade.</p>

    <p>Ao lado do cruzamento encontra-se a estátua de bronze de <strong>Hachiko</strong>, o cão da raça Akita que se tornou símbolo nacional de lealdade. A história conta que ele esperou pelo retorno de seu dono falecido na estação todos os dias durante quase 10 anos, até a sua própria morte.</p>

    <p><strong>Curiosidade Urbana:</strong> A travessia de Shibuya é frequentemente chamada de "caos organizado". Apesar da multidão imensa que invade a rua de todos os lados, as pessoas raramente se esbarram, demonstrando a consciência espacial e o respeito coletivo típicos da sociedade japonesa.</p>`
        },
        'skytree': {
            title: 'Tokyo Skytree',
            keywords: ['skytree', '634m', 'tembo deck', 'view', 'sunset'],
            description: `
    <p>Reconhecida pelo Guinness World Records, a Tokyo Skytree é a torre de transmissão mais alta do mundo, atingindo 634 metros de altura. Sua arquitetura futurista combina um design neofuturista com técnicas tradicionais japonesas para garantir estabilidade contra terremotos.</p>

    <p>O acesso principal é ao <strong>Tembo Deck (350 metros)</strong>, que oferece uma vista panorâmica de toda a região de Kanto. Durante a temporada de dezembro, o complexo na base da torre (Skytree Town) recebe o evento <strong>"Dream Christmas"</strong>, transformando a área com iluminações especiais e um mercado de natal vibrante.</p>

    <p><strong>Curiosidade Técnica:</strong> A altura de 634 metros não foi escolhida por acaso. Os números podem ser lidos em japonês como "Mu" (6), "Sa" (3), "Shi" (4), formando a palavra <strong>Musashi</strong>, que é o nome da antiga província onde a torre está localizada atualmente.</p>`
        },
        'xmas': {
            title: 'Mercado de Natal da Skytree',
            keywords: ['christmas market', 'german food', 'illumination', 'skytree'],
            description: `
    <p>O "Solamachi Christmas Market" traz a atmosfera autêntica dos mercados europeus para o Japão. A Sky Arena é decorada com uma árvore de natal de 8 metros e cabanas de madeira importadas da Alemanha (chamadas de <em>Hütten</em>), onde a comida é a atração principal.</p>

    <p>Os visitantes podem se deliciar com pratos quentes típicos de inverno, como ensopados de carne, batatas gratinadas e o tradicional <strong>Stollen</strong> — um bolo de frutas natalino que, neste evento, costuma ser apresentado em uma versão gigante recordista.</p>

    <p><strong>Curiosidade Visual:</strong> Durante o jantar, olhem para cima! A própria Tokyo Skytree muda sua iluminação habitual para cores especiais de Natal: o "Champagne Gold" (dourado) e o "Candle Tree" (vermelho e branco), transformando a torre na maior árvore de natal do mundo.</p>`
        },
        'yokohama': {
            title: 'Yokohama e Chinatown',
            keywords: ['minato mirai', 'chinatown', 'port', 'history'],
            description: `
    <p>Yokohama é o berço do Japão moderno. Foi aqui que o país encerrou séculos de isolamento e abriu seu primeiro porto para o comércio internacional em 1859. A área de <strong>Minato Mirai</strong> ("Porto do Futuro") reflete essa modernidade com arranha-céus futuristas e parques à beira-mar.</p>

    <p>A poucos minutos dali está a <strong>Yokohama Chukagai</strong>, a maior Chinatown do Japão e uma das maiores do mundo. Com mais de 160 anos de história e 600 lojas, o bairro é um labirinto vibrante de portais coloridos, templos ornamentados e restaurantes que servem o famoso <em>Nikuman</em> (pão chinês cozido no vapor).</p>

    <p><strong>Curiosidade Histórica:</strong> Chinatown nasceu logo após a abertura do porto, quando comerciantes ocidentais trouxeram intérpretes chineses para ajudar na comunicação com os japoneses. Eles se estabeleceram na região e criaram uma comunidade que preserva suas tradições até hoje.</p>`
        },
        'jica': {
            title: 'Museu da Imigração',
            keywords: ['japanese migration', 'museum', 'history', 'ship'],
            description: `
    <p>Localizado dentro do complexo da JICA em Yokohama, este museu é dedicado a preservar a memória de quase 2 milhões de japoneses que emigraram, principalmente para a América Latina. O acervo é uma verdadeira aula de história sobre a coragem e a resiliência humana.</p>

    <p>A exposição possui um foco especial no Brasil, que abriga a maior comunidade <em>Nikkei</em> do mundo. Os visitantes podem ver de perto réplicas dos dormitórios dos navios a vapor, ferramentas usadas nas lavouras de café e recriações das casas de madeira construídas pelos primeiros imigrantes.</p>

    <p><strong>Curiosidade Histórica:</strong> O Porto de Yokohama foi o ponto de partida do famoso navio <em>Kasato Maru</em>, que levou o primeiro grupo de imigrantes japoneses para o Brasil em 1908. O museu guarda listas de passageiros e passaportes originais dessa época.</p>`
        },
        'retorno': {
            title: 'Retorno para Kikugawa',
            keywords: ['school bus', 'sunset road', 'happy students', 'memories'],
            description: `
    <p>Nossa viagem chega ao fim e é hora de retornar para casa. Foram dias incríveis onde mergulhamos na cultura pop de <strong>Akihabara</strong> e do <strong>Centro Pokémon</strong>, e exploramos a tradição de <strong>Asakusa</strong> e a riqueza histórica da <strong>Praça dos Museus</strong>.</p>

    <p>Na capital, passamos pela imponência do <strong>Palácio Imperial</strong>, admiramos a vista da <strong>Torre de Tóquio</strong>, vivemos a energia de <strong>Shibuya</strong> e subimos na gigante <strong>Skytree</strong>. Encerramos com a diversidade de <strong>Yokohama</strong>, visitando <strong>Chinatown</strong> e o <strong>Museu da Imigração</strong>.</p>

    <p><strong>Mensagem Final:</strong> Uma viagem como essa é uma aventura que fica marcada para sempre na memória. Agora é hora de um merecido descanso e de compartilhar com a família todas as aventuras dessa semana inesquecível. Bom retorno a todos!</p>`
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

    // Service Worker removed for testing
    // if ('serviceWorker' in navigator) {
    //     navigator.serviceWorker.register('sw.js')
    //         .then(reg => console.log('Service Worker registered', reg))
    //         .catch(err => console.log('Service Worker registration failed', err));
    // }
});

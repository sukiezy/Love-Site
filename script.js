// Configurações
const START_DATE = new Date('2025-02-21T12:21:00');
const photos = [
    'foto1.jpg',
    'foto2.jpg', 
    'foto3.jpg',
    'foto4.jpg',
    'foto5.jpg',
    'foto6.jpg',
    'foto7.jpg'
];

let currentPhotoIndex = 0;

// Função para atualizar o contador de relacionamento
function updateCounter() {
    const now = new Date();
    const diff = now - START_DATE;

    // Calcular anos, meses, dias, horas, minutos e segundos
    const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor((diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const days = Math.floor((diff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((diff % (60 * 1000)) / 1000);

    // Atualizar elementos na tela
    document.getElementById('anos').textContent = years;
    document.getElementById('meses').textContent = months;
    document.getElementById('dias').textContent = days;
    document.getElementById('horas').textContent = hours;
    document.getElementById('minutos').textContent = minutes;
    document.getElementById('segundos').textContent = seconds;

    // Atualizar estatísticas
    const totalDays = Math.floor(diff / (24 * 60 * 60 * 1000));
    const totalHours = Math.floor(diff / (60 * 60 * 1000));
    const heartBeats = Math.floor(diff / 1000 * 1.2); // Aproximadamente 72 batimentos por minuto

    document.getElementById('total-dias').textContent = totalDays.toLocaleString();
    document.getElementById('total-horas').textContent = totalHours.toLocaleString();
    document.getElementById('batimentos').textContent = heartBeats.toLocaleString();
}

// Função para trocar foto
function changePhoto(index) {
    if (index >= 0 && index < photos.length) {
        currentPhotoIndex = index;
        document.getElementById('current-photo').src = photos[index];
        document.getElementById('current-index').textContent = index + 1;

        // Atualizar thumbnails
        document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });

        // Adicionar efeito de fade
        const photo = document.getElementById('current-photo');
        photo.style.opacity = '0.5';
        setTimeout(() => {
            photo.style.opacity = '1';
        }, 150);
    }
}

// Função para próxima foto
function nextPhoto() {
    const nextIndex = (currentPhotoIndex + 1) % photos.length;
    changePhoto(nextIndex);
}

// Função para foto anterior
function prevPhoto() {
    const prevIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    changePhoto(prevIndex);
}

// Função para animar números
function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Função para criar efeitos de confete
function createConfetti() {
    const colors = ['#ff69b4', '#fc53a8', '#ff1493', '#fff'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${Math.random() * 2 + 1}s linear infinite`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Adicionar CSS para animação de queda
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        from {
            transform: translateY(-100vh) rotate(0deg);
        }
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }

    @keyframes heartbeat {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }

    .heartbeat {
        animation: heartbeat 1s ease-in-out infinite;
    }
`;
document.head.appendChild(style);

// Função para mostrar mensagens românticas alternadas
function showRomanticMessages() {
    const messages = [
        "💕 Cada momento com você é especial!",
        "🌟 Você é minha estrela mais brilhante!",
        "❤️ Meu coração bate só por você!",
        "🌹 Nosso amor cresce a cada dia!",
        "💖 Você é minha pessoa favorita!",
        "🦋 Com você, cada dia é uma nova aventura!",
        "💫 Nosso amor é infinito como as estrelas!"
    ];

    let messageIndex = 0;

    // Criar elemento para mensagem flutuante
    const messageElement = document.createElement('div');
    messageElement.style.position = 'fixed';
    messageElement.style.top = '20px';
    messageElement.style.right = '20px';
    messageElement.style.background = 'linear-gradient(135deg, #ff69b4 0%, #fc53a8 100%)';
    messageElement.style.color = 'white';
    messageElement.style.padding = '15px 20px';
    messageElement.style.borderRadius = '25px';
    messageElement.style.fontSize = '14px';
    messageElement.style.fontWeight = 'bold';
    messageElement.style.zIndex = '1000';
    messageElement.style.opacity = '0';
    messageElement.style.transform = 'translateY(-20px)';
    messageElement.style.transition = 'all 0.5s ease';
    messageElement.style.cursor = 'pointer';
    messageElement.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.4)';

    function showMessage() {
        messageElement.textContent = messages[messageIndex];
        messageElement.style.opacity = '1';
        messageElement.style.transform = 'translateY(0)';

        setTimeout(() => {
            messageElement.style.opacity = '0';
            messageElement.style.transform = 'translateY(-20px)';
        }, 3000);

        messageIndex = (messageIndex + 1) % messages.length;
    }

    document.body.appendChild(messageElement);

    // Mostrar primeira mensagem após 2 segundos
    setTimeout(showMessage, 2000);

    // Repetir a cada 8 segundos
    setInterval(showMessage, 8000);

    // Criar confete ao clicar na mensagem
    messageElement.addEventListener('click', createConfetti);
}

// Função para adicionar efeitos de hover especiais
function addSpecialEffects() {
    // Efeito de coração ao passar o mouse no nome do casal
    const coupleName = document.querySelector('.couple-name');
    if (coupleName) {
        coupleName.addEventListener('mouseover', () => {
            coupleName.classList.add('heartbeat');
            createConfetti();
        });

        coupleName.addEventListener('mouseout', () => {
            coupleName.classList.remove('heartbeat');
        });
    }

    // Efeito de pulso nos contadores
    const counters = document.querySelectorAll('.counter-number');
    counters.forEach(counter => {
        counter.addEventListener('mouseover', () => {
            counter.style.transform = 'scale(1.2)';
            counter.style.color = '#ff1493';
        });

        counter.addEventListener('mouseout', () => {
            counter.style.transform = 'scale(1)';
            counter.style.color = '#ff69b4';
        });
    });
}

// Função para auto-play da galeria
function autoPlayGallery() {
    setInterval(() => {
        // Só muda automaticamente se não houver interação recente
        if (!document.querySelector('.gallery-container:hover')) {
            nextPhoto();
        }
    }, 5000); // Muda a cada 5 segundos
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar contador
    updateCounter();
    setInterval(updateCounter, 1000);

    // Configurar galeria de fotos
    document.getElementById('next-btn').addEventListener('click', nextPhoto);
    document.getElementById('prev-btn').addEventListener('click', prevPhoto);

    // Configurar thumbnails
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.addEventListener('click', () => changePhoto(index));
    });

    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
    });

    // Inicializar efeitos especiais
    showRomanticMessages();
    addSpecialEffects();
    autoPlayGallery();

    // Animação inicial dos números
    setTimeout(() => {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(num => {
            if (num.textContent !== '∞') {
                const finalValue = parseInt(num.textContent.replace(/,/g, ''));
                num.textContent = '0';
                animateNumber(num, 0, finalValue, 2000);
            }
        });
    }, 1000);

    // Adicionar efeito de parallax suave
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.counter-item, .stat-item');

        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
        });
    });

    // Mostrar confete ao carregar a página
    setTimeout(createConfetti, 500);
});

// Função para touch/swipe na galeria (mobile)
let touchStartX = 0;
let touchEndX = 0;

document.getElementById('current-photo').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.getElementById('current-photo').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        nextPhoto(); // Swipe left = próxima foto
    }
    if (touchEndX > touchStartX + 50) {
        prevPhoto(); // Swipe right = foto anterior
    }
}

// Função para detectar se é mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar comportamento para mobile
if (isMobile()) {
    // Desabilitar autoplay no mobile
    clearInterval(autoPlayGallery);

    // Adicionar instruções de swipe
    const instructions = document.createElement('div');
    instructions.textContent = '👆 Deslize para navegar pelas fotos';
    instructions.style.textAlign = 'center';
    instructions.style.color = '#ff69b4';
    instructions.style.fontSize = '14px';
    instructions.style.margin = '10px 0';
    instructions.style.opacity = '0.8';

    document.querySelector('.photo-controls').appendChild(instructions);
}
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vitor & Carla - Nosso Amor</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playball&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <div class="header-content">
                <h1 class="couple-name">Vitor & Carla</h1>
                <p class="subtitle">Nossa história de amor</p>
            </div>
        </header>

        <!-- Contador de Relacionamento -->
        <section class="counter-section">
            <div class="counter-container">
                <h2>Juntos há</h2>
                <div class="counter-grid">
                    <div class="counter-item">
                        <span class="counter-number" id="anos">0</span>
                        <span class="counter-label">Anos</span>
                    </div>
                    <div class="counter-item">
                        <span class="counter-number" id="meses">0</span>
                        <span class="counter-label">Meses</span>
                    </div>
                    <div class="counter-item">
                        <span class="counter-number" id="dias">0</span>
                        <span class="counter-label">Dias</span>
                    </div>
                    <div class="counter-item">
                        <span class="counter-number" id="horas">0</span>
                        <span class="counter-label">Horas</span>
                    </div>
                    <div class="counter-item">
                        <span class="counter-number" id="minutos">0</span>
                        <span class="counter-label">Minutos</span>
                    </div>
                    <div class="counter-item">
                        <span class="counter-number" id="segundos">0</span>
                        <span class="counter-label">Segundos</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Galeria de Fotos -->
        <section class="gallery-section">
            <h2>Nossas Memórias</h2>
            <div class="gallery-container">
                <div class="photo-display">
                    <img id="current-photo" src="foto1.jpg" alt="Foto do casal">
                    <div class="photo-controls">
                        <button class="photo-btn" id="prev-btn">❮</button>
                        <span class="photo-counter">
                            <span id="current-index">1</span> / 7
                        </span>
                        <button class="photo-btn" id="next-btn">❯</button>
                    </div>
                </div>
                <div class="photo-thumbnails">
                    <img class="thumbnail active" src="foto1.jpg" data-index="0" alt="Foto 1">
                    <img class="thumbnail" src="foto2.jpg" data-index="1" alt="Foto 2">
                    <img class="thumbnail" src="foto3.jpg" data-index="2" alt="Foto 3">
                    <img class="thumbnail" src="foto4.jpg" data-index="3" alt="Foto 4">
                    <img class="thumbnail" src="foto5.jpg" data-index="4" alt="Foto 5">
                    <img class="thumbnail" src="foto6.jpg" data-index="5" alt="Foto 6">
                    <img class="thumbnail" src="foto7.jpg" data-index="6" alt="Foto 7">
                </div>
            </div>
        </section>

        <!-- Mensagem Romântica -->
        <section class="message-section">
            <div class="message-container">
                <h2>Para a Carla</h2>
                <div class="message-content">
                    
                    <p>Hoje é seu aniversário né ?
Parabéns meu bem 
A gente tá um pouco longe um do outro, não posso te abraçar, te beijar, é muito menos te fazer cócegas, mas eu posso te amar, te falar o tanto que eu to com saudade, o tanto que eu quero te ver, posso contar os dias pra te ver, eu só quero que sabia que eu te amo meu amor, curta seu aniversário viu, feliz aniversário e parabéns</p>
                    <p>Eu te amo hoje, amanhã e sempre!</p>
                    <p class="signature">Com todo meu amor,<br><strong>Vitor ❤️</strong></p>
                </div>
            </div>
        </section>

        <!-- Estatísticas do Relacionamento -->
        <section class="stats-section">
            <h2>Estatísticas do Nosso Amor</h2>
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-number" id="total-dias">0</span>
                    <span class="stat-label">Dias Juntos</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number" id="total-horas">0</span>
                    <span class="stat-label">Horas Juntos</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number" id="batimentos">0</span>
                    <span class="stat-label">Batimentos do Coração</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">∞</span>
                    <span class="stat-label"> Eu Te Amos</span>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <p>Feito com ❤️ pelo Vitor para a Carla</p>
            <p class="date">Criado em <?php echo date('d/m/Y'); ?></p>
        </footer>
    </div>

    <script src="script.js"></script>
</body>
</html>
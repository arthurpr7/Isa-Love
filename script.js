document.addEventListener('DOMContentLoaded', () => {
    // Lógica para index.html
    const goToSecondPageBtn = document.getElementById('goToSecondPage');
    if (goToSecondPageBtn) {
        const messages = [
            "O amor é a coisa mais bonita que existe, e você é a prova disso!",
            "Cada momento com você é um presente que guardo no coração!",
            "Você é o amor da minha vida, minha alma gêmea, meu tudo!",
            "Meu coração bate no ritmo do seu, feliz Dia dos Namorados!",
            "Você é minha inspiração diária, minha luz, meu eterno amor!"
        ];

        goToSecondPageBtn.addEventListener('click', () => {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            localStorage.setItem('specialValentineMessage', randomMessage);
            window.location.href = 'second_page.html';
        });
    }

    // Lógica para second_page.html
    const displayedMessageElement = document.getElementById('displayedMessage');
    const backgroundMusic = document.getElementById('background-music');
    
    // Função para tentar iniciar a música
    function startMusic() {
        if (backgroundMusic) {
            // Tenta várias vezes iniciar a música
            const playAttempt = setInterval(() => {
                backgroundMusic.play()
                    .then(() => {
                        clearInterval(playAttempt);
                    })
                    .catch(error => {
                        console.log("Tentando iniciar a música...");
                    });
            }, 1000);

            // Limpa a tentativa após 10 segundos
            setTimeout(() => {
                clearInterval(playAttempt);
            }, 10000);
        }
    }

    // Tenta iniciar a música quando a página carregar
    if (backgroundMusic) {
        // Tenta iniciar imediatamente
        startMusic();

        // Tenta iniciar quando o usuário interagir com a página
        document.addEventListener('click', () => {
            startMusic();
        }, { once: true });

        // Tenta iniciar quando o usuário tocar na tela (para dispositivos móveis)
        document.addEventListener('touchstart', () => {
            startMusic();
        }, { once: true });
    }

    if (displayedMessageElement) {
        const message = localStorage.getItem('specialValentineMessage');
        if (message) {
            displayedMessageElement.textContent = message;
            displayedMessageElement.style.animation = 'fadeIn 1s ease-in';
        }
    }

    // Lógica para slideshow de imagens em second_page.html
    const dynamicImage = document.getElementById('dynamic-image');
    const imagePaths = [
        './images/photo1.jpg',
        './images/photo2.jpg',
        './images/photo3.jpg',
        './images/photo4.jpg',
        './images/photo5.jpg',
        './images/photo6.jpg',
        './images/photo7.jpg',
        './images/photo8.jpg',
        './images/photo9.jpg',
        './images/photo10.jpg',
        './images/photo11.jpg',
        './images/photo12.jpg',
        './images/photo13.jpg',
        './images/photo14.jpg',
        './images/photo15.jpg',
        './images/photo16.jpg',
        './images/photo17.jpg',
        './images/photo18.jpg',
        './images/photo19.jpg',
        './images/photo20.jpg'
    ];
    let currentImageIndex = 0;

    function changeImage() {
        if (dynamicImage && imagePaths.length > 0) {
            dynamicImage.style.opacity = 0; // Inicia o fade out
            setTimeout(() => {
                currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
                dynamicImage.src = imagePaths[currentImageIndex];
                dynamicImage.style.opacity = 1; // Inicia o fade in
            }, 1000); // Tempo para o fade out (deve ser igual à transição CSS)
        }
    }

    if (dynamicImage) {
        setTimeout(() => {
            changeImage();
            setInterval(changeImage, 5000); // Muda a imagem a cada 5 segundos
        }, 2000);

        // Define a primeira imagem assim que a página carregar (mesmo que a música não esteja tocando ainda)
        if (imagePaths.length > 0) {
            dynamicImage.src = imagePaths[currentImageIndex];
            dynamicImage.style.opacity = 1;
        }
    }
}); 
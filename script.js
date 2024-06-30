document.addEventListener('DOMContentLoaded', (event) => {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    var vezes = 0;

    noBtn.addEventListener('click', () => {
        vezes++;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const noBtnRect = noBtn.getBoundingClientRect();

        const maxX = windowWidth - noBtnRect.width;
        const maxY = windowHeight - noBtnRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });

    yesBtn.addEventListener('click', () => {
        const phoneNumber = '5551997990082'; // Substitua pelo número de telefone desejado
        const message = 'EU QUEROO, e eu cliquei ' + vezes + " vezes no não";
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    });
});

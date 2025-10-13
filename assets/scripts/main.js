function SetupContactButton() {
    const contactButton = document.querySelector('.contacts_section');
    if (!contactButton) return;

    const contactButtonText = contactButton.querySelector('.contacts_section__text');
    const contactButtonIcon = contactButton.querySelector('.contacts_section__icon');

    const checkmarkIconSrc = './assets/img/Check_Icon_SVG_White.svg';
    const originalText = contactButtonText.textContent.trim();
    const originalIconSrc = contactButtonIcon.src;

    let timer = null;

    contactButton.addEventListener('click', () => {
        navigator.clipboard.writeText(originalText);
        contactButtonText.textContent = 'Copied!';
        contactButtonIcon.src = checkmarkIconSrc;

        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            contactButtonText.textContent = originalText;
            contactButtonIcon.src = originalIconSrc;
        }, 1000);
    });
}

function Setup() {
    SetupContactButton();
}

document.addEventListener('DOMContentLoaded', () => {
    Setup();
});

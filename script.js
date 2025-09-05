document.addEventListener('DOMContentLoaded', () => {

    // Gestion de la navigation mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');

    if (menuToggle && menuList) {
        menuToggle.addEventListener('click', () => {
            menuList.classList.toggle('active');
        });
    }

    // Gestion du formulaire de contact
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Validation simple
            if (name && email && message) {
                const recipientEmail = 'augustin7b@gmail.com';
                const subject = encodeURIComponent(`Nouveau message de contact de ${name}`);
                const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                
                window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

                alert(`Merci pour votre message, ${name} ! Nous avons bien reçu vos informations.`);
                form.reset();
            } else {
                alert('Veuillez remplir tous les champs du formulaire.');
            }
        });
    }

    // Défilement doux pour la navigation
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                if (menuList && menuList.classList.contains('active')) {
                    menuList.classList.remove('active');
                }
            }
        });
    }

});
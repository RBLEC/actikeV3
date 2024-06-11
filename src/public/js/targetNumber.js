        document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText.replace('%', '');
                    const increment = target / 200; // Ajustez ce chiffre pour modifier la vitesse de l'animation
                    if (count < target) {
                        counter.innerText = `${Math.ceil(count + increment)}%`;
                        setTimeout(updateCount, 20); // Ajustez ce délai pour modifier la fluidité de l'animation
                    } else {
                        counter.innerText = `${target}%`;
                    }
                };
                updateCount();
            });
        });
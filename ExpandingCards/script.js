const panels = document.querySelectorAll('.panel');


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        if (panel.classList.contains('active')){
            panel.classList.remove('active');
        } else {
            removeActiveClass();
            panel.classList.add('active');
        }
    });
});

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
};


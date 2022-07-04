const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.textContent = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.textContent; // + here casts a string into a number
        //c is the number that keeps getting incremeneted until we reach the target
        const increment = target / 200; //200 could be anything here, just switches up the timing

        if(c < target) {
            counter.textContent = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1);
        } else {
            counter.textContent = target
        }
    }

    
    updateCounter();
})
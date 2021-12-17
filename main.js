const app = document.getElementById('typewriter');

const typewriter = new typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
    .typeString('la eterna primavera')
    .pausefor(200)
    .start();
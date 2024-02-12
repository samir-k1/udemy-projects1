const image = document.querySelector('img');
let start = undefined;
let done = false;

function step(timestamp) {
    if (start === undefined) {
        start = timestamp;
    }

    let elapsed = timestamp - start;

    if (elapsed > 5000) {
        done = true;
    }

    if (done) {
        return;
    }

    image.style.transform = `translateY(${elapsed / 20}px)`;

    // console.log(elapsed);

    requestAnimationFrame(step);
}

requestAnimationFrame(step);

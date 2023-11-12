const time = document.querySelector('#input-time');
const velocity = document.querySelector('#input-velocity');
const distance = document.querySelector('#input-distance');

const resultDistance = () => {
    return distance.value = (time.value) * (velocity.value);
}

const resultVelocity = () => {
    return velocity.value = (distance.value) / (time.value);
}

const resultTime = () => {
    return time.value = (distance.value) / (velocity.value);
}

distance.addEventListener('keyup', () => {
    resultVelocity();
    resultTime();
});

time.addEventListener('keyup', () => {
    resultVelocity();
    resultDistance();
});

velocity.addEventListener('keyup', () => {
    resultDistance();
    resultTime();
});

/*

    1. Add possibility to change units for example meters to cm or m to km etc.
    
*/
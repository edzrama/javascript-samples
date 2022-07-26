const zombie = {
    eatBrains() {
        return 'yum yum yum';
    }
}

const walker = Object.create(zombie, {name: {value: 'chad'}});

console.log(walker)
console.log(walker.eatBrains())

const FIZZ = 'FIZZ';
const BUZZ = 'BUZZ';

for(let i = 0; i < 20; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(`${i}: ${FIZZ}${BUZZ}`);
        continue;
    }

    if(i % 3 == 0) {
        console.log(`${i}: ${FIZZ}`);
        continue;
    }

    if(i % 5 == 0) {
        console.log(`${i}: ${BUZZ}`);
    }
}
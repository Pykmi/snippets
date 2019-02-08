let seq = [0, 1];

for(let i = 0; i < 13; i++) {
    seq.push(seq[seq.length-2] + seq[seq.length-1]);
};

console.log(seq.join(', '));
 
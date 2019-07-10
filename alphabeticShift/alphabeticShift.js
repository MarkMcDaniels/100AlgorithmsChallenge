function alphabeticShift(string) {
    const cypher = {
        a:"b", b: "c", c: "d", e: "f", f: "g", g: "h", h: "i", i: "j", j: "k", k: "l", l: "m", m: "n", n: "o", o: "p", p: "q", q: "r", r: "s", s: "t", t: "u", u: "v", v: "w", w: "x", x: "y", y: "z", z: "a"
    };

    const broken = string.split("");
    let mod = [];

    broken.forEach(letter => {
        mod.push(cypher[letter]);
    });

    const newWord = mod.join("");
    return newWord;

}

console.log(alphabeticShift('crazy'));
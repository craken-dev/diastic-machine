let phrase_input,
    phrase_text = "";
let seed_input,
    seed_text = [];
let result = "";

function preload() {
    seed_input = loadStrings("seed.txt");
}

function setup() {
    noCanvas();
    phrase_input = select("#seed_phrase_input");
    for (let i = 0; i < seed_input.length; i++) {
        seed_text = concat(seed_text, split(seed_input[i], " "));
    }
}

function handle_button() {
    phrase_text = split(phrase_input.value(), "");
    result = diastic(seed_text, phrase_text);
    createP(result);
}

function diastic(seed, input) {
    let j = 0;
    let r = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] == " ") {
            r += " ";
        } else {
            while (seed[j][i] != input[i]) {
                j++;
            }
            r += seed[j] + " ";
        }
    }

    return r;
}

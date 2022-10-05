pragma circom 2.0.8;

template Main() {
    signal input example;
    signal example_doubled;
    signal output out;

    example_doubled <-- example * 2;
    out <-- example_doubled - example + 42;

    example_doubled === example * 2;
    out === example_doubled - example + 42;
}

component main = Main();

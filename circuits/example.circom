pragma circom 2.0.8;

template Main() {
    signal input example;
    signal example_squared;
    signal output out;

    example_squared <-- example * example + 2;
    out <-- example_squared - example + 42;

    example_squared === example * example + 2;
    out === example_squared - example + 42;
}

component main = Main();

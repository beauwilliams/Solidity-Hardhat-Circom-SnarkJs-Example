import { expect, assert } from "chai";
import { ethers, circuitTest } from "hardhat";

describe("example circuit", () => {
    let circuit : any;
    const exampleCircuitInputParams = {
        example: "42",
    }
    const sanityCheck = true;

    before(async () => {
        circuit = await circuitTest.setup("example");
    });

    it("Should produce a witness using snarkjs with valid constraints", async () => {
        const witness = await circuit.calculateWitness(exampleCircuitInputParams, sanityCheck);
        await circuit.checkConstraints(witness);
    });

    it("Witness has expected values according to input params and circuit logic", async () => {
        const witness = await circuit.calculateLabeledWitness(
          exampleCircuitInputParams,
          sanityCheck
        );
        assert.propertyVal(witness, "main.example", exampleCircuitInputParams.example);
        assert.propertyVal(
          witness,
          "main.out",
          "10723"
        );
    });


    it("Circuit has the correct output", async () => {
    const expected = { out: 10723 };
    const witness = await circuit.calculateWitness(exampleCircuitInputParams, sanityCheck);
    await circuit.assertOut(witness, expected);
  });
});

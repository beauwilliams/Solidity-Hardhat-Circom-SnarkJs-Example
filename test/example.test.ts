import { expect, assert } from "chai";
import { ethers, circuitTest } from "hardhat";
import { exportCallDataGroth16 } from "../utils/calculate-verifier-calldata-groth16";

describe("example circuit", () => {
  let circuit: any;
  let dataResult: any;
  const exampleCircuitInputParams = {
    example: "42",
  };
  const sanityCheck = true;
  let ExampleVerifierContract: any,
    exampleVerifierContractDeployment: any,
    ExampleVerifierImplementationContract: any,
    exampleVerifierImplementationContractDeployment: any;

  before(async () => {
    ExampleVerifierContract = await ethers.getContractFactory("Verifier");
    ExampleVerifierImplementationContract = await ethers.getContractFactory(
      "VerifierImplementation"
    );

    exampleVerifierContractDeployment = await ExampleVerifierContract.deploy();
    exampleVerifierImplementationContractDeployment =
      await ExampleVerifierImplementationContract.deploy();

    circuit = await circuitTest.setup("example");
    dataResult = await exportCallDataGroth16(
      exampleCircuitInputParams,
      "./circuits/example.wasm",
      "./circuits/example.zkey"
    );

    console.log(
      "------------------------------------------------------------------"
    );
    console.log(
      "-------------------------------NOTE-------------------------------"
    );
    console.log(
      "----This is the calldata we will provide to our proof function----"
    );
    console.log(
      "------------------------------------------------------------------"
    );
    console.log(dataResult);
    console.log(
      "------------------------------------------------------------------"
    );
    console.log(
      "------------------------------------------------------------------"
    );
    console.log(
      "------------------------------------------------------------------"
    );
    console.log(
      "------------------------------------------------------------------"
    );
  });

  it("Should produce a witness using snarkjs with valid constraints", async () => {
    const witness = await circuit.calculateWitness(
      exampleCircuitInputParams,
      sanityCheck
    );
    await circuit.checkConstraints(witness);
  });

  it("Witness has expected values according to input params and circuit logic", async () => {
    const witness = await circuit.calculateLabeledWitness(
      exampleCircuitInputParams,
      sanityCheck
    );
    assert.propertyVal(
      witness,
      "main.example",
      exampleCircuitInputParams.example
    );
    assert.propertyVal(witness, "main.out", "10723");
  });

  it("Circuit has the correct output", async () => {
    const expected = { out: 10723 };
    const witness = await circuit.calculateWitness(
      exampleCircuitInputParams,
      sanityCheck
    );
    await circuit.assertOut(witness, expected);
  });

  it("Implementation Contract of our Verifier contract should verify a valid proof and return true", async () => {
    let result = await exampleVerifierImplementationContractDeployment.verifyProof(
      dataResult.a,
      dataResult.b,
      dataResult.c,
      dataResult.Input
    );
    expect(result).to.equal(true);
  });
});

import FactorialSequencer from "../../sequencers/factorialSequencer";

describe("Sequencer: Factorial", () => {
    test("Should successfully generate factorial sequence", () => {
        const sequencer = FactorialSequencer();

        expect(sequencer()).toBe(1);
        expect(sequencer()).toBe(2);
        expect(sequencer()).toBe(6);
        expect(sequencer()).toBe(24);
        expect(sequencer()).toBe(120);
        expect(sequencer()).toBe(720);
    });
});

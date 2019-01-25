import FibonacciSequencer from "../../sequencers/fibonacciSequencer";

describe("Sequencer: Fibonacci", () => {
    test("Should successfully generate fibonacci sequence", () => {
        const sequencer = FibonacciSequencer();

        expect(sequencer()).toBe(1);
        expect(sequencer()).toBe(1);
        expect(sequencer()).toBe(2);
        expect(sequencer()).toBe(3);
    });
});

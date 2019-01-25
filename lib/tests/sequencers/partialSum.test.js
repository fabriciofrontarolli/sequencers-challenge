import PartialSumSequencer from "../../sequencers/partialSumSequencer";

describe("Sequencer: Partial Sum", () => {
    test("Should successfully generate partial sum sequence", () => {
        const sequencer = PartialSumSequencer(1, 3, 7, 2, 0);

        expect(sequencer()).toBe(1);
        expect(sequencer()).toBe(4);
        expect(sequencer()).toBe(11);
        expect(sequencer()).toBe(13);
        expect(sequencer()).toBe(13);
    });

    test("Should throw error when partial sum is out of value", () => {
        const sequencer = PartialSumSequencer(1, 3);

        expect(sequencer()).toBe(1);
        expect(sequencer()).toBe(4);
        expect(() => sequencer()).toThrowError("PartialSumSequencer: Generator out of value.");
    });
});

import RangeSequencer from "../../sequencers/rangeSequencer";

describe("Sequencer: Range", () => {
    test("Should successfully generate range sequence incrementing by 2", () => {
        const sequencer = RangeSequencer(1, 2);

        expect(sequencer()).toBe(1);
        expect(sequencer()).toBe(3);
        expect(sequencer()).toBe(5);
        expect(sequencer()).toBe(7);
    });

    test("Should successfully generate range sequence incrementing by 5", () => {
        const sequencer = RangeSequencer(0, 5);

        expect(sequencer()).toBe(0);
        expect(sequencer()).toBe(5);
        expect(sequencer()).toBe(10);
        expect(sequencer()).toBe(15);
    });

    test("Should throw error when start and step arguments are not informed", () => {
        try {
            RangeSequencer();
        } catch (error) {
            expect(error.message).toBe("RangeSequencer: Sequencer must receive 2 arguments. [1] start, [2] step.");
        }
    });
});

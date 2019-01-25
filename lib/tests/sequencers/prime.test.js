import PrimeSequencer, { isPrimeNumber } from "../../sequencers/primeSequencer";

describe("Sequencer: Prime", () => {
    test("Should successfully generate prime sequence", () => {
        const sequencer = PrimeSequencer();

        expect(sequencer()).toBe(1);
        expect(sequencer()).toBe(2);
        expect(sequencer()).toBe(3);
        expect(sequencer()).toBe(5);
        expect(sequencer()).toBe(7);
        expect(sequencer()).toBe(11);
        expect(sequencer()).toBe(13);
        expect(sequencer()).toBe(17);
        expect(sequencer()).toBe(19);
        expect(sequencer()).toBe(23);
        expect(sequencer()).toBe(29);
        expect(sequencer()).toBe(31);
    });

    describe("IsPrimeNumber", () => {
        test("Should success for prime numbers", () => {
            const isPrime = isPrimeNumber(10);
            expect(isPrime).toBe(false);
        });

        test("Should fail for not prime numbers", () => {
            const isPrime = isPrimeNumber(13);
            expect(isPrime).toBe(true);
        });
    });
});

import Generator from "../../generator";
import RangeSequencer from "../../sequencers/rangeSequencer";
import PipedSequencer from '../../pipedSequencer';

describe("Generator", () => {
    test("Should return raw value from original generator", () => {
        const generator = Generator(RangeSequencer, 1, 2);
        expect(generator.next()).toBe(1);
        expect(generator.next()).toBe(3);
        expect(generator.next()).toBe(5);
        expect(generator.next()).toBe(7);
    });

    test("Should successfully pipe through enhancer functions and return the correct result", () => {
        const accumulatorFn = () => {
            let sum = 0;
            return function (value) {
              sum += value;
              return sum;
            };
        }

        const pipedSequencer = PipedSequencer(RangeSequencer, 2, 3)
                                .pipeline(accumulatorFn)
                                .invoke();

        const generator = Generator(pipedSequencer);

        expect(generator.next()).toBe(2);
        expect(generator.next()).toBe(7);
        expect(generator.next()).toBe(15);
        expect(generator.next()).toBe(26);
        expect(generator.next()).toBe(40);
        expect(generator.next()).toBe(57);
    });
});

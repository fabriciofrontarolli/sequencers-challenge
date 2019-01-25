function partialSumSequencer () {
    const values = Array.from(arguments);
    let currentIndex = 1;

    return () => {
        if (currentIndex > values.length) {
            throw new Error("PartialSumSequencer: Generator out of value.");
        }

        const valuesToSum = values.slice(0, currentIndex);
        const sum = valuesToSum.reduce((accumulator, currentValue) => accumulator += currentValue, 0);
        currentIndex += 1;
        return sum;
    }
}

export default partialSumSequencer;

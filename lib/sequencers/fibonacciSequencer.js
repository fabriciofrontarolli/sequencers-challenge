function fibonacciSequencer () {
    let previous = 0;
    let fibonacci = 0;

    return () => {
        if (fibonacci === 0) { return ++fibonacci; }

        const currentFibonacci = fibonacci;
        fibonacci += previous;
        previous = (previous === 0) ? 1 : currentFibonacci;
        return fibonacci;
    }
}

export default fibonacciSequencer;

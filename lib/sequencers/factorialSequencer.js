function factorialSequencer () {
    let currentFactorial = 1;
    let currentResult = 1;

    return () => currentResult *= currentFactorial++
}

export default factorialSequencer;

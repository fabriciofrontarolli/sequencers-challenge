function rangeSequencer () {
    const range = Array.from(arguments);
    
    if (range.length !== 2) {
        throw new Error("RangeSequencer: Sequencer must receive 2 arguments. [1] start, [2] step.");
    }

    let currentValue = undefined;
    const start = range.shift();
    const step = range.shift();    

    return () => currentValue = (currentValue === undefined) ? start : currentValue += step
}

export default rangeSequencer;

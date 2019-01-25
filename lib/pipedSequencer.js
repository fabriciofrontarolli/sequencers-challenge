function pipedSequencer(sequencer, ...sequencerArgs) {
    const enhancerFns = [];

    /* "instantiate" the sequencer  */
    const builtSequencer = sequencer.apply(this, sequencerArgs);

    return {
        pipeline: function (accumulator, ...accumulatorArgs) {
            enhancerFns.push(accumulator(...accumulatorArgs));            
            return this;
        },

        invoke: function () {
            return () => () => {
                let pristineValue = builtSequencer();

                /* pass through the enhancers to have get result */
                const pipedValue = enhancerFns.reduce((accumulatorValue, enhancerFn) => {
                    return enhancerFn(accumulatorValue);
                }, pristineValue);

                return pipedValue;
            }
        }
    }
}

export default pipedSequencer;

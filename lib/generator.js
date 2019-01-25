function generator (sequencer, ...sequencerArgs) {
    if (!sequencer.constructor === Function || !sequencer.constructor === Object) {
        throw new error ("argument: sequencer must be of type Function or Object.");
    }

    /* "Instantiate" the Sequencer" */
    const builtSequencer = sequencer(...sequencerArgs);

    return {
        next: () => {
            return builtSequencer()
        }
    }
}

export default generator;

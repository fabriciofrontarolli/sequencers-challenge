# REACT sequencers


[![CircleCI](https://circleci.com/gh/fabriciofrontarolli/sequencers-challenge.svg?style=svg)](https://circleci.com/gh/fabriciofrontarolli/sequencers-challenge)


### Tech

REACT Sequencers uses a number of open source projects to work properly:

* [ReactJS] - As frontend lib!
* [Redux] - A Predictable State Container for JS Apps
* [ParcelJS] - A seamless packer to interpret SASS, JAX, ES6, etc...
* [Materialize] - great UI Framework for modern web apps

### Running the Project

React Sequencers requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd directory
$ npm install
$ npm start
```

- The app will start at port 15000

### Test Coverage
To get the code coverage for the backend run:

```sh
$ cd directory
$ npm install
$ npm run test:backend-coverage
```

### Consideradions

### Workflow

- One single branch (master) (as for the test).
- I started with Test Driven Development on the Sequencers, Generator and PipedSequencer.
- Backend done, moved on to the frontend to design, integrate and develop the interface and functionality.

### CI/CD

- I setup CI with CircleCI. It has 2 workflows: 
--- *build*: This job build and packs the application to make it available for deployment
--- *test*: This job runs and displays test coverage for the tests in the application
- Continuous Delivery: I had some issues when setting up the deployment to Heroku. (Work in Progress).




### TODOs

- Backend (Lib)
     - Write MORE Tests
     - Properly document (JSDoc) each Sequencers, Generator, PIpedSequencer
 - Frontend
    - Make use of the Generators and Accumulators functions (make it available for the user)
    - Add PropTypes to each component
    - Write Tests for the components
    - Add Validations
    - Improve Layout
- CI/CD

License
----
MIT

**Free Software, Hell Yeah!**

----------------

# Code Challange for Fullstack Engineer

The main objective of this is to see if you're a competent developer and exhibit the qualities and write code in the way that will be satisfactory to our standards.

The main aspects of quality of your work that we're evaluating:
Your code is well-written. This means that it's easy to understand (declarative) and follows best practices. Duplicated code is a big minus, unless absolutely necessary.
The way you have organized your code makes it predictable and extremely clear how the application works and where you can find certain types of files.
You demonstrate thorough consideration of the design and extensibility of your code.
Your ability to write efficient and effective unit tests.
Do not take these lightly. Arrange time so that after you write your code, you have time to refactor to make sure everything is meeting the expectations in terms of quality.
Ultimately, we don't want to read any code that makes us go wtf?

The actual output of the project should demonstrate / include:
A deep understanding of the JS fundamentals (array functions, using functions as first class citizens, etc)
Appropriate process in writing the code via TDD (be sure to include work in progress to show this)
Ability to work with the front-end. If you are well-versed in modern FE frameworks, use nested components, use appropriate state management,  don't use excessive libraries that add bloat.
Proper packaging — I shouldn't have issues running your code. Deploy your project  so that it is easier to review your project from a functional standpoint.
 Notes on design decisions and assumptions / shortcuts.

We only want you to spend a maximum of two work on this project, so choose how you spend time wisely. That means you should only be spending, at a maximum, between 16-24 hours on this test. Given that timeframe, you might have to prioritize specific things, but the test instructions clearly state at the beginning what is important, what is not and what we're looking out for. 
Again, make sure you put time aside for refactoring and cleanup.

---

The problem consists of two parts, the "Back-End" and the "Front-End". 

You may structure the architecture of the app however you want, please consider the whole scope of the project before deciding and include some notes on why you made the design decisions you made when handing in the project. If none are given, we will assume you didn't make any design decisions, and this is a huge negative.
If you are focused more on the back-end, please showcase that with really well-written BE code as per the main 3 qualities that we're looking for. We will expect less from the UI / UX.
Conversely, if you are more focused on the front-end, don't implement all the sequencers and pipeline functions, focus on making the front end UX a bit better, or if you are savvy enough, focus on the UI as well.
We will rate you on how well you did on what you know best. The worst thing you can do here is to try to implement more things and do a bad job at more.
When you're finished with the project, put all the code on a public repo on Github, so that our engineers can access it easily. Please don't send a Google Drive link for this. 

# Back End

You will be creating pseudo generator functions based on the following sequencer functions that you will implement:

```javascript
function factorialSeq () {...} // 1, 1, 2, 6, 24, ...
function fibonacciSeq () {...} // 1,	1, 2, 3, 5, 8, 13, ... 
function rangeSeq (start, step) {...} // rangeSeq(1, 2) -> 1, 3, 5, 7, ...
function primeSeq () {...} // 2,	3, 5, 7, 11, 13, ...
function partialSumSeq (1, 3, 7, 2, 0) {...} // 1, 4, 11, 13, 13, end
```

These functions should be called within a general generator shown below.
Limitation: Please do not use generators or async / await to make the generator/sequencers work if you can avoid it — we're looking to somewhat mock the functionality without full synchronous abilities. However, the function should mimic the functionality of a generator hence the name.

```javascript
function generator (sequencer) {
  // ...
}
```

Whenever we want the result from a sequencer, it should be like so:
Pay close attention to how the generator takes in arguments for the rangeGen example

```javascript
var someGen = generator(oneOfYourSequencerFns);
someGen.next(); // next value in sequence
someGen.next(); // next value in sequence

// Specific Examples

var factorialGen = generator(factorialSeq);
factorialGen.next(); // 1
factorialGen.next(); // 1
factorialGen.next(); // 2
factorialGen.next(); // 6

var rangeGen = generator(rangeSeq, 1, 2);
rangeGen.next(); // 1
rangeGen.next(); // 3
rangeGen.next(); // 5
```

Notice that all generators after given a sequencer will have the next function.
If you call .next() on a generator that is out of values, it should produce an error.
Imagine the following function:

```javascript
function accumulator () {
  var sum = 0;
  return function (value) {
    sum += value;
    return sum;
  };
}
//Example
var ac = accumulator(); // ac(1) -> 1, ac(4) -> 5, ac(2) -> 7
```

Now, you'll implement the following:

```javascript
var pipedSeq = pipeSeq(rangeSeq, 2, 3) // 2, 5, 8, 11
      .pipeline(accumulator) // 2, 7(5+2), 15(7+8), 26(15+11)
      .invoke();
```

pipeSeq() receives the sequencer function and optionally some parameters passed to the sequencer and returns and object with two methods:
pipeline(pipe) :receives the pipe function and optionally some parameters passed to the pipe function. It returns itself.
invoke(): return the piped sequencer object.
So now, the overall result will look like:

```javascript
var seq = generator (pipedSeq);
seq.next(); // 2
seq.next(); // 7
seq.next(); // 15
seq.next(); // 26
...
```

Also implement the following if you have time:

```javascript
function isEven () { ... }

var ie = isEven();
// ie(1) -> {status: false, number:1}, ie(4) -> {status: true, number:4}
```

# Front End

Create a UI with your technology of choice. Please choose what you are most familiar with.
We use React / Redux, but you may use any FE framework of your choice. If you do, you may use any boilerplate/starter. 
This UI will allow you to activate any of the sequencers. After they are active, they should be allowed to be called for their next value.
You should allow the user to optionally add in the accumulator / isEven functions into the pipeline.
There should be an appropriate showcase of values however you see fit!

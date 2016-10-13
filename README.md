# Buble Tape Runner

The name `buble-tape-runner` is a bit misleading, because this tool uses both [`buble`](https://buble.surge.sh/) as well as [`reify`](https://github.com/benjamn/reify) to compile ES6 JavaScript into a form that Node can interpret. It also isn't really in any way restricted to running `tape` tests, that's just the purpose for which it was born. The name is simply a followup for [`babel-tape-runner`](https://github.com/wavded/babel-tape-runner).

## How to use

Install with `npm i buble-tape-runner`, with appropriate save flags if you wish. Then in your `test` (or other) `package.json` script, enter `buble-tape-runner <glob pattern>`, where `glob-pattern` is e.g. `test/*.js`.

## License

Buble Tape Runner is MIT licensed.

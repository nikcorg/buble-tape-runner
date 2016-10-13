# Buble Tape Runner

The name `buble-tape-runner` is a bit misleading, because this tool uses both [`buble`](https://buble.surge.sh/) as well as [`reify`](https://github.com/benjamn/reify) to compile ES6 JavaScript into a form that Node can interpret. It also isn't really in any way restricted to running `tape` tests, that's just the purpose for which it was born. The name is simply a followup for [`babel-tape-runner`](https://github.com/wavded/babel-tape-runner).

## How to use

Install with `npm i buble-tape-runner`, with appropriate save flags if you wish. Then in your `test` (or other) `package.json` script, enter `buble-tape-runner <glob pattern>`, where `glob-pattern` is e.g. `test/*.js`.

## Why not Babel

Babel is an *amazing* project, which I use often and a lot, but sometimes it can feel a bit like overkill, when you don't need all the latest and greatest of the shiny things available. Buble is a turnkey ES6 to ES5 transpiler, and Reify tackles the new module import and export to CommonJS transpilation. Installation is fast and zero configuration.

## License

Buble Tape Runner is MIT licensed.

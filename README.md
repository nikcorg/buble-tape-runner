# Buble Tape Runner

The name `buble-tape-runner` is a bit misleading, because this tool uses both `buble` as well as `reify` to compile code into a runnable form. Also it really isn't in any way restricted to running `tape` tests. The name is mostly simply a followup for `babel-tape-runner`.

## How to use

Install with `npm i buble-tape-runner`, with appropriate save flags if you wish. Then in your `test` (or other) `package.json` script, enter `buble-tape-runner <glob pattern>`, where `glob-pattern` is e.g. `test/*.js`.

## License

Buble Tape Runner is MIT licensed.

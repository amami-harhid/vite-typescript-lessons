import { terminal } from 'virtual:terminal';

const _console = window.console;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const log = (...args: any[]) => {
    _console.log(...args);
    terminal.log(...args);
}

export const console = {
    log: log,
}
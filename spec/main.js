import test from '../src/main';

describe('spec', function () {
    it('passing test', function () {
        expect(test()).toBe(true);
    });

    it('failing test', function () {
        expect(test()).toBe(false);
    });
});
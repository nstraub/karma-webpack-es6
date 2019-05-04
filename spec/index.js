import test from '../src';

describe('spec', function () {
    it('passing test', function () {
        expect(test()).toBe(true);
    });

    it('failing test', function () {
        expect(test()).toBe(false);
    });
});

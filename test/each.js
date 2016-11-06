const assert = require('assert');
const each = require('../each');

suite('each', function () {
	test('with array and callback returns array', function () {
		assert.deepStrictEqual(each([1, 'two', 3], function (v) { return v + 2; }), [3, 'two2', 5]);
	});
	test('with empty array and callback returns array', function () {
		assert.deepStrictEqual(each([], function (v) { return v; }), []);
	});
	test('with object and callback returns object', function () {
		assert.deepStrictEqual(each({a: 1, b: 'two', c: 3}, function (v) { return v + 2; }), {a: 3, b: 'two2', c: 5});
	});
	test('with empty object and callback returns object', function () {
		assert.deepStrictEqual(each({}, function (v) { return v; }), {});
	});
});
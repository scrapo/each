const assert = require('assert');
const each = require('../each');

suite('each', function () {
	test('with array and callback using value returns array', function () {
		assert.deepStrictEqual(each([1, 'two', 3], function (v) { return v + 2; }), [3, 'two2', 5]);
	});
	test('with array and callback using value and key returns array', function () {
		assert.deepStrictEqual(each(['ab', 123, 'def'], function (v, k) { return k + '_' + v; }), ['0_ab', '1_123', '2_def']);
	});
	test('with empty array and callback returns array', function () {
		assert.deepStrictEqual(each([], function (v) { return v; }), []);
	});
	test('with object and callback using value returns object', function () {
		assert.deepStrictEqual(each({a: 1, b: 'two', c: 3}, function (v) { return v + 2; }), {a: 3, b: 'two2', c: 5});
	});
	test('with object and callback using value and key returns object', function () {
		assert.deepStrictEqual(each({ab: 12, cd: 34, ef: 56}, function (v, k) { return k + '_' + v; }), {ab: 'ab_12', cd: 'cd_34', ef: 'ef_56'});
	});
	test('with empty object and callback returns object', function () {
		assert.deepStrictEqual(each({}, function (v) { return v; }), {});
	});
	test('with array and callback using value and filter returns array', function () {
		assert.deepStrictEqual(each([-1, 0, 'two', false, 3], function (v) { return v; }, true), [-1, 'two', 3]);
	});
	test('with array and callback using value and key and filter returns array', function () {
		assert.deepStrictEqual(each([-1, 0, 'two', false, 3], function (v, k) { return v + '_' + k; }, true), ['-1_0', '0_1', 'two_2', 'false_3', '3_4']);
	});
	test('with object and callback using value and filter returns object', function () {
		assert.deepStrictEqual(each({a: -1, b: 0, c: 'two', d: false, f: 3}, function (v) { return v; }, true), {a: -1, c: 'two', f: 3});
	});
	test('with object and callback using value and key and filter returns object', function () {
		assert.deepStrictEqual(each({a: -1, b: 0, c: 'two', d: false, f: 3}, function (v, k) { return v + '_' + k; }, true), {a: '-1_a', b: '0_b', c: 'two_c', d: 'false_d', f: '3_f'});
	});
});
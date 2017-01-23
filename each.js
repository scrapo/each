const strategies = {
	Array: function (iterable, callback) {
		const result = [];
		for (var i = 0; i < iterable.length; i++) {
			result.push(callback(iterable[i], i));
		}
		return result;
	},
	Object: function (iterable, callback) {
		const result = {};
		for (var key in iterable) {
			if (iterable.hasOwnProperty(key)) {
				result[key] = callback(iterable[key], key);
			}
		}
		return result;
	}
};

module.exports = function (iterable, callback) {
	return strategies[iterable.constructor.name](iterable, callback);
};
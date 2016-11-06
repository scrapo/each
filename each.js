const strategies = {
	Array: function (iterable, callback) {
		const result = [];
		iterable.forEach(function (item) {
			result.push(callback(item));
		});
		return result;
	},
	Object: function (iterable, callback) {
		const result = {};
		for (var key in iterable) {
			if (iterable.hasOwnProperty(key)) {
				result[key] = callback(iterable[key]);
			}
		}
		return result;
	}
};

module.exports = function (iterable, callback) {
	return strategies[iterable.constructor.name](iterable, callback);
};
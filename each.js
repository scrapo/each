const strategies = {
	Array: function (iterable, callback, filter) {
		const result = [];
		iterable.forEach(function (item, i) {
			const subResult = callback(item, i);
			if (!filter || subResult) {
				result.push(subResult);
			}
		});
		return result;
	},
	Object: function (iterable, callback, filter) {
		const result = {};
		for (var key in iterable) {
			if (iterable.hasOwnProperty(key)) {
				var subResult = callback(iterable[key], key);
				if (!filter || subResult) {
					result[key] = subResult;
				}
			}
		}
		return result;
	}
};

module.exports = function (iterable, callback, filter) {
	return strategies[iterable.constructor.name](iterable, callback, filter);
};
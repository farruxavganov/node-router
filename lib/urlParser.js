module.exports = (baseURL) => (req, res) => {
	const url = new URL(req.url, baseURL);
	const params = {};
	req.pathname = url.pathname;
	url.searchParams.forEach((value, key) => {
		params[key] = value
	})

	req.params = params
}
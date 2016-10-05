/**
 * App 基础, App. 静态方法，App.prototype. 为实例方法
 */
var App = (function () {
	function App() {
	}

	App.url = function (url) {
		if (url.charAt(0) != '/') {
			url = '/' + url;
		}
		return this.baseUrl + url;
	};

	App.baseUrl = '/';


	return App;
}());
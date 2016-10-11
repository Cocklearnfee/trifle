var PageInit = (function () {
	function PageInit() {
	}

	/**
	 * 初始化菜单
	 */
	PageInit.initMenu = function () {
		$(".metismenu").metisMenu({});
	};

	/**
	 * 初始化主题
	 */
	PageInit.initTheme = function () {
		console.log('init theme');
	};

	PageInit.init = function () {
		this.initMenu();
		this.initTheme();
	};

	return PageInit;
}());

$(function () {
	PageInit.init();
});
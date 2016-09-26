<!DOCTYPE html>
<html lang="en">
<head>

	{{> body-header}}

</head>
<body>

<!--页面包装-->
{{!--
navbar-left-fixed: 固定左侧导航
navbar-right-fixed: 固定右侧导航
navbar-top-fixed: 固定顶部导航
navbar-bottom-fixed: 固定底部导航
--}}
<div class="wrapper navbar-left-fixed navbar-right-fixed">

	{{> navbar-left}}

	{{> navbar-top}}

	{{#> page-content}}

	我是正式的页面内容1

	{{/page-content}}

	{{> navbar-bottom}}

	{{> navbar-right}}

</div>

{{> body-footer}}

</body>
</html>
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
<div class="wrapper navbar-left-fixed navbar-right-fixed navbar-top-fixed">

	{{> navbar-left}}

	<!--页面主体-->
	<div class="page-wrapper">

		{{> navbar-top}}

		<div class="row page-header">
			<div class="col-lg-10">
				<h4 class="page-header-title">Basic Form</h4>

				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="#">Home</a></li>
					<li class="breadcrumb-item"><a href="#">二级标题</a></li>
					<li class="breadcrumb-item active"><strong>当前页面</strong></li>
				</ol>
			</div>
			<div class="col-lg-2">扩展菜单</div>
		</div>
		<div class="page-content">
			我是正式的页面内容1
		</div>

		{{> navbar-bottom}}

	</div>

</div>

{{> body-footer}}

</body>
</html>
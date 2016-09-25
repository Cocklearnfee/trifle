<!DOCTYPE html>
<html lang="en">
<head>
	{{> body-header}}
</head>
<body>

<!--页面包装-->
<div>

	<!--  -->
	{{> navbar-left}}

	<div>

		<!--页面头-->
		{{> navbar-top}}

		<!--页面内容-->
		<div class="page-wrapper">
			page content
		</div>

		<!--页面尾-->
		{{> navbar-bottom}}

	</div>

	<!--右侧导航-->
	{{> navbar-right}}

</div>
{{> body-footer}}
</body>
</html>
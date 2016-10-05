<!DOCTYPE html>
<html lang="en">
<head>

	{{> body-header}}

</head>
<body>

<!--页面包装-->
{{!--
sidebar-left-fixed: 固定左侧导航
sidebar-right-fixed: 固定右侧导航
sidebar-top-fixed: 固定顶部导航
sidebar-bottom-fixed: 固定底部导航
--}}
<div class="wrapper sidebar-left-fixed sidebar-right-fixed sidebar-top-fixed">

	{{> sidebar-left active=Dashboard-v.1.0}}

	<!--页面主体-->
	<div class="page-wrapper">

		{{> sidebar-top}}

		<div class="page-header">
			<div class="row">
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
		</div>

		<div class="page-content">
			<div class="row">
				<div class="col-lg-4">
					<div class="card">
						<div class="card-block">
							<h4 class="card-title">Card title</h4>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">Cras justo odio</li>
							<li class="list-group-item">Dapibus ac facilisis in</li>
							<li class="list-group-item">Vestibulum at eros</li>
						</ul>
						<div class="card-block">
							<a href="#" class="card-link">Card link</a>
							<a href="#" class="card-link">Another link</a>
						</div>
					</div>
				</div>

				<div class="col-lg-4">
					<div class="card">
						<div class="card-header">
							Featured
						</div>
						<div class="card-block">
							<h4 class="card-title">Card title</h4>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div class="card-block">
							<a href="#" class="card-link">Card link</a>
							<a href="#" class="card-link">Another link</a>
						</div>
					</div>
				</div>
			</div>

		</div>

		{{> sidebar-bottom}}

	</div>

</div>

{{> body-footer}}

</body>
</html>
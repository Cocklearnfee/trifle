<!--左侧导航-->
<div class="sidebar sidebar-left">

	<ul class="nav nav-pills nav-stacked metismenu">
		<li class="nav-item nav-header">
			<div class="dropdown profile-element">
				<span class="d-block">
					<img alt="image" class="img-circle" width="80" src="/dist/image/java.png"/>
				</span>
				<a data-toggle="dropdown" href="#">
                            <span class="clear">
								<span class="d-block m-t-xs"><strong class="font-bold">David Williams</strong></span>
								<span class="text-xs d-block dropdown-toggle">Art Director</span>
							</span>
				</a>
				<div class="dropdown-menu">
					<a href="#" class="dropdown-item">个人信息</a>
					<a href="#" class="dropdown-item">邮箱</a>
					<div class="dropdown-divider"></div>
					<a href="#" class="dropdown-item">登出</a>
				</div>
			</div>
			<div class="logo-element">
				IN+
			</div>
		</li>

		{{#each menus}}

		{{#menuContains this/menus ../active}}
		<li class="nav-item active">

			<a class="nav-link" aria-expanded="true" href="{{#if href}}{{href}}{{/if}}">
				<i class="{{icon}}"></i>
				<span>{{title}}</span>
				<span class="fa arrow"></span>
			</a>

			{{#if menus}}
			<ul class="nav nav-second-level" aria-expanded="true">

				{{#each menus}}

				{{#compare title "==" ../../active}}
				<li class="nav-item active">
					<a class="nav-link" href="{{#if href}}{{href}}{{/if}}">{{title}}</a>

					{{#if menus}}
					<ul class="nav nav-third-level collapse" aria-expanded="true">

						{{#each menus}}

						<li class="nav-item">
							<a class="nav-link" href="{{href}}">{{title}}</a>
						</li>

						{{/each}}

					</ul>
					{{/if}}

				</li>
				{{else}}
				<li class="nav-item">
					<a class="nav-link" href="{{href}}">{{title}}</a>
				</li>
				{{/compare}}

				{{/each}}

			</ul>
			{{/if}}

		</li>
		{{else}}
		<li class="nav-item">

			<a class="nav-link" aria-expanded="false" href="{{#if href}}{{href}}{{/if}}">
				<i class="{{icon}}"></i>
				<span>{{title}}</span>
				{{#if menus}}
				<span class="fa arrow"></span>
				{{/if}}
			</a>

			{{#if menus}}
			<ul class="nav nav-second-level collapse" aria-expanded="false">

				{{#each menus}}
				<li class="nav-item">
					<a class="nav-link" href="{{href}}">
						<span>{{title}}</span>
						{{#if menus}}
						<span class="fa arrow"></span>
						{{/if}}
					</a>

					{{#if menus}}
					<ul class="nav nav-third-level collapse" aria-expanded="true">

						{{#each menus}}

						<li class="nav-item">
							<a class="nav-link" href="{{href}}"><span>{{title}}</span></a>
						</li>

						{{/each}}

					</ul>
					{{/if}}

				</li>
				{{/each}}

			</ul>
			{{/if}}

		</li>
		{{/menuContains}}

		{{/each}}
	</ul>
</div>

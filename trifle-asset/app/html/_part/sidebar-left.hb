<!--左侧导航-->
<div class="sidebar sidebar-left">
	<ul class="nav nav-pills nav-stacked metismenu">
		<li class="nav-item nav-header">
			<div class="dropdown profile-element">
				{{principal/realName}} / {{principal/roles}} /{{principal/portrait}}
				<span><img alt="image" class="img-circle" width="80" src="/dist/image/java.png"/></span>
				<a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="clear">
								<span class="block m-t-xs"><strong class="font-bold">David Williams</strong></span>
								<span class="text-muted text-xs block">Art Director <b class="caret"></b></span>
							</span>
				</a>
				<ul class="dropdown-menu animated fadeInRight m-t-xs">
					<li><a href="profile.html">Profile</a></li>
					<li><a href="contacts.html">Contacts</a></li>
					<li><a href="mailbox.html">Mailbox</a></li>
					<li class="divider"></li>
					<li><a href="login.html">Logout</a></li>
				</ul>
			</div>
			<div class="logo-element">
				IN+
			</div>
		</li>

		<!--@format:off-->
		{{#each menus}}

		<li class="nav-item">

			<a class="nav-link" href="{{#if href}}{{href}}{{/if}}">
				<i class="{{icon}}"></i>
				<span>{{title}}</span>
			</a>

			{{#if menus}}

			<ul class="nav nav-second-level">
				{{#each menus}}
				<li class="nav-item">
					<a class="nav-link" href="{{href}}">{{title}}</a>
				</li>
				{{/each}}

			</ul>

			{{/if}}

		</li>

		{{/each}}
		<!--@format:on-->


	</ul>
</div>

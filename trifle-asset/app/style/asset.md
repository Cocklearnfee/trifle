### 样式开法约定

#### bootstrap 样式大概规则

* 样式设计上，尽量设计的小，层级少，样式属性累加，方便组合。
* 自定义或者扩展的需求能够覆盖 bootstrap 中的定义。

	> 将自定义的 custom.css 放在 bootstrap 中定义的最前面。
	
* utilities 与组件无关的定义，能够独立使用，作为最基础的方法，能够和现有组件样式随意组合。
* mixin 主要定义组件内的规则规范
 
 	mixin 不能独立使用在 html 中，需要在组件中样式中定义才能生效，
 	这点有点类似 java 中的抽象对象或者接口，使用 mixin 的可以理解为实现类。
	另外在组织结构上，mixin 的定义和使用 有点类似 service 和 dao 的关系。
	在 dao 内定义基础的实现，在使用时，能够在 service 中定义自己的业务逻辑。
	java 开发中 service 和 dao 不是一一对应，该处也是一样。
	
	> 以 bootstrap 中的 `scss/_alert.scss` 为例加以具体分析理解：
	>
	> 在 `_alert.scss` (alert service) 中使用了两个 mixin： `scss/mixins/_alert.scss` (alert dao)
	和 `scss/mixins/_border-radius.scss` (border dao)。
	在 alert dao 中定义了不同 alert 可能会有哪些样式，这些不同之处将以参数传入，同时也定义了该类下共有元素的样式。
	在 border dao 中定义了不同方向的圆角定义，其中需要用到部分全局变量。

---

#### 项目内文件结构

* components: 编写组件样式的位置。
* mixins: 组件内用到的 mixin 的位置。
* overrides: 模版内用到库重载样式的位置。
* utilities: 模版内工具样式的位置。

---

#### 项目内样式结构

1. 加载变量，越靠近用户的优先级越高。

	- 优先加载对现有主题的加载，扩写主题和模板
	- 加载主题自定义变量，在模板的基础上定义成套的样式，成为主题风格
	- 加载模板自定义变量，方便模版内样式的统一调整

2. 加载 mixin，包括模板内和库重载 mixin
3. 加载组件样式。
4. 独立页面样式，页面内样式重载。




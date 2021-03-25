(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{431:function(t,a,v){"use strict";v.r(a);var _=v(13),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"http-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-协议"}},[t._v("#")]),t._v(" http 协议")]),t._v(" "),v("h2",{attrs:{id:"http-协议是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-协议是什么"}},[t._v("#")]),t._v(" http 协议是什么？")]),t._v(" "),v("p",[t._v("超文本传输协议（属于应用层协议）")]),t._v(" "),v("h2",{attrs:{id:"特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点：")]),t._v(" "),v("p",[t._v("无状态，现在 cookie 解决了无状态的问题（早起网页开发时，用 cookie 解决，现在是 cookie 和 session 配合使用）")]),t._v(" "),v("h2",{attrs:{id:"作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),v("p",[t._v("规定了服务器和客户端传递信息的规则（统称为报文，分为：请求报文、响应报文）")]),t._v(" "),v("h2",{attrs:{id:"版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[t._v("#")]),t._v(" 版本")]),t._v(" "),v("ol",[v("li",[t._v("http 1.0（老版本）：不支持长连接")]),t._v(" "),v("li",[t._v("http 1.1（主流版本）：优点：支持长连接；弊端：同时发送资源的数量过小。")]),t._v(" "),v("li",[t._v("http 2.0（最新版）：同时发送资源的数量稍有提升")])]),t._v(" "),v("h2",{attrs:{id:"报文-请求报文、响应报文-的组成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#报文-请求报文、响应报文-的组成"}},[t._v("#")]),t._v(" 报文（请求报文、响应报文）的组成")]),t._v(" "),v("ol",[v("li",[t._v("报文首行")]),t._v(" "),v("li",[t._v("报文头")]),t._v(" "),v("li",[t._v("空行（仅仅作为一个分割）")]),t._v(" "),v("li",[t._v("报文体")])]),t._v(" "),v("img",{attrs:{src:"https://raw.githubusercontent.com/coderlyu/au-blog/master/docs/.vuepress/public/images/blogs/http-1.png",alt:"图片"}}),t._v(" "),v("h2",{attrs:{id:"post-和-get"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#post-和-get"}},[t._v("#")]),t._v(" POST 和 GET")]),t._v(" "),v("img",{attrs:{src:"https://raw.githubusercontent.com/coderlyu/au-blog/master/docs/.vuepress/public/images/blogs/http-2.png",alt:"图片"}}),t._v(" "),v("h2",{attrs:{id:"http-状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码"}},[t._v("#")]),t._v(" http 状态码")]),t._v(" "),v("blockquote",[v("p",[t._v("服务器给客户端的")])]),t._v(" "),v("h3",{attrs:{id:"作用-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#作用-2"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),v("p",[t._v("告诉客户端，当前服务器处理请求的结果")]),t._v(" "),v("h3",{attrs:{id:"http-状态码的分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码的分类"}},[t._v("#")]),t._v(" http 状态码的分类")]),t._v(" "),v("ol",[v("li",[t._v("1XX：服务器已经收到了本次请求，但是还需要进一步的处理才可以。")]),t._v(" "),v("li",[t._v("2XX：服务器已经收到了本次请求，且已经分析、处理等...最终处理完毕")]),t._v(" "),v("li",[t._v("3XX：服务器已经接收到了请求，还需要其它的资源，或者重定向到其它位置，甚至交给其它服务器处理")]),t._v(" "),v("li",[t._v("4XX：一般指请求的参数或者地址有错误，出现了服务器无法理解的请求（一般是前端的锅）")]),t._v(" "),v("li",[t._v("5XX：服务器内部错误（不是因为请求地址或者请求参数不当造成的），无法响应用户请求（一般是后盾人员的锅）")])]),t._v(" "),v("h3",{attrs:{id:"常见的几个状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见的几个状态码"}},[t._v("#")]),t._v(" 常见的几个状态码")]),t._v(" "),v("ol",[v("li",[t._v("200：成功（最理想状态）")]),t._v(" "),v("li",[t._v("301：重定向，被请求的旧资源永久移除了（不可以访问了），将会跳转到一个新资源，搜索引擎在抓取新内容的同时也将旧的网址替换为重定向之后的网址。")]),t._v(" "),v("li",[t._v("302：重定向，被请求的旧资源还在（仍然可以访问），但会临时跳转到一个新资源，搜索引擎会抓取新的内容而保存旧的网址。")]),t._v(" "),v("li",[t._v("404：资源未找到，一般是客户端请求了不存在的资源。")]),t._v(" "),v("li",[t._v("500：服务器收到了请求，但是服务器内部产生了错误。")]),t._v(" "),v("li",[t._v("502：连接服务器失败（服务器在处理一个请求的时候，或许需要其他服务器配合，但是联系不上其他的服务器了）")])]),t._v(" "),v("h2",{attrs:{id:"从用户输入-url-按下回车-一直到用户能看到界面-期间经历了什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从用户输入-url-按下回车-一直到用户能看到界面-期间经历了什么"}},[t._v("#")]),t._v(" 从用户输入 URL 按下回车，一直到用户能看到界面，期间经历了什么？")]),t._v(" "),v("h3",{attrs:{id:"dns-解析-缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析-缓存"}},[t._v("#")]),t._v(" DNS 解析（缓存）")]),t._v(" "),v("ol",[v("li",[t._v("找浏览器 DNS 缓存解析域名")]),t._v(" "),v("li",[t._v("找本机 DNS 缓存")]),t._v(" "),v("li",[t._v("找路由器 DNS 缓存")]),t._v(" "),v("li",[t._v("找运营商 DNS 缓存（百分之 80 的 DNS 查找，到这一步就结束）")]),t._v(" "),v("li",[t._v("递归查询（最不愿意看到的事，查询的是全球 13 台 DNS 根服务器中的一个）")])]),t._v(" "),v("h3",{attrs:{id:"进行-tcp-协议-连接-三次握手-根据上一步请求回来的-ip-地址-去联系服务器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进行-tcp-协议-连接-三次握手-根据上一步请求回来的-ip-地址-去联系服务器"}},[t._v("#")]),t._v(" 进行 TCP（协议）连接，三次握手（根据上一步请求回来的 ip 地址，去联系服务器）")]),t._v(" "),v("ol",[v("li",[t._v("第一次握手：由浏览器发送给服务器，我想和你说话，你能听见嘛？")]),t._v(" "),v("li",[t._v("第二次握手，由服务器发送给浏览器，我能听见，你说吧")]),t._v(" "),v("li",[t._v("第三次握手，由浏览器发送给服务器，好，那我就开始说话")])]),t._v(" "),v("h3",{attrs:{id:"发送请求-请求报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#发送请求-请求报文"}},[t._v("#")]),t._v(" 发送请求（请求报文）")]),t._v(" "),v("h3",{attrs:{id:"得到响应-响应报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#得到响应-响应报文"}},[t._v("#")]),t._v(" 得到响应（响应报文）")]),t._v(" "),v("h3",{attrs:{id:"浏览器开始解析-html"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器开始解析-html"}},[t._v("#")]),t._v(" 浏览器开始解析 html")]),t._v(" "),v("ol",[v("li",[t._v("预解析：将所有外部的 资源，发请求出去")]),t._v(" "),v("li",[t._v("解析 html：生成 DOM 树")]),t._v(" "),v("li",[t._v("解析 css：生成 CSSOM 树")]),t._v(" "),v("li",[t._v("合并成一个 render 树")]),t._v(" "),v("li",[t._v("js 是否操作了 DOM 或样式\n"),v("ul",[v("li",[t._v("有：进行重绘重排（不好，1. 尽量避免；2. 最小化重绘重排）")])])]),t._v(" "),v("li",[t._v("最终展示界面")])]),t._v(" "),v("h3",{attrs:{id:"断开-tcp-连接-四次挥手-确保数据的完整性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#断开-tcp-连接-四次挥手-确保数据的完整性"}},[t._v("#")]),t._v(" 断开 TCP 连接，四次挥手（确保数据的完整性）")]),t._v(" "),v("ol",[v("li",[t._v("第一次挥手：由浏览器发送给服务器，我的东西接受完了，你关闭吧")]),t._v(" "),v("li",[t._v("第二次挥手：由服务器发给浏览器，我还有一些东西没接收完，你等一会，我接收好了告诉你")]),t._v(" "),v("li",[t._v("第三次挥手：由服务器告诉浏览器，我接收完了，你断开吧")]),t._v(" "),v("li",[t._v("第四次挥手：由浏览器告诉服务器，好的，那我断开了")])])])}),[],!1,null,null,null);a.default=s.exports}}]);
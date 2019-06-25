# Equipment-maintenance-management-system

201906 实训项目

Fixing the "cannot GET /URL" error on refresh with React Router and Reach Router (or how client side routers work)
https://tylermcginnis.com/react-router-cannot-get-url-refresh/

把 index.html 的 js 文件路径："./main.js"->"/mian.js"
否则请求资源错误:
访问http://localhost:8080/admin/1时请求的基础url是http://localhost:8080/admin。所以在请求main.js时，请求的链接是http://localhost:8080/admin/main.js。实际应该是：http://localhost:8080/main.js

##Confuse
上面提到的请求资源错误，在不更改 index.html 的情况下，若在配置文件中添加插件 HtmlWebpackPlungins，则请求正确。

```
plugins: [
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
      filename: "index.html"
    })
  ]
```

但是错误请求仍然会发送。而且访问/admin 时报错

```
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
    in NavigationBox (created by Route)
    in Route (created by withRouter(NavigationBox))
    in withRouter(NavigationBox) (created by App)
    in div (created by App)
    in Router (created by BrowserRouter)
    in BrowserRouter (created by App)
    in App
```

如果更改了 index.html 且添加了 HtmlWebpackPlungins 插件，则不会发送错误的请求，warning 没有消失。
所以 warning 应该是因为 HtmlWebpackPlungins 配置错误引起的

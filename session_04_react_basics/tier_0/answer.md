**File .jsx khác .js thế nào?**
* JavaScript
    ```js
    const ten = "Minh";

    console.log(ten);
    ```
* JSX
    ```jsx
    function App() {
        return <h1>Hello</h1>;
    }
    ```

* `.jsx` cho phép viết JSX (gần giống HTML) bên trong JavaScript.

**Export default App là gì?**

```jsx
    export default App;
```
*   Cho phép file khác import và sử dụng component App.
*   Ví dụ:
```jsx
    import App from "./App";
```

**Nếu xóa export default?**
* Nếu xóa:
    ```jsx
    export default App;
    ```
    - thì React sẽ không import được component.
* Lỗi thường gặp:
    ```text
    does not provide an export named 'default'
    ```
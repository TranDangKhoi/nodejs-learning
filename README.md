# How to run the code in each folder

- Step 1: Install Node, i recommend using the LTS version.

- Step 2: Check if Node had been installed.

- Step 3: Clone this repository. After that, open the `nodejs-learning` folder aka this project.

- Step 4: Using `cd foo/bar` to change the directory folder to the one you want to test:
  - For example: `cd 01-hello-world` and then `node app.js` to run the program.
  - If you want to go back to the previous directory just hop in the current terminal, press `Ctrl + C` to stop the program from continue running and then type `cd ..\`.

# Note lại

- Chapter 6:

  - The browser will respect the Content-Type header regardless of what the URL path is, it’s just important to understand that paths are abstract, and the browser uses Content-Type to determine how to render content.

  - The Content-Type header is critically important; without it, the client would have to painfully guess how to render the content.

  - In addition to the request headers, a request can have a body (just like the body of a response is the actual content that’s being returned). Normally, GET requests don’t have bodies, but POST requests usually do.

  - The most common media type for POST bodies is application/x-www-form-urlencoded, which is simply encoded name/value pairs separated by ampersands (essentially the same format as a querystring).

  - If the POST needs to support file uploads, the media type is multipart/form-data, which is a more complicated format

- req.params: Là một mảng chứa param của slug(:slug - tham số tuyến đường) trong phần đường dẫn của URL:

  - Ví dụ, giờ ta muốn show tên của 3 user tương ứng khi vào mỗi route:

  ```js
  app.get("/user/name1", function (req, res) {
    res.send("Hello! My name is name1");
  });
  app.get("/user/name2", function (req, res) {
    res.send("Hello! My name is name2");
  });
  app.get("/user/name3", function (req, res) {
    res.send("Hello! My name is name3");
  });
  ```

  - Khi vào đường dẫn `/user/name1`, sẽ show ra `Hello! My name is name1`, tương tự với `/user/name2` và `/user/name3`. Vậy giờ nếu ta truy cập vào `/user/name4`, thì nó có hiển thị ra màn hình `Hello! My name is name4 ` không?? Đáp án là không làm mà đòi có ăn thì ... Ở đây, ta chưa định nghĩa và xử lý cho route này nên chắc chắn kết quả sẽ là: ![Ảnh](https://i.ibb.co/0FDjwSY/image.png)

  - Vậy bây giờ chả nhẽ nếu muốn làm thêm cả user4, user5, user6, .... user1000 thì ta cũng viết hơn 1000 dòng code tương ứng cho mỗi routes ? Đương nhiên là không ròy, Express đã cung cấp cho chúng ta Route parameters, hay bây giờ người ta hay gọi là slug á. Slug sử dụng như nào thì nhìn vào đây:

  ```js
  app.get("/user/:username", function (req, res) {
    res.send(`Hello! This is ${req.params.username}`);
  });
  ```

  - Ở đây thì :username chính là slug đóa >.< Bây giờ khi truy cập vào địa chỉ `/user/...` với một username bất kì thì ta có thể show ra tên tương ứng rồi

- req.query: chứa các tham số truy vấn trong đường dẫn URL `(nằm sau dấu ? và tiếp sau đó là các dấu &)`, thường có format như sau: `http://localhost:3000/users?username=Khoi&userid=2`

  - Hai cái `req.query` và `req.params` này cũng có đôi chút sự khác nhau, `req.query` sẽ lấy ra query param nằm trong URL, tức là những thứ bạn truyền vào sau dấu "?", ví dụ:

  - Nếu ta code bằng `req.params` như ở trên thì để lấy ra username ta sẽ code như sau đúng hem:

    - Trường hợp sử dụng `req.params`:
    - `req.params` sẽ được sử dụng khi đường dẫn có dạng như sau:
      `https://localhost:3000/user/Khoi`

    - Log ra param, ta được kết quả như sau:
      `{username : "Khoi"}`

    - Trường hợp sử dụng `req.query`:
    - `req.query` sẽ được sử dụng khi đường dẫn có dạng như sau:
      `https://localhost:3000/user?username=Khoi`

    - Log ra query ta sẽ được kết quả cũng tương tự như trên:
      `{username : "Khoi"}`

- req.route: Thông tin về route hiện tại mà mình đang ở. Nói chung là dùng để debug là chính

- v.v.. Update tiếp sau

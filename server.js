const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/"));
// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "./", "index.html"));
});
app.use("/", express.static(path.resolve("./")));
app.listen(8888, (req, res) => {
  console.log("连接8888成功");
});

import express from "express";
import path from "path";
import fs from "fs";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "../build/static")));
app.get("*", (req, res) => {
  const jsx = <App server />;
  const reactDom = renderToString(jsx);
  const html = fs
    .readFileSync(path.resolve(__dirname, "../build/index.html"), "utf8")
    .replace(
      "<noscript>You need to enable JavaScript to run this app.</noscript>",
      ""
    )
    .replace('<div id="root">', `<div id="root">${reactDom}`);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

app.listen(2048, () => {
  // eslint-disable-next-line
  console.log("Server listening on port 2048");
});

require("babel-register")({
  presets: [
    [
      "env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "react"
  ],
  plugins: ["transform-class-properties"]
});
require("./server");

const express = require("express");
const os = require("os");
const app = express();

app.all("*", (req, res) => {
    res.send(`Welcome to <code style="color:red;">${ os.hostname() }</code> :)`);
});

app.listen(80, () => {
    console.log("Listening...");
});
const express = require("express");
const os = require("os");
const app = express();

app.all("*", (req, res) => {
    res.send(`
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <div style="width:max-content;margin:0 auto;text-align:center;">
                <p>Welcome &#128151;</p>
                <code style="color:red;opacity:0.5;">${ os.hostname() }</code>
            </div>
        </body
    `);
});

app.listen(80, () => {
    console.log("Listening...");
});
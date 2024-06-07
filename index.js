const express = require("express");
require('dotenv').config()
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login",(req,res)=>{
    res.send("pls login with your details")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

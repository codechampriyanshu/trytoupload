// //readsyncile
// const fs=require("fs");
// const text =fs.readFileSync("dele.txt","utf-8");
// console.log(text);

// //replace content
// const fs=require("fs");
// let text=fs.readFileSync("dele.txt","utf-8");
// text=text.replace("sexy" , "priyu");
// console.log(text);

//create a new file
// const fs = require("fs");
// console.log("creating a new file");
// fs.writeFileSync("rophan.txt",);

const fs=require("fs");
fs.readFile("dele.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("this is a message");

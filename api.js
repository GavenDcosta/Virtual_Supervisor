const express = require("express")
const app = express()
const PORT = 4000
const data = require("./data")
var fs = require('fs');
const { url } = require("inspector");
const cors = require("cors")
 app.use(cors({
    origin: '*'
 }))

// app.use(
//     cors({
//         origin: "http://127.0.0.1:5500"
//     })
// )

const urlData = fs.readFileSync(`data.json`, "utf-8")
const Data = JSON.parse(urlData)

app.get('/',(req,res) => {
    res.send("Hello World from the main server")
})

app.get('/api/Virtual-Supervisor',(req,res) => {
    res.send(Data)
})
console.log(Data[0])

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`)
})

// var fs = require('fs');
  
// // json file with the data
// var data = fs.readFileSync('data.json');
  
// var elements = JSON.parse(data);
// const express = require("express");
// const app = express();
  
// // To solve the cors issue
// const cors=require('cors');
   
// app.listen(process.env.PORT, 
//     () => console.log("Server Start at the Port"));
   
// app.use(express.static('public'));
// app.use(cors());
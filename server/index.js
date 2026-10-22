// server/index.js
const express = require('express');
const app = express();
const route = require('./routes');
const PORT = 5000; // Chạy backend ở cổng 5000
const mongoose = require('mongoose');
app.use(express.json())
async function connect () {
    try {
       // Chỉ cần ngắn gọn như thế này:
        await mongoose.connect('mongodb://127.0.0.1:27017/chat');
        console.log("Connect Successfully!");
        
    } catch (error) {
        console.log("Lon connection");  
    };
}
connect();
route(app);

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
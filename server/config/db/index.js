import mongoose from "mongoose";
async function connect () {
    try {
       // Chỉ cần ngắn gọn như thế này:
        await mongoose.connect('mongodb://127.0.0.1:27017/chat');
        console.log("Connect Successfully!");
        
    } catch (error) {
        console.log("Lon connection");
    };
}
export default connect;
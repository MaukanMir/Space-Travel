
// Config block
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const PORT = process.env.PORT || 3500;
dotenv.config();

const multer = require("multer")

app.use(express.json())

//  Routes
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch((err)=> console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json(
    "file has been uploaded"    
    )
})

app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/categories",categoriesRoute)

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
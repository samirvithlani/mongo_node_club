const multer = require('multer')
const express = require('express')
const app = express.Router()
const path = require('path')

//(req,res,cb)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uplods');
    },
    filename: (req, file, cb) => {
        console.log("file pathh -->",file)
        cb(null, Date.now() + path.extname(file.originalname));

    }
});

const fileFilter = (req, file, cb) => {

    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {

        cb(null, true)
    }
    else {

        cb(null, false)
    }

}

const upload = multer({ storage: storage, fileFilter: fileFilter })

app.post('/upload', upload.single('image'), (req, res, next) => {

    if(!next){
    try {
        return res.status(201).json({
            message: "File Uploaded successfully..."
        });
    } catch (error) {

        console.log(error)
    }
}
else{

    return res.status(400).json({
        message: "error..."
    });
}
});

module.exports = app
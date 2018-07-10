const uploadController = {};
const multer = require('multer');
const fs = require('fs');
const path = require('path');

//Storage Multer
const storage = multer.diskStorage({
    destination: '../uploads',
    /*
    rename: function (fieldname, filename) {
        return filename + Date.now();
    },
    */
    filename: function(req, file , cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...');
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
    }
})

const upload = multer({
    storage: storage
}).single('image');

uploadController.uploadImage = (req, res) => {
    upload(req, res, (err) =>{
        if(err){
            res.json({
                'mensaje': 'Hubo algun error'
            })
        }else{
            console.log(req.file);
            return res.json({
                originalname: req.file.originalname,
                uploadname: req.file.filename
            })
        }
    })
}

module.exports = uploadController;
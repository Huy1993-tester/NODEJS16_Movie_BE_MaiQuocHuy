const multer = require("multer");

const UploadFile = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./public/images"); // thu muc goc di vo
    },
    filename: function (req, file, callback) {
      callback(null, `${Date.now()}_${file.originalname}`);
    },
  });
  const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
      const extensionImageList = ['png', 'jpg', 'jpeg'];
      const extension = file.mimetype.split('/');
      // console.log(extension);
      // console.log(file.mimetype , "mimetype");
      const isCheck = extensionImageList.includes(extension[extension.length - 1]);
      if (isCheck) {
        cb(null, true);
      } else {
        cb(new Error('Extension không hợp lệ'));
      }
    },
  });
  return upload.single("file");
};

module.exports = { UploadFile };



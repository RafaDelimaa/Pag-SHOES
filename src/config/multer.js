const multer = require('multer');
const path = require('path');
const { v4: uuid } = require('uuid');

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    const caminhoPasta = path.resolve(__dirname, '..', 'uploads');

    callback(null, caminhoPasta)
  },
  filename: (request, file, callback) => {
    console.log(file);

    // 121243124213413-CV - Gabriel Tsunoda.pdf
    // const fileName = Date.now() + '-' + file.originalname + 'rre' + dsdf;

    const fileName = `${uuid()}-${file.originalname}`;

    callback(null, fileName)
  }
});

module.exports = storage;
const Fashion = require('../models/fashion');
const Electronics = require('../models/electronics');
const Electricals = require('../models/electricals');
const Literature = require('../models/literature');

let fashion_bak, electricals_bak, electronics_bak, literature_bak;

const uploadDocument = (__Collection, __documents) => {
  try {
    for (const document of __documents){
      const collection = new __Collection(document);
      collection.save((err) => {
          if(err) console.log("Upload was unsuccessful. Check your connection string");
          else console.log("Documents successfully uploaded");
      });
    }
  }
  catch (e) {
    console.log("Create collections first" + e);
  }

}

const clearDocument = (__Collection) => {
  try {
    __Collection.find((err, data) => {
      if(data.length >= 1){
        __Collection.collection.remove();
      }
    });
  }
  catch (e) { console.log("Create collections first" + e); }
}

module.exports.create = (res) => {
  fashion_bak = require('../backup/fashion');
  electricals_bak = require('../backup/electricals');
  electronics_bak = require('../backup/electronics');
  literature_bak = require('../backup/literature');
}

module.exports.upload = (req, res) => {
  uploadDocument(Fashion, fashion_bak);
  uploadDocument(Electronics, electronics_bak);
  uploadDocument(Literature, literature_bak);
  uploadDocument(Electricals, electricals_bak);
}

module.exports.clear = () => {
  clearDocument(Fashion);
  clearDocument(Electronics);
  clearDocument(Literature);
  clearDocument(Electricals);
}

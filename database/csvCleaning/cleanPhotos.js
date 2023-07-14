const fs = require('fs');
const csv = require('csv-parse').parse;
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const Transform = require('stream').Transform;

// headers for clean product csv file
const csvStringifier = createCsvStringifier({
  header: [
    { id: 'id', title: 'id' },
    { id: 'styleId', title: 'styleId'},
    { id: 'url', title: 'url'},
    { id: 'thumbnail_url', title: 'thumbnail_url'},
  ],
});
// call read and write streams on filepaths
let readStream = fs.createReadStream('/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/photos.csv');
let writeStream = fs.createWriteStream(`/Users/lorenjohnson/Desktop/HackReacter/SDC/CSV/cleanPhotos.csv`);

// transformer takes data from read stream, transforms, and passes to write stream
class CSVCleaner extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, next) {
    for (let key in chunk) {
      let trimKey = key.trim(); // removes white space from both ends of string
      chunk[trimKey] = chunk[key];
      if (key !== trimKey) {
        delete chunk[key];
      }
    }
    // filter out all non-number characters
    // console.log(chunk)
    // let onlyNumbers = chunk.default_price.replace(/\D/g, "");
    // chunk.default_price = onlyNumbers;
    // use our csvStringifier to turn our chunk into a csv string
    chunk = csvStringifier.stringifyRecords([chunk]);
    this.push(chunk);
    next();
  }
};

const transformer = new CSVCleaner({writableObjectMode: true});

// write header for cleaned file
// writeStream.write('id,name,slogan,description,category,default_price');
readStream
  .pipe(csv({columns: [ 'id', 'style_id', 'url', 'thumbnail_url' ]}))
  .pipe(transformer)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('finished')
  });
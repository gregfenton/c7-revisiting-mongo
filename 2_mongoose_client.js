const Mongoose = require('mongoose');

let heyYouGuys =
  'mongodb+srv://c7mongo:__PASSWORD_GOES_HERE__@cluster0.kollf.mongodb.net/sample_training?retryWrites=true&w=majority';

Mongoose.connect(heyYouGuys);

let websiteSchema = new Mongoose.Schema({ url: String });
let WebSites = Mongoose.model('WebSites', websiteSchema);

let companySchema = new Mongoose.Schema({
  name: String,
  permalink: String,
  crunchbase_url: String,
  homepage_url: String,
  blog_url: String,
  age: Number,
  icons: [
    {
      name: String,
      color: String,
    },
  ],
});

let Company = Mongoose.model('Company', companySchema);

let inceptionQuery = Company.findOne({ name: 'InceptionU' });

console.log(`Fetching InceptionU document . . .`);
inceptionQuery.then((inceptionDoc) => {
  console.log(`-------------------------`);
  console.log(`the document is ${JSON.stringify(inceptionDoc, null, 2)}`);
  console.log(`-------------------------`);
  console.log(`DONE!`);
  process.exit(0);
});

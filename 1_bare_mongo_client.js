const MongoClient = require('mongodb').MongoClient;

let dbUser = 'c7mongo';
let dbPasswd = '__PASSWORD_GOES_HERE__';

let dbUrl =
  `mongodb+srv://${dbUser}:${dbPasswd}` +
  `@cluster0.kollf.mongodb.net/sample_training?retryWrites=true&w=majority`;

let connectMongoClient = MongoClient.connect(dbUrl);
let getDb = connectMongoClient
  .then((client) => {
    return client.db('sample_training');
  })
  .catch((ex) => {
    console.error(`Failed to connect: ${ex.message}`);
    process.exit(1);
  });

let companyCollection = getDb.then((db) => db.collection('companies'));
let facebookDocument = companyCollection.then((coll) =>
  coll.findOne({ name: 'Facebook' })
);

facebookDocument.then((doc) => {
  console.log(`doc is ${JSON.stringify(doc, null, 2)}`);
  console.log(`DONE!`);
  process.exit(0);
});

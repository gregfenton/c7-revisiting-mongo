# Revisiting MongoDB

This is a rudimentary project to showcase use of the MongoDB client
and the Mongoose client.

To use this repository:
1. Clone to your computer either with one of:
    - a GUI tool such as VSCode's Source Control or GitHub desktop client
    - command line, use `git clone https://github.com/gregfenton/c7-revisiting-mongo`)
2. Install the necessary node modules:  `npm install`
3. In each of the JavaScript files, edit the `dbPasswd` value replacing `__PASSWORD_GOES_HERE__` with the super secret password: `Let_Me_In` (**BUT** you have to replace the "e"s with "3" and replace "I" with "1").
4. Run the first example: `node 1_bare_mongo_client.js`
5. Run the second example: `node 2_mongoose_client.js`

## Exercises

### Limits To My Patience
The current code prints out the full document of the Facebook record, which is Very Long.  Edit the code to only display a few fields from the document rather than the whole thing.  Which fields is up to you :)

### The Chain Gang
1. Make a copy of the file `1_bare_mongo_client.js` and name it `exercise1.js`
2. Starting with line 10, edit the code to "chain the promises together" so you do not need to use any variables.  The resulting code should look like:
   ```
   MongoClient.connect(dbUrl)
     .then(client => ...)
     .then(db => ...)
     .then(coll => ...)
     .then(doc => ...)
     .catch(ex => ...);
   ```
3. Run the code: `node exercise1.js`
   - if the program doesn't exit, simply press `ctrl-C`
   - if the program doesn't exit, edit the code so that the next time you run it does exit.

### Have It Your Way
Enhance the code in `2_mongoose_client.js` to add a new document for the Company **Burger King**.  Once inserted, fetch the document and print its `_id` field value.

const assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://rootAdministrator:rnHkSRiAnDdGilcR@titanissues-ycifl.azure.mongodb.net/test?retryWrites=true&w=majority";
var client = new MongoClient(uri, {
    useUnifiedTopology: true
}, {
    useNewUrlParser: true
}).connect();
Promise.resolve(client);
module.exports = {
    getIssues: async function () {
        try {
            var result = (await client).db('titanIssues').collection('Issues').find({}).sort({'created' : -1}).toArray();
            return result;
        } catch (e) {
            console.log(e);
        }
    },
    getSingleIssue: async function (id) {
        try {
            id = new ObjectId(id)
            var result = (await client).db('titanIssues').collection('Issues').findOne({'_id' : id});
            return result;
        } catch (e) {
            console.log(e);
        }
    },
    makeIssues: async function (info) {
        try {
            var result = (await client).db('titanIssues').collection('Issues').insertOne(info);
            return "Feel free to find them in the homepage!";
        } catch (e) {
            console.log(e);
        }
    },
    delIssues: async function (id) {
        try {
            id = new ObjectId(id)
            var result = (await client).db('titanIssues').collection('Issues').findOneAndDelete({_id: id});
            return;
        } catch (e) {
            console.log(e);
        }
    },
    updtIssues: async function (id, info) {
        try {
            id = new ObjectId(id)
            var result = (await client).db('titanIssues').collection('Issues').updateOne({_id: id}, {$set : info, $currentDate: {updated : true}}, {upsert : true});
            return;
        } catch (e) {
            console.log(e);
        }
    }
}
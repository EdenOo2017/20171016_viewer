var mongoose = require('mongoose');
// var url = "mongodb://EdenOo:Utno1985!@cluster0-shard-00-00-ujop4.mongodb.net:27017,cluster0-shard-00-01-ujop4.mongodb.net:27017,cluster0-shard-00-02-ujop4.mongodb.net:27017/mydb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
// // var url = "mongodb://localhost:27017/BFL"
var url = "mongodb://admin:Utno1985!@ds121535.mlab.com:21535/edenoo"
mongoose.connect(url, { useMongoClient: true });
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
    PanelName: String,
    PanelId: Number,
    dbids: Number,
    status: Number,
    submittedDate: String,
    approvedDate: String,
    castDate: String,
    deliveredDate: String,
    installedDate: String
}, { collection: 'DB' });

var UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
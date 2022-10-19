const { MongoClient } = require('mongodb')
const URL = process.env.MONGO_URL ?? 'mongodb://localhost:27017';
let client

const DATABASE = "hack406"
const USER_COLLECTION = 'users'



async function connectToMongo() {
    try {
        if (!client) {
            client = await MongoClient.connect(URL)
        }
        return client;
    } catch (err) {
        console.log(err)
    }
}

async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return client.db(dbName).collection(collectionName)
}

async function addUser(user) {
    const collection = await getMongoCollection(DATABASE, USER_COLLECTION)
    const result = await collection.insertOne(user)
    return result.insertedId
}
async function addAppointement(appointement) {
    const collection = await getMongoCollection(DATABASE, USER_COLLECTION)
    const result = await collection.insertOne(appointement)
    return result.insertedId
}

const users = [
    {
        name: "Ulisses",
        email: "Ulisses@gmail.com",
        password: "Ulisses123"
    },

]
const appointements = [
    {
        name: "Bibufcaidu",
        email: "uiweghiwff@esdf.aushd",
        passoword: ""
    },

]

users.forEach(async user => {
    await addUser(user)
})

appointements.forEach(async appointement => {
    await addAppointement(appointement)
})

console.log("Done Adding Users")
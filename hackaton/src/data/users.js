
import { getMongoCollection } from "./db"

const DATABASE = "hack406"
const USER_COLLECTION = 'users'
const APPOINTMENT_COLLECTION = 'appointments'

export async function getUserByEmail(email) {
    const collection = await getMongoCollection(DATABASE, USER_COLLECTION)
    const result = await collection.findOne({ email })
    return result
}

export async function addUser(user) {
    const collection = await getMongoCollection(DATABASE, USER_COLLECTION)
    const result = await collection.insertOne(user)
    return result.insertedId
}

export async function addAppointement(cliente) {
    const collection = await getMongoCollection(DATABASE, APPOINTMENT_COLLECTION)
    const result = await collection.insertOne(cliente)
    return result.insertedId
}
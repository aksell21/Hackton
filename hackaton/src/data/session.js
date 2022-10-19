import { ObjectId } from "mongodb";
import { generateToken } from "../services/common"
import { getMongoCollection } from "./db"


const DATABASE = "hack406"
const USER_COLLECTION = 'users'

export async function addSession(userId) {
    const collection = await getMongoCollection(DATABASE, SESSION_COLLECTION)
    const result = await collection.insertOne({ userId })
    return result.insertedId
}
<<<<<<< HEAD
 import { getMongoCollection } from "./db"
=======
import { getMongoCollection } from "./db"
>>>>>>> 8beaa5a1661b84608d6d4f0f05ac8b08efd2e16a

const DATABASE = "hack406";
const USER_COLLECTION = "users";
const APPOINTMENT_COLLECTION = "appointments";

export async function getUserByEmail(email) {
  const collection = await getMongoCollection(DATABASE, USER_COLLECTION);
  const result = await collection.findOne({ email });
  return result;
}

export async function addUser(user) {
  const collection = await getMongoCollection(DATABASE, USER_COLLECTION);
  const result = await collection.insertOne(user);
  return result.insertedId;
}

export async function addAppointement(cliente) {
  const collection = await getMongoCollection(DATABASE, APPOINTMENT_COLLECTION);
  const result = await collection.insertOne(cliente);
  return result.insertedId;
<<<<<<< HEAD
} 

=======
}
>>>>>>> 8beaa5a1661b84608d6d4f0f05ac8b08efd2e16a

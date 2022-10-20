<<<<<<< HEAD
import { getMongoCollection } from "./db"


const DATABASE = "hack406"
const USER_COLLECTION = 'users'
const APPOINTMENT_COLLECTION = 'appointments'
=======
/* import { getMongoCollection } from "./db"

const DATABASE = "hack406";
const USER_COLLECTION = "users";
const APPOINTMENT_COLLECTION = "appointments";
>>>>>>> 31eba1eb4dc8cad8160af710def7cb075aa5b3c0

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
<<<<<<< HEAD
    const collection = await getMongoCollection(DATABASE, APPOINTMENT_COLLECTION)
    const result = await collection.insertOne(cliente)
    return result.insertedId
}

=======
  const collection = await getMongoCollection(DATABASE, APPOINTMENT_COLLECTION);
  const result = await collection.insertOne(cliente);
  return result.insertedId;
} */
>>>>>>> 31eba1eb4dc8cad8160af710def7cb075aa5b3c0

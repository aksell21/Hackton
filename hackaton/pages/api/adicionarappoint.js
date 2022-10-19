import { ObjectId } from "mongodb"
import { getUserById } from "../../src/data/users";

export default async function (req, res) {
    if (req.method === "POST") {
        const {
            name,
            email,
            exercise,
        } = req.body
        console.log("Cheguei", req.body)

        if (!req.body) {
            return value === undefined || value.length === 0
        }
        res.status(200).json({ message: 'ok' })
    }
}    
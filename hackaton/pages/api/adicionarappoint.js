import { addAppointement } from "../../src/data/users";

export default async function (req, res) {
    if (req.method === "POST") {
        const {
            name,
            email,
            data,
            exercise,
        } = req.body

        console.log("Cheguei", req.body)
       const resulta =  await addAppointement(req.body.addAppointement)


        if (!resulta) {
            return req.body === undefined || req.body.length === 0
           
        }
        res.status(200).json({ message: 'ok' })
    }
}    
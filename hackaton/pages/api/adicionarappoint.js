import { addAppointement } from "../../src/data/users";

export default async function (req, res) {
    if (req.method === "POST") {
        const {
            name,
            email,
            exercise,
        } = req.body
        console.log("Cheguei", req.body)
        await addAppointement(req.body)


        if (!req.body) {
            
            res.status(404).json({messagem : 'errou '})
            return value === undefined || value.length === 0

            
        }
        res.status(200).json({ message: 'ok' })
    }
}    
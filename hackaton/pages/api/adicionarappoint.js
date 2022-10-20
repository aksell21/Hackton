import { addAppointement } from "../../src/data/users";

export default async function (req, res) {
    if (req.method === "POST") {
        const {
            title,
            start,
            end,
            exercise,
            allDay,
        } = req.body

        console.log("Cheguei", req.body)
        const resulta = await addAppointement(req.body)

        res.status(200).json({ message: 'ok' })
    }
}    
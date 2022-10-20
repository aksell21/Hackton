import { addUser } from "../../src/data/users"
import { validateFields } from "../../src/services/validations"

export default async function (req, res) {
    if (req.method === "POST") {
        const {
            user,
            email,
            password,
            number

        } = req.body
        console.log("Cheguei",req.body)

        const validation = await validateFields(req.body)
        if (validation.success) {
            const id = await addUser({
                user,
                email,
                password,
                number

            })
            res.status(201)
                .json({
                    "message": "Utilizador Criado com Sucesso!",
                    "_id": id
                })
        } else {
            res.status(400).json({
                "message": "Os dados introduzidos não são válidos.",
                "errors": validation.errors
            })
        }
    }
}
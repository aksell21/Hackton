import { checkIfEmailExists } from "./users"
import { checkPasswordStrength, validateEmail } from "./common"

export async function validateFields({
    email,
    password,
    number,
}) {
    const errors = cleanUndefinedProperties({
        email: await getEmailErrors(email),
        password: getPasswordErrors(password),
    })



    const success = Object.keys(errors).length === 0
    return cleanUndefinedProperties({
        success: success,
        errors: success ? undefined : errors
    })
}

function checkRequiredValueMissing(value) {
    return value === undefined || value.length === 0
}

async function getEmailErrors(email) {
    if (checkRequiredValueMissing(email)) {
        return "Por favor introduza o seu endereço de email."
    }
    if (!validateEmail(email)) {
        return "Por favor introduza um endereço de email válido."
    }
    if (await checkIfEmailExists(email)) {
        return "O endereço introduzido já está registado."
    }
}

function getPasswordErrors(password) {
    if (checkRequiredValueMissing(password)) {
        return "Por favor introduza a sua password."
    }
    if (password.length < 8) {
        return "A sua password deve ter no mínimo 8 caracteres."
    }
    if (checkPasswordStrength(password) < 2) {
        return "A sua password deve ter pelo menos um número, uma mínuscula, uma maiúscula e um símbolo."
    }
}

function cleanUndefinedProperties(obj) {
    return Object.keys(obj)
        .reduce((acc, p) =>
            obj[p] !== undefined
                ? ({ ...acc, [p]: obj[p] })
                : acc,
            {})
}
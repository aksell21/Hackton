export const pedidoAutorizado = async (input) => {
    const res = await fetch(input, {
        headers: {
            'Authorization':`${window.localStorage.getItem('token')}`
        },
    })
    if (res.status === 403) {
        localStorage.removeItem('token')
        throw {error: 'Unauthorized'}
    }
    return await res.json();
}
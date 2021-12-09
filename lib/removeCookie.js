import cookie from 'js-cookie'

export default async function removeCookie() {



    cookie.remove('accessToken', { path: "/", domain: ".abako.xyz" })
    cookie.remove('refreshToken', { path: "/", domain: ".abako.xyz" })

    await fetch('https://api.abako.xyz/api/session', {
        method: 'PATCH',
        credentials: 'include'
    })


}
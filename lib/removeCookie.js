import cookie from 'js-cookie'

export default async function removeCookie() {

    console.log(cookie.get('accessToken'))

    cookie.remove('accessToken', { path: "/", domain: ".abako.xyz", sameSite: 'none', secure: true })
    cookie.remove('refreshToken', { path: "/", domain: ".abako.xyz", sameSite: 'none', secure: true })



    await fetch('https://api.abako.xyz/api/session', {
        method: 'PATCH',
        credentials: 'include'
    })


}
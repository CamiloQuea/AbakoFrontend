import cookie from 'js-cookie'

export default async function removeCookie() {

    console.log(cookie.get('accessToken'))

    cookie.remove('accessToken', { path: "/" })
    cookie.remove('refreshToken', { path: "/" })



    await fetch('https://api.abako.xyz/api/session', {
        method: 'PATCH',
        credentials: 'include'
    })


}
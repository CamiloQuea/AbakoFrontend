import cookie from 'js-cookie'

export default async function removeCookie() {

    console.log(cookie)
    console.log(cookie)
    

    cookie.remove('accessToken');
    cookie.remove('refreshToken');

    await fetch('https://api.abako.xyz/api/session', {
        method: 'PATCH',
        credentials: 'include'
    })


}
import cookie from 'js-cookie'

export default function removeCookie() {

    cookie.remove('accessToken');
    cookie.remove('refreshToken');

    await fetch('https://api.abako.xyz/api/session', {
        method: 'PATCH',
        credentials: 'include'
    })


}
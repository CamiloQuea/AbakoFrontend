import { useCookies } from "react-cookie";

export default async function removeCookie() {

    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    removeCookie('accessToken', { path: '/' });
    removeCookie('refreshToken', { path: '/' });

    



    await fetch('https://api.abako.xyz/api/session', {
        method: 'PATCH',
        credentials: 'include'
    })


}
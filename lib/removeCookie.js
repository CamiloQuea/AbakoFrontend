import { useCookies } from "react-cookie";

export default async function removeCookie() {

    const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

    removeCookie('accessToken', { path: '/' });
    

    



    await fetch('https://api.abako.xyz/api/session', {
        method: 'PATCH',
        credentials: 'include'
    })


}
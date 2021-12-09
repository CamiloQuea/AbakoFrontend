import cookie from 'js-cookie';

export default async function FetcherGet(url){
        return fetch(url, {

            credentials:'same-origin'
            
        })
            .then(res => res.json())
            .then(json => json.data);
}
///Goes and gets the JSON data and returns it eventually
const proxy = 'https://people.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';
const proxyServer = 'http://solace.ist.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';

//the parameter is the endpoint that i want.
// ex. about/ or people/
async function getData(endpoint) {
    const result = await fetch(`${proxy}${endpoint}`);
    return await result.json();
}

export default getData;
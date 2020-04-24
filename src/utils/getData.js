const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id)=>{
    const apiURL = id ? `${API}/${id}` : API; //Si trae el id como parametro traerá al respectivo personaje, si no trae id (/) se renderizan todos (home)
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log('Fetch Error ', error);
    }
};

export default getData;
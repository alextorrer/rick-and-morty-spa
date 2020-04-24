//No es necesario la extensión
import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character, //valor dinamico (id)
    '/contact': 'Contact',
};

const router = async () => { //Hacerla async (promesa) para no retrasar la carga de la ventana
    //Elementos donde se va a hacer el render
    const header = null || document.getElementById('header'); 
    const content = null || document.getElementById('content');

    header.innerHTML = await Header(); //esperar a que se cargue la funcion Header
    let hash = getHash();
    let route = await resolveRoutes(hash); //await porque puede tardar
    let render = routes[route] ? routes[route] : Error404;    //bracket notation, es obtener routes.'/' pero con una clave dinámica
    content.innerHTML = await render(); //se ejecuta render porque sus posibles valores son funciones (promesas)
};

export default router;
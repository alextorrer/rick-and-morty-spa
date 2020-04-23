import router from './routes';

//Cuando se cargue la ventana, llamar a la funcion router
window.addEventListener('load', router);

//Cuando hay un cambio dentro de un hash
window.addEventListener('hashchange', router);
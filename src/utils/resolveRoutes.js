//Para saber a donde enviar un respectivo template segun la ruta del usuario
const resolveRoutes = (route)=>{
    if(route.length <= 3){ //Si es menor de 3 caracteres es que la ruta es '/' o un id
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return `/${route}`; // /about -> porque es mayor de 3 caracteres
};

export default resolveRoutes;
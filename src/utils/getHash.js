//Funcion para obtener el id
//location.hash => #/1/ Obtener el hash (#)
//.slice para quitar el # y obtener el id (un elemento)
//ponerlo en minusculas
//split para eliminar las '/' y retornar los valores en un arreglo ['', '1', '']
// [1] porque es la posicion en el split
const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;
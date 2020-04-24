import getData from '../utils/getData';

//Funcion para retornar un template
//El join es para unir los elementos del arreglo sin que aparezcan las comas
const Home = async () => {
    const characters = await getData();
    const view = `
        <div class="Characters">
        ${characters.results.map(character => `

            <article class="Character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}"/>
                    <h2>${character.name}</h2>
                </a>
            </article>

        `).join('')} 
        </div>
    `;
    return view;
};

export default Home; //Exportar para utilizar este archivo dentro de otros (modulo)
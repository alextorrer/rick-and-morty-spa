//Funcion para retornar un template
const Home = () => {
    const view = `
        <div class="Characters">
            <article class="Character-item">
                <a href="#/1/">
                    <img src="image" alt="name"/>
                    <h2>Name</h2>
                </a>
            </article>
        </div>
    `;
    return view;
};

export default Home; //Exportar para utilizar este archivo dentro de otros (modulo)
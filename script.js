function mostrarContenido(categoria){

    const lista =
    document.getElementById('listaRecursos');

    const titulo =
    document.getElementById('tituloContenido');

    lista.innerHTML = '';

    titulo.innerHTML = categoria
    .charAt(0)
    .toUpperCase() +
    categoria.slice(1);

    recursos[categoria].forEach(item => {

        lista.innerHTML += `

        <div class="recurso">

            <h4>${item.titulo}</h4>

            <a href="${item.link}"
            target="_blank">

                <i class="fa-solid fa-arrow-up-right-from-square"></i>
Abrir Recurso

            </a>

        </div>

        `;

    });

    document
    .getElementById('contenido')
    .scrollIntoView({
        behavior:'smooth'
    });

}
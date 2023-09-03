//https://pokeapi.co/api/v2/pokemon?limit=10&offset=0

const cuerpo = document.getElementsByTagName('main');

const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';


async function obtenerDatos() {
  const resp = await fetch(url)
  const data = await resp.json();
  for (const item of data.results) {
    const detalles = await obtenerDetalles(item.url)
    cuerpo[0].innerHTML += `
   <div class=" m-3 card col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1" style="width: 18rem;">
   <img src="${detalles[2]}"
       class="card-img-top" alt="pokemon">
   <div class="card-body">
       <h5 class="card-title">${item.name}</h5>
       <p class="card-text">${'Peso: ' + detalles[0] + ' ' + 'Altura: ' + detalles[1]}</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
</div>
   `

  }
}

async function obtenerDetalles(link) {
  const resp = await fetch(link)
  const data = await resp.json();
  const listaDet = [data.weight, data.height, data.sprites.other.dream_world.front_default]
  return listaDet
}


obtenerDatos()


//obtenerDetalles('https://pokeapi.co/api/v2/pokemon/1/')
//sprites.other.dream_world.front_default
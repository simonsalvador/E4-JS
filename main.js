
const buscarPokemon = async () => {
  const input = document.getElementById("input");
  const pokemon = input.value.toLowerCase();

  if (pokemon === '') {
  return alert ('Ingrese un número por favor');
  } else if (pokemon> '905') {
    return alert ('Ese Pokemon no existe, ingrese un número menor a 906!')
  }

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await res.json();


    const html = `<div class="poke"> 
    <img  src="${data.sprites.other.home.front_default}"/>
    <h2> ${data.name}</h2>
    <p class="id-poke"> ${data.id}</p>
    <div class="tipo-poke">
            ${data.types
              .map((tipo) => {
                return `<span class="${tipo.type.name} poke__type">${tipo.type.name}</span>`;
              })
              .join("")}
     </div>         
    <p class="height">Height: ${data.height / 10}m</p>
    <p class="weight">Weight: ${data.weight / 10}Kg</p>
    </div>`;
    div.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
};

const deleteAll = () => {
  div.innerHTML = "";
};

const btn = document.getElementById("btn");
btn.addEventListener("click", buscarPokemon);

// Exemplo de habilidades dos personagens
const characters = [
    {
        name: "Aira Shiratori",
        ability: "Manipulação de Energia Sobrenatural",
    },
    {
        name: "Momo Ayase",
        ability: "Visão espiritual poderosa",
    },
    {
        name: "Okarun",
        ability: "Transformação Espiritual (Modo Turbo)",
    },
    {
        name: "Seiko Ayase",
        ability: "Velocidade sobre-humana.",
    }
];

// Adicionar habilidades dinamicamente
document.addEventListener('DOMContentLoaded', () => {
    const characterList = document.getElementById('character-list');
    characters.forEach(character => {
        const listItem = document.createElement('li');
        listItem.textContent = `${character.name} - ${character.ability}`;
        characterList.appendChild(listItem);
    });
});

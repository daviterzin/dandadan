const episodes = [
    
   {  
        title: "Episódio 1: O Encontro Sobrenatural",
        description: "Ken e Momo se encontram pela primeira vez e enfrentam a assustadora Turbo Granny.",
        releaseDate: "2023-04-01",
        image: "project-folder/previa do episodio1.jpg"
    },
    {
        title: "Episódio 2: Conexão Espiritual",
        description: "Momo descobre mais sobre suas habilidades enquanto Ken lida com sua nova força.",
        releaseDate: "2023-04-08",
        image: "project-folder/previa do episódio2.jpg"
    },
    {
        title: "Episódio 3: A Batalha com o Inimigo Desconhecido",
        description: "A dupla enfrenta uma nova ameaça enquanto Turbo Granny decide ajudá-los.",
        releaseDate: "2023-04-15",
        image: "project-folder/previa do episodio3.jpg"
    },
    {
        title: "Episódio 4: O Mistério da Mansão",
        description: "Ken e Momo investigam uma mansão assombrada cheia de espíritos perigosos.",
        releaseDate: "2023-04-22",
        image: "project-folder/previa do episodio4.jpg"

    },
    {
        title: "Episódio 5: Cadê tuas bolas, cara",
        description: "Os problemas que Momo e Okarun enfrentaram com a Velha Turbo os aproximam, mas as coisas continuam estranhas entre eles.",
        releaseDate: "2023-05-01",
        image: "project-folder/previa do episodio5.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const episodeList = document.getElementById("episode-list");

    episodes.forEach((episode, index) => {
        const episodeCard = document.createElement("div");
        episodeCard.className = "episode-card";

        episodeCard.innerHTML = `
        <h3>${index + 1}. ${episode.title}</h3>
        <p><strong>Sinopse:</strong> ${episode.description}</p>
        <p><strong>Data de Lançamento:</strong> ${episode.releaseDate}</p>
      `;

        episodeList.appendChild(episodeCard);
    });
});


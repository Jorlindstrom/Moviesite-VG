import fetch from 'node-fetch';

const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';


function toMovieObject(apiObject) {
    const movie = {
        id: apiObject.id, //Hämtar id
        ...apiObject.attributes, //Hämtar alla delar som ligger i attributes och sprider ut dessa i en array
    }
 
   return movie;
}

export async function loadMovies() {
    const res = await fetch(API_BASE + '/movies');
    const payload = await res.json();
    return payload.data.map(toMovieObject);
}

export async function loadMovie(id) {
    // try {
    //     const res = await fetch(`${API_BASE}/movies/${id}`);
    //     if (!res.ok) {
    //       return null; // Returnera null om filmen inte hittas
    //     }
   const res= await fetch(API_BASE + '/movies/' + id);
    const payload = await res.json();
    return toMovieObject(payload.data);
// }catch (error) {
//     console.error("Error fetching movie:", error);
//     return null; // Returnera null om något går fel
//   }
}
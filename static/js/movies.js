import fetch from 'node-fetch';

const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export async function loadMovies() {
    const res = await fetch(API_BASE + '/movies');
    const payload = await res.json();
    console.log(payload);
    return payload.data;
}

export async function loadMovie(id) {
    // try {
    //     const res = await fetch(`${API_BASE}/movies/${id}`);
    //     if (!res.ok) {
    //       return null; // Returnera null om filmen inte hittas
    //     }
   const res= await fetch(API_BASE + '/movies/' + id);
    const payload = await res.json();
    return payload.data;
// }catch (error) {
//     console.error("Error fetching movie:", error);
//     return null; // Returnera null om något går fel
//   }
}
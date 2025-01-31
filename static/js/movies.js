import fetch from 'node-fetch';

const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';


function toMovieObject(apiObject) {
    const movie = {
        id: apiObject.id, //Fetching id
        ...apiObject.attributes, //Gets all the parts that are in the attributes and spreads them out in an array
    }
 
   return movie;
}

export async function loadMovies() {
    try {
        const res = await fetch(`${API_BASE}/movies`);

        if (!res.ok) {
            throw new Error(`HTTP-fel! Status: ${res.status}`);
        }

    const payload = await res.json();
    return payload.data.map(toMovieObject);
} catch (error) {
    console.error("Error downloading movies:", error);
    return [];
}
};

export async function loadMovie(id) {
    try {
        const res = await fetch(`${API_BASE}/movies/${id}`);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const payload = await res.json();
        return toMovieObject(payload.data);
    } catch (error) {
        console.error(`Error retrieving movie with ID ${id}:`, error);
        return null;
    }
};
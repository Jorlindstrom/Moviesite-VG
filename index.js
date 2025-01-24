import initApp from './static/js/app.js';
import { loadMovie, loadMovies } from './static/js/movies.js';

const api = {
    loadMovie, //loadMovie: loadMovie,
    loadMovies,
};

const app = initApp(api);

app.listen(5080);
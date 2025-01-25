import {expect, test } from '@jest/globals';
import request from 'supertest';

import { loadMovie, loadMovies } from '../static/js/movies.js';
import initApp from '../static/js/app.js';


test('Home page shows list of movies', async () => {
    const app = initApp({
      loadMovie: async () => ({
        id: 1,
        title: 'Encanto',
        // ...
      }),
      loadMovies: async () => [
        {
          id: 1,
          title: 'Encanto',
        },
        {
          id: 2,
          title: 'Forrest Gump',
        },
        {
          id: 3,
          title: 'Training Day',
        }
      ],
    });
 const response = await request(app)
    .get('/movies')
    .expect('Content-Type', /html/)
    .expect(200);

  expect(response.text).toMatch('Encanto');
  expect(response.text).toMatch('Forrest Gump');
  expect(response.text).toMatch('Training Day');
});

test('Non-existent movie page shows 404 error', async () => {
  const app = initApp({
    loadMovie: async () => null,
    loadMovies: async () => [],
  });

  const response = await request(app)
    .get('/movies/100')
    .expect('Content-Type', /html/)
    .expect(404);

  expect(response.text).toMatch('404 - Page Not Found');
});
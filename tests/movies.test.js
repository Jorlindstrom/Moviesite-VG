import {expect, test } from '@jest/globals';
import request from 'supertest';

import initApp from '../src/app.js';


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
          title: 'Pulp Fiction',
        },
        {
          id: 2,
          title: 'The Shawshank Redemption',
        },
        {
          id: 3,
          title: 'Forrest Gump',
        },
        {
          id: 4,
          title: 'Fire Walk With Me',
        },
        {
          id: 5,
          title: 'Isle of dogs',
        },
        {
          id: 6,
          title: 'Min granne Totoro',
        }, 
        {
          id: 7,
          title: 'The Muppets',
        }, 
        {
          id: 8,
          title: 'Encanto',
        },
        {
          id: 9,
          title: 'Training Day',
        }
      ],
    });
 const response = await request(app)
    .get('/movies')
    .expect('Content-Type', /html/)
    .expect(200);

    expect(response.text).toMatch("Pulp Fiction");
    expect(response.text).toMatch("The Shawshank Redemption");
    expect(response.text).toMatch("Forrest Gump");
    expect(response.text).toMatch("Fire Walk With Me");
    expect(response.text).toMatch("Isle of dogs");
    expect(response.text).toMatch("Min granne Totoro");
    expect(response.text).toMatch("The Muppets");
    expect(response.text).toMatch("Encanto");
    expect(response.text).toMatch("Training Day");
});

test('Non-existent movie page shows 404 error', async () => {
  const app = initApp({
    loadMovie: async () => null,
    loadMovies: async () => [],
  });

  const response = await request(app)
    .get('/movies/1000')
    .expect('Content-Type', /html/)
    .expect(404);

  expect(response.text).toMatch('404 - Page Not Found');
});
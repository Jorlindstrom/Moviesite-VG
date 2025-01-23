import {expect, test } from '@jest/globals';
import request from 'supertest';

import initApp from '../static/js/app.js';


test('Homepage shows list of movies', async () => {
    const app = initApp();
    await request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200);
})
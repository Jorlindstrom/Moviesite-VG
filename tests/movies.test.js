import {expect, test } from '@jest/globals';
import request from 'supertest';

import app from '../static/js/app.js';


test('Homepage shows list of movies', async () => {
    await request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200);
})
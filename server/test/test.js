const express = require('express');
const chai = require('chai');
const request = require('supertest');

const app = express();

describe('GET request 1st page of products', () => {
  it('should fulfill request', () => {
    request(app)
      .get('/products')
      .expect(200);
  });

});
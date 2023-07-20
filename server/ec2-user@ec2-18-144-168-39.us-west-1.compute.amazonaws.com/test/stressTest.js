import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    {duration: '30s', target: 1000},
    {duration: '30s', target: 1000},
    {duration: '30s', target: 0}
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['max<2000']
  }
}

export default function () {
  let page = Math.round(20000 * Math.random() + 180000); // last 10% of db
  let count = 5;
  http.get(`http://localhost:3000/products/?page=${page}&count=${count}`);
  sleep(1);
}

// API Routes:
// products (page, count), products/:product_id, products/:product_id/styles, products/:product_id/related

// Requests per second:
// 1, 10, 100 (EC2 lim), 1000

// Latency: < 2000 ms under load
// Error rate: <1% under load
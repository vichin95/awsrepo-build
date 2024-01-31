#'use strict';

#const express = require('express');

// Constants
#const PORT = 8080;
#const HOST = '0.0.0.0';
#const OS = require('os');
#const ENV = 'PROD6';

// App
#const app = express();
#app.get('/', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from Change 2';
  res.send(getPage(msg));
});

app.get('/test', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from /test Node!';
  res.send(getPage(msg));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

function getPage(message) {
  let body = `<!DOCTYPE html>
<html>
  <style>
    body, html {
      height: 100%;
      margin: 0;
    }

    .bgimg {
      background-image: url('https://www.w3schools.com/w3images/forestbridge.jpg');
      height: 100%;
      background-position: center;
      background-size: cover;
      position: relative;
      color: white;
      font-family: "Courier New", Courier, monospace;
      font-size: 25px;
    }

    .topleft {
      position: absolute;
      top: 0;
      left: 16px;
    }

    .bottomleft {
      position: absolute;
      bottom: 0;
      left: 16px;
    }

    .middle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    hr {
      margin: auto;
      width: 40%;
    }
  </style>
  <body>
    <div class="bgimg">
      <div class="topleft">
        <p>ENVIRONMENT: ${ENV}</p>
      </div>
      <div class="middle">
        <h1>Host/container name 2</h1>
        <hr>
        <p>${OS.hostname()}</p>
      </div>
      <div class="bottomleft">
        <p>${message}</p>
        <p>This is additional content to make the response larger.</p>
        <p>Feel free to add more content as needed.</p>
        <!-- Add more content here -->
      </div>
    </div>
  </body>
</html>`;
  return body;
}

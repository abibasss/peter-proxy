const express = require('express');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(__dirname + '/../public'));

app.use('/products/',
  proxy({
    target: "http://127.0.0.1:8002",
    changeOrigin: true
  })
)

app.use('/images/',
  proxy({
    target: "http://127.0.0.1:8002",
    changeOrigin: true
  })
)

app.use('/shoes',
  proxy({
    target: "http://127.0.0.1:8001",
    changeOrigin: true
  })
);

app.use('/shoes/:shoeId',
  proxy({
    target: "http://127.0.0.1:8001",
    changeOrigin: true
  })
);

app.use('/looks/:id',
  proxy({
    target: "http://127.0.0.1:8001",
    changeOrigin: true
  })
);

app.use('/shares/:id',
  proxy({
    target: "http://127.0.0.1:8001",
    changeOrigin: true
  })
);

app.listen(port, () => {
  console.log(`Listening on server: https://localhost:${port}`);
})
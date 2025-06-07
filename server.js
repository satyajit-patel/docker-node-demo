const express = require('express');

const app = express();

app.use(express.json());
app.use('/', (req, res) => {
        res.send("Hello from the docker side");
});

app.get('/', (req, res) => {
        res.send("Hello from the docker side");
});

const PORT = 3000;

app.listen(PORT, () => {
        console.log("server started on port", PORT);
});

// // docker build -t <image-name> <path where files are exist>
// docker build -t <image-name> .

// to run the image
// docker run -it -p 3000:3000 node-demo
// docker ps
// docker stop <ID>
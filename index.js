const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', { fileUrl: 'https://1drv.ms/b/s!Alg4vZMasWx9Zz-0-4WxuYue1eg?embed=1&em=2' }); 
});


app.post('/', (req, res) => {
    const { fileUrl } = req.body; 
    res.render('index', { fileUrl });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

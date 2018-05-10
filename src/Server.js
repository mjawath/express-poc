import  express from'express';
const app = express();

app.get('/', (req, res) => res.send('heeeeeefeffeeeeeeeeee world!'))

app.get('/test', (req, res) =>{
    res.send('deee world!');
    console.log("testing "+new Date())
} );

app.listen(3000, () => console.log('Example app listening on port 3000!'))

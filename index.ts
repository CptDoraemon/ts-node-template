import * as express from 'express';
const app = express();

app.get('/hello', (req, res) => {
  res.json({'message': 'hello'});
});

const port = process.env.PORT || 5000;
console.log(`listening port ${port}`);
app.listen(port);

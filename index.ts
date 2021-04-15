declare const module: any;
import * as express from 'express';

function bootstrap() {
  const app = express();

  app.get('/hello', (req, res) => {
    res.json({'message': 'hello'});
  });

  const port = process.env.PORT || 5000;
  console.log(`listening port ${port}`);
  const server = app.listen(port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }
}

bootstrap();

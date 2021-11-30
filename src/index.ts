
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());


app.use('/', routes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

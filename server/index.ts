import express from 'express';
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import itunesRoute from '@/resources/itunes/route';

const app = express();
const port = 3001;

// Middleware
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/itunes", itunesRoute)


app.listen(port, () => {
  console.log(`iTunes server running:
  - http://localhost:${port}
  - http://127.0.0.1:${port}`)
});



import express, { Application } from "express";
import jokeRoutes from "./routes/joke.routes";
import jokeTypeRoutes from "./routes/jokeType.routes";
import { envs } from "./config/env";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import cors from "cors";
import helmet from "helmet";

const app: Application = express();

// Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(
  cors({
    origin: [envs.LOCAL_DOMAIN, envs.PROD_DOMAIN],
    optionsSuccessStatus: 200,
  }),
);

if (envs.NODE_ENV !== "production") {
  app.use(
    `${envs.DEFAULT_API_PREFIX}/docs`,
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument),
  );
}

app.use(`${envs.DEFAULT_API_PREFIX}/jokes`, jokeRoutes);
app.use(`${envs.DEFAULT_API_PREFIX}/joke-types`, jokeTypeRoutes);

export default app;

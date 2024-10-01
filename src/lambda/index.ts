import {
  APIGatewayEventRequestContextV2,
  APIGatewayProxyEventV2,
} from "aws-lambda";
import { express, serverless } from "opt/nodejs";

const app = express.default();
app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  console.log("path: ", req.path);
  res.send(`Hello, TypeScript Express! Thanks for visiting : ${req.path}`);
});

app.get("/api", (req: express.Request, res: express.Response) => {
  console.log("path: ", req.path);
  res.send(`Hello, TypeScript Express! Thanks for visiting : ${req.path}`);
});

// app.listen(3000, () => {
//   console.log(`Example app listening on port 3000`);
// });

const server = serverless.default(app, { provider: "aws" });

module.exports.handler = async (
  event: APIGatewayProxyEventV2,
  context: APIGatewayEventRequestContextV2,
) => await server(event, context);

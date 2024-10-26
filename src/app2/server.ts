import express, { Request, Response } from "express";
import cors from "cors";

export class Server {
  app: any;
  server: any;
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
  }

  public async start() {
    this.app.get("/api", (req: Request, res: Response) => {
      res.status(200).json({
        message: "success",
      });
    });

    this.server = this.app.listen(8000, () => {
      console.log("server started");
    });

    return 1;
  }

  public async stop() {
    if (this.server) {
      this.server.close(() => {});
    }
  }
}

// const server = new Server();
// server.start().then((success) => {
//   console.log(success);
//   console.log("getting ready to stop server");
// });
//   .then(async () => {
//     await server.stop();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

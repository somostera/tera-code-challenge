import * as bodyParser from "body-parser";
import * as cors from "cors";
import { InversifyExpressServer } from "inversify-express-utils";
import { createConnection } from "typeorm";
import { CorsOptions } from "cors";
import { SingletonModule } from "./singleton/singleton.module";
import processSingleton from "./singleton/process.singleton";
import { Server } from "./server.interface";
import { Application } from "express";

export class ServerJaspe implements Server {
  private configCors: CorsOptions;
  private static server: InversifyExpressServer;
  private port;

  public constructor() {
    this.configCors = {
      methods: "GET, HEAD, PUT, POST, DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 200,
    };
  }

  public static factory(module: SingletonModule, port?: number): Server {
    ServerJaspe.server = new InversifyExpressServer(processSingleton(module));

    const jaspe = new ServerJaspe();

    if (port !== undefined) {
      jaspe.setPort(port);
    } else {
      jaspe.setPort(8765);
    }
    return jaspe;
  }
  public setPort(port: number): void {
    this.port = port;
  }

  private build(): Promise<Application> {
    ServerJaspe.server.setConfig((app) => {
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));

      app.use(cors(this.configCors));

      app.set("port", this.port);
    });

    return Promise.resolve(ServerJaspe.server.build());
  }

  private async runServer() {
    const applicationServer = await this.build();
    applicationServer.listen(applicationServer.get("port"), () => {
      console.log(
        "  App is running at http://localhost:%d in %s mode",
        applicationServer.get("port"),
        applicationServer.get("env")
      );
      console.log("  Press CTRL-C to stop\n");
    });
  }

  public run(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        await createConnection();
        await this.runServer();
        resolve(true);
      } catch (e) {
        console.log(e);
        resolve(false);
      }
    });
  }

  setConfigCors(customCors: CorsOptions): void {
    this.configCors = customCors;
  }
}

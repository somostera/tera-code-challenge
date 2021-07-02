import { CorsOptions } from "cors";

export interface Server {
  setPort(port: number): void;
  setConfigCors(customCors: CorsOptions): void;
  run(): Promise<boolean>;
}

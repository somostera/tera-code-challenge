import { ExceptionBase } from "./exception.base";
import { HttpResponseMessage, JsonContent } from "inversify-express-utils";

export class BuildException {
  private _exception: ExceptionBase;

  constructor(exception: ExceptionBase) {
    this._exception = exception;
  }

  render(): HttpResponseMessage {
    const response = new HttpResponseMessage(this._exception.httpCode);
    response.content = new JsonContent(this._exception.toJSON);
    return response;
  }
}

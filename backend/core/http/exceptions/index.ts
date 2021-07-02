import { HttpStatus } from "../HttpStatus";
import { ExceptionBase } from "./exception.base";
import { BuildException } from "./build.exception";

export default function throwFactoryException(
  message: string,
  reason: string,
  httpCode = HttpStatus.BAD_REQUEST
) {
  const exception = new ExceptionBase(message, reason, httpCode);
  throw new BuildException(exception);
}

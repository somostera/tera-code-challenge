import * as Validator from "validatorjs";
import { HttpStatus } from "./HttpStatus";
import { ExceptionBase } from "./exceptions/exception.base";
import { BuildException } from "./exceptions/build.exception";
import { Request } from "express";

export abstract class ValidatorAbstract {
  private messageErrors: any;

  private isValid(data: any): Promise<boolean> {
    const validation = new Validator(data, this.getRules());

    if (validation.fails()) {
      this.messageErrors = validation.errors.all();

      const exception = new ExceptionBase(
        "Data validation error.",
        "Failed validation for submitted form.",
        HttpStatus.BAD_REQUEST,
        validation.errors.all()
      );
      throw new BuildException(exception);
    }
    return Promise.resolve(true);
  }

  public async handle(request: Request): Promise<any> {
    await this.isValid(request.body);
    return request.body;
  }

  abstract getRules(): any;
}

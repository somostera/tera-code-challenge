import { SingletonModuleInterface } from "./singleton.module.interface";

export abstract class SingletonModule implements SingletonModuleInterface {
  imports = [];
  providers = [];
  controllers = [];
  repositories = [];

  getControllers(): any[] {
    return this.controllers;
  }

  getImports(): any[] {
    return this.imports;
  }

  getProviders(): any[] {
    return this.providers;
  }
  getRepositories(): any[] {
    return this.repositories;
  }
}

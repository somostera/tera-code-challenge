export interface SingletonModuleInterface {
  getImports(): any[];
  getProviders(): any[];
  getControllers(): any[];
  getRepositories(): any[];
}

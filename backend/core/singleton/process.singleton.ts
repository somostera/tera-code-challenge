import { Container } from "inversify-props";
import { SingletonModuleInterface } from "./singleton.module.interface";
import { ServiceInterface } from "../service.interface";

const container = new Container();

function processInject(module: SingletonModuleInterface) {
  module.getControllers().map((controller) => {
    container.bindTo(controller);
    new controller();
  });

  module.getProviders().map((service) => {
    container.bind<ServiceInterface>(service).to(service);
  });

  module.getImports().map((moduleImport) => {
    processInject(new moduleImport());
  });

  return container;
}

export default (module: SingletonModuleInterface) => {
  return processInject(module);
};

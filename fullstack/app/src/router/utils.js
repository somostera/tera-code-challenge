const createRouter = (path, component, name) => {
  return {
    path: `/${path}`,
    name: name || path,
    component: component,
  };
};

export default createRouter;

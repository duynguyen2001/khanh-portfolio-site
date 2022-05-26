import { PostPreview } from './components/postPreview/PostPreview';

const allComponents = {
  PostPreview,
};

const getComponents = (imports) => {
  const components = {};
  if (imports) {
    imports.forEach(
      (componentName) =>
        (components[componentName] = allComponents[componentName])
    );
  }
  return components;
};
export default getComponents;

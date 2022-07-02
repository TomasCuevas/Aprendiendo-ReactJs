export const getEnvironments = () => {
  // eslint-disable-next-line no-unused-expressions
  import.meta.env;

  return { ...import.meta.env };
};

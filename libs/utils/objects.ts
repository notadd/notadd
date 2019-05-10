export const isString = function(arg: any) {
  return typeof arg === 'string';
};

export const isObject = function(arg: any) {
  return arg && typeof arg === 'object';
};

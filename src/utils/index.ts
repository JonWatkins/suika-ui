import { isObject } from "suika";

export type ElementOptions = {
  [_: string]: any;
};

export const getTagName = (options: ElementOptions, tag = "div") => {
  if (options && typeof options.is === "string") {
    tag = options.is;
  }
  return tag;
};

export const mergeClassNames = (className: string, classNames: string) => {
  return `${className} ${classNames}`;
};

export const fixOptions = (
  options: ElementOptions,
  defaultOptions: ElementOptions
): ElementOptions => {
  const merged: ElementOptions = {};
  const defaults = isObject(defaultOptions)
    ? defaultOptions
    : ({} as ElementOptions);

  for (const [key, value] of Object.entries(defaults)) {
    merged[key] = value;
  }

  if (isObject(options)) {
    for (const [key, value] of Object.entries(options)) {
      if (key === "is") continue;
      if (key === "className") {
        merged[key] = mergeClassNames(value, merged[key]);
      } else {
        merged[key] = value;
      }
    }
  }

  return merged;
};

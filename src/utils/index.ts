import { isObject } from "suika";

export type ElementOptions = {
  [_: string]: any;
};

export const getTagName = (options: ElementOptions, tag = "div") => {
  if (isObject(options) && typeof options.is === "string") {
    tag = options.is;
  }
  return tag;
};

import { isObject } from "suika";
import type { vAttrs } from "suika/dist/vdom";

export const getTagName = (options: vAttrs, tag = "div"): string => {
  if (isObject(options) && typeof options.is === "string") {
    tag = options.is;
  }
  return tag;
};

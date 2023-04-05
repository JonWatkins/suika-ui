import { h } from "suika";
import { getTagName, fixOptions, ElementOptions } from "../utils";

export const Button = (
  options: ElementOptions = {},
  children: Array<any> = []
) => {
  const tag = getTagName(options, "button");
  const props = fixOptions(options, {
    className: `btn btn-${options.color || "primary"} btn-${
      options.size || "md"
    }`,
  });

  return h(tag, props, ...children);
};

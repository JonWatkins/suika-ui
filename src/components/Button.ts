import { h, fixOptions } from "suika";
import { getTagName } from "../utils";
import type { vNode, vAttrs } from "suika/dist/vdom";

export const Button = (options: vAttrs = {}, children: vNode[] = []): vNode => {
  const tag = getTagName(options, "button");
  const props = fixOptions(options, {
    className: `btn btn-${options.color || "primary"} btn-${
      options.size || "md"
    }`,
  });

  return h(tag, props, ...children);
};

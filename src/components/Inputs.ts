import { h, fixOptions } from "suika";
import type { vNode, vAttrs } from "suika/dist/vdom";

export const Input = (options: vAttrs = {}): vNode => {
  const props = fixOptions(options, {
    className: "form-control",
  });

  return h("input", props);
};

export const InputGroup = (
  options: vAttrs = {},
  children: vNode[] = []
): vNode => {
  const props = fixOptions(options, {
    className: "input-group",
  });

  return h("div", props, ...children);
};

import { h, fixOptions } from "suika";
import type { vNode, vAttrs } from "suika/dist/vdom";

export const ListGroup = (
  options: vAttrs = {},
  children: vNode[] = []
): vNode => {
  const props = fixOptions(options, {
    className: "list-group",
  });

  return h("ul", props, ...children);
};

export const ListGroupItem = (
  options: vAttrs = {},
  children: vNode[] = []
): vNode => {
  const props = fixOptions(options, {
    className: "list-group-item",
  });

  return h("li", props, ...children);
};

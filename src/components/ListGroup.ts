import { h } from "suika";
import { fixOptions, ElementOptions } from "../utils";

export const ListGroup = (
  options: ElementOptions = {},
  children: Array<any> = []
) => {
  const props = fixOptions(options, {
    className: "list-group",
  });

  return h("ul", props, ...children);
};

export const ListGroupItem = (
  options: ElementOptions = {},
  children: Array<any> = []
) => {
  const props = fixOptions(options, {
    className: "list-group-item",
  });

  return h("li", props, ...children);
};

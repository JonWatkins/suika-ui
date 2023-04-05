import { h, fixOptions } from "suika";
import { ElementOptions } from "../utils";

export const Input = (options: ElementOptions = {}) => {
  const props = fixOptions(options, {
    className: "form-control",
  });

  return h("input", props);
};

export const InputGroup = (
  options: ElementOptions = {},
  children: Array<any> = []
) => {
  const props = fixOptions(options, {
    className: "input-group",
  });

  return h("div", props, ...children);
};

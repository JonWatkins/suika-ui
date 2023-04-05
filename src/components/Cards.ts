import { h, fixOptions } from "suika";
import { getTagName, ElementOptions } from "../utils";

export const Card = (
  options: ElementOptions = {},
  children: Array<any> = []
) => {
  const props = fixOptions(options, {
    className: "card",
  });

  return h("div", props, ...children);
};

export const CardHeader = (
  options: ElementOptions = {},
  children: Array<any> = []
) => {
  const props = fixOptions(options, {
    className: "card-header",
  });

  return h("div", props, ...children);
};

export const CardTitle = (
  options: ElementOptions = {},
  children: Array<any> = []
) => {
  const tag = getTagName(options, "h1");
  const props = fixOptions(options, {
    className: "card-title",
  });

  return h(tag, props, ...children);
};

export const CardBody = (
  options: ElementOptions = {},
  children: Array<any> = []
) => {
  const props = fixOptions(options, {
    className: "card-body",
  });

  return h("div", props, ...children);
};

export const CardFooter = (
  options: ElementOptions = {},
  children: Array<any> = []
) => {
  const props = fixOptions(options, {
    className: "card-footer",
  });

  return h("div", props, ...children);
};

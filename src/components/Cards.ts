import { h, fixOptions } from "suika";
import { getTagName } from "../utils";
import type { vNode, vAttrs } from "suika/dist/vdom";

export const Card = (options: vAttrs = {}, children: vNode[] = []): vNode => {
  const props = fixOptions(options, {
    className: "card",
  });

  return h("div", props, ...children);
};

export const CardHeader = (
  options: vAttrs = {},
  children: vNode[] = []
): vNode => {
  const props = fixOptions(options, {
    className: "card-header",
  });

  return h("div", props, ...children);
};

export const CardTitle = (
  options: vAttrs = {},
  children: vNode[] = []
): vNode => {
  const tag = getTagName(options, "h1");
  const props = fixOptions(options, {
    className: "card-title",
  });

  return h(tag, props, ...children);
};

export const CardBody = (
  options: vAttrs = {},
  children: vNode[] = []
): vNode => {
  const props = fixOptions(options, {
    className: "card-body",
  });

  return h("div", props, ...children);
};

export const CardFooter = (
  options: vAttrs = {},
  children: vNode[] = []
): vNode => {
  const props = fixOptions(options, {
    className: "card-footer",
  });

  return h("div", props, ...children);
};

import{isObject as r,fixOptions as t,h as s}from"suika";const n=(t,s="div")=>(r(t)&&"string"==typeof t.is&&(s=t.is),s),a=(r={},a=[])=>{const c=n(r,"button"),e=t(r,{className:`btn btn-${r.color||"primary"} btn-${r.size||"md"}`});return s(c,e,...a)},c=(r={})=>{const n=t(r,{className:"form-control"});return s("input",n)},e=(r={},n=[])=>{const a=t(r,{className:"input-group"});return s("div",a,...n)},o=(r={},n=[])=>{const a=t(r,{className:"list-group"});return s("ul",a,...n)},i=(r={},n=[])=>{const a=t(r,{className:"list-group-item"});return s("li",a,...n)},u=(r={},n=[])=>{const a=t(r,{className:"card"});return s("div",a,...n)},l=(r={},n=[])=>{const a=t(r,{className:"card-header"});return s("div",a,...n)},m=(r={},a=[])=>{const c=n(r,"h1"),e=t(r,{className:"card-title"});return s(c,e,...a)},d=(r={},n=[])=>{const a=t(r,{className:"card-body"});return s("div",a,...n)},N=(r={},n=[])=>{const a=t(r,{className:"card-footer"});return s("div",a,...n)};export{a as Button,u as Card,d as CardBody,N as CardFooter,l as CardHeader,m as CardTitle,c as Input,e as InputGroup,o as ListGroup,i as ListGroupItem,n as getTagName};

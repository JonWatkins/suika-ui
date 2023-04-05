# Suika UI ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/JonWatkins/suika-ui/main.yml) ![npm](https://img.shields.io/npm/v/suika-ui) ![GitHub](https://img.shields.io/github/license/JonWatkins/suika-ui) [![codecov](https://codecov.io/gh/JonWatkins/suika-ui/branch/main/graph/badge.svg?token=CZ8QB5X8S5)](https://codecov.io/gh/JonWatkins/suika-ui)

Suika UI (WIP) is a lightweight UI library for the Suika framework.

## Installation

You can use as a `suika` package on `npm`

```bash
npm install suika-ui@latest
```

Or you can use Suika from a CDN.

```html
<link href="https://unpkg.com/suika-ui@1.1.1/dist/style.css" />
<script src="https://unpkg.com/suika@1.3.5/dist/bundle.umd.js"></script>
<script src="https://unpkg.com/suika-ui@1.1.1/dist/bundle.umd.js"></script>
```

## Documentation

Documentation is comming soon.

## TypeScript

```jsx
import { Component, mount, h } from "suika";
import { Card, CardHeader, CardTitle, CardBody, Button } from "suika-ui";

const root = document.getElementBytId("app");

class App extends Component {
  state = {
    count: 0,
  };

  inc() {
    this.state.count++;
  }

  render() {
    return (
      <Card>
        <CardHeader className="bg-light">
          <CardTitle is="h2">{this.state.count}</CardTitle>
        </CardHeader>
        <CardBody>
          <Button onclick={() => this.inc()}>Inc</Button>
        </CardBody>
      </Card>
    );
  }
}

mount(App, root);
```

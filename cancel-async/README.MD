# Cancel Async
## What
This pattern describes use case where we want to avoid calling `setState()` after a component has unmounted. It happens usually when asynchronous action haven't finished before we destroy component eg. leave particular page.
 
## Example
Given we have 2 components representing pages. `Home` and `About`. Visiting `Home` page causes data to be fetched on the very begining. Normally we're hydrating component with data in `componentDidMount` method.

```js
import React, { Component } from "react";

const LongDataFetching = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.random()), 500);
  });
};

class Home extends Component {
  state = {
    data: 0
  };

  async componentDidMount() {
    try {
      const data = await LongDataFetching();
      this.setState(data);
     } catch (e) {
      console.error(`Error during fetching`)
     }
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <div>data: {this.state.data}</div>
      </div>
    );
  }
}

export default Home;
```

What will happen if fetching data takes long time and in the meanwhile we will change the view?

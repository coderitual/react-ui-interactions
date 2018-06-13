# Cancel Async
## What
This pattern describes use case where we want to avoid calling `setState()` after a component has unmounted. It happens usually when asynchronous action haven't finished before we leave particular page.
 

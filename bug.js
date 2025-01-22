```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello world</div>
  );
}
```
This simple Next.js 15 application might unexpectedly throw an error if there is a problem during the rendering process, such as fetching data from an API that fails.  The error might not be immediately obvious because Next.js's error handling might not be comprehensive enough in certain edge cases.
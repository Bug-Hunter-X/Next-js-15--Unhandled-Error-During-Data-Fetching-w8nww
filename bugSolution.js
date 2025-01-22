```javascript
// pages/index.js

export default async function Home() {
  try {
    // Simulate an API call that might fail
    const response = await fetch('/api/data'); //Replace with your API endpoint
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return (
      <div>
        <h1>Data from API:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <h1>Error fetching data</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}
```
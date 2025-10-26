JavaScript 
import React, { useState, useEffect } from 'react'; 
import './App.css'; 
function DataFetcher() { 
const [data, setData] = useState(null); 
const [loading, setLoading] = useState(true); 
const [error, setError] = useState(null); 
useEffect(() => { 
// This function will run after every render if no dependency array is 
provided 
// With an empty dependency array [], it runs only once after the initial render (like componentDidMount) 
const fetchData = async () => { 
try { 
const response = await 
fetch('https://jsonplaceholder.typicode.com/posts/1'); // Example public API 
if (!response.ok) { 
throw new Error(`HTTP error! status: ${response.status}`); 
} 
const result = await response.json(); 
setData(result); 
} catch (e) { 
setError(e); 
} finally { 
setLoading(false); 
} 
}; 
fetchData(); 
// Optional: Cleanup function (runs on unmount or before re-running effect) 
return () => { 
console.log('Cleanup function for data fetching.'); 
}; 
}, []); // Empty dependency array ensures this effect runs only once 
if (loading) { 
return ( 
<div className="App"> 
<header className="App-header"> 
<p>Loading data...</p> 
</header> 
</div> 
); 
} 
if (error) { 
return ( 
<div className="App"> 
<header className="App-header"> 
<p>Error: {error.message}</p> 
</header> 
</div> 
); 
} 
return ( 
<div className="App"> 
<header className="App-header"> 
<h1>Data Fetched from API (useEffect)</h1> 
{data && ( 
<div> 
<h2>Post Title: {data.title}</h2> 
<p>Body: {data.body}</p> 
<p>User ID: {data.userId}</p> 
</div> 
)} 
</header> 
</div> 
); 
} 
export default DataFetcher; 
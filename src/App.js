import React from 'react';
import useFetch from "./useFetch";
const App = ()=>{
  const { loading, error, data } = useFetch("https://jsonplaceholder.typicode.com/posts");
  if(error) return (<div> Error. ${error}</div>)
  if(loading) return (<div>Loading...</div>)
  if(data) return (
    <ul>
      {data.map(d=><li key={d.id}>{d.id} - {d.title}</li>)}
    </ul>
  )
  //It should never get here
  return (
    <div>Use Fetch</div>
  )
}

export default App;

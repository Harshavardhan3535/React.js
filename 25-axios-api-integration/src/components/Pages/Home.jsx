import { useState } from 'react';
import axiosInstance from '../../Utils/AxioxInstance';

function Home() {
  const [data, setData] = useState([]);

  async function fetchData() {
    let response = await axiosInstance.get('/posts');
    setData(response.data);
  }

  async function deleteData(id) {
    let response = await axiosInstance.delete(`/post/${id}`);
    console.log(response.data);
    setData(data.filter(post => post.id !== id));
  }

  async function updateData(id) {
    let response = await axiosInstance.put(`/post/${id}`, {
      title: "Updated Title",
      body: "Updated Body",
    });
    console.log(response.data);
    setData(data.map(post => post.id === id ? response.data : post));
  }

  async function newPost() {
    let response = await axiosInstance.post('/newPost', {
      title: "Axios Demo Title",
      body: "Axios Demo Body",
      userId: 34
    });
    console.log(response.data);
    setData([...data, response.data]);
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page</p>

      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={newPost}>Create New Post</button>

      {data.map((post) => (
        <div key={post.id} style={{ border: "2px solid black", margin: "20px", padding: "10px", width: "300px" }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>{post.id}</p>
          <button style={{ background: 'red', color: 'white' }} onClick={() => deleteData(post.id)}>Delete</button>
          <button style={{ background: 'blue', color: 'white' }} onClick={() => updateData(post.id)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
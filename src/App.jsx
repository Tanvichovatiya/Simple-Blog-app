import React, { useState } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';



const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  return (
    <>
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Blog App</h1>
     
     <BlogForm onAddBlog={addBlog} />

       <div className="mt-8">
         <input
           type="text"
           className="w-full p-2 border rounded-md mb-4"
         placeholder="Search blogs..."
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
         />
       </div>

      <BlogList blogs={blogs} searchTerm={searchTerm} />
    </div>
  
  </>




)

};

export default App;

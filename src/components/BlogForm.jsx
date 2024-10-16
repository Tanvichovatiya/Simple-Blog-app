import React, { useState } from 'react';

const BlogForm = ({ onAddBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new blog post
    const newBlog = {
      title,
      content,
      date,
      image: URL.createObjectURL(image),  // Temporary image URL
    };

    onAddBlog(newBlog);

    // Clear form
    setTitle('');
    setContent('');
    setDate('');
    setImage(null);
    // navigate('/bloglist');
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Content</label>
        <textarea
          className="w-full mt-1 p-2 border rounded-md"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          className="w-full mt-1 p-2 border rounded-md"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          className="w-full mt-1"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Submit
      </button>
    </form>
    </>
  );
};

export default BlogForm;

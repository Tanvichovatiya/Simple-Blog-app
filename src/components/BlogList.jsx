import React from 'react';

const BlogList = ({ blogs, searchTerm }) => {
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
          <h1 className='text-center mt-5 text-gray-600 text-[25px] font-semibold'>Your Blog</h1>

    <div className="mt-8 grid grid-cols-3  gap-4 ">
      {filteredBlogs.map((blog, index) => (
        <div key={index} className="p-4 bg-white w-[250px] h-[300px] shadow-md  rounded-md">
          <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
          <p className="mb-4">{blog.content}</p>
          {blog.image && <img src={blog.image} alt="Blog" className="mb-4 rounded-md w-full h-[50%]"  />}
          <p className="text-gray-500">Published on: {blog.date}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default BlogList;

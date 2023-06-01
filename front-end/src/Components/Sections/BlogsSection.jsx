import { useEffect, useState } from "react";
import BlogCard from "../Common/BlogCard";
import useFetch from "../Hooks/useFetch";

const BlogsSection = () => {

  const { loading, error, getBlogs } = useFetch();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then(blogs => setBlogs(blogs));
  }, []);
  
  return (
    <>
      <div className="ml-6 text-xl underline underline-offset-8 text-black dark:text-myOrange ">
        <h1>Blogs</h1>
      </div>
      <div className="grid gap-6 p-5 xs:grid-flow-row xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {loading && <>
          <h2>Loading...</h2>
        </>}

        {!loading && blogs.length > 0 && blogs.map((blog, index) =>
          <BlogCard key={index} blog={blog} />
        )}
      </div>
    </>
  );
};

export default BlogsSection;

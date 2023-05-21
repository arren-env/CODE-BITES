import BlogCard from "./BlogCard";

const BlogsPage = () => {
  return (
    <>
    <div className="ml-6 text-xl underline underline-offset-8 text-black dark:text-myOrange ">
      <h1>Blogs</h1>
    </div>
      <div className="grid gap-6 p-5 xs:grid-flow-row xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 animate fadeIn four">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
};

export default BlogsPage;




const BlogCard = (props) => {
  const { blog } = props;
  return (
    <>
      <div>
        <article {...props} className="cursor-pointer overflow-hidden shadow transition hover:shadow-lg dark:hover:shadow-zinc-800 hover:scale-105  hover:ease-out">
          <img
            alt="Office"
            src={blog.image || "../src/assets/3.jpg"}
            className="h-36 w-full object-cover"
          />

          <div className="bg-white dark:bg-zinc-900 dark:text-white p-3">
            <div className="flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9308/9308891.png"
                  alt=""
                  className="h-5"
                />
                <h1 className="text-xs text-black dark:text-white">{blog.createdBy}</h1>
              </div>
              <time
                dateTime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                July 19th
              </time>
            </div>


            <h3 className="mt-0.5 text-lg/tight text-gray-900 dark:text-white">
              {blog.title}
            </h3>


            <p className="mt-2 line-clamp-2 text-sm/snug dark:text-white text-gray-500">
              {blog.story}
            </p>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogCard;

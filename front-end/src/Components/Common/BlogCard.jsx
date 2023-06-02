
const placeholderImg = "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1";

const BlogCard = (props) => {
  const { blog } = props;
  return (
    <>
      <div>
        <article {...props} className="cursor-pointer overflow-hidden shadow transition hover:shadow-lg dark:hover:shadow-zinc-800 hover:scale-105  hover:ease-out rounded-[10px]">
          {/* Blog Image */}
          <img
            src={blog.image || placeholderImg}
            alt="Blog"
            className="w-full h-40 object-cover"
          />

          {/* Blog Content */}
          <div className="bg-white dark:bg-zinc-900 dark:text-white p-3">

            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900 text-lg/tight">{blog.title}</h2>

            {/* Story */}
            <p className="leading-relaxed mb-4 dark:text-white text-gray-500 line-clamp-2 text-sm/snug">{blog.story}</p>

            {/* <div className="flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9308/9308891.png"
                  alt=""
                  className="h-5"
                />
                <h1 className="text-xs text-black dark:text-white">{blog.createdBy}</h1>
              </div>
              <time
                className="block text-xs text-gray-500"
              >
                {new Date(blog.createdAt).toLocaleDateString()}
              </time>
            </div> */}

            {/* Author Information */}
            <div className="flex items-start justify-between mt-4 text-gray-500 dark:text-gray-300">
              {blog.user && (
                <div className="flex items-center mb-4">
                  <img
                    src={blog.user.avatar || placeholderImg}
                    alt="Author"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <p>By {blog.user.name}</p>
                </div>
              )}

              {/* Creation and Updation Date */}
              <div className="flex flex-col mb-4 items-end">
                <p className="text-sm mt-2">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                {blog.createdAt !== blog.updatedAt && (
                  <span className="mt-2">Last updated at {new Date(blog.updatedAt).toLocaleDateString()}</span>
                )}
              </div>
            </div>

          </div>


        </article>
      </div>
    </>
  );
};

export default BlogCard;

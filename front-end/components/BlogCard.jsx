const BlogCard = () => {
  return (
    <>
      <div>
        <article className="overflow-hidden shadow transition hover:shadow-lg dark:hover:shadow-zinc-800 hover:scale-105  hover:ease-out">
          <img
            alt="Office"
            src="../src/assets/3.jpg"
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
              <h1 className="text-xs text-black dark:text-white">Zenitsu</h1>
              </div>
              <time
                dateTime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                July 19th
              </time>
            </div>

            <a href="#">
              <h3 className="mt-0.5 text-lg/tight text-gray-900 dark:text-white">
                How to position your furniture for positivity
              </h3>
            </a>

            <p className="mt-2 line-clamp-2 text-sm/snug dark:text-white text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogCard;

const Trending = ({ product }) => {
  return (
    <div className="cursor-pointer hover:shadow-md pl-2 dark:hover:shadow-zinc-800">
      <div className="flex items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9308/9308891.png"
          alt=""
          className="h-5"
        />
        <h1 className="text-xs text-black dark:text-white">{product.title}</h1>
      </div>
      <div>
        <h1 className="text-base/tight font-semibold text-black dark:text-white line-clamp-2 my-2">
          {product.story}
        </h1>
      </div>

      <div className="flex gap-2 text-xs pb-2">
        <h1>July 19</h1>
        <h1 className="-mr-1">10 min read</h1>

        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path
            d="M12.4 12.77l-1.81 4.99a.63.63 0 0 1-1.18 0l-1.8-4.99a.63.63 0 0 0-.38-.37l-4.99-1.81a.62.62 0 0 1 0-1.18l4.99-1.8a.63.63 0 0 0 .37-.38l1.81-4.99a.63.63 0 0 1 1.18 0l1.8 4.99a.63.63 0 0 0 .38.37l4.99 1.81a.63.63 0 0 1 0 1.18l-4.99 1.8a.63.63 0 0 0-.37.38z"
            fill="#FFC017"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Trending;

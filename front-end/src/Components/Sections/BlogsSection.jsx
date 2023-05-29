import { useEffect, useState } from "react";
import BlogCard from "../Common/BlogCard";
import useFetch from "../Hooks/useFetch";
import { PRODUCT_ENDPOINT } from "../../store/constants";

const BlogsSection = () => {

  const { data: products, loading, error } = useFetch(PRODUCT_ENDPOINT);

  return (
    <>
      <div className="ml-6 text-xl underline underline-offset-8 text-black dark:text-myOrange ">
        <h1>Blogs</h1>
      </div>
      <div className="grid gap-6 p-5 xs:grid-flow-row xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {loading && <>
          <h2>Loading...</h2>
        </>}

        {!loading && products && products.length > 0 && products.map((product,index) =>
          <BlogCard key={index} product={product} />
        )}
      </div>
    </>
  );
};

export default BlogsSection;

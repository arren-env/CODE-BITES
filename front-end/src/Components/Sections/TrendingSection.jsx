import { useEffect, useState } from "react";
import Trending from "../Common/Trending";
import useFetch from "../Hooks/useFetch";
import { BLOG_ENDPOINT } from "../../store/constants";

const TrendingSection = () => {

  const { getBlogs, loading, error } = useFetch(BLOG_ENDPOINT);

  return (
    <>
      <h1 className="text-2xl text-black dark:text-myOrange underline underline-offset-8 ml-6">
        Trending
      </h1>
      {/* <div className="grid gap-4 p-5 xs:grid-flow-row xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5">
        {loading && <>
          <h2>Loading...</h2>
        </>}

        {!loading && products && products.length > 0 && products.map((product, index) =>
          <Trending key={index} product={product} />
        )}
      </div> */}
    </>
  );
};

export default TrendingSection;

import Trending from "./Trending";

const TrendingPage = () => {
  return (
    <>
      <h1 className="text-2xl text-black dark:text-myOrange underline underline-offset-8 ml-6">
        Trending
      </h1>
      <div className="grid gap-6 p-5 xs:grid-flow-row xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-10 animate fadeInUpBig two">
        <div className="">
          <Trending/>
        </div>
        <div>
          <Trending/>
        </div>
        <div>
          <Trending/>
        </div>
        <div>
          <Trending/>
        </div>
        <div>
          <Trending/>
        </div>
      </div>
    </>
  );
};

export default TrendingPage;

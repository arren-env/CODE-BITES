const SingleBlog = () => {
  return (
    <div className="p-5 font-serif dark:text-white  text-black">
      <h1 className="text-center text-5xl mb-5">
        CSS Grid
      </h1>
      <img src="../src/assets/5.jpg" alt="" className="" />
      <p className="mt-5 text-base">
        Without any styling, the elements follow the normal flow on the web
        page. That is, the order in which the elements are specified in your
        markup is the order in which they usually appear on the web page - one
        below the other for block-level elements and one next to the other for
        inline or inline-block level elements. With margins and padding, you can
        increase or reduce the space between the elements. Using relative ,
        absolute or fixed positions, you can remove the element from its normal
        flow and position it elsewhere relative to itself or the page. With the
        float property, you can make block-level elements appear next to each
        other but it needs a lot of effort to make full page layouts, like the
        one above, with just float . If you have ever tried it, you know the
        struggle. Using table , you can achieve the desktop layout easily, but
        cannot make it responsive. Now that you understand the problem, let's
        get to the solution!
      </p>
    </div>
  );
};

export default SingleBlog;
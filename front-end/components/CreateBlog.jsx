const CreateBlog = () => {
  return (
    <div>
      <form action="" className="md:py-7 md:px-36 dark:bg-black ">
        <input
          type="text"
          className="w-full h-12 border-none focus:outline-none text-4xl font-serif p-3 dark:bg-black dark:text-white"
          placeholder="Title"
        />
        <br />
        <textarea
          type="textarea"
          rows="10"
          placeholder="Tell your story"
          className="font-serif w-full  border-none focus:outline-none p-3 dark:bg-black dark:text-white"
        />
        <div className="space-x-2 text-gray-400 font-serif mb-3">
          <span className="ml-2">Heading Image :</span>
          <input type="file" className=" dark:bg-black bg-white" />
        </div>

        <div className="space-x-5 mt-10 flex justify-center">
          <button
            type="submit"
            className="inline-block rounded bg-myOrange px-8 py-3 text-sm font-medium text-black transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-myOrange"
          >
            Clear
          </button>
          <button
            type="submit"
            className="inline-block rounded bg-myOrange px-8 py-3 text-sm font-medium text-black transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-myOrange"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;

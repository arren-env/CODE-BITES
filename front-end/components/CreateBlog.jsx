import { useState } from "react";
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        action=""
        className="md:py-7 md:px-36 dark:bg-black bg-white"
        onSubmit={handleSubmit}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="w-full h-12 border-none focus:outline-none text-4xl font-serif p-3 dark:bg-black dark:text-white bg-white text-black"
          placeholder="Title"
        />
        <br />
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          type="textarea"
          rows="10"
          placeholder="Tell your story"
          className="font-serif w-full  border-none focus:outline-none p-3 dark:bg-black dark:text-white bg-white text-black"
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
      <h1>{title}</h1>
      <h1>{story}</h1>
    </div>
  );
};

export default CreateBlog;

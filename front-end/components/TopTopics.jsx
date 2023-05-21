/* eslint-disable react/prop-types */
const TopTopics = ({ topic }) => {
  return (
    <div>
      {/* <button className="rounded-full outline px-2 py-1 text-black dark:text-white">{topic}</button> */}
      <a
        className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring rounded-full"
        href="/download"
      >
        <span className="absolute inset-0 border border-myOrange group-active:border-myOrange rounded-full"></span>
        <span className="block border border-myOrange bg-myOrange px-12 py-3 transition-transform active:border-myOrange active:bg-myOrange group-hover:-translate-x-1 group-hover:-translate-y-1 rounded-full">
          {topic}
        </span>
      </a>
    </div>
  );
};

export default TopTopics;

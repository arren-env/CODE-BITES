import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Layouts";
import { useEffect, useState } from "react";
import useFetch from "../Components/Hooks/useFetch";
import { ROUTE_HOME } from "../store/constants";

const SingleBlogPage = (props) => {

  const { id } = useParams();
  const nav = useNavigate();
  const { error, loading, getSingleBlog, deleteBlog } = useFetch();
  const [blog, setBlog] = useState({
    title: "",
    story: "",
    createdBy: "",
    image: null
  });

  useEffect(() => {
    getSingleBlog(id).then(blog => setBlog(blog)).catch(err => console.log(err));
  }, []);

  const handleDelete = () => {
    deleteBlog(id).then(res => {
      if (Object.entries(res).length > 0) {
        window.Swal.fire(
          'Success!',
          'Successfully deleted the blog!',
          'success'
        ).then(() => {
          nav(ROUTE_HOME, { replace: true });
        });
      } else {
        window.Swal.fire(
          'Failed!',
          'Cannot delete the blog due to server error!',
          'error'
        );
      }
    })
  };

  return (
    <Layout>
      <div className="p-5 font-serif dark:text-white  text-black">
        <h1 className="text-center text-5xl mb-5">
          {blog.title}
        </h1>
        <img src={blog.image || "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1"}
          alt="" className="max-w-[500px] mx-auto" />
        <p className="mt-5 text-base">
          {blog.story}
        </p>
        <br />
        <button className="btn btn error" onClick={handleDelete}>
          <i className="material-icons">delete</i>
          &nbsp;Delete
        </button>
      </div>
    </Layout>
  );
};

export default SingleBlogPage;
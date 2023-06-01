

import { useRef, useState } from "react";
import { parseFormData } from "../../utils";
import useFetch from "../Hooks/useFetch";

function CreateBlogForm() {

    const [title, setTitle] = useState("");
    const [story, setStory] = useState("");
    const fileName = useRef();
    const image = useRef(null);
    const { loading, error, createBlog } = useFetch();

    const handleCreateBlog = (e) => {
        e.preventDefault();

        // const formData = new FormData(e.target);
        // for (let [key, value] of formData.entries()) {
        //     console.log(key,value, typeof value);
        // }

        const formData = new FormData();
        formData.append("title",title);
        formData.append("story",story);
        if (image.current.value) {
            formData.append("image",image.current.files[0]);
        }
        createBlog(formData).then(ack=>{
            console.log(ack);
        });
    };

    const handleReset = () => {
        setTitle("");
        setStory("");
        fileName.current.textContent = "";
    }

    const validateFile = (e) => {
        if (!e.target.value) {
            fileName.current.textContent = "";
            e.target.value = '';
            return;
        }
        var ext = e.target.value.match(/\.([^.]+)$/)[1];
        switch (ext) {
            case 'jpg':
            case 'png':
            case 'jpeg':
                fileName.current.textContent = e.target.files[0].name;
                break;

            default:
                window.Swal.fire(
                    'Oops',
                    'This File type is not allowed, please try again',
                    'error'
                )
                fileName.current.textContent = "";
                e.target.value = '';
                break;
        }
    }

    return (
        <div>
            <form
                className="md:py-7 md:px-36 dark:bg-black bg-white justify-center"
                onSubmit={handleCreateBlog}
            >

                <div className="flex flex-col gap-y-4 p-10 my-6 mx-auto max-w-[800px] border border-black dark:border-white rounded-xl">

                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        name="title"
                        className="w-full h-12 border-none focus:outline-none text-4xl font-serif p-3 dark:bg-[#1f1f1f] dark:text-white bg-[#ebebeb] text-black"
                        placeholder="Title"
                        required
                    />

                    <textarea
                        value={story}
                        onChange={(e) => setStory(e.target.value)}
                        type="textarea"
                        name="story"
                        rows="10"
                        placeholder="Tell your story"
                        className="font-serif w-full  border-none focus:outline-none p-3 dark:bg-[#1f1f1f] dark:text-white bg-[#ebebeb] text-black"
                        required
                    />

                    <div className="space-x-2 text-gray-400 font-serif mb-3 flex">
                        <span className="ml-2">Heading Image:</span>
                        <label htmlFor="upload" className="flex items-center">
                            <input ref={image} onChange={validateFile} name="image" type="file" id="upload" className="hidden" accept='.jpg,.png,.jpeg' />
                            <i className="material-icons">cloud_upload</i>
                        </label>
                        <p ref={fileName}></p>
                    </div>

                    <div className="space-x-5 flex justify-center">
                        <button
                            type="reset"
                            onClick={handleReset}
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

                </div>


            </form>
        </div>
    );
}

export default CreateBlogForm;
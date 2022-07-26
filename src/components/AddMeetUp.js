import { useRef } from "react";

import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AddMeetUp = () => {
  const titleInputRef = useRef();
  const imageSrcInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();

    const title = titleInputRef.current.value;
    const image = imageSrcInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;

    const submitData = {
      title,
      image,
      address,
      description,
    };

    console.log(submitData);

    fetch(
      "https://react-getting-started-d7f6f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(submitData),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      // history.push() 새 페이지 푸시, 이건 뒤로가기 가능
      // async await으로도 가능함
      navigate("/"); //뒤로가기 못함 이거는
    });
  }

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Add New Meetup
          </h2>
        </div>
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Meetup Title
              </label>
              <div className="mt-1">
                <input
                  ref={titleInputRef}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Meetup Image
              </label>
              <div className="mt-1">
                <input
                  ref={imageSrcInputRef}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <div className="mt-1">
                <input
                  ref={addressInputRef}
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  ref={descriptionInputRef}
                  id="description"
                  name="description"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                onClick={submitHandler}
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Meetup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMeetUp;

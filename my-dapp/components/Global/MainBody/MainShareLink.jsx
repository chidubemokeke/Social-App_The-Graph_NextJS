import React from "react";
import { BsBookmark } from "react-icons/bs";
import { BiErrorCircle, BiError, BiSolidLockAlt } from "react-icons/bi";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";

const MainShareLink = ({ DELETE_POST, postID, author, userAddress }) => {
  const creatorAction = [
    {
      name: "Edit Post",
      info: "Click to edit this post",
      icon: <AiOutlineEdit />,
      link: `?postEdit=${postID}&type=edit`,
    },
    // {
    //   name: "Delete Post",
    //   info: "Click to delete this post",
    //   icon: <BiError />,
    //   link: postID,
    // },
  ];

  const action = [
    {
      name: "Post Details",
      info: "GEt all the details post",
      icon: <BsBookmark />,
      link: `?postDetails=${postID}&type=details`,
    },
    {
      name: "Go Back",
      info: "click to Go back to homescreen",
      icon: <FaExpandArrowsAlt />,
      link: `/`,
    },
  ];

  return (
    <div
      className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
      aria-labelledby="dropdownMenu4"
    >
      {creatorAction.map((list, index) => (
        <>
          {author?.toLowerCase() == userAddress ? (
            <div className="card-body p-0 d-flex ">
              <i className=" text-grey-500 me-3 font-lg">{list.icon}</i>

              {list.name == "Delete Post" ? (
                <h4
                  onClick={() => DELETE_POST(list.link)}
                  className="fw-600 text-grey-900 font-xssss mt-0 me-4"
                >
                  {list.name}
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    {list.info}
                  </span>
                </h4>
              ) : (
                <a
                  href={list.link}
                  className="fw-600 text-grey-900 font-xssss mt-0 me-4"
                >
                  {list.name}
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    {list.info}
                  </span>
                </a>
              )}
            </div>
          ) : (
            ""
          )}
        </>
      ))}

      {action.map((list, index) => (
        <div className="card-body p-0 d-flex ">
          <i className=" text-grey-500 me-3 font-lg">{list.icon}</i>
          <a href={list.link} className="fw-600 text-grey-900 font-xssss mt-0 me-4">
            {list.name}
            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
              {list.info}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default MainShareLink;

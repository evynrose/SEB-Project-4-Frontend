import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { IComment } from "../interfaces/comment";
import { IUser } from "../interfaces/user";

type Comments = null | Array<IComment>;

function Community({ user }: { user: null | IUser }) {
  const navigate = useNavigate();
  const { conditionId } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    post: "",
  });

  const [errorData, setErrorData] = useState({
    title: "",
    post: "",
  });

  const [comments, setComments] = React.useState<Comments>(null);

  //handle change function, sees whats written in the fields
  function handleChange(e: any) {
    const fieldName = e.target.name;
    const newFormData = structuredClone(formData);
    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
    setErrorData({
      title: "",
      post: "",
    });
  }

  //Handle submit fuinction, add comment to database
  async function handleSubmit(e: SyntheticEvent) {
    try {
      //   e.preventDefault();
      const token = localStorage.getItem("token");
      console.log(token);
      console.log(formData);
      const resp = await axios.post(`/${conditionId}/posts`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("resp", resp.data);
      navigate(`/${conditionId}/posts`);
      setFormData({
        title: "",
        post: "",
      });
    } catch (e: any) {
      setErrorData(e.response.data.errors);
    }
  }

  React.useEffect(() => {
    async function fetchComments() {
      const resp = await fetch(`/${conditionId}/posts`);
      console.log(resp);
      const data = await resp.json();
      console.log(data);
      setComments(data);
    }
    fetchComments();
  }, []);

  async function deleteComment(e: any) {
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const commentId = e.currentTarget.value;

      console.log(commentId);
      await axios.delete(`/posts/` + commentId, {
        headers: { Authorization: `Bearer ${token}` },
      });
      location.reload();
    } catch (e: any) {
      console.log(e.response.data);
    }
  }

  return (
    <>
      <div className="section hero is-flex is-fullheight is-flex-direction-row">
        <div className="container comment is-max-desktop custom-border-radius p-6">
          <form onSubmit={handleSubmit}>
            <div className="title is-size-2 pl-1 mb-5">Add Post</div>

            <div className="field">
              <label className="label"></label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="Title"
                  type="text"
                  name={"title"}
                  onChange={handleChange}
                  value={formData.title}
                />
                <span className="icon is-small is-right">
                  <i className="fa-solid fa-heading"></i>
                </span>
                {errorData.title && (
                  <small className="has-text-danger">{errorData.title}</small>
                )}
              </div>
            </div>

            <div className="field">
              <label className="label"></label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  placeholder="What do you want to say?"
                  type="text"
                  name={"post"}
                  //function to handle typing changes
                  onChange={handleChange}
                  value={formData.post}
                />
                <span className="icon is-small is-right">
                  <i className="fa-regular fa-comment"></i>
                </span>
                {errorData.post && (
                  <small className="has-text-danger">{errorData.post}</small>
                )}
              </div>
            </div>
            <button className="button my-3"> Add Post </button>
          </form>
        </div>

        <div className="section is-flex is-flex-direction-column-reverse">
          {/* <div className="column-reverse"> */}
          <div className="columns is-multiline">
            <div>
              {comments?.map((comment: any) => {
                return (
                  <div className="card comment my-2" key={comment.id}>
                    <div className="card content">
                      <p className="title">{comment.title}</p>
                    </div>

                    <p className="subtitle mx-1 my-2 ">{comment.post}</p>

                    <footer className="card-footer">
                      <p className="card-footer-item">
                        <span>Date: {comment.date}</span>
                      </p>

                      <p className="card-footer-item">
                        <span>Time: {comment.time}</span>
                      </p>
                    </footer>

                    {comment && user && user._id === comment.user && (
                      <div>
                        <button
                          onClick={deleteComment}
                          value={comment._id}
                          className="button deleteComment ml-1 mb-1 is-danger"
                        >
                          Delete Post
                        </button>
                        <p className="is-size-7 has-text-weight-bold is-pulled-right mr-5 mt-4" >Posted by {user.username} </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Community
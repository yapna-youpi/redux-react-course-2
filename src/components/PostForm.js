import React,{ useRef } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addFormData } from "../actions/post.action";

const PostForm = () => {

  const formRef = useRef();
  const user = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault();

    const postData = {
      title: formRef.current[0].value,
      author: user.pseudo,
      content: formRef.current[1].value,
      likes: 0,
    }

    dispatch(addFormData(postData))
  }
console.log(formRef)
  return (
    <div className="form-container">
      <form ref={formRef} onSubmit={ (e) => handleSubmit(e) }>
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;

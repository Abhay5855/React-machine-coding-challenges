import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { addAuth } from "../../redux/actions/ecommerse_actions/ecommerse_actions";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");

  const history = useHistory();


  const dispatch = useDispatch();
  const selector = useSelector((state) => state.authReducer);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", file);

    const data = {
      email: email,
      password: password,
      image: file.name,
    };

    dispatch(addAuth(data));
    // setTimeout(() => {

      history.push('/home');

    // },200)
   

   

    
  };

 
  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;

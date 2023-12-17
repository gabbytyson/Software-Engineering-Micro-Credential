import React, { useState, useEffect } from 'react';
import "./userComponent.css"








function UserComponent() {

    const [error, setError] = useState(null);
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch("https://w3r1kw7ood.execute-api.us-east-2.amazonaws.com/dev/getuser")
          .then(res => res.json())
          .then(
            (result) => {
                const data = JSON.parse(result.body);
                setUser(data[0]);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setError(error);
            }
          )
      }, [])
      
      console.log("this");
      console.log(user);

    return (
        <div className="profile-preview">
          <h2>Profile Preview</h2>
          <p>
            Name: {user.first_name} {user.last_name}
          </p>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
        </div>
    )
    // const [user, setUser] = UserComponent({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   bio: '',
    // });
  
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setUser((prevUser) => ({ ...prevUser, [name]: value }));
    // };
  
    // return (
    //   <div className="App">
    //     <h1>User Profile</h1>
    //     <form>
    //       <label>
    //         First Name:
    //         <input
    //           type="text"
    //           name="firstName"
    //           value={user.firstName}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <br />
    //       <label>
    //         Last Name:
    //         <input
    //           type="text"
    //           name="lastName"
    //           value={user.lastName}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <br />
    //       <label>
    //         Email:
    //         <input
    //           type="email"
    //           name="email"
    //           value={user.email}
    //           onChange={handleChange}
    //         />
    //       </label>
    //       <br />
    //       <label>
    //         Bio:
    //         <textarea name="bio" value={user.bio} onChange={handleChange} />
    //       </label>
    //     </form>
  
    //     <div className="profile-preview">
    //       <h2>Profile Preview</h2>
    //       <p>
    //         Name: {user.firstName} {user.lastName}
    //       </p>
    //       <p>Email: {user.email}</p>
    //       <p>Bio: {user.bio}</p>
    //     </div>
    //   </div>
    // );
  }
  






export default UserComponent;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./GetStarted.css";

function GetStarted () {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    username: '',
    password: '',
    salary: '',
    hasDisability: false
  });

  const navigate = useNavigate();

  function handleChange (e) {
    const { name, value, type, checked } = e.target;

    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: name.startsWith('dob') ? parseInt(value, 10) : value,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Redirect to the Platform page
    navigate('/platform', { state: { userInfo } });
  };

  return (
    <div className="get-started-body">
      <h1>Register to get started</h1>
      <p>Once you've created an account, you'll be able to access personalised recommendations and advice from the government.</p>

      <form onSubmit={handleSubmit}>
        <h3 className="form-subheading">About you</h3>
        <div>
            <p>First Name</p>
            <input
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <p>Last name</p>
            <input
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <p>Email address</p>
            <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <p>Age (years)</p>
            <input
                type="number"
                name="age"
                value={userInfo.age}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <p>Password</p>
            <input
                type="password"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
                required
            />
        </div>

        <h3 className="form-subheading">Your life</h3>

        <div>
            <label>
            <p>Annual salary in £</p>
            <input
                type="salary"
                name="salary"
                value={userInfo.salary}
                onChange={handleChange}
                required
            />
            </label>
        </div>

        <div>
        <p>Do you have a disability?</p>
        <div className="checkbox-section">
            <input
                type="checkbox"
                name="hasDisability"
                checked={userInfo.hasDisability}
                onChange={handleChange}
            />
            <p>Yes, I have a disability</p>
        </div>
    </div>

        <button type="submit" className="btn_green">Submit</button>
      </form>

    </div>
  );
};

export default GetStarted;

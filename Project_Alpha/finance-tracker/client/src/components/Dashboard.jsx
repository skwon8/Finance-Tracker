import React, {useState ,useEffect} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Dashboard = () => {

    let[loggedInUser, setLoggedInUser] = useState({})

    const history = useHistory();

    useEffect( () => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials: true})
            .then(res => {
                console.log("Response when getting Logged In User", res)
                if (res.data.results) {
                    setLoggedInUser(res.data.results)
                }
            })
            .catch(err => {
                console.log("Error when getting Logged In User", err)
                history.push("/")
            })
    }, [])

    const logoutHandler = () => {
        axios.get("http://localhost:8000/api/user/logout", {withCredentials: true})
            .then(res => {
                history.push("/")
            })
            .catch(err => {
                console.log("Error occur during Logging Out", err)
            })
    }

    return (
        <div>
            <h2 className = "p-3">"The most difficult thing is the decision to act, the rest is merely tenacity"<br /> - Amelia Earhart</h2> <br />
            <div className='d-flex justify-content-between mt-5'>
                <h1>Welcome, {loggedInUser.firstName}.</h1>
                <button onClick = {logoutHandler} className="btn btn-danger">Log Out</button>
            </div>
        </div>
    );
};

export default Dashboard;
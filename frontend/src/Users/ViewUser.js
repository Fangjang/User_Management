import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link , useParams} from "react-router-dom";

export default function ViewUser() {

    const [user, setUsers] = useState ({
        name:"",
        userName:"",
        email:""
    })

    const {id} = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async ()=> {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUsers(result.data);
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">User Details</h2>
            <div className="card">
                <div className="card-header">
                    Details of user id: {user.id}
                    <ul className="list-group list-group-flush list-unstyled">

                        <li className="list-group-item p-md-1">
                            <b>Name:</b>
                            {user.name}
                        </li>

                        <li className="list-group-item p-md-1">
                            <b>User Name:</b>
                            {user.userName}
                        </li>

                        <li className="list-group-item p-md-1">
                            <b>Email:</b>
                            {user.email}
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-primary" to='/'>Back to Home</Link>
            </div>
        </div>
      </div>
    </div>
  );
}

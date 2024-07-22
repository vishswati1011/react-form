
import { AllUserContext } from '../context/allUserContext';
import { memo, useContext} from 'react';

const Users  =()=> {

    const {users} = useContext(AllUserContext);
    console.log("child component")
  return (
    <div>
        <h1>Users</h1>
       
       <table>
            <thead>
                <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>jobType</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index) => (
                    <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.jobType}</td>
                    </tr>
                ))}
            </tbody>
       </table>
    </div>
  )
}

export default memo(Users);

import {Link} from "react-router-dom"
import "./AdminBar.css";
const AdminBar = () => {
  return (
    <div >
        <div className="adminbar">
            <Link className="adminbar_link" to="/create-post">
                CREATE POST
            </Link>
            <Link className="adminbar_link" to="/users">
                USERS
            </Link>
            <Link className="adminbar_link" to="/courses">
                COURSES
            </Link>

        </div>



    </div>
  )
}

export default AdminBar
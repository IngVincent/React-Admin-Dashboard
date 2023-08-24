import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"

const Users = () => {
    return (
        <div className="Users">
            <div className="info">
                <button>Add New User</button>
                <DataTable />
            </div>
        </div>
    )
}

export default Users

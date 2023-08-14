import './Employees.css';

function Employees() {
    const employeeData = [
        { firstName: 'Taylor', lastName: 'Swift' },
        { firstName: 'Chester', lastName: 'Bennington' },
        { firstName: 'Florence', lastName: 'Welch' },
        
    ];

    return (
        <div>
            <h2>Employees Component</h2>
            <h3>Employee Table</h3>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Employees;

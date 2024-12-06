import React, {useEffect, useState} from 'react'
import { listMena } from '../Services/MenaService';


function ListMena() {

   const[mena, setMena] = useState([])

   useEffect(() => {
    listMena().then((response) => {
        setMena(response.data);

    }).catch(error => {
        console.error(error);
    })
   })
    
  return (
    <div>
        <h2>Minors (Service MENA)</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>ST Number</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Nationality</th>
                    <th>Date of Birth</th>
                    <th>Status</th>
                    <th>Guardian</th>
                </tr>
            </thead>
            <tbody>
                {
                    mena.map(mena => 
                        <tr key={mena.id}>
                            <td>{mena.id}</td>
                            <td>{mena.stNumber}</td>
                            <td>{mena.firstName}</td>
                            <td>{mena.lastName}</td>
                            <td>{mena.nationality}</td>
                            <td>{mena.dateOfBirth}</td>
                            <td>{mena.status}</td>
                            {/* <td>{mena.guardian}</td> */}
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListMena

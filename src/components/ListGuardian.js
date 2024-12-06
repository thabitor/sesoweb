import React, {useEffect, useState} from 'react'
import { listGuardian } from '../Services/GuardianService';

function ListGuardian() {

   const[guardian, setGuardian] = useState([])
   useEffect(() => {
    listGuardian().then((response) => {
        setGuardian(response.data);
        console.error(error);
    })
   })
    
  return (
    <div>
        <h2>Guardians (Service MENA)</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    guardian.map(guardian => 
                        <tr key={guardian.id}>
                            <td>{guardian.id}</td>
                            <td>{guardian.firstName}</td>
                            <td>{guardian.lastName}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListGuardian

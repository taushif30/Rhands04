import React,{useState} from 'react'

const Student = ()=>  {
   const [data] = useState([
    {
    Name:'EA23',
    Age :20,
    Course :'MERN',
    Batch:'MArch',
    Change:'Edit'
    },

    {
    Name:'EA23',
    Age :20,
    Course :'MERN',
    Batch:'MArch',
    Change:'Edit'
    },

    {
    Name:'EA23',
    Age :20,
    Course :'MERN',
    Batch:'MArch',
    Change:'Edit'
    },
    {
    Name:'EA23',
    Age :20,
    Course :'MERN',
    Batch:'MArch',
    Change:'Edit'
    },
    {
    Name:'EA23',
    Age :20,
    Course :'MERN',
    Batch:'MArch',
    Change:'Edit'
    },
    {
    Name:'EA23',
    Age :20,
    Course :'MERN',
    Batch:'MArch',
    Change:'Edit'
    },
     

   ])


  return (
    <div >
        <h1>Student</h1>
        

        <table  >
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
            </tr>

            {data.map((item,index)=>{
                return(
                    <tr key={index}>
                        <td >{item.Name}</td>
                        <td >{item.Age}</td>
                        <td >{item.Course}</td>
                        <td >{item.Batch}</td>
                        <td >{item.Change}</td>

                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default Student
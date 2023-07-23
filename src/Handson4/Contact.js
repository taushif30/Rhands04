import React from 'react';


function Contact(){
    return(
        <div className='all' >
            <form>

        <div className='form'>
        <label htmlFor='text' > Name : </label>
        <input type='text' id='text'/>
        <label htmlFor='age'> Age : </label>
        <input type='text' id='age'/>
        </div>

        <br/>

        <div className='form'>
        <label htmlFor='course'>Course : </label>
        <input type='text' id='course'/>
        <label htmlFor='batch'>Batch : </label>
        <input type='text' id='batch'/>
        </div>

        <div className='btn'>
        <button className='btn1'>Cancel</button>
        <button className='btn2'>Update</button>
        </div>
        
        </form>
        </div>
    )
}

export default Contact;
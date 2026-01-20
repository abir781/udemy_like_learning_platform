import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from './firebase.config';
import { toast } from 'sonner';

const Signup = () => {
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log("it's working")
        const email=e.target.cross.value;
        const password = e.target.broad.value;
       

        createUserWithEmailAndPassword(auth,email,password).then(res=>{
                     console.log(res);
                     toast.success("Signup successful");
        }
            
        )
       .catch((error) => {
             console.log(error);
            });

    }
    return (
        <div>
           
                <div className='flex justify-center items-center min-h-screen'>
                    <div >
                        <form onSubmit={handlesubmit}  className='space-y-2 '>
                         <input type="text" name='cross' className='w-[300px] h-12 pl-3' /><br></br>
                         <input type="password" name='broad' className='w-[300px] h-12 pl-3' /><br></br>
                         <button type="submit" className='px-4 py-2 bg-amber-400 w-[300px] '>Sign up</button>
                        </form>
                        

                    </div>
                   
                    

                </div>
               
           
            
        </div>
    );
};

export default Signup;
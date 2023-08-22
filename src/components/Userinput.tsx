import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './userinput.css'
import toast, { Toaster } from 'react-hot-toast';
// import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Userinput = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    function isValidEmail(email: string) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
    const handleSubmit = (e: Event) => {
        e.preventDefault();
        console.log(name, phone, email);
        if (isValidEmail(email)) {
            if (name && phone && email) {
                const userDetails = {
                    name, phone, email
                }
                localStorage.setItem("user", JSON.stringify(userDetails))
                navigate('/secondpage')
            }
            else {
                toast.error("Please enter all details")
                console.log("enter all details")
            }
        }
        else{
            toast.error("Please enter correct email ")
        }


    }




    return (
        <div>
            <form className='abc' action="#">

                <TextField value={name} type='text' onChange={(e) => { setName(e.target.value) }} className='inp1' id="outlined-basic" label="Name" variant="outlined" />
                <TextField value={phone} type='text' onChange={(e) => { setPhone(e.target.value) }} className='inp2' id="outlined-basic" label="Phone" variant="outlined" />
                <TextField value={email} type='email' onChange={(e) => { setEmail(e.target.value) }} className='inp3' id="outlined-basic" label="Email" variant="outlined" />
                <Button onClick={(e: any) => {
                    handleSubmit(e)
                }} variant="contained">SUBMIT</Button>
                <Toaster />
            </form>
        </div>
    )
}

export default Userinput
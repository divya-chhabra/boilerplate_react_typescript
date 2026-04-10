import { useState } from "react";
import { useUsers } from "../hooks/useUsers";

const Add= () => {
    const [formData,setFormData] = useState({name:"",email:"",city:"",company:""});

    const { addUser} = useUsers();

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({...prev,
            [event.target.id]: event.target.value
        })
        )
    }
    const handleSubmit = (e:React.SubmitEvent) => {
        e.preventDefault();
        addUser({
            id:Date.now(),
            name:formData.name,
            email:formData.email,
            address:{"city":formData.city},
            company:{"name":formData.company}

        })

        setFormData({name:"",email:"",city:"",company:""})

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name :</label>{"  "}
                <input type="text" id="name" placeholder="Enter your Name" value={formData.name} onChange={handleChange}/>
            </div>

            <div>
                <label>Email :</label>{"  "}
                <input type="email" id="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange}/>
            </div> 

            <div>
                <label>City :</label>{"  "}
                <input type="text" id="city" placeholder="Enter your City" value={formData.city} onChange={handleChange}/>
            </div>

            <div>
                <label>Company :</label>
                <input type="text" id="company" placeholder="Enter your Company" value={formData.company} onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Add;
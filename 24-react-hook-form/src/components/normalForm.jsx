// import { useState } from "react"

// export default function NormalForm(){

//     const NormalForm=()=>{
//         const [formData, setFormData]= useState({
//             name:"",
//             email:"",
//             password:"",
//             confirmPassword:"",
//             age:"",
//             gender:"",
//             bio:"",
//         });

//         const[errors, setErrors]= useState({});

//         //Handle Input Change
//         const handleChange=(e)=>{
//             const {name, value, type, checked, files}= e.target;//destructred

//             if (type === "checkbox") {
//                 let updatedSkills =[...formData.skills];
//                 if (checked) {
//                     updatedSkills.push(value);
//                 }else{
//                     updatedSkills=updatedSkills.filter((skills)=> skills !==value);
//                 }
//                 setFormData({...formData, skills: updatedSkills});
//             }else if(type==="file"){
//                 setFormData({...formData, file: files[0]});
//             }else{
//                 setFormData({...formData,[name]:value});
//             }
//         };

//         //Validation logic
//         const validation =()=>{
//             let newErrors={};

//             if (!formData.name) {
//                 newErrors.name="Name is required";
//             }else if (formData.name.length<3) {
//                 newErrors.name="Minimum 3 characters";  
//             }

//             if (!formData.email) {
//                 newErrors.email="Email is update";
//             }else if(!/^\S+@\S+$/i.test(formData.email)){
//                 newErrors.email="Invalid email format";
//             }

//             if (!formData.password) {
//                 newErrors.password="Password Required";
//             }else if (formData.password.length<6) {
//                 newErrors.password="Min 6 Charachters";
//             }
//             if (!formData.confirmPassword) {
//                 newErrors.confirmPassword="conform your Password";
//             }else if (formData.confirmPassword!==formData.password) {
//                 newErrors.confirmPassword="Password didnot match";
//             }

//             if (!formData.age) {
//                 newErrors.age="Age is required";
//             }else if (formData.age < 18) {
//                 newErrors.age="Min age is 18";
//             }else if(formData.age>60){
//                 newErrors.age="max age is 60"
//             }

//             if (formData.gender) {
//                 newErrors.gender="select gender";
//             }

//             if (formData.bio.length>100) {
//                 newErrors.bio="Max 100 Characters"
//             }

//             return newErrors;
//         };

//         //Submit 
//         const handleSubmit=(e)=>{
//             e.preventDefault();

//             const validationErrors= validate();
//             setErrors(validationErrors);
            
//             if (Object.keys(validationErrors).length === 0) {
//                 console.log("Form Data:",formData);
//             }
//         };

//         return(
//             <div style={{maxWidth:"500px", margin:"auto"}}>
//                 <h2>Plain React Form</h2>

//                 <form onSubmit={handleSubmit} action="">

//                     {/* Name */}
//                     <div>
//                         <label htmlFor="">Name</label>
//                         <input type="text" name="name" onChange={handleChange} />
//                         <p>{errors.name}</p>
//                     </div>
//                     {/* Email */}
//                     <div>
//                         <label htmlFor="">Email</label>
//                         <input type="email" name="email" onChange={handleChange} />
//                         <p>{errors.email}</p>
//                     </div>
//                     {/* Password */}
//                     <div>
//                         <label htmlFor="">Password</label>
//                         <input type="password" name="password" onChange={handleChange} />
//                         <p>{errors.password}</p>
//                     </div>
//                     {/* Confirm Password */}
//                     <div>
//                         <label htmlFor="">Conform Password</label>
//                         <input type="password" name="confirmpassword" onChange={handleChange} />
//                         <p>{errors.confirmPassword}</p>
//                     </div>
//                     {/* Age */}
//                     <div>
//                         <label htmlFor="">Age</label>
//                         <input type="number" name="age" onChange={handleChange} />
//                         <p>{errors.age}</p>
//                     </div>
//                     {/* Gender */}
//                     <div>
//                         <label htmlFor="">Gender</label>
//                         <input type="radio" name="gender" value="male" onChange={handleChange} />Male
//                         <input type="radio" name="gender" value="female" onChange={handleChange} />Female
//                         <p>{errors.gender}</p>
//                     </div>

//                     {/* Bio */}
//                     <div>
//                         <label htmlFor="">Bio</label>
//                         <textarea name="bio" onChange={handleChange} />
//                         <p>{errors.bio}</p>
//                     </div>

//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         );
//     };

// }













import { useState } from "react";

export default function NormalForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    bio: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Minimum 3 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+$/i.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Min 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age < 18) {
      newErrors.age = "Min age is 18";
    } else if (formData.age > 60) {
      newErrors.age = "Max age is 60";
    }

    if (!formData.gender) {
      newErrors.gender = "Select gender";
    }

    if (formData.bio.length > 100) {
      newErrors.bio = "Max 100 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Plain React Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <p>{errors.name}</p>
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <p>{errors.email}</p>
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          <p>{errors.password}</p>
        </div>

        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          <p>{errors.confirmPassword}</p>
        </div>

        <div>
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          <p>{errors.age}</p>
        </div>

        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} />Male
          <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} />Female
          <p>{errors.gender}</p>
        </div>

        <div>
          <label>Bio</label>
          <textarea name="bio" value={formData.bio} onChange={handleChange} />
          <p>{errors.bio}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
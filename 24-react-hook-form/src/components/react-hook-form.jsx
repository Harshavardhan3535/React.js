import {useForm} from "react-hook-form";
export default function ReactHookForm(){
    const {handleSubmit, register, watch,formState:{errors}}= useForm();
    console.log('Line 4:', errors);
    
    function formData(data){
        console.log("React Hook Form Data:",data)
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit(formData)}>
                <div>
                <label htmlFor="">Name</label>
                <input type="text" {...register("name",{
                    required:"This filed is Required!",
                    minLength:{
                        value:2,
                        message:"Minimun 2 charachters are required "
                    },
                    maxLength:{
                        value: 4,
                        message:"Max 4 chars are allowed"
                    },
                })}/>
                <p>{errors?.name?.message}</p>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" {...register("email",{
                        required:"Email is required",
                        pattern:{
                            value:/^\S+@\S+$/i,
                            message:"Invalid Format"
                        }
                    })} />
                    <p>{errors?.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Min 6 characters" }
                    })}/>
                    <p>{errors?.password?.message}</p>
                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <input type="number" {...register("age",{
                        required:"Age is required",
                        max:{
                            value:60,
                            message:"Max age is should be less than 60"
                        }
                    })}/>
                    <p>{errors?.age?.message}</p>
                </div>

                <div>
                    <label htmlFor="">Gender</label>
                    <input type="radio" name="gender" value="Male" {...register("gender",{
                        required:"Gender is Required"
                    })}/>Male
                    <input type="radio" name="gender" value="Female" {...register("gender",{
                        required:"Gender is Required"
                    })}/>Female
                    <p>{errors?.gender?.message}</p>
                </div>

                <div>
                     
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
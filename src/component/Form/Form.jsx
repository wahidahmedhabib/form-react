import { Box, TextField } from "@mui/material"
import { Input } from "postcss"
import { useForm } from "react-hook-form"


export default function Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => console.log(data)


    console.log(watch("example")) // watch input value by passing the name of it


    return (
        <>
            <form
                /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
                className=' mx-auto my-0 rounded-3xl px-4  min-h-[200px] max-w-[500px] container flex flex-col justify-center gap-5 border  '
                onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                {/* <input defaultValue="test" {...register("example")} /> */}
                {/* <h1 className="font-bold "> */}
                <h1 className="font-bold text-[20px]">
                 utnvel enandae sunt mollitia dolores. Ipsam.
              <br />
                 utnvel enanda dolores. Ipsam.
                </h1>
                <Box
                    className=' mx-auto my-0 container flex  items-center justify-center  '
                    // component="form"
                    sx={{
                        '& > :not(style)': { width: '100%' },
                    }}
                    autoComplete="off"
                >
                    <TextField
                        {...register("exampleRequired", { required: true })}
                        fullWidth={true} id="standard-basic" label="Standard" variant="standard" />
                </Box>

           {errors.exampleRequired && <span>This field is required</span>}
  </form>
        </>

    )
}
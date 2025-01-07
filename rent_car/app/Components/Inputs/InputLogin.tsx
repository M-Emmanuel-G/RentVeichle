import { Input } from "@/components/ui/input";

interface InputProps{
    onChange?: () => void
    placeholder: string
    value?:string
    type:string
}

const InputLogin = (params:InputProps) => {
    return ( 
        <Input
            className="w-80 h-10 text-white text-center text-xl m-4"
            value={params.value}
            onChange={params.onChange}
            type={params.type}
        />
     );
}
 
export default InputLogin;
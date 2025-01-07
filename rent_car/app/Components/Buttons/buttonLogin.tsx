import { Button } from "@/components/ui/button";

interface ButtonProps{
    nameButton:string
    onClick?: ()=> void
    img?: any
}

const ButtonLogin = (params:ButtonProps) => {
    const verifyImg = params.img

    if(!verifyImg)

    return ( 
        <div>
            <Button 
                className="w-80 h-10 text-white border-2 border-white rounded-3xl bg-transparent hover:bg-transparent my-4">
                {params.nameButton}
            </Button>
        </div>
    );
}
 
export default ButtonLogin;
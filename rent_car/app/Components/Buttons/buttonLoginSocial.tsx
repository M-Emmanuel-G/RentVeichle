import { Button } from "@/components/ui/button";
import IconGoogle from "../../../public/Assets/iconGoogle.jpg"
import Image from "next/image";

interface ButtonProps{
    nameButton:string
    onClick?: ()=> void
}

const ButtonLoginSocial = (params:ButtonProps) => {
    return ( 
        <div>
            <Button 
                className="w-80 h-10 text-white border-2 border-white rounded-3xl bg-transparent hover:bg-transparent my-4">
                <Image
                    src={IconGoogle}
                    className="w-6 h-6"
                    alt=""
                />
                {params.nameButton}
            </Button>
        </div>
    );
}
 
export default ButtonLoginSocial;
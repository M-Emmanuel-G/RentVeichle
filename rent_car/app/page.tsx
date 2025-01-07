"use client"

import Image from "next/image";
import IconLogo  from "../public/Assets/iconLogo.avif"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import InputLogin from "./Components/Inputs/InputLogin";
import ButtonLogin from "./Components/Buttons/buttonLogin";
import ButtonLoginSocial from "./Components/Buttons/buttonLoginSocial";
import { Separator } from "@radix-ui/react-separator";

export default function Home() {

  const router = useRouter()
  const anime = require('animejs');

  useEffect(()=>{
    setTimeout(() => {

      const loginInput = document.getElementById("loginInputs") as HTMLImageElement
      loginInput.style.display = "flex"
      
    }, 5000);
  },[])


  return (
    <main className="w-screen h-screen flex items-center justify-center bg-black flex-col">
      <div className="w-full h-1/2 flex items-center justify-center ">
        <Image
          id="imgIcon" 
          src={ IconLogo} 
          alt="Imagem Logotipo" 
          width={0} 
          height={0} 
          quality={0} 
          className="w-3/4 h-3/4 relative"
        />
      </div>
      <div id="loginInputs" className="w-full h-1/2 hidden items-center justify-center">
        <form className="flex flex-col items-center justify-center">
          <h2 className="text-white">Acesse sua conta...</h2>
          <fieldset className="border-white border-2 rounded-xl my-2">
            <legend className="text-white mx-2 px-2">Usuario</legend>
            <InputLogin
              placeholder="Login..."
              type="text"
            />
          </fieldset>
          <fieldset className="border-white border-2 rounded-xl my-2">
            <legend className="text-white mx-2 px-2">Senha</legend>
            <InputLogin
              placeholder="Login..."
              type="password"
            />
          </fieldset>
          <ButtonLogin
            nameButton="Acessar"
          />
          <div className="flex items-center justify-center">
            <Separator orientation="horizontal" className="bg-white w-28 h-1"/>
            <h2 className="text-white mx-4">Login Social</h2>
            <Separator orientation="horizontal" className="bg-white w-28 h-1"/>
          </div>
          
          
          <ButtonLoginSocial
            nameButton="Google"
          />
        </form>
      </div>
    </main>
  );
}

import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import "tailwindcss";

export default function App() {
  return (
    <div>
      {/* Text Colour */}
      <p className="text-red-500">This Text Is Red</p>
      <p className="text-green-500">This Text Is Green</p>
      <p className="text-blue-500">This Text Is Blue</p>
      <p className="text-black">This Text Is In By Default Colour</p>
      <br />
      <br />
      {/* Text alingnment */}
      <p className="text-left">Aling To The Left</p>
      <p className="text-center">Aling To The Center</p>
      <p className="text-right">Aling To The Right</p>
      <br />
      <br />
      {/* Text Decoration */}
      <p className="text-decoration-line: underline">Text Is Under line</p>
      <p className="text-decoration-line: none">
        Text Is In By Default No Under line
      </p>
      <p className="text-decoration-line: line-through">Text Is Line through</p>
      <p className="text-decoration-line: overline">Text Is Over line</p>
      <br />
      <br />
      {/* Decoration Style */}
      <p className="underline decoration-dotted">Text has Doted Under line</p>
      <p className="underline decoration-dashed">Text has Dashed Under line</p>
      <p className="underline decoration-double">Text has Double Under line</p>
      <p className="underline decoration-wavy">Text has Wavy Under line</p>
      <br />
      <br />
      {/* Font Weight */}
      <p className="font-normal">Normal Font</p>
      <p className="font-bold">Bold Font</p>
      <p className="font-light">Lighter Font</p>
      <p className="font-extrabold">Bolder Font</p>
      <p className="font-thin">Intencity Of Text Is 100</p>
      <p className="font-extralight">Intencity Of Text Is 200</p>
      <p className="font-light">Intencity Of Text Is 300</p>
      <p className="font-normal">Intencity Of Text Is 400</p>
      <p className="font-medium">Intencity Of Text Is 500</p>
      <p className="font-semibold">Intencity Of Text Is 600</p>
      <p className="font-bold">Intencity Of Text Is 700</p>
      <p className="font-extrabold">Intencity Of Text Is 800</p>
      <p className="font-black">Intencity Of Text Is 900</p>
      <br />
      <br />
      {/* Font Family */}
      <p className="font-sans">Font Is In</p>
      <p className="font-mono">Font Is In</p>
      <p className="font-serif">Font Is In</p>
      <br />
      <br />
      {/* Text Transform */}
      <p className="uppercase">Text Is In Uppercase</p>
      <p className="lowercase">Text Is In Lowercase</p>
      <p className="capitalize">Text Is In Capitalize</p>
      <p className="normal-case">Text Is In normalcase</p>
      <br />
      <br />
      {/* Font Size */}
      <p className="text-[2px]">Text Size</p>
      <p className="text-[10px]">Text Size</p>
      <p className="text-[20px]">Text Size</p>
      <p className="text-[50px]">Text Size</p>
      <br />
      <br />
      {/* Height and Widht */}
      <div className="w-50px h-50px bg-blue-400"></div>
      <div className="w-200px h-200px bg-blue-300"></div>
      <br />
      <br />
      {/* Height and Width Percentage */}
      <p className="w-1/2 bg-fuchsia-300">50%</p>
      <p className="w-full bg-fuchsia-400">100%</p>
      {/* Viweport */}
      <p className="h-screen bg-taupe-400">100vh</p>
      <p className="w-screen bg-lime-300">100vw</p>

      {/* Animation part */}
      <p className="size-8 bg-amber-400 animate-bounce m-10"></p>
      <p className="bg-blue-400 animate-spin size-22 m-10"></p>
      <p className="size-22 bg-fuchsia-600 animate-ping m-20"></p>
      <p className="size-22 bg-violet-800 animate-pulse m-14"></p>
      
      {/* Concept of rem in tailwind */}
      <p className="text-base">1 rem</p>
      <p className="text-lg">bigger text</p>
      <p className="font-bold text-center uppercase text-3xl">welcome to tailwind css</p>
      <p className="font-sans">Hello <br /> This page uses Times New Roman</p>

      <div className=" border border-b-black m-2">
        <p className="m-2">Outerbox</p>
        <div className="border m-10 border-red-500 text-[12px]">Inner box</div>
      </div>


      {/* <svg class="size-6 animate-bounce ..."> */}
        {/* <IoMdArrowRoundDown /> */}
      {/* </svg> */}
    </div>
  );
}

import React, { useState } from "react";
import preview from "@/public/preview.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";

const index = () => {
  const { data: session } = useSession();
  const [name, setName] = useState(session?.user?.name);
  const [prompt, setPrompt] = useState();
  const [image, setImage] = useState();
  const [generateImg, setGenerateImg] = useState(false);

  const generateImage = async () => {
    if (prompt) {
      setGenerateImg(true);
      try {
        const response = await axios.post("/api/dalle", { prompt: prompt });

        const data = await response.json();

        setImage({ photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        console.log(error);
      } finally {
        setGenerateImg(false);
      }
    }
  };
  return (
    <div className="bg-[#13131a] h-auto text-white p-5 min-h-[100vh]">
      <h1 className="text-center text-[25px]">Generate Image</h1>
      <div className="xl:p-20 flex flex-col gap-7 xl:mt-0 mt-20">
        <label className="">
          <h1 className="pb-3">Name</h1>
          <input
            className="w-full bg-[#1c1c24] rounded p-2 px-4"
            placeholder="Enter name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="">
          <h1 className="pb-3">Prompt</h1>
          <input
            className="w-full bg-[#1c1c24] rounded p-2 px-4"
            placeholder="Enter image prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </label>

        <label className="">
          <h1 className="pb-3">Image</h1>
          <div className="w-[250px] h-[250px] bg-[#1c1c24] rounded flex justify-center items-center">
            {!image ? (
              <Image src={preview} width={150} height={150} />
            ) : (
              <Image src={image} width={200} height={200} />
            )}
          </div>
        </label>

        <button
          className="button p-2 rounded-full hover:opacity-50 transition"
          onClick={generateImage}
        >
          Generate Image
        </button>
      </div>
    </div>
  );
};

export default index;

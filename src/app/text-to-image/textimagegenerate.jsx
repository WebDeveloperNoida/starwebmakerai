'use client'
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Loader, LoaderCircle } from 'lucide-react';
import MoonLoader  from "react-spinners/MoonLoader";

function Textimagegenerate() {

    const [imageUrl, setImageUrl] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isPrompt, setIsPrompt] = useState("")
    //    https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image    Cartoon Image Print Here
    //    https://api-inference.huggingface.co/models/stable-diffusion-v1-5/stable-diffusion-v1-5
    //    https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev    Actual Mail Print Image


    const query = async (data) => {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
            {
                headers: {
                    Authorization: "Bearer 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",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.blob()
        //console.log(result)
        const output = URL.createObjectURL(result)
        return output
    }


    const handleClick = async () => {
        try {
            setIsLoading(true)
            const inputPost = { "inputs": isPrompt }
            const resdata = await query(inputPost)
            //console.log("Result", res);
            setImageUrl(resdata)
            setIsLoading(false)
        }
        catch (error) {
            console.log("Error", error)
            setIsLoading(false)
        }
    }



    return (
        <>
            <div className="space-y-8">
                <div className="sm:col-span-2">
                    <textarea
                        rows={6}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write your text message for generate image..."
                        onChange={(event) => setIsPrompt(event.target.value)}
                    />
                </div>
                {isLoading ? <Button className="float: right"> 
                <MoonLoader
  color="#fffffa"
  cssOverride={{}}
  loading
  size={21}
  speedMultiplier={10}
/>
                 Generating...</Button> : <Button onClick={handleClick} >Generate</Button>}
            </div>


          

            <div className="grid grid-cols gap-4 mt-8">
            { imageUrl && <img className="w-full rounded-lg" src={imageUrl} alt="office content 1" /> }
            </div>



            <div className="grid grid-cols-3 gap-4 mt-8">
            <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
            />
            <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
            />
                        <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
            />
            </div>



        </>
    )
}

export default Textimagegenerate
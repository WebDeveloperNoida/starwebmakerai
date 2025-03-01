'use client'

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import MoonLoader  from "react-spinners/MoonLoader";
import {Loader2} from "lucide-react"

function Textimagegenerate() {

    const [imageUrl, setImageUrl] = useState("")
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isPrompt, setIsPrompt] = useState("")
    //    https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image    Cartoon Image Print Here
    //    https://api-inference.huggingface.co/models/stable-diffusion-v1-5/stable-diffusion-v1-5
    //    https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev    Actual Main Print Image


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


    const saveImageToLocalStorageData = (resdata) => {
        const imageDataUrl = resdata; // Replace with your AI-generated image
        const key = `savedImages${images.length + 1}`;
        localStorage.setItem(key, imageDataUrl);
        setImages([...images, imageDataUrl]);
      }; 

      const getLocalStorageImages = () => {
        const savedImages = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("savedImages")) {
            const imageDataUrl = localStorage.getItem(key);
            savedImages.push(imageDataUrl);
          }
        }
        setImages(savedImages);
      };


    const generateImage = async () => {
        try {
            setIsLoading(true)
            const inputPost = { "inputs": isPrompt }
            const resdata = await query(inputPost)
            //console.log("Result", resdata);
            setImageUrl(resdata)
            // Save the image URL to localStorage
            saveImageToLocalStorageData(resdata);
        }
        catch (error) {
            console.log("Error", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getLocalStorageImages();
      }, []);


      const clearLocalStorageImages = () => {
        if (typeof window !== "undefined") {
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("savedImages")) {
              localStorage.removeItem(key);
            }
          }
          setImages([]); // Clear the state
        }
      };


    return (
        <div>
            <div className="space-y-8">
                <div className="sm:col-span-2">
                    <textarea
                        rows={6}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Write your text message for generate image..."
                        onChange={(event) => setIsPrompt(event.target.value)}
                    />
                </div>


                {isLoading ? <Button className="float: right" disabled={isLoading}> 
                {/* <MoonLoader
  color="#fffffa"
  cssOverride={{}}
  loading
  size={21}
  speedMultiplier={10}
/> */}
<Loader2 className="animate-spin" />
                 Generating...</Button> : <Button onClick={generateImage} disabled={isLoading}>Generate</Button>}



              


            </div>

            
          

            <div className="grid grid-cols gap-4 mt-8">
            { imageUrl && 
            <img className="w-full rounded-lg" src={imageUrl} alt="office content 1" /> 
            }
            </div>


            <div className="grid grid-cols-3 gap-4 mt-8">
            {images?.map((url, index) => (
            <img key={index} src={url} className="w-full rounded-lg" alt={`AI Generated ${index}`} />
            ))}
            </div>

            <Button onClick={clearLocalStorageImages} className="mt-8" variant="destructive">All Clear Generated Images</Button>
            

        </div>
    )
}

export default Textimagegenerate
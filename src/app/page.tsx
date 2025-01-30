

import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import {ImagePlus, Rotate3d} from "lucide-react"


export default function Home() {
  return (
    <>
      

    <section className="flex justify-center bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-6 lg:px-6">
    <div className="max-w-screen-md mb-8 lg:mb-16">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
    Star Web Maker AI Tools Usable In Your IT Next Generation Implementation.
    </h2>
    <p className="text-gray-500 sm:text-xl dark:text-yellow-300">
    Since its founding in 2009, Star Web Maker has been a trusted IT development and consulting company dedicated to providing innovative solutions to our clients. With a strong focus on customer satisfaction, we have successfully served over 5120 clients, helping them achieve their digital goals. We specialize in providing a comprehensive suite of digital solutions tailored to meet the needs of both startups and enterprises. 

    </p>
    </div>
    </div>
    </section>

    <section className="flex flex-col-2 justify-center mb-10 mt-10 bg-white dark:bg-gray-900 gap-4">

    

    <div className="flex">
    <Link href="/text-to-image"  className={buttonVariants({ variant: "default" })}><ImagePlus /> Text To Image Generate</Link> 
    </div> 

    <div className="flex">
    <Link href="#" className={buttonVariants({ variant: "destructive" })}><Rotate3d /> Text To 3D Image Generate</Link> 
    </div>  
    
    </section>

    </>
  );
}

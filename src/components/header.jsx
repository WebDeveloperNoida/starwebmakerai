
import {ModeToggle} from "@/components/modeToggle"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
function Header() {
  return (
    <>
     {/* <div className="flex items-center justify-center px-6 py-0 bg-gray-100 dark:bg-black">
     <div
  className="flex items-center justify-between w-full h-[82px] px-4 lg:px-8 py-2 lg:py-4 rounded-none lg:rounded-3xl custom-shadow-header"
>
  <div id="header-logo" className="flex items-center justify-center">
    <img
      src="star-web-maker-ai-footer-logo.webp"
      width={160}
      data-nuxt-img=""
      srcSet="star-web-maker-ai-footer-logo.webp 1x, star-web-maker-ai-footer-logo.webp 2x"
    />
  </div>
  <div className="flex items-center justify-center gap-8">

      
  
    <div className="items-center justify-center hidden gap-6 sm:flex">
    <Link href="/request-enquiry" className={buttonVariants({ variant: "default" })}>Request Enquiry</Link> 
     <ModeToggle /> 
    </div>
  </div>
</div>

     </div> */}

<header className="text-gray-600 body-font bg-gray-100 dark:bg-black">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image 
      src="/star-web-maker-AI-logo.png" 
      width={80}
      height={80}
      alt="Star Web Maker AI Logo"
      />
     
    </Link>

    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/about" className="mr-5 hover:text-gray-900">About Us</Link>
      <Link href="/tools" className="mr-5 hover:text-gray-900">Our Tools</Link>
      <Link href="/contact" className="mr-5 hover:text-gray-900">Contact Us</Link>
    </nav> 

    <div className="mr-3">
    <Link href="#" className={buttonVariants({ variant: "default" })}>REQUEST ENQUIRY</Link> 
    </div>
    
    <ModeToggle />
  </div>
</header>



    </>
  )
}

export default Header
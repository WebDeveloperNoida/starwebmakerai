
import {ModeToggle} from "@/components/modeToggle"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
function Header() {
  return (
    <>
     <div className="flex items-center justify-center px-6 py-0 bg-gray-100 dark:bg-black">
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

      {/* header menu start here */}
  
    <div className="items-center justify-center hidden gap-6 sm:flex">
    <Link href="/request-enquiry" className={buttonVariants({ variant: "default" })}>Request Enquiry</Link> 
     <ModeToggle /> 
    </div>
  </div>
</div>

     </div>
    </>
  )
}

export default Header
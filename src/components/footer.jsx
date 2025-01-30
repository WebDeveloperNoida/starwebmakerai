
import Link from 'next/link'

function Footer() {
  return (
    <>
        <div className="flex flex-col items-center justify-center h-[179px]  bg-gray-100 dark:bg-black">
  <div
    id="footer-top"
    className="flex items-center justify-center w-11/12 lg:justify-between"
  >
    <img
      src="star-web-maker-ai-footer-logo.webp"
      width={160}
      data-nuxt-img=""
      srcSet="star-web-maker-ai-footer-logo.webp 1x, star-web-maker-ai-footer-logo.webp 2x"
      className="hidden lg:block"
    />
    <div className="flex items-center justify-center gap-5 text-sm font-normal lg:gap-10 sm:text-base md:text-lg lg:text-md">
     
      <Link  href="/" className="text-center">
        Home
      </Link>

      <Link href="/about" className="text-center">
        About Us
      </Link>

      <Link href="/contact" className="text-center">
        Contact Us
      </Link>

      <Link href="/faqs" className="text-center">
        Faq's
      </Link>

      <Link href="/career" className="text-center">
        Career
      </Link>

      <Link href="/blogs" className="text-center">
        Blogs
      </Link>

    </div>
    <div className="items-center justify-center hidden gap-6 lg:flex">
      
      
      
     {/* Social Media Icons */}
      
     
    </div>
  </div>


  <div
    id="footer-bottom"
    className="flex items-center justify-center w-full sm:w-11/12 mt-4"
  >
    <p className="text-[10px] font-normal sm:text-xs md:text-sm lg:text-base">
      2025 Star Web Maker AI Tools | All Right AI Tools Team.
    </p>
  </div>

  
</div>

    </>
  )
}

export default Footer
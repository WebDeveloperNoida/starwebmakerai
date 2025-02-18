
import Link from "next/link"
import {ImagePlus, ScrollText} from "lucide-react"

function Toolsservice() {
  return (
    <>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <Link href="/text-to-image">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <ImagePlus className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
              Text To Image
            </h2>
            <div className="mt-3 text-indigo-500 inline-flex items-center">
            Generate Now
            <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            >
            <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            </div>
          </div>
        </div>
      </Link>
      </div>


      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <Link href="/deepseekai">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <ScrollText className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
            DeepSeek AI Text Generate
            </h2>
            <div className="mt-3 text-indigo-500 inline-flex items-center">
            Start Now
            <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            >
            <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            </div>
          </div>
        </div>
      </Link>
      </div>


      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <Link href="/openai">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <ScrollText className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
            Open AI Text Generate
            </h2>
            <div className="mt-3 text-indigo-500 inline-flex items-center">
            Start Now
            <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            >
            <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            </div>
          </div>
        </div>
      </Link>
      </div>
    </div>
    </>
  )
}

export default Toolsservice
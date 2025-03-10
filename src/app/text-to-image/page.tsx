import Textimagegenerate from './textimagegenerate'

function TexttoImage() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Text To Image Generate AI
                    </h2>
                    <Textimagegenerate />
                </div>
            </section>
        </>
    )
}
export default TexttoImage
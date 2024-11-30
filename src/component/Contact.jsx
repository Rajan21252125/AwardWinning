/* eslint-disable react/no-unescaped-entities */
import Button from "./Button"

/* eslint-disable react/prop-types */
const ImageCLipClass = ({src , clipClass}) => (
        <div className={clipClass}>
            <img src={src} alt="contact" />
        </div>
)

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 sm:block lg:left-20 lg:w-96">
            <ImageCLipClass src={"img/contact-1.webp"} clipClass={"contact-clip-path-1"} />
            <ImageCLipClass src={"img/contact-2.webp"} clipClass={"contact-clip-path-2 lg:transalet-y-40 translate-y-60"} />
        </div>
        <div className="absolute -top-40 left-28 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
            <ImageCLipClass src={"img/swordman-partial.webp"} clipClass={"absolute md:scale-125"} />
            <ImageCLipClass src={"img/swordman.webp"} clipClass={"sword-man-clip-path md:scale-125"} />
        </div>
        <div className="flex flex-col items-center text-center">
            <p className="font-general text-[10px] uppercase">Join Zentry</p>
            <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">let's build a <br /> new era of <br /> Gaming together</p>
            <Button title="Contact Us" containerClass="cursor-pointer mt-10" />
        </div>
      </div>
    </div>
  )
}

export default Contact

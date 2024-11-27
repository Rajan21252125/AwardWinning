/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(true);
  const [isLoadinhg, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalNumberVideo = 4;
  const nextVideoRef = useRef(null);

  const handleMiniVideoCLick = () => {
    setHasClicked(true);
    setCurrentIndex(upComingVideo);
  };

  const getVideoSource = (index) => `./videos/hero-${index}.mp4`;

  const upComingVideo = (currentIndex % totalNumberVideo) + 1;

  const handleVideoLoad = () => {
    setLoadedVideos((prevLoaded) => prevLoaded + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );


  useGSAP(() => {
    gsap.set("#video-frame",{
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 40% 10%',
    })

    gsap.from("#video-frame",{
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }
    })
  })



  useEffect(() => {
    if (loadedVideos === totalNumberVideo - 1) {
      setIsLoading(false);
    }
  },[loadedVideos])
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoadinhg && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 w-screen h-dvh rounded-lg bg-blue-75 overflow-hidden"
      >
        <div className="mask-clip-path absolute-center absolute z-50 size-64 overflow-hidden cursor-pointer rounded-lg">
          <div
            onClick={handleMiniVideoCLick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100"
          >
            <video
              ref={nextVideoRef}
              src={getVideoSource((currentIndex % totalNumberVideo) + 1)}
              loop
              muted
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>
        <video
          ref={nextVideoRef}
          src={getVideoSource(currentIndex)}
          loop
          muted
          id="next-video"
          className="absolute-center size-64 origin-center invisible absolute z-20 object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
        <video
          src={getVideoSource(
            currentIndex === totalNumberVideo + 1 ? 1 : currentIndex
          )}
          loop
          autoPlay
          muted
          id="next-video"
          className="absolute left-0 top-0 w-full h-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Redefi<b>n</b>ed
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer
              <br />
              Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Home;

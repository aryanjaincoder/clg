import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["GuidedTours", "Accommodations", "Adventure" , "Transportation"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="poster.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Your Journey Begins Now</h1>
          <h2>Travel & Tourism</h2>
          <h3>
            Services : <span ref={textRef}></span>
          </h3>
          <p>
            Bundelkhand, a region steeped in history and natural beauty, offers
            an untapped treasure trove of cultural and adventure experiences.
            From the majestic forts of Orchha and Jhansi to the intricately
            carved temples of Khajuraho, Bundelkhand is a haven for history
            enthusiasts. Its lush landscapes, including Panna National Park and
            the Ken River, provide ideal settings for wildlife safaris and
            eco-tourism, making it a must-visit destination for travelers
            seeking both heritage and nature.
          </p>
        </div>
        <a href="#portfolio">
          <img src="down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

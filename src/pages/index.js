import { Loader } from "@react-three/drei";
import { BodyCopy, Headline, Subtitle } from "@/components/Text";
import { Image } from "@/components/Image";

import "@14islands/r3f-scroll-rig/css";
// Photos by <a href="https://unsplash.com/@maxberg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maxim Berg</a> on <a href="https://unsplash.com/photos/u8maxDvbae8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

export default function Index() {

  return (
    <>
      <article>
        <header className="container">
          <div className="headerLayout">
            <h2>
              <Headline wobble>
                RESPONSIVE WEBGL
              </Headline>
            </h2>
            <BodyCopy as="p" className="subline">
              Progressively enhance your React website with WebGL using
              r3f-scroll-rig, React Three Fiber and Three.js
            </BodyCopy>
          </div>
        </header>
        <section className="container">
          <Image
            src="/images/maxim-berg-1_U2RcHnSjc-unsplash.jpg"
            className="ImageLandscape"
          />
        </section>
        <section className="container">
          <h3>
            <Subtitle>We use CSS to create a responsive layout.</Subtitle>
            <em>
              <Subtitle>
                A Canvas on top tracks DOM elements and enhance them with WebGL.
              </Subtitle>
            </em>
          </h3>
          <p>
            <BodyCopy>
              Try turning off WebGL using the button in the sticky header.
              You’ll notice smooth scrolling is disabled, and all scroll-bound
              WebGL effects disappears.
            </BodyCopy>
          </p>
        </section>
        <section className="ParallaxContainer">
          <Image
            src="/images/maxim-berg-qsDfqZyTCAE-unsplash-crop.jpg"
            className="aspect-9_13"
            parallaxSpeed={1.08}
          />
          <Image
            src="/images/maxim-berg-ANuuRuCRRAc-unsplash.jpg"
            className="aspect-16_11"
            parallaxSpeed={0.92}
          />
        </section>
        <section className="container">
          <h4>
            <BodyCopy>
              Thanks to Threejs we can also render 3D geometry or models. The
              following image is replaced by a box. Try scrolling hard to make
              it wiggle.
            </BodyCopy>
          </h4>
        </section>
        <section className="container">
          <h3>
            <Subtitle>Most websites use a mix of WebGL and HTML.</Subtitle>
            <em>
              <Subtitle>
                However, the Lens refraction requires all images and text to be
                WebGL.
              </Subtitle>
            </em>
          </h3>
        </section>
      </article>
      <Loader
        containerStyles={{
          background: "transparent",
          top: "auto",
          bottom: 0,
          height: "5px",
        }}
        innerStyles={{ background: "white", width: "100vw", height: "5px" }}
        barStyles={{ background: "#6e6bcd", height: "100%" }}
      />
    </>
  );
}

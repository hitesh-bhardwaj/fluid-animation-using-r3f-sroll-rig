import { Fluid } from "@/components/lib";
import "@/styles/globals.css";
import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import { EffectComposer } from "@react-three/postprocessing";
import { Suspense, useRef, useState } from "react";

export default function App({ Component, pageProps }) {
  const eventSource = useRef();

  return (
    <div ref={eventSource}>
      <GlobalCanvas
        debug={false}
        scaleMultiplier={0.01}
        eventSource={eventSource}
        eventPrefix="client"
        flat
        camera={{ fov: 14 }}
        style={{ pointerEvents: "none", zIndex: -1 }}
      >
        {(globalChildren) => (
          <Suspense fallback="">
            <EffectComposer>
              <Fluid fluidColor="#0000ff" />
            </EffectComposer>
            {globalChildren}
          </Suspense>
        )}
      </GlobalCanvas>
      <SmoothScrollbar config={{ syncTouch: true }} />
      <Component {...pageProps} />
    </div>
  );
}

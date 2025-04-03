import { useEffect } from "react";
import Reveal from "reveal.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/dracula.css"; // You can change the theme (e.g., "white", "league", etc.)

// Import Reveal.js plugins
import RevealMarkdownPlugin from "reveal.js/plugin/markdown/markdown";
import RevealHighlightPlugin from "reveal.js/plugin/highlight/highlight";
import RevealNotesPlugin from "reveal.js/plugin/notes/notes";
import RevealZoomPlugin from "reveal.js/plugin/zoom/zoom";

// Import plugin styles
import "reveal.js/plugin/highlight/monokai.css";

// Import custom styles
import "./App.css";

// Import slides
import IntroSlide from "./slides/Intro";
import CompanySlide from "./slides/Company";
import AboutMeSlide from "./slides/AboutMe";
import MetaCTFSlide from "./slides/MetaCTF";
import WhatIsCTFSlide from "./slides/WhatIsCTF";
import WhatWillYouEncounterSlide from "./slides/WhatWillYouEncounter";
import WhenWeBecomeGoodAtItSlide from "./slides/WhenWeBecomeGoodAtIt";
import ConclusionCTFSlide from "./slides/ConclusionCTF";
import UsefulLinksSlide from "./slides/UsefulLinks";
import DemoSlide from "./slides/Demo";

function App() {
  console.log("Sanity check; React App Rerender!");
  useEffect(() => {
    console.log("Sanity check; onMount Reveal.js Init!");
    // Initialize Reveal.js
    const deck = new Reveal();
    deck.initialize(
      // Add any Reveal.js configuration options here
      {
        hashOneBasedIndex: true,
        respondToHashChanges: true,
        hash: true,
        history: true,

        links: true,
        controls: true,
        progress: true,
        center: true,
        transition: "slide", // none/fade/slide/convex/concave/zoom
        // backgroundTransition: "slide",
        // controlsBackArrows: "faded",
        slideNumber: false,
        plugins: [
          RevealMarkdownPlugin,
          RevealHighlightPlugin,
          RevealNotesPlugin,
          RevealZoomPlugin,
        ],
      }
    );

    return () => {
      console.log("Sanity check; onUnmount Reveal.js Dispose!");
      // Dispose of Reveal.js instance
      deck.destroy();
    };
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        <IntroSlide />
        <CompanySlide />
        <AboutMeSlide />
        <MetaCTFSlide />
        <WhatIsCTFSlide />
        <WhatWillYouEncounterSlide />
        <WhenWeBecomeGoodAtItSlide />
        <DemoSlide />
        <UsefulLinksSlide />
        <ConclusionCTFSlide />
      </div>
    </div>
  );
}

export default App;

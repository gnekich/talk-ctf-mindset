import SpeakerNotes from "../components/SpeakerNotes.jsx";

function Slide() {
  return (
    <section data-transition="slide">
      <h1>{"CTF{mindset}"}</h1>
      <p>Kako razmišljati kao haker i zaštititi svoje aplikacije</p>
      <SpeakerNotes>
        Dobar dan svima! Drago mi je što ste ovdje i što imam priliku podijeliti
        ovu temu s vama.
        <br />
        Vidim mnoga poznata lica, što me posebno veseli. Danas ćemo pričati o
        CTF-ovima.
        <br />
        Objasnit ću što su točno CTF-ovi, kako funkcioniraju i što nas mogu
        naučiti.
        <br />
        Podijelit ću s vama i neka svoja osobna iskustva, pokazati nekoliko
        primjera,
        <br />
        te ćemo razgovarati o tome kako razmišljati kao haker i kako nam to može
        pomoći.
        <br />
      </SpeakerNotes>
    </section>
  );
}

export default Slide;

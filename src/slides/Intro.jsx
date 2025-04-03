import SpeakerNotes from "../components/SpeakerNotes.jsx";

function Slide() {
  return (
    <section data-transition="slide">
      <h1>{"CTF{mindset}"}</h1>
      <p>Kako razmišljati kao haker i zaštititi svoje aplikacije</p>
      <SpeakerNotes>
        Dobar dan svima!
        <br />
        <br />
        Drago mi je da vidim i neka poznata lica, danas ćemo razgovarati o
        CTF-ovima, što su to uopće CTF-ovi, što nas mogu naučiti, što sam osobno
        ja naučio, par primjera te u konačnici kako razmišljati kao haker.
        <br />
        Te kako nam to može pomoći u zaštiti naših aplikacija.
        <br />
      </SpeakerNotes>
    </section>
  );
}

export default Slide;

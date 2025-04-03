import SpeakerNotes from "../components/SpeakerNotes.jsx";

function Slide() {
  return (
    <>
      <section>
        <h2>Zaključak</h2>
        <p>
          CTF je izvrstan način za učenje novih vještina i poboljšanje znanja o
          sigurnosti aplikacija.
        </p>
        <p>Nagovorite svoje kolege i sudjelujte u CTF natjecanjima!</p>
        <SpeakerNotes>
          <p>
            Dakle, za kraj bih htio naglasiti da su CTF-ovi fantastičan način za
            učenje i usavršavanje vještina.
          </p>

          <p>
            Ako već niste, preporučujem da isprobate neko od natjecanja, bilo
            sami ili s kolegama.
          </p>

          <p>
            Osim što ćete naučiti puno novih stvari, zabavit ćete se i razviti
            "hacker mindset".
          </p>
        </SpeakerNotes>
      </section>
      <section>
        <h1>Hvala</h1>
        <p>...i nadam se da se vidimo na nekom od sljedećih natjecanja!</p>
        <SpeakerNotes>
          Još jednom hvala svima na pažnji. Nadam se da ste uživali i da Vam je
          ovo predavanje bilo korisno! Pitanja?
        </SpeakerNotes>
      </section>
      <section>
        <h1></h1>

        <SpeakerNotes>Pitanja?</SpeakerNotes>
      </section>
    </>
  );
}

export default Slide;

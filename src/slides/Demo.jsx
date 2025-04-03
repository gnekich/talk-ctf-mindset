import SpeakerNotes from "../components/SpeakerNotes.jsx";

function Slide() {
  return (
    <>
      <section>
        <section>
          <h2>Demo!</h2>
          <p>...demo gods have mercy!</p>
        </section>
        <section>
          <h2>TOWFL</h2>
          <p>
            Zadatak možete pronaći u arhivi zadataka na platformi AlpacaHack u
            kategoriji "Web" pod nazivom "
            <a href="https://alpacahack.com/challenges/towfl" target="_blank">
              TOWFL
            </a>
            ".
          </p>
          <p>
            Naučit ćemo kako Flask session radi i što znači "client cookie
            stateless session". Iskoristiti ćemo "session reuse" napad i vidjeti
            je li sigurno zapisati nešto u Flask session što korisnik ne bi
            trebao vidjeti.
          </p>

          <SpeakerNotes>
            <br />
            Originalno je bio zadatak na CakeCTF 2023. Autor zadatka:{" "}
            <strong>
              <a target="_blank" href="https://alpacahack.com/users/ptr-yudai">
                ptr-yudai
              </a>
            </strong>
            <p>
              <a target="_blank" href="http://localhost:8888">
                Zadatak lokalno
              </a>
            </p>
            <p>
              Meni jedan od najdražih tipova zadataka. Dan nam je kod kojeg
              možemo pregledati i analizirati. <br />
              Izgleda kao da nema propusta, ali zapravo ima. <br />
              Evo osobno ja ga prilikom analize koda ne bi zamjetio. <br />
              Nezz koliko je to dobro ili loše, ali mislim da je to ono što ga
              čini zanmljivim. <br />
            </p>
            <p>
              Imamo ispit od 100 random pitanja, moramo odgovoriti na svih 100
              točno.
              <br /> No problem je što ne razumijemo pitanja ni odgovore.
              <br /> Ako pogledamo kod vidimo da su sva odgovori skroz random.
              <br /> Vidimo index.html rutu, start exam rutu koja generira
              pitanja,
              <br />
              imamo dohvati pitanja rutu i submit rutu na koju šaljemo odgovore.
              <br />
              imamo rutu koja daje rezultat i flag ako smo riješili sve 100%.
              <br />
              problem je na liniji 93. i u tome što flask koristi client side
              stateless cookie.
            </p>
            <p>
              <a target="_blank" href="https://gchq.github.io/CyberChef/">
                CyberChef
              </a>{" "}
              |
              <a
                target="_blank"
                href="https://gchq.github.io/CyberChef/#recipe=From_Base64('A-Za-z0-9-_',true,false)Zlib_Inflate(0,0,'Adaptive',false,false)&input=YWFh"
              >
                CyberChef Full
              </a>
            </p>
            <p>
              Kao što vidimo Flask ne sprema to u bazu nego u cookie, samo kaže
              evo ti cookie, sljedeći put kad radiš poziv loadat ću ID da znam o
              kome se radi.
            </p>
            <p>
              <a
                target="_blank"
                href="https://github.com/pallets/flask/blob/b78b5a210bde49e7e04b62a2a4f453ca10e0048c/src/flask/sessions.py#L298"
              >
                Flask session source
              </a>
              To znači da će naša linija 93 zapravo samo obrisati vrijednost EID
              iz lokalnog dicta u Flask session objektu.
              <br />
              Cookie je i dalje važeći.
            </p>
          </SpeakerNotes>
        </section>
      </section>
    </>
  );
}

export default Slide;

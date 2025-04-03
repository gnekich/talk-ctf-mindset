import SpeakerNotes from "../components/SpeakerNotes.jsx";

function Slide() {
  return (
    <section data-transition="slide">
      <section>
        <h2>O firmi</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              textAlign: "left",
              maxWidth: "60%",
            }}
          >
            <p>
              <strong>Ime firme:</strong> Elixirr Digital
            </p>
            <p>
              <strong>Opis:</strong> Elixirr Digital je vodeća konzultantska
              kompanija koja pruža inovativna rješenja za digitalnu
              transformaciju. Radimo s poznatim klijentima i modernim
              tehnologijama.
            </p>
            <p>
              <strong>Web:</strong>{" "}
              <a
                href="https://www.elixirrdigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "underline",
                }}
              >
                www.elixirrdigital.com
              </a>
            </p>
          </div>
          <div>
            <img
              src="assets/elixirr-digital.svg"
              alt="QR kod za web stranicu"
              style={{
                width: "350px",
                height: "350px",
              }}
            />
          </div>
        </div>
        <SpeakerNotes>
          Dopustite mi da vam ukratko predstavim našu firmu, Elixirr Digital.
          <br />
          Mi smo vodeća konzultantska kompanija koja pruža inovativna rješenja
          za digitalnu transformaciju.
          <br />
          Radimo s poznatim klijentima i koristimo moderne tehnologije.
          <br />
          Na našoj web stranici možete pronaći više informacija o tome tko smo i
          što radimo. QR kod vodi na našu web stranicu.
        </SpeakerNotes>
      </section>
      <section>
        <h2>How it all started</h2>
        <div>
          <img
            src="assets/elixirr-timeline.png"
            alt="timeline"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <SpeakerNotes>
          Naša priča započela je 1999. godine kada je osnovan iOLAP Inc.
          <br />
          <br />
          Prvi ured u Hrvatskoj otvoren je 2011. godine tu u Rijeci.
          <br />
          <br />
          Do 2019. godine premašili smo 200 zaposlenika, a 2021. pokrenuli smo
          iOLAP Akademiju.
          <br />
          <br />
          Godine 2022. postali smo dio Elixirr Grupe, a 2024. godine
          rebrandirali smo se u Elixirr Digital.
        </SpeakerNotes>
      </section>
      <section>
        <h2>Solution Builders for a Global Market</h2>
        <h3>Global Customer Base</h3>
        <div>
          <img
            src="assets/elixirr-world-map.png"
            alt="timeline"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <SpeakerNotes>
          Imamo globalnu prisutnost s uredima diljem svijeta.
          <br />
          <br />
          Naši uredi nalaze se u Dallasu i Austinu u Teksasu, Meksiku, Londonu,
          Hrvatskoj i Južnoj Africi.
          <br />
          <br />
          Ponosni smo što radimo s klijentima iz različitih industrija i regija.
        </SpeakerNotes>
      </section>
      <section data-background-color="#eff2f7">
        <h2>Our Technology Expertise</h2>
        <div>
          <img
            src="assets/elixirr-tech-stacks.png"
            alt="timeline"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <SpeakerNotes>
          Koristimo širok spektar modernih tehnologija i alata.
          <br />
          <br />
          Naš fokus je na tehnologijama poput JavaScript-a, TypeScript-a i
          Python-a, ali koristimo i mnoge druge.
          <br />
          <br />
          Imamo različite trackove, uključujući analizu podataka, umjetnu
          inteligenciju i razvoj aplikacija.
          <br />
          <br />
          Naš neki cilj je pronaći ljude koji su strastveni prema tehnologiji i
          učenju.
        </SpeakerNotes>
      </section>
      <section data-background-color="#1c1120">
        <h2>Poznati klijenti</h2>
        <div>
          <img
            src="assets/elixirr-clients.png"
            alt="timeline"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <SpeakerNotes>
          Radimo s nekim od najvećih svjetskih kompanija, uključujući Fortune
          500 klijente.
          <br />
          <br />
          Naši klijenti uključuju iRobot, Shaw, Blizzard, Bank of America,
          Walmart, Pfizer i mnoge druge.
          <br />
          <br />
          Ponosni smo na povjerenje koje su nam ukazali.
        </SpeakerNotes>
      </section>
    </section>
  );
}

export default Slide;

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
          Prvo malo o firmi i sponzoru.
          <br />
          Elixirr Digital je vodeća konzultantska kompanija koja pruža
          inovativna rješenja. Mi smo Agencija. Više informacija možete pronaći
          na stranici.
          <br />
          Radimo u modernim tehnologijama i poznatim klijentima.
          <br />
          Također održavamo akademiju za studente i mlade talente, gdje se
          možete prijaviti i učiti o raznim tehnologijama na pravim projektima,
          najbolji dobiju i ponudu za posao.
          <br />
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
          U kratkim crtama, 1999 iOLAP Inc. je osnovan.
          <br />
          2011. godine otvoren je prvih HQ u Rijeci.
          <br />
          2019. godine prelazimo 200 zaposlenika.
          <br />
          2021. pokrećemo iOLAP Akademiju.
          <br />
          2022. godine akvizira nas Elixirr Grupa, postajemo dio Elixirr-a
          <br />
          2024. rebranding iz iOLAP u Elxirr Digital
          <br />
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
          Imamo urede diljem svijeta.
          <br />
          6 ureda, u 5 zemalja.
          <br />
          Uredi u Dallasu i Austin-u, Texas.
          <br />
          Uredi u Meksiku, Londonu, Hrvatskoj, Južnoj Africi.
          <br />
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
          Koristimo moderne tehnologije i alate.
          <br />
          Prvenstveno tražimo ljude koji su strastveni prema tehnologiji i
          učenju.
          <br />
          Preferencija nam je Javascript, Typescript, Python, ali i ostali
          jezici su zastupljeni.
          <br />
          Vidjeti ćete tu na slici da koristimo REST, GraphQL, ima za svakog
          nešto.
          <br />
          Imamo više trackova, nije samo ADD odnosno application design i
          development,
          <br />
          nego ima tu i analize podataka, korištenja umjetne inteligencije, itd.
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
          Radimo sa fortune 500 klijentima.
          <br />
          Možete vidjeti na primjer, iRobot, Shaw, Blizzard, Bank of America,
          Walmart, Pfizer, itd. itd.
          <br />
        </SpeakerNotes>
      </section>
    </section>
  );
}

export default Slide;

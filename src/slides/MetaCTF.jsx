import SpeakerNotes from "../components/SpeakerNotes.jsx";

function Slide() {
  return (
    <>
      <section>
        <h3>Prije nego što krenemo</h3>
        <div>
          ✨ Ova prezentacija je sama po sebi mini CTF, zato zaviri u
          repozitoriji! ✨
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            margin: "0",
            padding: "0",
          }}
        >
          <img
            src="assets/qr-talk-repo.svg"
            alt="QR kod za repo"
            style={{
              width: "150px",
            }}
          />
        </div>
        <strong>
          <a href="https://github.com/gnekich/talk-ctf-mindset" target="_blank">
            https://github.com/gnekich/talk-ctf-mindset
          </a>
        </strong>
        <p>
          Za riješiti zadatak nije potrebno programirati, zadatak je moguće
          riješiti i putem mobitela, potreban je samo internet.
        </p>
        <p>
          Hint; <strong>"Povijest je učiteljica života"</strong>
          <br />
          <strong>
            <code>{"`<ime> <prezime> <flag>`"}</code> poslati na mail:{" "}
            <a href="mailto:zadatak@elixirr.com?subject=CTF">
              zadatak@elixirr.com
            </a>
          </strong>
          <div>
            <strong>Najbrži prst osvaja nagradu.</strong>
          </div>
        </p>
        <SpeakerNotes>
          Prije nego što krenemo, želim napomenuti da je ova prezentacija sama
          po sebi mini CTF. U repozitoriju ove prezentacije ćete pronaći
          zastavicu.
          <br />
          Potrebno je biti dobar surfer i malo istražiti povijest repozitorija.
          Zadatak nije težak.
          <br />
          Najbrži prst dobiti će nagradu.
          <br />
        </SpeakerNotes>
      </section>
      <section>
        <h2>Spremni?</h2>
        <p>U redu, krenimo!</p>
      </section>
    </>
  );
}

export default Slide;

import React from "react";
import { QRCodeSVG } from "qrcode.react";

import SpeakerNotes from "../components/SpeakerNotes.jsx";

function LiveQRForTheLulz() {
  // Let's make a QR code that updates, for shock value :D
  const [n, setN] = React.useState(0);

  // This is a hack to make the QR code update every 20 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setN((n) => n + 1);
    }, 11337);
    return () => clearInterval(interval);
  }, [n]);

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        margin: "0",
        padding: "20px",
      }}
    >
      <QRCodeSVG
        title="QR kod za repo"
        size={180}
        marginSize={1}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"M"}
        value={`https://github.com/gnekich/talk-ctf-mindset?t=${Date.now()}`}
      />
    </div>
  );
}

function Slide() {
  return (
    <>
      <section>
        <h3>Prije nego što krenemo</h3>
        <div>
          ✨ Ova prezentacija je sama po sebi meta CTF, zato zaviri u
          repozitoriji! ✨
        </div>
        <LiveQRForTheLulz />
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
          Prije nego što krenemo, želim vam skrenuti pažnju na nešto zabavno.
          <br />
          <br />
          Ova prezentacija je sama po sebi meta CTF! U repozitoriju ove
          prezentacije nalazi se zastavica koju možete pronaći.
          <br />
          <br />
          Zadatak nije težak i ne zahtijeva programiranje – sve što vam treba je
          internet i malo istraživačkog duha.
          <br />
          <br />
          Hint je "povijest je učiteljica života". <br />
          <br />
          <br />
          Kada pronađete zastavicu, pošaljite je u formatu{" "}
          <code>{"`<ime> <prezime> <flag>`"}</code> na navedeni e-mail.
          <br />
          <br />
          Najbrži prst osvaja nagradu, pa sretno svima!
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

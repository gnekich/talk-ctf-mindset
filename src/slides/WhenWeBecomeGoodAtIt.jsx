import CodeBlock from "../components/CodeBlock.jsx";
import SpeakerNotes from "../components/SpeakerNotes.jsx";

function Slide() {
  return (
    <>
      <section data-transition="slide">
        <h3>{"Što mogu napraviti još danas"}</h3>
        <p>
          Prvi korak je pratiti set standarda koji nam omogućuju da nam netko
          sigurno javi propuste na našoj aplikaciji.
        </p>
        <p>
          Kao što imamo <strong>robots.txt</strong> dodati mali{" "}
          <strong>security.txt</strong> file i hostati ga na stranici.
        </p>
        <CodeBlock
          languageClass="language-xml"
          codeString={`
Contact: mailto:security@allianz.com
Expires: 2032-01-01T00:00:00.000Z
Encryption: https://www.allianz.com/.well-known/security_allianz_com-pub.asc
Preferred-Languages: en, de
Policy: https://www.allianz.com/en/disclosure-policy.html
Hiring: https://careers.allianz.com/`}
        />

        <p>
          Definirati vulnerability disclosure policy i/ili se registrirati na
          platforme koje to nude.
          <br />
          <strong>
            <strike>HackerOne</strike>
          </strong>
          , <strong>Bugcrowd</strong>, itd.{" "}
        </p>
        <SpeakerNotes>
          Kada pričamo o sigurnosti, prvi korak koji možemo napraviti već danas
          je omogućiti ljudima da nam sigurno prijave ranjivosti.
          <br />
          Kao što imamo <strong>robots.txt</strong>, možemo dodati i{" "}
          <strong>security.txt</strong> file na našu stranicu.
          <br />
          Ovaj file sadrži informacije poput kontakta, enkripcijskih ključeva i
          politike otkrivanja ranjivosti.
          <br />
          Također, možemo definirati vlastitu{" "}
          <strong>vulnerability disclosure policy</strong> ili se registrirati
          na platforme poput <strong>HackerOne</strong> ili{" "}
          <strong>Bugcrowd</strong>.
          <br />
          Ovo su jednostavni koraci koji pokazuju da ozbiljno shvaćamo sigurnost
          i da smo otvoreni za suradnju s istraživačima.
        </SpeakerNotes>
      </section>
      <section data-transition="slide">
        <h3>{"Nikada ne posustati"}</h3>
        <p>
          Ako se odlučite za karijeru etičkog hakera "istraživača", budite
          spremni na izazove.
        </p>
        <p>
          Često vas neće razumjeti, a ponekad će vas gledati kao nekoga tko
          narušava autoritet ili se "pravi pametan".
          <br />
        </p>
        <p>
          Koliko god teško bilo, a biti će, ostanite{" "}
          <strong style={{ color: "white" }}>White Hat</strong>.
        </p>
        <p>Short story time...</p>
        <p>
          ...
          <strong>
            <strike style={{ color: "red" }}>CARNET</strike>
          </strong>
          ,{" "}
          <strong>
            <strike style={{ color: "#ff6912" }}>WSPay</strike>
          </strong>
          ,{" "}
          <strong style={{ color: "#ff0000" }}>
            <strike>X</strike>
          </strong>
          ,{" "}
          <strong>
            <strike style={{ color: "#ff6912" }}>PBZ</strike>
          </strong>
          , <strong style={{ color: "#18c918" }}>InfoBip</strong>,{" "}
          <strong style={{ color: "#e9f563" }}>Google</strong>,{" "}
          <strong style={{ color: "#18c918" }}>G-Site</strong>,{" "}
          <strong>
            <strike style={{ color: "#ff0000" }}>Allianz</strike>
          </strong>
          , ...
        </p>
        <SpeakerNotes>
          Ako se odlučite za karijeru etičkog hakera, budite spremni na izazove.
          <br />
          Često vas neće razumjeti, a ponekad će vas gledati kao nekoga tko
          narušava autoritet ili se "pravi pametan".
          <br />
          No, koliko god teško bilo, uvijek ostanite <strong>White Hat</strong>.
          <br />
          A sada kratka priča iz mog iskustva.
          <br />
        </SpeakerNotes>
      </section>
    </>
  );
}

export default Slide;

import CodeBlock from "../components/CodeBlock.jsx";
import SpeakerNotes from "../components/SpeakerNotes.jsx";

function Slide() {
  return (
    <>
      <section data-transition="slide">
        <h3>{"Što kad postanemo dobri"}</h3>
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
        <SpeakerNotes></SpeakerNotes>

        <p>
          Kreirati vlunerability disclosure policy i/ili se registrirati na
          platforme koje to nude.
          <br />
          <strong>
            <strike>HackerOne</strike>
          </strong>
          , <strong>Bugcrowd</strong>, itd.{" "}
        </p>
      </section>
      <section data-transition="slide">
        <h3>{"Nikada ne posustati"}</h3>
        <p>
          Ako se odlučite biti etički haker jer vam to ide, biti će jako teško,
          ali nikada ne posustati. Nećete biti cjenjeni, neće vas se razumijeti.
          Uvijek će vas gledati kao nekog koji narušava autoritet. Netko tko se
          pravi pametan.
        </p>
        <p>
          Koliko god teško bilo, a biti će, ostanite{" "}
          <strong style={{ color: "white" }}>White Hat</strong>.
        </p>
        <p>Short story time.</p>
        <p>
          ...
          <strong>
            <strike style={{ color: "red" }}>Carnet</strike>
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
        <p>
          <CodeBlock
            languageClass="language-xml"
            codeString={`
          "Ajd' ne budi glup." - Moreno`}
          />
        </p>
        <SpeakerNotes></SpeakerNotes>
      </section>
    </>
  );
}

export default Slide;

import SpeakerNotes from "../components/SpeakerNotes.jsx";

function Slide() {
  return (
    <section>
      <h2>O meni</h2>
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
          }}
        >
          <img
            src="assets/me.png"
            alt="Gordan Nekić"
            style={{
              width: "350px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />
        </div>
        <div style={{ textAlign: "left", maxWidth: "75%" }}>
          <p>
            <strong>Ime i prezime:</strong> Gordan Nekić
          </p>
          <p>
            <strong>Rola:</strong> Lead Engineer @ Elixirr Digital
          </p>
          <p>
            <strong>Opis:</strong> Programer, entuzijast za sigurnost, borac za
            slobodni/sigurni internet. ❤️ Open Source ❤️
          </p>
          <p>
            <strong>Na web-u:</strong>
          </p>
          <ul style={{ padding: "0" }}>
            <li>
              <a href="https://bsky.app/profile/gordan.neki.ch" target="_blank">
                Blue Sky: @gordan.neki.ch
              </a>
            </li>
            <li>
              <a href="https://github.com/gnekich" target="_blank">
                GitHub: @gnekich
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/gnekich" target="_blank">
                LinkedIn: @gnekich
              </a>
            </li>
            <li>
              <a href="https://bugcrowd.com/gnekich" target="_blank">
                Bugcrowd: @gnekich
              </a>
            </li>
            <li>
              <a href="https://gordan.neki.ch" target="_blank">
                Web
              </a>
            </li>
          </ul>
        </div>
      </div>
      <SpeakerNotes>
        Malo o meni, moje ime je Gordan Nekić, i radim kao Lead Engineer u
        Elixirr Digitalu.
        <br />
        <br />
        Programer sam s velikom strašću prema računalnoj sigurnosti i borac za
        slobodni i sigurni internet.
        <br />
        <br />
        Veliki sam ljubitelj Open Source-a i vjerujem u dijeljenje znanja i
        zajednički rad na projektima.
        <br />
        <br />
        Na ekranu možete vidjeti nekoliko linkova gdje me možete pronaći online,
        uključujući Blue Sky, GitHub, LinkedIn, Bugcrowd i moju osobnu web
        stranicu.
        <br />
        <br />
        Ako imate bilo kakva pitanja ili želite saznati više o meni, slobodno me
        kontaktirajte putem ovih platformi.
      </SpeakerNotes>
    </section>
  );
}

export default Slide;

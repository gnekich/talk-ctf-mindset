import CodeBlock from "../components/CodeBlock.jsx";
import SpeakerNotes from "../components/SpeakerNotes.jsx";

function Slide() {
  return (
    <>
      <section>
        <section>
          <h3>✨Korisni linkovi✨</h3>
          <p>Za one koji žele znati i naučiti više</p>
          <ul>
            <li>
              <a
                href="https://github.com/hackthebox/cyber-apocalypse-2025"
                target="_blank"
              >
                Hack The Box CTF 2025 - Official Walkthrough
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hackthebox/cyber-apocalypse-2024"
                target="_blank"
              >
                Hack The Box CTF 2024 - Official Walkthrough
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hackthebox/business-ctf-2024"
                target="_blank"
              >
                Hack The Box Business CTF 2024 - Official Walkthrough
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@mediacccde" target="_blank">
                Chaos Computer Club - YouTube Channel
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@mediacccde" target="_blank">
                2024 Breaking "DRM" in Polish trains - Talk at 37C3
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@DEFCONConference"
                target="_blank"
              >
                DEF CON - Official YouTube Channel
              </a>
            </li>
          </ul>

          <SpeakerNotes>
            Neki korisni linkovi za istraživanje.
            <br />
          </SpeakerNotes>
        </section>
        <section>
          <h3>✨Tehnologije korištene za prezentaciju✨</h3>
          <p>
            <strong>React</strong>, <strong>Reveal.js</strong>,{" "}
            <strong>Vite</strong>, <strong>Markdown</strong>,{" "}
            <strong>GitHub Pages</strong>, <strong>GitHub Actions</strong>,{" "}
            <strong>pnpm</strong>, <strong>git</strong>, <strong>vscode</strong>
            , <strong>...</strong>
          </p>

          <SpeakerNotes></SpeakerNotes>
        </section>
      </section>
    </>
  );
}

export default Slide;

import CodeBlock from "../components/CodeBlock";
import SpeakerNotes from "../components/SpeakerNotes.jsx";

function Slide() {
  return (
    <>
      <section>
        <h2>Što je Capture The Flag?</h2>
        <p>
          CTF (Capture The Flag) je natjecanje u računalnoj sigurnosti u kojem
          sudionici rješavaju razne zadatke kako bi pronašli flag (zastavicu).
          🚩
        </p>
        <p>
          Primjer jedne zastavice:{" "}
          <code>{"CTF{hello_world_328378fea340}"}</code>
        </p>
        <p>
          Zastavica – skriveni tekstualni niz koji dokazuje da je izazov
          uspješno riješen.
        </p>
        <SpeakerNotes>
          CTF (Capture The Flag) ili na hrvatski to bi bilo "Lov na zastavice"
          je natjecanje u računalnoj sigurnosti u kojem sudionici rješavaju
          razne zadatke kako bi pronašli zastavicu.
          <br />
        </SpeakerNotes>
      </section>

      <section>
        <h2>Standardni format zastavice</h2>
        <p>
          Postoji više formata zastava, ali najčešći odnosno standardni format
          je <br /> <code>{"IME_CTF{flag_content}"}</code>.
        </p>
        <div>
          Primjer formata zastava:
          <br />
          <CodeBlock
            // languageClass="language-xml" // Leave empty for xml default
            codeString={`
CTF{hello_world_328378fea340}
picoCTF{s4nity_v3rified_2fd343d43}
HTB{APT28}
                  `}
          />
        </div>
      </section>

      <section>
        <section>
          <h2>🔍 Tipovi izazova:</h2>

          <ul style={{ fontSize: "1.6rem" }}>
            <li>
              <strong>Reverse engineering</strong> – analiza i obrnuto
              inženjerstvo programa kako bi se pronašao ključ.
            </li>
            <li>
              <strong>Cryptography</strong> – rješavanje šifriranih poruka i
              kriptografskih zagonetki. (Padding oracle attack, itd.)
            </li>
            <li>
              <strong>Web security</strong> – otkrivanje ranjivosti na web
              stranicama (SQL injection, XSS, Session reuse, itd.).
            </li>
            <li>
              <strong>Forenzika</strong> – analiza datoteka, mrežnih paketa i
              memorijskih odljeva (Memory dumps).
            </li>
            <li>
              <strong>Binary Exploitation</strong> – iskorištavanje ranjivosti u
              binarnim datotekama. (Buffer overflow, format string attack, itd.)
            </li>
            <li>
              <strong>Blockchain</strong> – iskorištavanje ranjivosti pametnih
              ugovora (Re-entrancy attack, public "private" values, unsecure
              randomnes).
            </li>
            <li>
              <strong>Secure Coding</strong> – iskorištavanje ranjivosti na
              sustavima ili aplikacijama.
            </li>
            <li>
              <strong>AI</strong> – iskorištavanje ranjivosti na sustavima
              umjetne inteligencije (Prompt injection).
            </li>
          </ul>
          <SpeakerNotes>
            <p>Imamo razne tipove izazova</p>
            <p>Pa kako to izgleda u praksi...</p>
          </SpeakerNotes>
        </section>
        <section>
          <h2>Primjer CTF-a:</h2>
          <div>
            <img
              src="assets/htb-dashboard-example.png"
              alt="htb dashboard"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <SpeakerNotes>
            <p>
              Imamo neki dashboard sa zadacima, sa strane imamo kategorije,
              vidimo bodove, itd.
            </p>
          </SpeakerNotes>
        </section>
        <section>
          <h2>Primjer Profila:</h2>
          <div>
            <img
              src="assets/htb-profile-example.png"
              alt="htb profile"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <SpeakerNotes>
            <p>Ovo may or may not be me...</p>
          </SpeakerNotes>
        </section>
      </section>
      <section>
        <section>
          <h2>Kako početi?</h2>
          <h3>Poznata CTF natjecanja:</h3>
          <ul>
            <li>
              <strong>
                <a
                  href="https://defcon.org/html/defcon-24/dc-24-ctf.html"
                  target="_blank"
                >
                  DEF CON CTF
                </a>
              </strong>
              : Jedno od najprestižnijih CTF natjecanja na svijetu.
            </li>
            <li>
              <strong>
                <a href="https://picoctf.org/" target="_blank">
                  picoCTF
                </a>
              </strong>
              : Edukativno CTF natjecanje za početnike.
            </li>
            <li>
              <strong>
                <a href="https://www.hackthebox.com/" target="_blank">
                  Hack The Box CTF
                </a>
              </strong>
              : Natjecanje organizirano od strane Hack The Box platforme.
            </li>
            <li>
              <strong>
                <a
                  href="https://capturetheflag.withgoogle.com/"
                  target="_blank"
                >
                  Google CTF
                </a>
              </strong>
              : Natjecanje koje organizira Google za sigurnosne entuzijaste.
            </li>
            <li>
              <strong>
                <a href="https://ctftime.org/" target="_blank">
                  CTFtime
                </a>
              </strong>
              : Platforma za praćenje i sudjelovanje u raznim CTF natjecanjima.
            </li>
            <li>
              <strong>
                <a href="https://alpacahack.com/" target="_blank">
                  AlpacaHack
                </a>
              </strong>
              : Edukativno CTF natjecanje za početnike i profesionalce.
            </li>
          </ul>
        </section>
        <section>
          <h3>Moja preporuka za početnike</h3>
          <ul>
            <li>
              <strong>
                <a href="https://picoctf.org/" target="_blank">
                  picoCTF
                </a>
              </strong>
              : Edukativno CTF natjecanje za početnike.
            </li>
            <li>
              <strong>
                <a href="https://www.hackthebox.com/" target="_blank">
                  Hack The Box CTF
                </a>
              </strong>
              : Natjecanje organizirano od strane Hack The Box platforme.
            </li>

            <li>
              <strong>
                <a href="https://alpacahack.com/" target="_blank">
                  AlpacaHack
                </a>
              </strong>
              : Edukativno CTF natjecanje za početnike i profesionalce.
            </li>
          </ul>
        </section>
      </section>
      <section>
        <h2>Alati?</h2>
        <p>Korisni alati za CTF</p>
        <ul>
          <li>
            <strong>
              <a href="https://gchq.github.io/CyberChef/" target="_blank">
                CyberChef
              </a>
            </strong>
            : Alat za skoro sve!
          </li>
          <li>
            <strong>
              <a href="https://portswigger.net/burp" target="_blank">
                Burp Suite
              </a>
            </strong>
            : Alat za testiranje sigurnosti web aplikacija.
          </li>
          <li>
            <strong>
              <a href="https://ghidra-sre.org/" target="_blank">
                Ghidra
              </a>
            </strong>
            : Alat za obrnuto inženjerstvo binarnih datoteka.
          </li>
          <li>
            <strong>
              <a href="https://www.wireshark.org/" target="_blank">
                Wireshark
              </a>
            </strong>
            : Analizator mrežnog prometa.
          </li>
          <li>
            <strong>
              <a href="https://www.openwall.com/john/" target="_blank">
                John the Ripper
              </a>{" "}
              &{" "}
              <strong>
                <a href="https://hashcat.net/hashcat/" target="_blank">
                  Hashcat
                </a>
              </strong>
            </strong>
            : Alati za probijanje lozinki.
          </li>
          <li>
            <strong>
              <a href="https://www.kali.org/" target="_blank">
                Kali Linux
              </a>
            </strong>
            : Operativni sustav za penetracijsko testiranje i sigurnosnu
            analizu.
          </li>
          <li>
            <strong>
              <a href="https://github.com/Gallopsled/pwntools" target="_blank">
                pwntools
              </a>
            </strong>
            : Python CTF framework super za eksploataciju binarnih i web
            ranjivosti.
          </li>
        </ul>
        <SpeakerNotes>
          <p>Ovdje sam naveo neke alate koji su korisni za CTF natjecanja.</p>
          <p>
            Najbitniji vam je CyberChef, jer je to alat za skoro sve! Jako
            koristan i za programere
          </p>
          <p>Pwntools je Python CTF framework, iznimno koristan za CTF.</p>
        </SpeakerNotes>
      </section>

      <section>
        <h2>🤔 Zašto sudjelovati?</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li>✅ Učiš kroz praksu i razvijaš "hacker mindset".</li>
          <li>✅ Stječeš iskustvo u računalnoj sigurnosti.</li>
          <li>✅ Super je za izgradnju CV-a i karijere u IT-u.</li>
          <li>✅ Zajednica je zabavna i natjecanja su izazovna.</li>
        </ul>
      </section>

      <section>
        <h2>Kako CTF pomaže programerima?</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ padding: "10px 0" }}>
            ✅ Programeri uče kako napadači razmišljaju i otkrivaju ranjivosti.
          </li>
          <li style={{ padding: "10px 0" }}>
            ✅ Prepoznaju sigurnosne propuste u vlastitom kodu, npr. SQL
            Injection, XSS, Buffer Overflow, Session reuse, i mnoge druge
            propuste.
          </li>
          <li style={{ padding: "10px 0" }}>
            ✅ Razumiju važnost sigurnih praksi. (Neću commitat application
            secrete u source, koristit ću env varijable, neću dopustiti GitHub
            Copilotu da mi šalje .env file online, deployamo samo preko CI/CD-a,
            koristimo IaC, review-amo kod, pišemo testove, itd.)
          </li>
          <li style={{ padding: "10px 0" }}>
            ✅ CTF izazovi su često logičke zagonetke koje razvijaju kreativno
            razmišljanje.
          </li>
        </ul>
      </section>
    </>
  );
}

export default Slide;

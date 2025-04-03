import CodeBlock from "../components/CodeBlock";

function Slide() {
  return (
    <>
      <section>
        <section>
          <h2>Neki od prijmera</h2>
          <p>...na koje će te naići</p>
        </section>
        <section>
          <h2>Primjer: SQL Injection</h2>
          <p>Jednostavan primjer SQL Injection napada:</p>
          <CodeBlock
            languageClass="language-sql"
            codeString={`SELECT * FROM users WHERE username = 'admin' AND password = 'password';`}
          />
          <p>
            Ako korisnik unese <code>' OR '1'='1</code> kao lozinku, upit
            postaje:
          </p>
          <CodeBlock
            languageClass="language-sql"
            codeString={`SELECT * FROM users WHERE username = 'admin' AND password = '' OR '1'='1';`}
          />
          <p>Ovo omogućava neovlašteni pristup!</p>
        </section>
        <section>
          <h2>Primjer: XSS (Cross-Site Scripting)</h2>
          <p>Jednostavan primjer XSS napada:</p>
          <pre>
            <code class="language-html">
              <input
                type="text"
                name="username"
                value="<script>alert('XSS!')</script>"
              />
            </code>
          </pre>
          <p>
            Ako aplikacija ne sanitizira unos, napadač može izvršiti zlonamjerni
            kod u pregledniku korisnika.
          </p>
        </section>

        <section>
          <h2>Primjer: Ranjivost u Python aplikaciji</h2>
          <p>Primjer nesigurnog izvršavanja naredbi:</p>
          <pre>
            <code class="language-python">
              import os user_input = input("Unesite naredbu: ")
              os.system(user_input)
            </code>
          </pre>
          <p>
            Ako korisnik unese <code>rm -rf /</code>, može uništiti sustav!
          </p>
        </section>
        <section>
          <h2>Primjer: Buffer Overflow</h2>
          <p>Primjer iskorištavanja buffer overflow ranjivosti:</p>
          <pre>
            <code class="language-c">
              {`
#include <stdio.h>
#include <string.h>

void tajna_funkcija() {
    printf("Pozvana je tajna funkcija!\\n");
}

void ranjiva_funkcija() {
    char buffer[8];
    printf("Unesite podatke: ");
    gets(buffer); // Nesigurna funkcija
}

int main() {
    ranjiva_funkcija();
    printf("Kraj programa.\\n");
    return 0;
}
`}
            </code>
          </pre>
          <p>
            Ako korisnik unese više od 8 znakova, može prebrisati povratnu
            adresu i preusmjeriti izvršavanje na <code>tajna_funkcija</code>.
          </p>
        </section>
      </section>
    </>
  );
}

export default Slide;

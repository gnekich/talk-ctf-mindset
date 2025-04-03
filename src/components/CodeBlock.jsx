/*
    There is a bug in Reveal JS that causes issues with the code block if few data attributes are not set.
    Ref: https://github.com/hakimel/reveal.js/issues/2155

    For markdown you need to add data-markdown="" and for code block you need to add data-trim="" and data-noescape=""
*/
function CodeBlock({ languageClass, codeString, children }) {
  return (
    <pre>
      <code data-trim data-noescape className={languageClass}>
        {codeString ? codeString : children}
      </code>
    </pre>
  );
}

export default CodeBlock;

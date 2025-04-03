function SpeakerNotes({ noteString, children }) {
  return <aside className="notes"> {noteString ? noteString : children}</aside>;
}

export default SpeakerNotes;

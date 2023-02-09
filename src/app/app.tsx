import { useState } from 'react';
import { Grid, Header, WordDisplay } from './components';

export function App() {
  const [currentWord, setCurrentWord] = useState("");

  const updateCurrentWord = (letter: string): void => {
    if (letter) setCurrentWord(currentWord + letter);
    else setCurrentWord(currentWord.substring(0, currentWord.length - 1));
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width: "70vw",
      margin: "auto",
      justifyContent: "center",
      paddingTop: "3em",
      alignItems: "center"
    }}>
      <Header />
      <WordDisplay />
      <Grid />
    </div>
  );
}

export default App;

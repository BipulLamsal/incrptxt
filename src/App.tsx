import { useState } from "react";
import "./assets/styles/inputer.css";

import "./App.css";
import TerminalInput from "./components/TerminalInput";
import TerminalOutput from "./components/TerminalOutput";
import TerminalProcess from "./components/TerminalProcess";

interface HistoryItem {
  item: string;
}

function App() {
  const [input, setInput] = useState<string>("welcome");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  return (
    <>
    
      {history.map((text) => {
        return (
          <>
          
            <TerminalOutput
              key={text.item}
              history={text.item}
            ></TerminalOutput>
            {(text.item !== '' && text.item !== ' ') && (
              <TerminalProcess
                key={text.item}
                history={text.item}
                setHistory={setHistory}
              ></TerminalProcess>
            )}
          </>
        );
      })}

      <TerminalInput
        input={input}
        setInput={setInput}
        history={history}
        setHistory={setHistory}
      ></TerminalInput>
    </>
  );
}

export default App;

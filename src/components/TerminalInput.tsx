// TerminalInput.tsx
interface TerminalInputProps {
  input: string;
  history: HistoryItem[];
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>;
}
interface HistoryItem {
  item: string;
}

const TerminalInput: React.FC<TerminalInputProps> = ({
  input,
  setInput,
  history,
  setHistory,
}) => {
  function handleOnKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code === "Enter" ) {
      setHistory([...history, { item: input }]);
      setInput("");
    }
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  return (
    <div className="ter_inline">
      <div className="ter_inline_main">
      <p className="ter_liner">
        incrptxt<span className="ter_liner_sep">@</span>
        <span className="ter_liner_user">Anonymous</span>
        <span className="ter_liner_sep">:~$</span>
      </p>
      <input
        className="ter_inputer"
        type="text"
        spellCheck="false"
        autoFocus
        value={input}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      ></input>

      </div>
    </div>
  );
};
export default TerminalInput;

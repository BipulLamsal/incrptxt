import Help from "./messages/Help";
import Welcome from "./messages/Welcome";

interface TerminalProcessProps {
  history: string;
  setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>;
}

interface HistoryItem {
  item: string;
}

const TerminalProcess: React.FC<TerminalProcessProps> = ({
  history,
  setHistory,
}) => {
  const conditionRender = (input: string) => {
    switch (input.trim().replace(/\s+/g, " ")) {
      case "welcome":
        return <Welcome></Welcome>;
      case "clear":
        setHistory([]);
        break;
      case "help":
        return <Help></Help>;
      case "whoami":
        return <div><p>Anonymous</p></div>
      case input.substring(0,4): 
        return <div><p>{input}</p></div>
    }
  }

  return (
    <div className="ter_inline">
      {conditionRender(history) ? (
        conditionRender(history)
      ) : (
        <p className="ter_output">
          command '{history}' not found, type `<span>help</span>` to get list of
          commands
        </p>
      )}
    </div>
  );
};
export default TerminalProcess;

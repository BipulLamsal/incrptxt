import Welcome from "./messages/Welcome";

interface TerminalProcessProps {
  history: string;
  setHistory : React.Dispatch<React.SetStateAction<HistoryItem[]>>;
}

interface HistoryItem
{
    item: string;
}

const TerminalProcess: React.FC<TerminalProcessProps> = ({ history,setHistory }) => {
  function conditionRender(input: string) {
    switch (input.trim().replace(/\s+/g, " ")) {
        case "welcome":
            return <Welcome></Welcome>;
        case "clear" :
            setHistory([]);
            break;
            
    }
  }

  return (
    <div className="ter_inline">
      {conditionRender(history) ? (
        conditionRender(history)
      ) : (
        <p className="ter_output">
          command '{history}' not found, type `<span>help</span>` to get list of commands
        </p>
      )}
    </div>
  );
};
export default TerminalProcess;

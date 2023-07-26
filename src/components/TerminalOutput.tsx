interface TerminalOutputProps {
  history: string;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ history }) => {
  return (
    <div className="ter_inline">
      <div className="ter_inline_main">
        <p className="ter_liner">
          incrptxt<span className="ter_liner_sep">@</span>
          <span className="ter_liner_user">Anonymous</span>
          <span className="ter_liner_sep">:~$</span>
        </p>
        <p className="ter_output">{history}</p>
      </div>
    </div>
  );
};
export default TerminalOutput;

function TerminalInput()
{
return(
    <div className='ter_inline'>
    <p className='ter_liner'>incrptxt<span className='ter_liner_sep'>@</span><span className='ter_liner_user'>Anonymous</span><span className='ter_liner_sep'>:~$</span></p>
    <input className='ter_inputer'type='text' spellCheck="false" autoFocus onKeyDown={(event)=>{if(event.code === 'Enter'){alert("enterd")}}}></input>
  </div>
)
}
export default TerminalInput
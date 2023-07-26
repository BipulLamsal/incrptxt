function Welcome() {
    const asciiArt = `
    __                                           __                  __     
   |  \\                                         |  \\                |  \\    
    \\$$ _______    _______   ______    ______  _| $$_    __    __  _| $$_   
   |  \\|       \\  /       \\ /      \\  /      \\|   $$ \\  |  \\  /  \\|   $$ \\  
   | $$| $$$$$$$\\|  $$$$$$$|  $$$$$$\\|  $$$$$$\\\\$$$$$$   \\$$\\/  $$ \\$$$$$$  
   | $$| $$  | $$| $$      | $$   \\$$| $$  | $$ | $$ __   $$  $$   | $$ __ 
   | $$| $$  | $$| $$_____ | $$      | $$__/ $$ | $$|  \\ /  $$$\\   | $$|  \\
   | $$| $$  | $$ \\$$     \\| $$      | $$    $$  \\$$  $$|  $$ \\$$\\   \\$$  $$
    \\$$ \\$$   \\$$  \\$$$$$$$ \\$$      | $$$$$$$    \\$$$$  \\$$   \\$$    \\$$$$ 
                                     | $$                                   
                                     | $$                                   
                                      \\$$                                   
`;

  return (
    <>
    <pre style={{ whiteSpace: 'pre' }} className="ter_welcome">{asciiArt}</pre>
    <div className="ter_welcome_cont">
    <p className="ter_welcome_des">Welcome to the terminal.</p>
    <p className="ter_welcome_des">Source code of the project can be found in <a href="">github repo</a></p>
    <p className="ter_welcome_des">For list of the commands, type `<span>help</span>`</p>

    </div>
   
    </>
    
  );
}

export default Welcome;

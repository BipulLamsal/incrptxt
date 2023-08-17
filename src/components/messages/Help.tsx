import React from "react";
import '../../assets/styles/responsive.css'

const HelpMessage = [
  {
    command: "about",
    description: "about terminal",
  },
  {
    command: "clear",
    description: "clears the terminal",
  },
  {
    command: "echo",
    description: "print out message in the screen",
  },
  {
    command: "help",
    description: "preview available commands",
  },
  {
    command: "history",
    description: "view commands history",
  },
  {
    command: "pwd",
    description: "displays current working directory",
  },
  {
    command: "theme",
    description: "setup your own theme",
  },
  {
    command: "whoami",
    description: "about current user",
  },
];

function Help() {
  return (
    <>
      {HelpMessage.map((item) => {
        return (
          <div
            className="message_block"
          >
            <p className="block_item_pri theme_lime" style={{ flex: 0.2 }}>
              {item.command}
            </p>
            <p className="block_item_sec theme_white" style={{ flex: 1 }}>
              — {item.description}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Help;

import * as React from "react";
import "./App.css";

/* Reusable dropdown component */

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  /* The dropdown's menu should float above the other HTML elements. 
  What's missing are event handlers for each button in the dropdown's menu. 
  For each event handler, you can perform something specific like opening a 
  dialog for example, while the handler also has to close the dropdown menu eventually:*/
  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  return (
    //Eventually you want to move all this logic for a dropdown component into 
    //a reusable React component. The new component comes with two slots.
    //one slot is for the trigger which opens/closes the dropdown
    //the other slot is for the buttons which are getting rendered in the 
    //dropdown's menu.
    <Dropdown
      //prop "open this new dropdown receives "open" state
      open={open}

      // Slot1 - trigger open and closes the dropdown
      trigger={<button onClick={handleOpen}>Dropdown</button>}
       //slot 2 - menu prop is for the buttons which are getting rendered in the dropdown's menu.
      menu={[
        <button onClick={handleMenuOne}>Menu 1</button>,
        <button onClick={handleMenuTwo}>Menu 2</button>,
      ]}
    />
  );
};


//Create a dropdown control - has three props
//open - prop to signify open or close
//trigger - prop is for ??
//menu - prop containing the "buttons" for menu1 and menu2
const Dropdown = ({ open, trigger, menu }) => {
  return (
    <div className="dropdown">
      {trigger} 
      {/* if open = true do this. Otherwise null*/}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">{menuItem}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default App;

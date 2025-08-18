import Menu from "../icon-components/Menu/Menu";
import Moon from "../icon-components/Moon/Moon";
import Profile from "../icon-components/Profile/Profile";
import Search from "../icon-components/Search/Search";
import Sun from "../icon-components/Sun/Sun";
import "./button.css";

type ButtonProps = {
  btn_type: "button" | "submit"
  classname?: string
  text?: string
}

function Button(props: ButtonProps) {
  if (props.classname != undefined && props.classname.includes("icon")){
    let icon_type: string = props.classname.split(" ")[1];
    var icon_component;
    switch (icon_type) {
      case "moon":
        icon_component = <Moon />
        break;
      case "sun":
        icon_component = <Sun />
        break;
      case "profile":
        icon_component = <Profile />
        break;
      case "search":
        icon_component = <Search />
        break;
      case "menu" :
        icon_component = <Menu />
        break;
      default:
        throw new Error("Failed to the defined icon.");
    }
  }

  return (
    <>
      <button 
        type={props.btn_type} 
        className={props.classname != undefined && (props.classname)}
      >
        {props.classname != undefined && (
          icon_component
        )}
        {props.text != undefined && (
          props.text
        )}

      </button>
    </>
  );
}

export default  Button;
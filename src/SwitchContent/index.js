import { LuEye, LuEyeOff } from "react-icons/lu";
import Switch from "../components/Switch";
import './SwitchContent.css'
import { useRecoilState } from "recoil";
import { aContent } from "../atoms";

const SwitchContent = () => {
  const [switchOn, setSwitchOn] = useRecoilState(aContent);
  return(
    <div className="swicthContent">
      <LuEyeOff className="switchIcons"/>
      <Switch handleChange={setSwitchOn} isOn={switchOn}/>
      <LuEye className="switchIcons"/>
    </div>
  )
}

export default SwitchContent
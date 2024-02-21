import Svg, { Path } from "react-native-svg";

const Logout = (props) => {
    return (
        <Svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <Path d="M15 16.5V19a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h7a2 2 0 012 2v3.063M11 12h10m0 0l-2.5-2.5M21 12l-2.5 2.5" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      )
}
export default Logout
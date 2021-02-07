import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Timer from "../screens/Timer";
import Settings from "../screens/Settings";

const ChessNavigator = createStackNavigator({
  Timer: Timer,
  Settings: Settings,
});

export default createAppContainer(ChessNavigator);
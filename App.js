import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/Navigation/AppNavigation";
import { initFirebase } from "./src/utils";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>

      <Toast />
    </>
  );
}



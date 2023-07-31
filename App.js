import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChangePasswordScreen from "./application/screens/auth/ChangePasswordScreen";
import LoginUser from "./application/screens/auth/LoginUser";
import OTPScreen from "./application/screens/auth/OTPScreen";
import OTPScreenPass from "./application/screens/auth/OTPScreenPass";
import RegistrationScreen from "./application/screens/auth/RegistrationScreen";
import SendOTPNumber from "./application/screens/auth/SendOTPNumber";
import UserPanelTab from "./application/screens/auth/UserPanelTab";
import ReferralCode from "./application/screens/auth/ReferralCode";
import DashBoard from "./application/screens/screens/DashBoard";
import RootNavigation from "./application/navigation/RootNavigation";
import { View } from "react-native";


const Stack = createNativeStackNavigator();

export default function App() {

  //  const [isLoading, setIsLoading] = useState(false);

  //   const handleButtonClick = () => {
  //     setIsLoading(true);
  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 2000);
  //   };

  return (

    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'orange' }, headerTintColor: 'white' }}>
    //     <Stack.Screen name='UserLogin' component={LoginUser} options={{ title: '' }} />
    //     <Stack.Screen name="SendOTPNumber" component={SendOTPNumber} options={{ title: "Forgot Password" }} />
    //     <Stack.Screen name="Registration" component={RegistrationScreen} options={{ title: "Registration", headerBackVisible: false }} />
    //     <Stack.Screen name="UserPanelTab" component={UserPanelTab} options={{ title: "HUM Hai" }} />
    //     <Stack.Screen name="OTPS" component={OTPScreen} options={{title: "Input OPT"}} />
    //     <Stack.Screen name="otp" component={OTPScreenPass} options={{title: "Input OPT" }} />
    //     <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ title: "Change Password" }} />
    //     <Stack.Screen name="ReferralCode" component={ReferralCode} options={{title: "Referral Code" }} />
    //     <Stack.Screen name="DashBoard" component={DashBoard} options={{title: "DashBoard" }} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <RootNavigation />


  );
}


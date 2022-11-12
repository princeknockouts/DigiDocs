import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import Splash from "../components/Splash";
import Profile from "../components/UserScreens/Profile";
import ViewApplications from "../components/UserScreens/ViewApplications";
import ViewDocuments from "../components/UserScreens/ViewDocuments";
import ApplyForDocuments from "../components/UserScreens/ApplyForDocuments";

const RootStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const HomeScreens = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Dashboard" component={Dashboard} />
			<HomeStack.Screen name="Profile" component={Profile} />
			<HomeStack.Screen name="ViewApplications" component={ViewApplications} />
			<HomeStack.Screen name="ViewDocuments" component={ViewDocuments} />
			<HomeStack.Screen name="ApplyForDocuments" component={ApplyForDocuments} />
		</HomeStack.Navigator>
	);
};

function MainAppRoutes() {
	return (
		<NavigationContainer>
			<RootStack.Navigator screenOptions={{ headerShown: false }}>
				<RootStack.Screen
					name="Splash"
					component={Splash}
					options={{ headerShown: false }}
				/>
				<RootStack.Screen
					name="Login"
					component={HomeScreens}
					options={{ headerShown: false }}
				/>
				<RootStack.Screen
					name="ForgotPassword"
					component={ForgotPassword}
				/>
				<RootStack.Screen name="Home" component={HomeScreens} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
}
export default MainAppRoutes;

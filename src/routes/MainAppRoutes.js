import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import Splash from "../components/Splash";
import Profile from "../components/Profile";
import ViewApplications from "../components/ViewApplications";
import ViewDocuments from "../components/ViewDocuments";
import ApplyForDocuments from "../components/ApplyForDocuments";

const RootStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const DocumentStack = createNativeStackNavigator();
const ApplicationStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileScreens = () => {
	return (
		<ProfileStack.Navigator screenOptions={{ headerShown: false }}>
			<ProfileStack.Screen name="Profile" component={Profile} />
		</ProfileStack.Navigator>
	);
};

const DocumentScreens = () => {
	return (
		<DocumentStack.Navigator screenOptions={{ headerShown: false }}>
			<DocumentStack.Screen
				name="ViewDocuments"
				component={ViewDocuments}
			/>
		</DocumentStack.Navigator>
	);
};

const ApplicationScreens = () => {
	return (
		<ApplicationStack.Navigator screenOptions={{ headerShown: false, headerShadowVisible: 'false' }}>
			<ApplicationStack.Screen
				name="ViewApplications"
				component={ViewApplications}
			/>
		</ApplicationStack.Navigator>
	);
};

const TabNav = () => {
	return (
		<Tab.Navigator screenOptions={{
			headerTitleAlign: 'center',
			headerShadowVisible: false,
		}}>
			<Tab.Screen name="Profile" component={ProfileScreens} options={{headerTitle: 'User Profile'}} />
			<Tab.Screen name="Documents" component={DocumentScreens} />
			<Tab.Screen name="Applicationa" component={ApplicationScreens} />
		</Tab.Navigator>
	);
};

const HomeScreens = () => {
	return (
		<HomeStack.Navigator
			screenOptions={{
				headerShadowVisible: false,
			}}
		>
			<HomeStack.Screen
				name="Dashboard"
				component={Dashboard}
			/>
			<HomeStack.Screen
				name="Profile" 
				component={Profile}
			/>
			<HomeStack.Screen
				name="ViewApplications"
				component={ViewApplications}
			/>

			<HomeStack.Screen
				name="ViewDocuments"
				component={ViewDocuments}
			/>
			<HomeStack.Screen name="ViewDocuments" component={ViewDocuments} />
			<HomeStack.Screen
				name="ApplyForDocuments"
				component={ApplyForDocuments}
			/>
		</HomeStack.Navigator>
	);
};

function MainAppRoutes() {
	return (
		<NavigationContainer>
			<RootStack.Navigator
				initialRouteName="Splash"
				screenOptions={{ headerShown: false }}
			>
				<RootStack.Screen
					name="Splash"
					component={Splash}
					options={{ headerShown: false }}
				/>
				<RootStack.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				/>
				<RootStack.Screen
					name="ForgotPassword"
					component={ForgotPassword}
				/>
				<RootStack.Screen
					name="Home"
					component={TabNav}
					options={{ headerShown: false }}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	);
}
export default MainAppRoutes;

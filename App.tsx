import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { default as React, FunctionComponent } from "react";
import { StatusBar, View } from "react-native";
import { persistStore } from "redux-persist";
import { Alternate } from "./src/pages/Alternate";
import { First } from "./src/pages/First";
import { Index } from "./src/pages/Index";
import { Test } from "./src/pages/Test";
import { configureStore } from "./src/state-mgmt/store"; //Import the store
// import { useHistory } from "react-router";

// This puts screens in a native ViewController or Activity.
// enableScreens();

// routing setup with react-navigation
const Stack = createStackNavigator();
export const RootStack = (props = {}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="First" component={First} />
      <Stack.Screen name="Alternate" component={Alternate} />
    </Stack.Navigator>
  );
};

const store = configureStore();
const persistor = persistStore(store);

//  main wrapper component
const App: FunctionComponent = () => (
  <>
    <StatusBar
      backgroundColor={"#FFFFFF"}
      barStyle="light-content"
      hidden={false}
    />

    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </View>
  </>
);

export default App;

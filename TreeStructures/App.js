import { StyleSheet, Text, View } from "react-native";

// Data
const tree = {
  children: [
    { name: "node_modules", children: [{ name: "babel" }] },
    { name: "assets", children: [{ name: "images" }] },
    { name: "src", children: [{ name: "app" }] },
  ],
};

function Entry({ name, children }) {
  return (
    <>
      <Text>{name}</Text>
      {children?.map((entry) => (
        <Entry {...entry} />
      ))}
    </>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tree Structure</Text>
      <Text>{tree.children[0].name}</Text>
      <>
        {tree.children.map((entry) => {
          <Entry {...entry} />;
        })}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

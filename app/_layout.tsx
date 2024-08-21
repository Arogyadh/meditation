import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Slot />
      <StatusBar animated style="auto" hidden />
    </>
  );
}

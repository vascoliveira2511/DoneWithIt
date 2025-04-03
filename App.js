import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
  { label: "Games", value: 4 },
  { label: "Sports", value: 5 },
  { label: "Books", value: 6 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <GestureHandlerRootView>
      <Screen>
        <AppPicker
          selectedItem={category}
          items={categories}
          icon="apps"
          placeholder="Category"
          onSelectItem={(item) => setCategory(item)}
        />
        <AppTextInput icon="email" placeholder="Email" />
      </Screen>
    </GestureHandlerRootView>
  );
}

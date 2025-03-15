import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
<Tabs
  screenOptions={{
    tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
    headerShown: false,
    tabBarButton: HapticTab,
    tabBarBackground: TabBarBackground,
    tabBarStyle: {
      height: 60,
      justifyContent: "center",
      alignItems: "center",
    },
  }}
>
  <Tabs.Screen
    name="index"
    options={{
      title: "FluffyChick",
      tabBarLabelStyle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#d9c389",
      },
      tabBarIcon: () => null,
    }}
  />
</Tabs>
  );
}

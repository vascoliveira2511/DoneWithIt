import { useEffect } from "react";
import expoPushTokensApi from "../api/expoPushTokens";
import * as Notifications from "expo-notifications";

export default useNotifications = (notifcationListener) => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  useEffect(() => {
    requestNotificationPermission();

    if (notifcationListener) {
      Notifications.addNotificationResponseReceivedListener(
        notifcationListener
      );
    }
  }, []);

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) {
        alert("You need to enable notifications to use this app.");
        return;
      }

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data);
      console.log("Notification token:", token.data);
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  };
};

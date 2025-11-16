import Home from "../Features/HomeScreen/page/Home.svelte";
import Bills from "../Features/BillsScreen/page/Bills.svelte";
import Notification from "../Features/NotificationScreen/page/notification.svelte";
import Settings from "../Features/SettingScreen/page/Settings.svelte";

export const routes = {
  "/": Home,
  "/bills": Bills,
  "/notifications": Notification,
  "/settings": Settings,
};

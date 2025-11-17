// @ts-ignore
import Home from "../Features/HomeScreen/page/Home.svelte";
// @ts-ignore
import Bills from "../Features/BillsScreen/page/Bills.svelte";
// @ts-ignore
import Notification from "../Features/NotificationScreen/page/Notification.svelte";
// @ts-ignore
import Settings from "../Features/SettingScreen/page/Settings.svelte";
// @ts-ignore
import DetailsPage from "../Features/HomeScreen/page/Details-page.svelte";

export const routes = {
  "/": Home,
  "/bills": Bills,
  "/notifications": Notification,
  "/settings": Settings,
  "/details/:id": DetailsPage,
};

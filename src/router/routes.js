import Home from "../Features/Home/page/Home.svelte";
import Bills from "../Features/bills/page/Bills.svelte";
import Notification from "../Features/notification/page/notification.svelte";
import Settings from "./pages/Settings.svelte";

export const routes = {
  "/": Home,
  "/bills": Bills,
  "/notifications": Notification,
  "/settings": Settings,
};

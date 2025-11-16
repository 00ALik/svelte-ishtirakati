<script>
  import { location } from "svelte-spa-router";
  import NavButton from "./NavButton.svelte";

  const navItems = [
    { path: "/", label: "الرئيسية", icon: "home" },
    { path: "/bills", label: "الفواتير", icon: "bills" },
    { path: "/notifications", label: "الاشعارات", icon: "notifications" },
    { path: "/settings", label: "الإعدادات", icon: "settings" },
  ];

  $: activePath = $location ?? "/";
</script>

<nav class="nav" aria-label="القائمة السفلية">
  {#each navItems as item}
    <NavButton
      href={`#${item.path}`}
      label={item.label}
      icon={item.icon}
      active={activePath === item.path}
    />
  {/each}
</nav>

<style>
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.35rem;
    padding: 0.45rem;
    border-radius: 1.4rem;
    background: rgba(15, 23, 42, 0.72);
    border: 1px solid rgba(148, 163, 184, 0.4);
    box-shadow: 0 25px 45px rgba(15, 23, 42, 0.45);
    position: sticky;
    bottom: 0;
    z-index: 20;
    backdrop-filter: blur(14px);
  }

  @media (max-width: 480px) {
    .nav {
      border-radius: 1.1rem;
      padding: 0.35rem;
      box-shadow: 0 18px 35px rgba(15, 23, 42, 0.55);
    }
  }
</style>

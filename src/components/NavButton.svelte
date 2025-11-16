<script lang="ts">
  import { Home, FileText, Bell, Settings } from "lucide-svelte";

  // props
  export let href = "#/"; // اللينك
  export let label = "الرئيسية"; // النص
  export let icon: "home" | "bills" | "notifications" | "settings" = "home";
  export let active = false; // هل الصفحة الحالية؟
</script>

<a
  href={href}
  class="nav-btn"
  class:active
  aria-current={active ? "page" : undefined}
>
  <span class="icon" aria-hidden="true">
    {#if icon === "home"}
      <Home size={22} stroke-width={1.8} />

    {:else if icon === "bills"}
      <FileText size={22} stroke-width={1.8} />

    {:else if icon === "notifications"}
      <Bell size={22} stroke-width={1.8} />

    {:else if icon === "settings"}
      <Settings size={22} stroke-width={1.8} />
    {/if}
  </span>

  <span class="label">{label}</span>
</a>

<style>
  .nav-btn {
    flex: 1;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    padding: 0.35rem 0.2rem;
    border-radius: 1rem;
    color: #cbd5f5;
    font-size: 0.75rem;
    transition: color 0.2s ease, background 0.2s ease;
    text-decoration: none;
  }

  .nav-btn:hover {
    color: #f8fafc;
  }

  .nav-btn.active {
    background: rgba(248, 250, 252, 0.18);
    color: #f8fafc;
    box-shadow: inset 0 0 0 1px rgba(248, 250, 252, 0.3);
  }

  .icon {
    width: 1.9rem;
    height: 1.9rem;
    border-radius: 0.85rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(248, 250, 252, 0.08);
  }

  .nav-btn.active .icon {
    background: rgba(248, 250, 252, 0.28);
  }

  /* تنسيق الـ svg اللي تطلع من lucide */
  .icon svg {
    width: 1.35rem;
    height: 1.35rem;
  }

  .label {
    font-weight: 600;
  }
</style>
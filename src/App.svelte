<script>
  import Router from "svelte-spa-router";
  import { routes } from "./router/routes.js";
  import NavBar from "./components/NavBar.svelte";
  import PageContainer from "./components/PageContainer.svelte";
  import "./app.css";

  const activeSubscriptions = 12;
  const upcomingPayments = 3;
  const urgentAlerts = 2;
</script>

<div class="app-root">
  <div class="mobile-shell">

    <PageContainer>
      <!-- هنا راح يترندر محتوى الصفحات -->
      <Router {routes} />
    </PageContainer>

    <NavBar />
  </div>
</div>

<style>
  .app-root {
    min-height: 100vh;
    padding: 1.5rem 1rem 1rem;
    background: radial-gradient(circle at top, #334155, #0f172a 65%);
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  .mobile-shell {
    width: min(430px, 100%);
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    min-height: calc(100vh - 2.5rem);
  }

  .app-header {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    color: #f8fafc;
  }

  .app-kicker {
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #94a3b8;
    margin: 0 0 0.4rem;
  }

  .app-header h1 {
    margin: 0;
    font-size: 1.35rem;
    font-weight: 700;
  }

  .app-intro {
    margin: 0.3rem 0 0;
    color: #cbd5f5;
    font-size: 0.9rem;
  }

  .header-card {
    background: rgba(15, 23, 42, 0.45);
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 1.2rem;
    padding: 0.75rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-width: 95px;
    backdrop-filter: blur(12px);
  }

  .header-value {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1;
  }

  .header-label {
    font-size: 0.85rem;
    color: #cbd5f5;
  }

  .status-widget {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.65rem;
  }

  .status-card {
    border-radius: 1.1rem;
    padding: 0.85rem;
    background: rgba(15, 23, 42, 0.35);
    border: 1px solid rgba(148, 163, 184, 0.35);
    color: #f8fafc;
    text-align: right;
  }

  .status-card.accent {
    background: linear-gradient(135deg, #f97316, #fb923c);
    border: none;
    color: #fff7ed;
    box-shadow: 0 12px 30px rgba(249, 115, 22, 0.35);
  }

  .status-title {
    margin: 0;
    font-size: 0.85rem;
    color: inherit;
    opacity: 0.9;
  }

  .status-value {
    margin: 0.3rem 0;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .status-hint {
    margin: 0;
    font-size: 0.8rem;
    color: inherit;
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    .app-root {
      padding: 1rem 0.75rem 0.5rem;
    }

    .app-header {
      flex-direction: column;
    }

    .header-card {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>

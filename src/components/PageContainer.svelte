<main class="page-container">
  <slot />
</main>

<style>
  .page-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 1.25rem;
    background: #F4F6F9;
    border-radius: 1.5rem;
    box-shadow: 0 25px 65px rgba(15, 23, 42, 0.15);
    min-height: 0;
  }

  @media (max-width: 480px) {
    .page-container {
      padding: 1rem;
      border-radius: 1.1rem;
      box-shadow: 0 15px 40px rgba(15, 23, 42, 0.12);
    }
  }
</style>

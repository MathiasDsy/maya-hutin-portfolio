<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__left">
        <h2 class="footer__name">Maya Hutin</h2>
        <p class="footer__credit">© 2025 — Tous droits réservés</p>
      </div>

      <div class="footer__right">
        <a
          href="https://www.instagram.com/_maya_htn/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__icon"
        >
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>

        <a
          href="https://www.tiktok.com/@whosmayahtn?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__icon"
        >
          <img src="/icons/tiktok.svg" alt="TikTok" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0a0a0a;
  border-top: 1px solid #1f1f1f;
  padding: 2.5rem 4rem;
  color: #f5f5f5;
}

.footer__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer__left {
  display: flex;
  flex-direction: column;
}

.footer__name {
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
  margin-bottom: 0.2rem;
}

.footer__credit {
  font-size: 0.8rem;
  color: #9b9b9b;
}

.footer__right {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.footer__icon img {
  width: 22px;
  height: 22px;
  filter: invert(90%);
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.footer__icon:hover img {
  opacity: 1;
}

/* responsive */
@media (max-width: 700px) {
  .footer {
    text-align: center;
    padding: 2rem;
  }

  .footer__content {
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style>

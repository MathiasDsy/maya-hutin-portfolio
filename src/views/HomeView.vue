<template>
  <section class="hero">
    <!-- image principale -->
    <div class="hero__image-main">
      <img src="/images/hero.jpeg" alt="Peinture abstraite de Maya" />
    </div>

    <!-- contenu texte -->
    <div class="hero__content">
      <h1 class="hero__title">Maya<br>Hutin</h1>

      <p class="hero__role">Artiste Peintresse</p>

      <p class="hero__text">
        Je peins depuis huit ans. La pratique artistique implique un conflit
        permanent entre l'idéalité et le critique. C'est une introspection dont
        j'ai du mal à me passer. Elle m'a apporté beaucoup de choses sur le
        monde, mais aussi sur moi-même.
      </p>

      <a href="/gallery" class="hero__button">Découvrez mes œuvres</a>
    </div>

    <!-- image flottante -->
    <div class="hero__image-floating">
      <img src="/images/maya.jpeg" alt="Maya en train de peindre" />
    </div>
  </section>
  <section class="section-works">
    <div class="section-works__text">
      <h2 class="section-works__title">Mes toiles</h2>
      <p class="section-works__subtitle">
        Je peins principalement des toiles abstraites.
      </p>
      <p class="section-works__desc">
        Je suis formée à différents supports, mais je suis surtout attirée par la
        peinture traditionnelle. J’adore tout ce que la peinture parvient à dire
        de son auteur. De manière ironique, la peinture abstraite rend la
        communication plus facile pour moi.
      </p>
    </div>

    <div class="section-works__image-wrap">
      <video
        src="/videos/maya_painting.mp4"
        autoplay
        muted
        loop
        playsinline
        class="section-works__video"
      ></video>
    </div>
  </section>

</template>

<style scoped>

/* --- pour les sections principales --- */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 6rem 4rem;
  background-color: #0e0e0e;
  color: #f5f5f5;
  position: relative;
}

/* image principale */
.hero__image-main {
  flex: 1;
  max-width: 50%;
}

.hero__image-main img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}

/* contenu texte */
.hero__content {
  flex: 1;
  max-width: 40%;
}

.hero__title {
  font-family: "Playfair Display", serif;
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero__role {
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 2px;
  color: #e0b084;
  margin-bottom: 1rem;
}

.hero__text {
  line-height: 1.7;
  font-size: 0.95rem;
  color: #a3a3a3;
  margin-bottom: 2rem;
  max-width: 90%;
}

.hero__button {
  display: inline-block;
  border: 1px solid #e0b084;
  color: #e0b084;
  text-decoration: none;
  padding: 0.6rem 1.5rem;
  border-radius: 999px;
  transition: 0.2s;
}

.hero__button:hover {
  background-color: #e0b084;
  color: #0e0e0e;
}

/* image flottante */
.hero__image-floating {
  position: absolute;
  bottom: 2rem;
  left: 45%;
  transform: translateX(-50%);
  width: 180px;
  border: 3px solid #0e0e0e;
}

.hero__image-floating img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

/* responsive */
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 4rem 2rem;
  }

  .hero__image-main,
  .hero__content {
    max-width: 100%;
  }

  .hero__image-floating {
    position: static;
    transform: none;
    width: 60%;
    margin: 0 auto;
  }

  .hero__title {
    font-size: 2.5rem;
  }
}
.section-works {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 4rem 4rem 6rem;
  background: #0e0e0e;
}

/* bloc texte */
.section-works__text {
  flex: 1;
}

.section-works__title {
  font-family: "Playfair Display", serif;
  font-size: clamp(3rem, 5vw, 4rem);
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.section-works__subtitle {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.section-works__desc {
  color: #a3a3a3;
  line-height: 1.6;
  max-width: 38rem;
}

/* bloc image avec arc */
.section-works__image-wrap {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.section-works__image-wrap img {
  width: 100%;
  max-width: 420px;
  height: auto;
  object-fit: cover;
  /* le truc qui fait l’arc */
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  overflow: hidden;
  /* pour que ça se détache un peu */
  background: #111;
}

/* responsive */
@media (max-width: 900px) {
  .section-works {
    text-align: center;
    flex-direction: column;
    padding: 3rem 1.5rem 4rem;
  }

  .section-works__image-wrap {
    justify-content: center;
  }

  .section-works__image-wrap img {
    max-width: 80%;
  }
}

.section-works__image-wrap video {
  width: 100%;
  max-width: 420px;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  display: block;
  object-fit: cover;
}

</style>


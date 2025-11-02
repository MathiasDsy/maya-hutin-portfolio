<template>
  <section class="gallery-page">
    <header class="gallery-header">
      <h1>Galerie</h1>
      <p>Aperçu de mes tableaux.</p>
    </header>

    <div class="gallery-grid">
      <article
        v-for="art in artworks"
        :key="art.id"
        class="gallery-item"
        @click="openModal(art)"
      >
        <img :src="art.image" :alt="art.title" />
        <div class="gallery-item__info">
          <h2>{{ art.title }}</h2>
          <p>{{ art.year }}</p>
        </div>
      </article>
    </div>

    <!-- MODAL -->
    <div v-if="selectedArtwork" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <button class="modal__close" @click="closeModal">×</button>

        <div class="modal__content">
          <div class="modal__image">
            <img :src="selectedArtwork.image" :alt="selectedArtwork.title" />
          </div>
          <div class="modal__info">
            <h2>{{ selectedArtwork.title }}</h2>
            <p class="modal__meta">
              {{ selectedArtwork.year }} · {{ selectedArtwork.technique || 'Acrylique sur toile' }}
            </p>
            <p class="modal__desc">
              {{ selectedArtwork.description || "Œuvre abstraite mêlant texture et couleur. Série atelier." }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'


const base = import.meta.env.BASE_URL
console.log(base)
const artworks = [
  {
    id: 1,
    title: 'Éclat rouge',
    year: '2025',
    image: base + '/images/art1.jpeg',
    description: 'Composition centrée autour du rouge, inspirée d’un mouvement intérieur.',
    technique: 'Acrylique'
  },
  {
    id: 2,
    title: 'Sédiments',
    year: '2025',
    image: base + '/images/art2.jpeg',
    description: 'Superpositions et grattages pour créer un effet de matière.',
  },
  {
    id: 3,
    title: 'Nuit marine',
    year: '2025',
    image: base + '/images/art3.jpeg',
    description: 'Palette froide, travail sur la profondeur.',
  },
  {
    id: 4,
    title: 'Fragments',
    year: '2025',
    image: base + '/images/art4.jpeg',
  },
  {
    id: 5,
    title: 'Trace d’or',
    year: '2025',
    image: base + '/images/art5.jpeg',
  },
  {
    id: 6,
    title: 'En suspens',
    year: '2024',
    image: base + '/images/art6.jpeg',
  },
  {
    id: 7,
    title: 'Lignes',
    year: '2024',
    image: base + '/images/art7.jpeg',
  },
  {
    id: 8,
    title: 'Chaleur sourde',
    year: '2024',
    image: base + '/images/art8.jpeg',
  }
]

const selectedArtwork = ref(null)

function openModal(art) {
  selectedArtwork.value = art
  // optionnel : empêcher le scroll derrière
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  selectedArtwork.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
.gallery-page {
  min-height: 100vh;
  background: #0e0e0e;
  color: #f5f5f5;
  padding: 5rem 4rem 4rem;
}

.gallery-header {
  max-width: 900px;
  margin: 0 auto 3rem;
  text-align: center;
}

.gallery-header h1 {
  font-family: "Playfair Display", serif;
  font-size: clamp(2.8rem, 5vw, 3.4rem);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.gallery-header p {
  color: #a3a3a3;
}

/* la mosaïque */
.gallery-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.4rem;
}

.gallery-item {
  background: #121212;
  border: 1px solid #1f1f1f;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s ease, border 0.2s ease;
}

.gallery-item img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
}

.gallery-item__info {
  padding: 0.9rem 1rem 1rem;
}

.gallery-item__info h2 {
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.gallery-item__info p {
  font-size: 0.7rem;
  color: #777;
}

.gallery-item:hover {
  transform: translateY(-4px);
  border: 1px solid #e0b084;
}

/* ===== MODAL ===== */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 50;
}

.modal {
  background: #0e0e0e;
  border: 1px solid #2b2b2b;
  border-radius: 12px;
  max-width: 1000px;
  width: min(100%, 1000px);
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0,0,0,0.4);
  border: none;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  cursor: pointer;
}

.modal__content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1.4rem;
  padding: 2.5rem 2.5rem 2rem;
}

.modal__image img {
  width: 100%;
  height: 100%;
  max-height: 65vh;
  object-fit: cover;
  border-radius: 8px;
}

.modal__info h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: "Playfair Display", serif;
}

.modal__meta {
  color: #a3a3a3;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.modal__desc {
  color: #d1d1d1;
  line-height: 1.6;
  font-size: 0.9rem;
}

/* responsive modal */
@media (max-width: 900px) {
  .gallery-page {
    padding: 4rem 1.5rem 3rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .modal__content {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.5rem 1.5rem;
  }

  .modal {
    max-height: 95vh;
  }
}

@media (max-width: 550px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-item img {
    height: 220px;
  }
}
</style>

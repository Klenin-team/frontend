<script setup>
  import { ref } from 'vue'

  import { storeToRefs } from 'pinia'
  import { useTournamentsStore } from '@/stores/tournaments.js'

  let tournamentsStore = useTournamentsStore()
  let filtersOpened = ref(false)
  let { tournaments, filters } = storeToRefs(tournamentsStore)

  tournamentsStore.getTournaments()
</script>

<style scoped>
  @import '../assets/tournaments.css';
</style>

<template>
  <h1>Турниры</h1>
  <div class="rat-container"></div>
  <main>
    <div class="filters-container">
      <div class="button" id="mobile" @click="() => { filtersOpened = !filtersOpened }">Фильтры</div>
      <div class="filters" :class="{ popup_opened: filtersOpened }">
        <div id="search">
          <input type="text" placeholder="Поиск по названию" v-model="filters.name"
            v-on:keyup.enter="tournamentsStore.getTournaments()">
          <button @click="tournamentsStore.getTournaments()">
            <svg width="21px" height="21px">
              <path d="M15.2105 8.4C15.2105 12.5209 11.996 15.8 8.10526 15.8C4.2145 15.8 1 12.5209 1 8.4C1 4.27913 4.2145 1 8.10526 1C11.996 1 15.2105 4.27913 15.2105 8.4Z" stroke-width="2"/>
              <line y1="-1" x2="10.0811" y2="-1" transform="matrix(0.694369 0.719619 -0.694369 0.719619 14 13.7455)" stroke-width="2"/> 
            </svg>
          </button>
        </div>

        <div class="checkbox-container">
          <input type="checkbox" v-model="filters.my" @change="tournamentsStore.getTournaments()">
          <label for="my">
            Мои
          </label>
        </div>
      </div>
    </div>
    <div class="table">
      <div class="tournament header">
        <h2>Название</h2>
        <div class="dates-container">
          <p>Начало</p>
          <p>Конец</p>
        </div>
      </div>
      <router-link v-for="tournament in tournaments" :to="`/tournament/${tournament.id}/`" 
        class="tournament" :class="{ official: tournament.official, ended: tournament.ended }">
        <h2>{{ tournament.title }}</h2>
        <div class="dates-container">
          <p>{{ tournament.start_date }}</p>
          <p>{{ tournament.end_date }}</p>
        </div>
      </router-link>
    </div>
  </main>
</template>

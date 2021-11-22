<template>
  <div id="app">
    <!-- Navigatie -->
    <nav class="c-nav">
      <ul class="c-nav-list">
        <li class="c-nav-list-item">
          Home
        </li>

        <li class="c-nav-list-item">
          Contact
        </li>
      </ul>
    </nav>

    <h1> Eurosong Festival </h1>

    <div class="c-feedback warning">
      Er is een fout gebeurd.
    </div>

    <div class=" c-feedback error">
    'T is kapot
    </div>
    <div class="c-feedback succes">
      Gelukt
    </div>
  </div>
</template>

<script>

//import of the whole styling for the app
import style from './scss/style.scss'

export default {
  name: 'App',
}
</script>



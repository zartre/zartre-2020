<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <MainNav/>
        <h1 class="title">{{ title }}</h1>
        <p class="period">{{ period }}</p>
      </div>
    </header>
    <main>
      <slot/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import MainNav from '~/components/MainNav'
export default {
  components: {MainNav},
  props: {
      title: String,
      period: String
  }
}
</script>

<style lang="sass" scoped>
header
  margin-bottom: 70px
  @media screen and (max-width: 699px)
    margin-bottom: 40px

.title
  font-size: 3.5em
  line-height: 1em
  margin: 0

footer
  height: 100px
</style>

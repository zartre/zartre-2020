<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <MainNav/>
        <h1 class="nathan">Nathan's</h1>
        <h1 class="title">{{ title }}</h1>
      </div>
    </header>
    <main>
      <slot/>
    </main>
    <footer></footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import MainNav from '~/components/MainNav'
export default {
  components: {MainNav},
  props: {
    title: String
  }
}
</script>

<style lang="sass" scoped>
header
  margin-bottom: 70px
  @media screen and (max-width: 699px)
    margin-bottom: 40px

.nathan
  text-align: left
  font-size: 2em
  margin: 0

.title
  text-align: left
  font-size: 4em
  line-height: 1em
  margin: 0

footer
  height: 100px
</style>

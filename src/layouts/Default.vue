<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <nav>
          <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
          <ul>
            <li><g-link to="/">home</g-link></li>
            <li><g-link to="/work">work</g-link></li>
          </ul>
        </nav>
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
export default {
  props: {
    title: String
  }
}
</script>

<style lang="sass" scoped>
@import '~/styles/_vars'

nav
  margin-bottom: 0
  ul
    flex: 1
    text-align: right
    font-family: $font-title
    font-size: 1.5em
    margin: 2em 0 0
    a
      color: var(--color-text)
    @media screen and (max-width: 699px)
      font-size: 1em

.nathan
  text-align: left
  font-size: 2em
  margin: 0

.title
  text-align: left
  font-size: 4em
  line-height: 1em
  margin: 0 0 60px

footer
  height: 100px
</style>

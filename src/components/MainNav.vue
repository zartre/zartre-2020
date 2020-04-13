<template>
  <nav>
    <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
    <ul>
      <li><g-link to="/">home</g-link></li>
      <li><g-link to="/work">work</g-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainNav"
}
</script>

<style lang="sass" scoped>
@import '~/styles/_vars'

nav
  margin-bottom: 0
  ul
    text-align: right
    font-family: $font-title
    font-size: 24px
    margin: 2em 0 0
    padding: 0
    list-style: none
    li
      display: inline-block
      margin-left: 1em
@media screen and (max-width: 699px)
  nav
    margin-bottom: 2em
    ul
      font-size: 1em
</style>

<template>
  <div class="layout">
    <header class="header">
      <nav>
        <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
        <ul>
          <li><g-link to="/">home</g-link></li>
          <li><g-link to="/work">work</g-link></li>
        </ul>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="sass" scoped>
@import '~/styles/_vars'

nav ul
  flex: 1
  text-align: right
  font-family: $title-font
  font-size: 1.5em
  margin: 2em 0 0
  a
    color: var(--color-text)
  @media screen and (max-width: 699px)
    font-size: 1em
</style>

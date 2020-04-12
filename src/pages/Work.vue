<template>
  <Layout title="Work">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4" v-for="i in 5">
          <article>
            <g-link to="/">
              <figure>
                <img src="https://via.placeholder.com/400x225" alt="Thumbnail">
              </figure>
              <h2>Work name here</h2>
              <p>Mar - Apr 2018</p>
            </g-link>
          </article>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Work'
  }
}
</script>

<style lang="sass" scoped>
article
  figure
    img
      display: block
      width: 100%
  h2
    font-size: 20px
    margin-bottom: 0.5em
  p
    margin: 0 0 1em
  & > a
    display: block
    text-decoration: none
    color: inherit
  &:hover
    opacity: 0.8
</style>
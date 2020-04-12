<template>
  <Layout title="Work">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4" v-for="work in $page.allWork.edges">
          <article>
            <g-link :to="`/work/${work.node.slug}`">
              <figure>
                <g-image :src="work.node.thumbnail" alt="Thumbnail" />
              </figure>
              <h2>{{ work.node.title }}</h2>
              <p>{{ work.node.period }}</p>
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

<page-query>
query {
  allWork {
    edges {
      node {
        title slug thumbnail period
      }
    }
  }
}
</page-query>

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
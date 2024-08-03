<template>
  <Layout title="Work">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1>Compilations</h1>
        </div>
        <div
          class="col-xs-12 col-sm-6 col-md-4"
          v-for="work in $page.compilations.edges"
          :key="work.node.slug"
        >
          <article>
            <g-link :to="`/work/${work.node.slug}`">
              <figure>
                <g-image
                  :src="work.node.image || defaultHero"
                  alt="Thumbnail"
                  width="700"
                  height="394"
                />
              </figure>
              <h2>{{ work.node.title }}</h2>
              <p>{{ work.node.period }}</p>
            </g-link>
          </article>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h1>Projects</h1>
        </div>
        <div
          class="col-xs-12 col-sm-6 col-md-4"
          v-for="work in $page.projects.edges"
          :key="work.node.slug"
        >
          <article>
            <g-link :to="`/work/${work.node.slug}`">
              <figure>
                <g-image
                  :src="work.node.image || defaultHero"
                  alt="Thumbnail"
                  width="700"
                  height="394"
                />
              </figure>
              <h2>{{ work.node.title }}</h2>
              <p>{{ work.node.period }}</p>
            </g-link>
          </article>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h1>School Projects</h1>
        </div>
        <div
          class="col-xs-12 col-sm-6 col-md-4"
          v-for="work in $page.schoolProjects.edges"
          :key="work.node.slug"
        >
          <article>
            <g-link :to="`/work/${work.node.slug}`">
              <figure>
                <g-image
                  :src="work.node.image || defaultHero"
                  alt="Thumbnail"
                  width="700"
                  height="394"
                />
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
    title: "Work",
    meta: [
      {
        name: "description",
        content: "Projects by Nathan"
      }
    ]
  },
  data: () => ({
    defaultHero: "https://via.placeholder.com/700x394?text=Placeholder"
  })
};
</script>

<page-query>
query {
  projects: allWork(filter: {hidden: { ne: true }, tags: { containsNone: ["Portfolio", "High school project", "University project"] }}) {
    edges {
      node {
        title
        slug
        image (width: 700, height: 394, quality: 90)
        period
      }
    }
  }
  schoolProjects: allWork(filter: {hidden: { ne: true }, tags: { containsAny: ["High school project", "University project"] }}) {
    edges {
      node {
        title
        slug
        image (width: 700, height: 394, quality: 90)
        period
      }
    }
  }
  compilations: allWork(filter: {tags: { contains: ["Portfolio"] }}) {
    edges {
      node {
        title
        slug
        image (width: 700, height: 394, quality: 90)
        period
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

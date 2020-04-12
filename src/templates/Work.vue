<template>
  <WorkLayout :title="$page.work.title" :period="$page.work.period">
    <div class="container">
      <article class="work-content" v-html="$page.work.content" />
    </div>
  </WorkLayout>
</template>

<script>
export default {
  name: "Work"
}
</script>

<page-query>
query Work ($id: ID!) {
  work: work(id: $id) {
    title period content
  }
}
</page-query>

<style lang="sass">
@import '~/styles/_vars'
$content-width: 600px
$image-scale: 1.6
$image-scale-percent: $image-scale * 100%

article.work-content
  max-width: $content-width
  margin-right: auto
  margin-left: auto
  p > img
    display: block
    width: $image-scale-percent
    margin-left: (100 - $image-scale-percent) / 2
    margin-top: 3em
    margin-bottom: 3em
    @media screen and (max-width: $content-width * $image-scale)
      width: 100%
      margin-left: 0
</style>

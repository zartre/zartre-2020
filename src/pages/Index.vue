<template>
  <div class="steep">
    <h1 class="title">Bangkok-based Software Developer</h1>
    <svg id="divider" width="1" height="80" viewBox="0 0 1 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0.5" x2="0.5" y2="80" stroke="black"/>
    </svg>
    <h2 class="full-name">Nathan<br>Yiangsupapaanontr</h2>
    <ul class="main-links">
      <li>Blog</li>
      <li>Work</li>
      <li>Github</li>
      <li>LinkedIn</li>
    </ul>
    <ul class="social-links">
      <li>500px</li>
      <li>Instagram</li>
      <li>Twitter</li>
      <li>YouTube</li>
    </ul>
    <div class="bio">
      <p>
        Nathan loves to solve problems with code.
        On some occassions he would go out and log the world with photographs.
        You could also come across him by his writing on Thai App Update because he loves being a journalist so much.
      </p>
      <svg id="circle" width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="80" fill="#71D4FF"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style scoped lang="sass">
.steep
  max-width: 600px
  margin-left: auto
  margin-right: auto
  padding: 0 20px

.title
  text-align: center
  font-size: 4em
  margin: 100px 0 50px 0
  @media screen and (max-width: 699px)
    font-size: 9vw

#divider
  display: block
  margin: 50px auto
  width: 1px

.full-name
  text-align: center
  font-size: 1.5em
  margin: 50px 0

.main-links
  font-size: 2.5em
  text-align: center
  list-style-type: none
  padding: 0
  li
    line-height: 1.5em

.social-links
  font-size: 1.5em
  text-align: center
  white-space: wrap
  list-style-type: none
  padding: 0
  li
    display: inline-block
    margin: 0 0.8em
    line-height: 1.5em

.bio
  display: flex
  margin: 120px 0 170px
  flex-direction: column
  position: relative
  justify-content: center
  align-items: center
  p
    font-size: 20px
    text-align: center
    margin: 0
    z-index: 1
  #circle
    position: absolute
</style>

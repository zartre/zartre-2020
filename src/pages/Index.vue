<template>
  <div class="steep">
    <h1 class="title">Matcha-powered Software Engineer</h1>
    <svg
      id="divider"
      width="1"
      height="80"
      viewBox="0 0 1 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0.5" x2="0.5" y2="80" stroke="black" />
      <line x1="1" x2="1" y2="80" stroke="white" />
    </svg>
    <h2 class="full-name">Nathan (Zartre)<br />Yiangsuppanontr</h2>
    <div class="email">
      <g-image src="~/images/email-black.svg" alt="Email" id="email-black" />
      <g-image src="~/images/email-light.svg" alt="Email" id="email-light" />
    </div>
    <ul class="main-links">
      <li v-for="link in mainLinks" :key="link.name">
        <g-link :to="link.url">{{ link.name }}</g-link>
      </li>
    </ul>
    <ul class="social-links">
      <li v-for="link in socialLinks" :key="link.name">
        <a :href="link.url">{{ link.name }}</a>
      </li>
    </ul>
    <div class="bio">
      <p>
        Nathan loves to solve problems with code. On some occasions he would go
        out and log the world with photographs. You could also come across him
        by his writing on
        <a href="https://thehaptic.co" target="_blank">The Haptic</a>
        because he loves being a journalist so much.
      </p>
      <svg
        id="circle"
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="80" cy="80" r="80" fill="#71D4FF" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      mainLinks: [
        { name: "Blog", url: "https://blog.zartre.com" },
        { name: "Work", url: "/work", internal: true },
        { name: "Github", url: "https://github.com/DobaKung" },
        { name: "LinkedIn", url: "https://linkedin.com/in/zartre" },
      ],
      socialLinks: [
        { name: "500px", url: "https://500px.com/zartre" },
        { name: "Instagram", url: "https://instagram.com/zartre" },
        { name: "Twitter", url: "https://twitter.com/zartre" },
        { name: "YouTube", url: "https://youtube.com/user/zartrey" },
        {
          name: "Stack Overflow",
          url: "https://stackoverflow.com/users/2147513/nathan",
        },
        { name: "Mastodon", url: "https://mastodon.social/@zartre" }
      ],
    };
  },
};
</script>

<style scoped lang="sass">
.steep
  max-width: 640px
  margin-left: auto
  margin-right: auto
  padding: 0 20px

.title
  text-align: center
  font-size: 4em
  margin: 100px 0 50px 0
  @media screen and (max-width: 699px)
    font-size: 9vw
    margin-top: 50px

#divider
  display: block
  margin: 50px auto
  width: 1px

.full-name
  text-align: center
  font-size: 1.5em
  margin: 50px 0 16px

.email
  margin-bottom: 50px
  img
    display: block
    margin: 0 auto
  #email-light
    display: none
    @media screen and (prefers-color-scheme: dark)
      display: block
  #email-black
    @media screen and (prefers-color-scheme: dark)
      display: none

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

<template lang="pug">
.language.page
  .left
    svgx(:src="$page.frontmatter.language.icon")
    .title {{$page.frontmatter.language.title}}
  .main
    breadcrumbs
    Content
</template>

<style lang="scss">
  @import "./scss/helpers.scss";
  .language {
    .left   {display: flex; flex-direction: column; align-items: center;
      img   {width:127px;}
      .title{@include main-title; border-color:#B4C5CF;}
    }
    h2,
    h3      {@include main-title; border-top:none;
      > a   {display: none;}
    }
    h2{font-size:24px;}
    h3{font-size:15px;}
    .frameworks{display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr; justify-items:start; margin-bottom:40px;}
    .default{display: grid; justify-items:start;}
  }
</style>

<script lang="coffee">
  import breadcrumbs from './breadcrumbs'
  import svgx from './svgx'

  export default
    name: 'language'
    components:{breadcrumbs, svgx}
</script>

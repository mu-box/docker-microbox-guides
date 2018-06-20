<template lang="pug">
.language.page
  .left
    a
  .main
    breadcrumbs
    Content
</template>

<style lang="scss">
  @import "./scss/helpers.scss";
  .language {
    h2,
    h3      {@include main-title; border-top:none;
      > a   {display: none;}
    }
    h2{font-size:24px;}
    h3{font-size:15px;}
    .group{display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr; justify-items:start; }
  }
</style>

<script lang="coffee">
  import breadcrumbs from './breadcrumbs'

  export default
    name: 'language'
    components:{breadcrumbs}
    methods:
      getSvg:(filename)->
        # Ensure the svgs are available at runtime
        icons = require.context('../../assets/svg/compiled', false, /\.svg$/)
        icons("./hex-#{filename}.svg")
</script>

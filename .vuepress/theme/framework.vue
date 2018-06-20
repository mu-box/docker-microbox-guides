<template lang="pug">
  .framework.page
    .left
      a
    .main
      breadcrumbs
      .top
        .icons
          img(:src="getSvg($page.frontmatter.framework.icon)")
          .plus
          img(src="~@svgs/hex-docker.svg")
        h1 {{$page.frontmatter.framework.title}}
        h2 How to run {{$page.frontmatter.framework.title}} with Docker
      Content
</template>

<style lang="scss">
  @import "./scss/helpers.scss";
  .framework.page   {
    .main           {background: #EBEFF2; padding:0;

      // ------------ Top Section
      .top          {display: flex; align-items: center; flex-direction: column; padding:20px 0 30px;
        .icons      {display: flex; align-items: center; justify-content: center; margin-top:20px;
          img       {width:71px;}
          .plus     {font-size:30px; font-weight:$bold; color:#285875; margin:0 12px;
            &:after {content:"+"}
          }
        }
        h1          {@include main-title; display: inline-block; margin:0 auto; margin-top:25px;}
        h2          {color:#5A7B8F; font-style:italic; font-wdith: $semibold; font-size:17px; margin-top:10px;}
      }

      // ------------ Article Groups
      .content      {display: grid; grid-template-columns: 1fr 1fr; grid-gap:8px;
        .group      {display:flex; flex-direction: column; align-items: flex-start;  background:white; padding:30px; align-self: stretch;
          h2        {font-size:20px; color:$navy; text-transform: uppercase; font-weight:bold; white-space: no-wrap; letter-spacing: 0.04em; border-bottom: solid 1px #BAC8CF; width:100%; text-align: left; margin-bottom:10px; padding-bottom:7px; font-style:normal;
            a       {display: none;}
          }
          p         {display: flex; flex-direction: column;}
          a         {font-style:italic; color:#0079D6; font-size:15px; font-weight: $semibold; padding:2px 0;}
          &.nanobox,
          &.compose {
            &:after {color:#7F94B8; font-size:$medium; font-size:14px; content:"Via Nanobox"; margin-top:auto; }
          }
          &.compose {
            &:after {content:"Via Docker Compose"}
          }
        }
      }
    }
  }
</style>

<script lang="coffee">
  import breadcrumbs from './breadcrumbs'

  export default
    name: 'framework'
    components:{breadcrumbs}
    methods:
      getSvg:(filename)->
        # Ensure the svgs are available at runtime
        icons = require.context('../../assets/svg/compiled', false, /\.svg$/)
        icons("./hex-#{filename}.svg")
</script>

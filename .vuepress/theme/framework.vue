<template lang="pug">
  .framework
    .top
      .left
        .icons
          svgx(:src="$page.frontmatter.framework.icon")
          .plus
          img(src="~@svgs/hex-docker.svg")
      .right
        breadcrumbs
        h1 How to run {{$page.frontmatter.framework.title}} with Docker
    .content
      .left
      .right
        .options
          .option
            router-link.local(to="/ruby/rails/rails-abc.html")
              img(src="~@svgs/local-dev.svg")
              .title Local Development
            .blurb Configure, containerize and run Ruby on Rails locally with docker compose.
          .option
            router-link.prod(to="/ruby/rails/rails-abc.html")
              img(src="~@svgs/production.svg")
              .title Live in production<br/>via Nanobox
            .blurb Run, scale and manage Ruby on Rails in production with Nanobox.
</template>

<style lang="scss">
  @import "./scss/helpers.scss";
  .framework{
    .top            {max-width:$app-width; margin:0 auto; display:flex; margin-top:100px; margin-bottom:35px;
      .left         {flex-grow:1; padding-right:30px;
        .icons      {display: flex; align-items: center; justify-content: center;
          img       {width:71px;}
          .plus     {font-size:30px; font-weight:$bold; color:#285875; margin:0 12px;
            &:after {content:"+"}
          }
        }
      }
      .right        {width:665px; position:relative;
        h1          {@include main-title; font-size:42px; border:none; max-width:520px; display: inline-block; margin:0 auto;}
      }
    }
    .content            {max-width:$app-width; margin:0 auto; background: white; display: flex;
      .left             {flex-grow: 1; background:#EBEFF2;}
      .right            {width:695px; padding:36px;
        .options        {display: grid; grid-column-gap:36px;  grid-template-columns: 1fr 1fr; ;
          .option       {display: grid; grid-template-rows: auto 50px;
            a           {transition: all 400ms; display: grid; padding:20px 25px; text-transform: uppercase; color:white; font-weight: bold; font-size:24px; letter-spacing: 0.04em;
              .title    {align-self: end;}
              img       {align-self: center; justify-self:center; min-height:180px}
              &.local   {background: #EF3941;
                img     {width:121px}
                &:hover {background: #FF4752;}
              }
              &.prod    {background: #4F9AEF;
                img     {width:135px;}
                &:hover {background: #57A4FF;}
              }
              &:hover   {transition: all 80ms, background 170ms; margin:-1px 0px 1px 0px; box-shadow: -1px 4px 9px rgba(black,0.2); }
            }
            .blurb      {color:#7F94B8; font-size:$medium; font-size:14px; margin:10px 0; font-weight: $semibold; font-style: italic; margin-top:20px; line-height: 1.5;}
          }
        }
      }
    }
  }
  .framework.page   {
    .main           {background: none; padding:0;

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
  import svgx from './svgx'
  export default
    name: 'framework'
    components:{breadcrumbs, svgx}

</script>

<template lang="pug">
  .left
    .left-nav
      .link(v-for="page in data.links" :class="{active:page.url == fileName}")
        router-link( :to="`${data.root}${page.url}.html`") {{page.txt}}
        transition(name="fade")
          .h1-links(v-if="page.url == fileName")
            .sub
              a(v-for="item in $page.headers" @click="scrollTo(item.slug)" :class="`h${item.level}`") {{item.title}}
</template>

<style lang="scss">
@import './scss/helpers';
  .fade-enter-active{transition: all 500ms;}
  .fade-enter,
  .fade-leave-to{opacity:0; height:0;}

  .left-nav                   {top:0; transition: top 300ms; margin-top:-6px;
    .link                     {margin:6px 0; transition: all 300ms;
      > a                     {color:#467CB0; font-size:16px; font-weight: $bold; transition: all 300ms; }
      &.active                {margin-top:14px; margin-bottom:10px;
        > a                   {color:#00265C; border-bottom:solid 3px #66B5F2; padding-bottom:3px;  }
      }
    }
    .sub                      {display:flex; flex-direction: column; margin:15px 0 20px;
      a                       {font-size:13px; padding: 5px 0; color:#285875; cursor: pointer;
        &.h1                  {border-bottom:solid 1px #E1E9ED; padding-bottom:10px; margin-bottom:10px;color:$navy; text-transform:uppercase; font-style:normal; font-size:13px;  letter-spacing: 0.06em; font-weight:$bold;}
        &.h3, &.h4,
        &.h5, &.h6            {padding-left:20px;}
        &:hover               {color:#000C2F;}
      }
    }
  }
  body.fix-nav{
    .left-nav{position: fixed; top:20px; overflow-y:auto; bottom:0; width:350px;}
  }

</style>

<script lang="coffee">
  VueScrollTo = require '../../node_modules/vue-scrollto/vue-scrollto.js'

  export default
    name: 'left-nav'
    data: ->
      fileName : ""
      data     : {}
    created:->

    mounted:->
      window.addEventListener 'scroll', @onScroll
      @leftNavYpos = @getTopOfLeftNav()
      @initialize()

    watch:
      $page:->
        @initialize()

    destroyed:->
      window.removeEventListener 'scroll', @onScroll
      document.body.classList.remove 'fix-nav'
      @fixNav false

    methods:
      initialize : ->
        @fixNav false
        navs = require.context('../../navs', false, /\.js$/)
        @data = navs("./#{@$page.frontmatter.nav}.js").default
        # determine file name. EX : "some/dir/some.file" -> "some"
        @fileName    =  @$page.path.split('/').pop().split('.')[0]

      scrollTo : (el) ->
        VueScrollTo.scrollTo "##{el}", 600, {easing: [0.9, 0.0, 0.0, 1.0]}

      onScroll : () ->
        if window.scrollY > @leftNavYpos
          @fixNav()
        else
          @fixNav false

      # ------------  helpers

      fixNav : (doIt=true) ->
        if doIt
          document.body.classList.add 'fix-nav'
        else
          document.body.classList.remove 'fix-nav'

      getTopOfLeftNav : () ->
        @$el.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop;


</script>

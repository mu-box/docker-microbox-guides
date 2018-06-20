<template lang="pug">
  .breadcrumbs
    //- a(:href="page.href" v-for="page in crumbs") {{page.txt}}
    router-link(:to="page.href" v-for="(page, i) in crumbs" :key="i") {{page.txt}}
</template>

<style lang="scss">
  @import './scss/helpers';
  .breadcrumbs         {display:flex; position: absolute; top:-28px; left:0; font-size:12px; text-transform: uppercase; font-weight: $semibold;
    a                  {color:$navy;position:relative; margin-right:14px; letter-spacing:0.05em;
      &:before         {content:"> "; position:absolute; transform:scale(0.5,1); font-size:17px; right:-12px; top:-2px; color:#A4B0BF;}
      &:first-child    {
        &:after        {content:'home'}
      }
      &:last-child     {pointer-events: none; border-bottom: solid 1px rgba($navy, 0.15);
        &:before       {content:''}
      }
      &:hover          {border-bottom:solid 1px; }
      &.current        {font-style:italic; text-transform: none; pointer-events: none; letter-spacing:0; font-size:13px;
        &:first-letter {text-transform:uppercase;}
      }
    }
  }
  // body.fix-nav{
  //   .breadcrumbs{position: fixed; top:0; width:$app-width; margin:0 auto; left:0; right:0; background:rgba(#DBE1E6, 0.8); padding:4px 0; }
  // }
</style>

<script lang="coffee">
  export default
    name: 'breadcrumbs'
    data: ()->
      {crumbs:[]}
    mounted: ()-> @parseCrumbs()
    watch:
      $page:-> @parseCrumbs()
    methods:
      parseCrumbs:->
        # If the url has a file extension then remove it. ex : file.html
        path       = @$page.path.split(".")[0]

        # Remove any trailing slash. ex: path/to/file/
        if path.slice(-1) == "/"
          path = path.slice(0, -1)

        # Add a breadcrumb for each directory in the path.
        # ex: ruby/rails/current-page.html -> ruby > rails > current page
        locations  = path.split("/")
        href       = ""
        crumbs     = []
        for location in locations
          href += "/" if href != "/"
          href = "#{href}#{location}"
          # replace dashes with spaces
          crumbs.push {txt:location.replace(/-/g, ' '), href:"#{href}"}
        @crumbs = crumbs

</script>

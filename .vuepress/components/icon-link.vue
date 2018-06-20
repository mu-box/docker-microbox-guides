<template lang="pug">
  .icon-link
    router-link(:to="href")
      img(:src="getSvg(icon)")
      .txt {{title}}
</template>

<style lang="scss" scoped>
  .icon-link          {margin:25px 0 8px;
    a                  {display: flex; flex-direction: column; align-items: center; cursor:pointer; color:#809CAD; text-transform:uppercase; font-size:15px; letter-spacing:0.06em; position:relative; transition:all 200ms; font-weight:bold;
      img              {width:70px}
      .txt             {margin-top:7px}
      &.active,
      &:hover          {color:#1B415D;
        .icon:after    {opacity:1;}
      }
      &.new            {
        &:before       {z-index: 2; position: absolute; top:12px; right:15px; content:""; display:block; background:url(/assets/sprite.png); width:31px; height:31px; background-position:-214px -11px;}
        &:hover:before {top:13px; left:-7px; width:121px; height:41px; background-position:-72px -9px;}
      }
    }
    &.horiz            {
      a                {flex-direction: row;
        .txt           {margin-top:0; margin-left:13px;}
      }
    }
  }
</style>

<script lang="coffee">
  export default
    name : 'icon-link'
    props:
      icon:  {type: String, default: 'generic'}
      title: {type: String, default: 'Define a Title'}
      href:  {type: String, default: '/'}
    methods:
      getSvg:(filename)->
        # Ensure the svgs are available at runtime
        icons = require.context('../../assets/svg/compiled', false, /\.svg$/)
        icons("./hex-#{filename}.svg")

</script>

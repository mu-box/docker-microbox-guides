<!--
  This component exists to force webpack to bundle all the svgs that
  aren't encluded explicitly but are required dynamically at runtime. 
-->
<template lang="pug">
  img(:src="getSvg(src)")
</template>


<script lang="coffee">
  export default
    name: 'svgx'
    props:['src']
    methods:
      getSvg:(filename)->
        # Ensure the svgs are available at runtime
        icons = require.context('../../assets/svg/compiled', false, /\.svg$/)
        icons("./hex-#{filename}.svg")
</script>

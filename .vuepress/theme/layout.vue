<script lang="coffee">
  # Page templates
  import home      from './home'
  import language  from './language'
  import framework from './framework'
  import doc       from './doc'

  # Other info
  import metahead  from './metahead'

  export default
    name: 'microbox'
    components : {doc, metahead, language, framework, home}

</script>

<template lang="pug">
  .microbox
    metahead
    language(v-if="$page.frontmatter.kind == 'language'" )
    framework(v-else-if="$page.frontmatter.kind == 'framework'" )
    home(v-else-if="$page.frontmatter.kind == 'home'" )
    doc(v-else )
</template>

<style lang="scss">
  @import './scss/base';
  .microbox {}
</style>

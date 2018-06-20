<template lang="pug">
  .metahead
</template>

<style lang="scss" scoped>
  .metahead {}
</style>


<script lang="coffee">
  export default
    name: 'metahead'
    
    created: ()->
      initTypekit()

    mounted: ()->
      @currentMetaTags = []
      @$watch '$page', @updateMeta
      @updateMeta()

    methods:
      updateMeta : () ->
        document.title = @$title
        meta = [
          {name:'description', content:@$description }
        ]
        @currentMetaTags = updateMetaTags(meta, @currentMetaTags)

  # ------------ Helpers

  updateMetaTags = (meta, currentTags) ->
    # remove any old tags
    if currentTags?
      for tag in currentTags
        document.head.removeChild(tag)

    # Add the new tags
    if meta?
      return meta.map (metaItem) ->
        tag = document.createElement('meta')
        for key, val of metaItem
          tag.setAttribute key, val
        document.head.appendChild tag
        return tag

  initTypekit = ->
    try
      Typekit.load({ async: true });
    catch error

</script>

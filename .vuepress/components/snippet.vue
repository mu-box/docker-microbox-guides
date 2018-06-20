<!--
# Example instantiation:
<snippet>
  web.dockerfile
</snippet>

# Show default icon instead of dockerfile
<snippet icon="default" />
-->

<template lang="pug">
  .code-snippet
    .icon
      img(v-if="icon == 'docker'" src="~@svgs/docker-file.svg")
      img(v-else src="~@svgs/snippet-file.svg")
    .details
      .path
        slot
      .actions
        .btn.view(@click="toggleVisibility")
          img(src="~@svgs/view-snippet.svg")
          .txt View In Place
        .btn.copy(ref="copyBtn")
          img(src="~@svgs/copy-snippet.svg")
          .txt Copy To Clipboard
</template>

<style lang="scss">
  @import "../theme/scss/helpers.scss";
  .cloaked{display: none;}
  .code-snippet          {display:flex; background: #F3F4F5; border: solid #E8ECF2 3px;
    .icon                {padding:10px 15px 10px 15px; border-right: solid #E8ECF2 3px;
      img                {width:55px;}
    }
    .details             {display:flex; flex-direction:column; align-items: flex-start; justify-content: flex-end; padding-left:15px;
      .path              {font-family: $code; font-weight:bold; color:#195275; font-size:17px; margin-bottom:18px; }
      .actions           {display:flex; align-items: center; margin-bottom:15px;
        .btn             {display:flex; align-items: center; background:#1CACEF; color:white; font-weight: $semibold; font-size:16px; height: 30px; padding:0 15px; margin-right:20px; border-radius:3px; cursor:pointer;
          img            {margin-right:8px; }
          &.view img     {width:22px; }
          &.copy img     {width:24px; height: 17px;}
          &:hover        {background:#09A0E7;}
          &.copy-success,
          &.copy-error   {position: relative;
            &:after      {content:" Copied!"; position: absolute; right: -60px; font-size:13px; color:#09A0E7; }
          }
          &.copy-error   {
            &:after      {content:" Browser unable to copy"; color:#E70966; right: -160px;}
          }
        }
      }
    }
  }
</style>

<script lang="coffee">
  import Clipboard         from 'clipboard'

  export default
    name       : 'snippet'
    props      : {icon: {type: String, default: 'docker'} }
    methods:

      # Toggle visiblity of next element
      toggleVisibility:()->
        if @isVisible
          @$codeSnippet.classList.add('cloaked')
        else
          @$codeSnippet.classList.remove('cloaked')
        @isVisible = !@isVisible

      # Get the code snippet and prepare it for copying
      getCopyTarget : ()->
        if !@isVisible
          @doHideSnippet = true
          @toggleVisibility()
        @$codeSnippet

      # Called on successful copy
      copySuccess : (e)->
          @$refs.copyBtn.classList.add 'copy-success'
          e.clearSelection()
          if @doHideSnippet
            @doHideSnippet = false
            @toggleVisibility()

      # Not sure if this ever happens, but..
      copyError : (e) ->
        @$refs.copyBtn.classList.add 'copy-error'


    # When component is mounted, hide the html element directly after it
    mounted: ->
      @$codeSnippet = @$el.nextSibling
      @isVisible    = true
      @toggleVisibility()
      clipboard = new Clipboard @$refs.copyBtn,
        target : @getCopyTarget
      clipboard.on 'success', @copySuccess
      clipboard.on 'error',   @copyError

</script>

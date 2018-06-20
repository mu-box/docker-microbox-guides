<template lang="pug">
.home
  .languages-and-frameworks
    .title
      img.map(src="~@svgs/map.svg")
      .txt Guides : Choose A Language
    .languages
      router-link.hex( to="/python")
        .icon
          img(src="~@svgs/hex-python.svg")
        .txt Python
      router-link.hex( to="/php")
        .icon
          img(src="~@svgs/hex-php.svg")
        .txt PHP
      router-link.hex( to="/nodejs")
        .icon
          img(src="~@svgs/hex-node.svg")
        .txt Nodejs
      router-link.hex( to="/ruby")
        .icon
          img(src="~@svgs/hex-ruby.svg")
        .txt Ruby
      router-link.hex( to="/javascript")
        .icon
          img(src="~@svgs/hex-javascript.svg")
        .txt Javascript
      router-link.hex( to="/elixir")
        .icon
          img(src="~@svgs/hex-elixir.svg")
        .txt Elixir
      router-link.hex.new( to="/golang")
        .icon
          img(src="~@svgs/hex-golang.svg")
        .txt Go
      router-link.hex.new( to="/java")
        .icon
          img(src="~@svgs/hex-java.svg")
        .txt Java
      router-link.hex.new( to="/net")
        .icon
          img(src="~@svgs/hex-net.svg")
        .txt .NET
      router-link.hex.new( to="/scala")
        .icon
          img(src="~@svgs/hex-scala.svg")
        .txt Scala
      router-link.hex.new( to="/rust")
        .icon
          img(src="~@svgs/hex-rust.svg")
        .txt Rust
      router-link.hex.new( to="/erlang")
        .icon
          img(src="~@svgs/hex-erlang.svg")
          .txt Erlang
      router-link.hex.new( to="/perl")
        .icon
          img(src="~@svgs/hex-perl.svg")
        .txt Perl
      router-link.hex.new( to="/clojure")
        .icon
          img(src="~@svgs/hex-clojure.svg")
        .txt Clojure
      //- router-link.hex()
      //-   .icon
      //-     img(src="~@svgs/hex-mono.svg")
      //-   .txt Mono
      router-link.hex.new(to="/c")
        .icon
          img(src="~@svgs/hex-c.svg")
        .txt C

    .other-links
      a(href="//docs.nanobox.io")
        img.hand(src="~@svgs/docs-hand.svg")
        .txt Comprehensive<br/>Documentation
      a(href="/components")
        img.cube(src="~@svgs/services-bundle.svg")
        .txt View all Database and<br/>Code Components
        //- a.direction-link.more(href="#")
        //-   .txt View More
        //-   img(src="~@svgs/right-arrow")

</template>

<style lang="scss" >
@import "./scss/helpers.scss";
$lang-width  : 690px;
.home                       {display:flex; flex-direction:column;

  // Various Svgs
  img{
    &.hand                  {width:137px;}
    &.map                   {width:37px;}
    &.cube                  {width:70px;}
  }

  .languages-and-frameworks {max-width:$lang-width; margin:0 auto; text-align: center; font-weight: $bold; margin-top:30px; position:relative;
    .title                  {width:93%; margin: 0 auto; display: flex; justify-content: center; align-items:center;letter-spacing:0.06em; padding-bottom:20px; border-bottom:solid 1px #C4CCD1;
      .txt                  {color:#548099; font-size:18px; text-transform:uppercase; margin-left:10px;}
    }
    .languages              {max-width:$lang-width; margin:0 auto; display:flex; flex-wrap:wrap; flex-flow: row wrap; padding-top:30px;
      a                     {width:20%; padding-bottom:50px;  }
      img                   {width:70px;}
    }
    @media screen and (max-width:$lang-width)
                            {width:100%}
    @media screen and (max-width:575px)
                            {
      .other-links          {justify-content: space-around;
        a                   {flex-direction: column; align-items: center;
          .txt              {margin:0;}
        }
      }
    }
    @media screen and (max-width:480px)
                            {.languages a{width:20% }
    }
    @media screen and (max-width:410px)
                            {.languages a{width:25% }
    }
    @media screen and (max-width:375px)
                            {
      .languages a          {width:33% }
      .other-links          {
        a                   {
          .txt              {font-size:14px; }
        }
      }
    }
  }
  .other-links              {display:flex; width:93%; margin: 0 auto; justify-content: space-between; border-top:solid 1px #C4CCD1; padding-top:24px; margin-top:-15px;
    a                       {display:flex;align-items: center;
      .txt                  {color:#1884D6; font-style:italic; font-weight:$semibold; margin-left:18px; }
      &:hover               {
        .txt                {color:#00335B;}
      }
    }
  }
}
</style>

<script lang="coffee">
  export default
    name: 'home'
</script>

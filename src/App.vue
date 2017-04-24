<template>
  <div class="RootWrap">
    <header-bar></header-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>


<script>
  import HeaderBar  from  './views/common/Header.vue'
  import FooterBar  from  './views/common/Footer.vue'
  export default {
    components: { HeaderBar, FooterBar }
  }
</script>


<style>
  body{
      margin:0;
      font:14px/18px 'GothamProNarrow-Medium', Arial, Helvetica, sans-serif;
      color:#000;
      background: #fff;
  }
  img{border-style:none;width: 100%;}
  a {
      text-decoration:none;
      color: #000;
  }
  a:hover, a:active {
    color: #046736;
      border-bottom: 1px solid #ffd700;
      text-decoration: none;
  }

  header, footer, article, section, nav, figure, aside { display: block; }
  figure, ul, li, p, h1, h2, h3, h4 { margin:0; padding:0; }
  input[type="image"]{padding:0;border:none;}
  input[type=text], input[type=password], input[type=file], input[type=submit], input[type=button], textarea{-webkit-appearance:none;}
  form,
  fieldset{
      margin:0;
      padding:0;
      border-style:none;
  }
  li {
    list-style-type: none;
  }
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
  .btn {
      font-size: 14px;
      font-weight: 500;
      line-height: 37px;
      border: solid 1px #ffd700;
      background: transparent;
      color: #000;
      text-transform: uppercase;
      padding: 0 9px;
  }
  .head-text {
      font-size: 24px;
      font-weight: 500;
      line-height: 28px;
      border-bottom: 1px solid #ffd700;
      color: #000;
      display: inline-block;
      text-transform: uppercase;
      margin-top: 10px;
  }
  .active {
      color: #046736;
      border-bottom: 1px solid #ffd700;
  }
</style>

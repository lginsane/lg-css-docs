import{_ as o,c,o as e,a as s}from"./app.7c8ac370.js";const u='{"title":"\u989C\u8272color","description":"","frontmatter":{},"relativePath":"basics/background.md","lastUpdated":1639475387422}',a={},r=s(`<h1 id="\u989C\u8272color" tabindex="-1">\u989C\u8272color <a class="header-anchor" href="#\u989C\u8272color" aria-hidden="true">#</a></h1><p>\u6309\u9700\u4F7F\u7528</p><div class="language-"><pre><code>import &#39;lg-css/dist/color.css&#39;
or
import &#39;lg-css/color.css&#39;
</code></pre></div><p>\u81EA\u5B9A\u4E49\u914D\u7F6E</p><div class="language-\u81EA\u5B9A\u4E49\u914D\u7F6E"><pre><code>@import &quot;lg-css/packages/scss/common/mixin.scss&quot;;

$bg-color: (&#39;000&#39;: #000000, &#39;fff&#39;: #ffffff);
@include customStyle(&#39;background-color&#39;, $bg-color);
</code></pre></div><p>\u4F7F\u7528\u4F8B\u5B50\uFF1A <code>.bg-000</code>\u3001<code>.bg-fff</code></p>`,6),t=[r];function d(n,i,l,p,_,f){return e(),c("div",null,t)}var m=o(a,[["render",d]]);export{u as __pageData,m as default};
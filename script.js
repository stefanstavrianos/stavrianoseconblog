(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({&#39;gtm.start&#39;:
new Date().getTime(),event:&#39;gtm.js&#39;});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!=&#39;dataLayer&#39;?&#39;&amp;l=&#39;+l:&#39;&#39;;j.async=true;j.src=
&#39;https://www.googletagmanager.com/gtm.js?id=&#39;+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,&#39;script&#39;,&#39;dataLayer&#39;,&#39;GTM-MJSLR9N&#39;);{&quot;@context&quot;:&quot;http://schema.org&quot;,&quot;@type&quot;:&quot;WebSite&quot;,&quot;name&quot;:&quot;<data:view.title.escaped/      </b:if>
      <!-- Font Awesome Free 5.15.2 -->
      <b:tag href='https://pro.fontawesome.com/releases/v5.15.3/css/all.css' name='link' rel='stylesheet'/>
      <b:tag cond='data:blog.languageDirection == &quot;rtl&quot;' href='https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&amp;display=swap' name='link' rel='stylesheet'/>
    </b:includable>
    <b:includable id='theme-body-class'>
      <b:class cond='data:view.isHomepage' name='is-home'/>
      <b:class cond='data:view.isMultipleItems' name='is-multiple'/>
      <b:class cond='data:view.isSingleItem' name='is-single'/>
      <b:class cond='data:view.isPage' name='is-page'/>
      <b:class cond='data:view.isPost' name='is-post'/>
      <b:class cond='data:view.isError' name='is-multiple is-error'/>
      <b:class cond='data:blog.isMobileRequest' name='is-mobile'/>
      <b:class cond='data:skin.vars.boxed == &quot;1px&quot;' name='is-boxed'/>
      <b:class cond='data:skin.vars.sidebar == &quot;1px&quot;' name='is-left'/>
    </b:includable>
    <b:includable id='theme-custom-lang'>
      <b:switch var='data:message'>
        <b:case value='prevPost'/><b:if cond='data:blog.locale.language == &quot;en&quot;'>Previous Post<b:elseif cond='data:blog.locale.language == &quot;es&quot;'/>ArtÃ&#173;culo Anterior<b:elseif cond='data:blog.locale.language == &quot;pt&quot;'/>Postagem Anterior<b:else/><data:messages.newer/></b:if>
        <b:case value='nextPost'/><b:if cond='data:blog.locale.language == &quot;en&quot;'>Next Post<b:elseif cond='data:blog.locale.language == &quot;es&quot;'/>ArtÃ&#173;culo Siguiente<b:elseif cond='data:blog.locale.language == &quot;pt&quot;'/>PrÃ&#179;xima Postagem<b:else/><data:messages.older/></b:if>
        <b:case value='loadMorePosts'/><b:if cond='data:blog.locale.language == &quot;en&quot;'>Load More<b:elseif cond='data:blog.locale.language == &quot;es&quot;'/>Carga MÃ&#161;s<b:elseif cond='data:blog.locale.language == &quot;pt&quot;'/>Carregar Mais<b:else/><data:messages.loadMorePosts/></b:if>
        <b:case value='noMorePosts'/><b:if cond='data:blog.locale.language == &quot;en&quot;'>That is All<b:elseif cond='data:blog.locale.language == &quot;es&quot;'/>Eso es Todo<b:elseif cond='data:blog.locale.language == &quot;pt&quot;'/>Isso Ã&#169; Tudo<b:else/><data:messages.noResultsFound/></b:if>
      </b:switch>
    </b:includable>
    <b:includable id='widget-title'>
      <b:if cond='data:title == &quot;{ads}&quot;'>
        <b:class name='is-ad'/>
        <b:elseif cond='data:widget.type == &quot;AdSense&quot;'/>
        <b:class name='is-ad'/>
      </b:if>
      <b:if cond='data:defaultTitle or data:title'>
        <b:if cond='(data:title != &quot;{ads}&quot;)'>
          <b:if cond='data:widget.sectionId not in [&quot;ify-panel&quot;,&quot;main-logo&quot;,&quot;litespot-pro-main-nav&quot;,&quot;header-ads&quot;,&quot;featured&quot;,&quot;footer-ads&quot;,&quot;litespot-pro-post-footer-ads&quot;,&quot;litespot-pro-about-section&quot;,&quot;footer-copyright&quot;,&quot;footer-menu&quot;]'>
            <div expr:class='data:widget.sectionId in [&quot;content-section-1&quot;,&quot;content-section-2&quot;,&quot;sidebar&quot;] ? &quot;widget-title title-wrap&quot; : &quot;widget-title&quot;'><h3 class='title'><data:title/></h3></div>
          </b:if>
        </b:if>
      </b:if>
    </b:includable>
    <b:includable id='linklist-content'>
      <b:if cond='data:widget.sectionId == &quot;litespot-pro-main-nav&quot;'>
        <ul id='litespot-pro-main-nav-menu' role='menubar'>
          <b:loop values='data:links' var='link'>
            <li><b:if cond='data:link.target contains &quot;getContent&quot;'><b:class name='has-sub mega-menu'/><a expr:data-shortcode='data:link.target' href='#' role='menuitem'><data:link.name/></a><b:else/><a expr:href='data:link.target in [&quot;{homepage}&quot;] ? data:blog.homepageUrl.canonical : data:link.target' role='menuitem'><data:link.name/></a></b:if></li>
          </b:loop>
        </ul>
        <b:elseif cond='data:widget.sectionId in [&quot;sidebar&quot;,&quot;litespot-pro-about-section&quot;]'/>
        <b:tag class='widget-content' cond='data:widget.sectionId not in [&quot;litespot-pro-about-section&quot;]' name='div'>
          <b:if cond='data:links any l =&gt; l.name in [&quot;blogger&quot;,&quot;facebook&quot;,&quot;facebook-f&quot;,&quot;twitter&quot;,&quot;rss&quot;,&quot;youtube&quot;,&quot;skype&quot;,&quot;stumbleupon&quot;,&quot;tumblr&quot;,&quot;vk&quot;,&quot;stack-overflow&quot;,&quot;github&quot;,&quot;linkedin&quot;,&quot;dribbble&quot;,&quot;soundcloud&quot;,&quot;behance&quot;,&quot;digg&quot;,&quot;instagram&quot;,&quot;pinterest&quot;,&quot;pinterest-p&quot;,&quot;twitch&quot;,&quot;delicious&quot;,&quot;codepen&quot;,&quot;amazon&quot;,&quot;reddit&quot;,&quot;whatsapp&quot;,&quot;messenger&quot;,&quot;microsoft&quot;,&quot;telegram&quot;,&quot;discord&quot;,&quot;apple&quot;,&quot;email&quot;,&quot;external-link&quot;]'>
            <b:if cond='data:widget.sectionId == &quot;sidebar&quot;'>
              <ul class='social-icons social social-bg'>
                <b:loop index='i' values='data:links' var='link'>
                  <li expr:class='data:link.name + &quot; link-&quot; + data:i'><a expr:alt='data:link.name' expr:class='data:link.name + &quot; btn&quot;' expr:href='data:link.target' expr:title='data:link.name' rel='noopener noreferrer' target='_blank'/></li>
                </b:loop>
              </ul>
              <b:else/>
              <ul class='social-icons social social-bg-hover'>
                <b:loop index='i' values='data:links' var='link'>
                  <li expr:class='data:link.name + &quot; link-&quot; + data:i'><a expr:alt='data:link.name' expr:class='data:link.name + &quot; btn&quot;' expr:href='data:link.target' expr:title='data:link.name' rel='noopener noreferrer' target='_blank'/></li>
                </b:loop>
              </ul>
            </b:if>
            <b:else/>
            <ul class='link-list list-style'>
              <b:loop values='data:links' var='link'>
                <li><a expr:href='data:link.target'><data:link.name/></a></li>
              </b:loop>
            </ul>
          </b:if>
        </b:tag>
        <b:else/>
        <b:tag class='widget-content' cond='data:widget.sectionId not in [&quot;footer-menu&quot;]' name='div'>
          <ul expr:class='data:widget.sectionId == &quot;footer-menu&quot; ? &quot;link-list&quot; : &quot;link-list list-style&quot;'>
            <b:loop values='data:links' var='link'>
              <li><a expr:href='data:link.target'><data:link.name/></a></li>
            </b:loop>
          </ul>
        </b:tag>
      </b:if>
    </b:includable>
    <b:includable id='html-content'>
      <b:if cond='data:widget.sectionId == &quot;ify-panel&quot;'>
        <b:if cond='data:content != &quot;&quot;'>
          <b:tag name='script' type='text/javascript'>
            <b:with expr:value='data:content' var='option'>
              <b:if cond='data:option.viewAllText'>var viewAllText = &quot;<data:option.viewAllText/>&quot;;</b:if>
              <b:if cond='data:option.dateFormat'>var dateFormat = &quot;<data:option.dateFormat/>&quot;;</b:if>
              <b:if cond='data:option.months'>
                var monthNames = [&quot;<data:option.months.jan/>&quot;,&quot;<data:option.months.feb/>&quot;,&quot;<data:option.months.mar/>&quot;,&quot;<data:option.months.apr/>&quot;,&quot;<data:option.months.may/>&quot;,&quot;<data:option.months.jun/>&quot;,&quot;<data:option.months.jul/>&quot;,&quot;<data:option.months.aug/>&quot;,&quot;<data:option.months.sep/>&quot;,&quot;<data:option.months.oct/>&quot;,&quot;<data:option.months.nov/>&quot;,&quot;<data:option.months.dec/>&quot;];
              </b:if>
            </b:with>
          </b:tag>
        </b:if>
      <b:elseif cond='data:widget.sectionId == &quot;litespot-pro-related-posts&quot;'/>
        <b:with value='data:title ? &quot;$title={&quot; + data:title + &quot;} &quot; : &quot;&quot;' var='relatedTitle'>
          <b:attr expr:value='data:relatedTitle + (data:content contains &quot;results&quot; ? data:content : &quot;&quot;)' name='data-shortcode'/>
        </b:with>
        <b:else/>
        <b:if cond='data:content contains &quot;getContent&quot; and data:widget.sectionId in [&quot;ticker&quot;,&quot;featured&quot;,&quot;content-section-1&quot;,&quot;content-section-2&quot;]'>
          <b:class name='is-visible'/>
        </b:if>
        <b:include name='widget-title'/>
        <div class='widget-content'>
          <b:if cond='data:content contains &quot;getContent&quot; and data:widget.sectionId in [&quot;sidebar&quot;,&quot;ticker&quot;,&quot;featured&quot;,&quot;content-section-1&quot;,&quot;content-section-2&quot;]'>
            <b:attr expr:value='data:content' name='data-shortcode'/>
            <b:else/>
            <data:content/>
          </b:if>
        </div>
      </b:if>
    </b:includable>
    <b:includable id='textlist-content'>
      <b:if cond='data:widget.sectionId == &quot;ify-panel&quot;'>
        <b:loop index='i' values='data:items' var='item'>
          <b:if cond='data:i == 0'>
            <script async='async' crossorigin='anonymous' defer='defer' expr:src='data:item'/>
          </b:if>
        </b:loop>
        <b:else/>
        <div class='widget-content'>
          <ul class='text-list list-style'>
            <b:loop values='data:items' var='item'>
              <li><data:item/></li>
            </b:loop>
          </ul>
        </div>
      </b:if>
    </b:includable>
    <b:includable id='image-content'>
      <b:if cond='data:widget.sectionId == &quot;ify-panel&quot;'>
        <b:tag name='script' type='text/javascript'>var noThumbnail = &quot;<b:eval expr='resizeImage(data:sourceUrl, 72, &quot;1:1&quot;)'/>&quot;;</b:tag>
        <b:elseif cond='data:widget.sectionId == &quot;litespot-pro-about-section&quot;'/>
        <a class='footer-logo custom-image' expr:href='data:link'>
          <img expr:alt='data:blog.title' expr:id='data:widget.instanceId + &quot;_img&quot;' expr:src='data:sourceUrl'/>
        </a>
        <b:if cond='data:caption'>
          <div class='footer-info'>
            <p class='image-caption excerpt'><data:caption/></p>
          </div>
        </b:if>
        <b:else/>
        <div class='widget-content'>
          <div class='custom-image'>
            <b:tag cond='data:link' expr:href='data:link' name='a'>
              <img expr:alt='data:blog.title' expr:id='data:widget.instanceId + &quot;_img&quot;' expr:src='data:sourceUrl'/>
            </b:tag>
          </div>
          <b:if cond='data:caption'>
            <p class='image-caption excerpt'><data:caption/></p>
          </b:if>
        </div>
      </b:if>
    </b:includable>
    <b:includable id='text-content'>
       <b:if cond='data:widget.sectionId == &quot;footer-copyright&quot;'>
        <data:content/>
        <b:elseif cond='data:widget.sectionId == &quot;litespot-pro-cookie-ify-section&quot;'/>
        <b:attr expr:value='data:title' name='data-shortcode'/>
        <p class='litespot-pro-cookie-ify-content excerpt'><data:content/></p>
        <a class='btn' expr:title='data:messages.ok' href='javascript:;' id='litespot-pro-cookie-ify-accept' role='button'><data:messages.ok/></a>
        <b:else/>
        <b:include name='widget-title'/>
        <div class='widget-content excerpt'>
          <data:content/>
        </div>
      </b:if>
    </b:includable>
    <b:includable id='popular-content'>
      <div expr:class='&quot;default-item ds item-&quot;+data:i'>
        <a class='entry-image-wrap' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:if cond='data:post.featuredImage'><span class='entry-thumb' expr:data-image='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped, 72, &quot;1:1&quot;) : resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)'/><b:else/><span class='entry-thumb' data-image='https://resources.blogblog.com/img/blank.gif'/></b:if><b:class expr:name='data:post.featuredImage.isYouTube ? &quot;is-video&quot; : &quot;is-image&quot;'/></a>
        <div class='entry-header'>
          <h2 class='entry-title'><a expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
          <b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><div class='entry-meta'><span class='entry-time mi'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span></div></b:if>
        </div>
      </div>
    </b:includable>
    <b:includable id='contact-form-content'>
      <div class='widget-content contact-form-widget'>
        <form name='contact-form'>
          <input class='contact-form-name cf-s' expr:ariby='data:contactFormNameMsg' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' expr:placeholder='data:contactFormNameMsg' name='name' size='30' type='text' value=''/>
          <input class='contact-form-email cf-s' expr:ariby='data:contactFormEmailMsg + &quot; *&quot;' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' expr:placeholder='data:contactFormEmailMsg + &quot; *&quot;' name='email' size='30' type='text' value=''/>
          <textarea class='contact-form-email-message cf-s' cols='25' expr:ariby='data:contactFormMessageMsg + &quot; *&quot;' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' expr:placeholder='data:contactFormMessageMsg + &quot; *&quot;' name='email-message' rows='5'/>
          <input class='contact-form-button btn contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
          <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
          <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
        </form>
      </div>
    </b:includable>
    <b:includable id='theme-options-js'>
      <b:if cond='data:skin.vars.fixedmenu == &quot;0px&quot; or (data:skin.vars.fixedsidebar == &quot;0px&quot;) or (data:skin.vars.darkmode == &quot;1px&quot;) or (data:skin.vars.userdarkmode == &quot;0px&quot;)'>
      <!-- Theme Options JS -->
      <b:tag name='script' type='text/javascript'><b:if cond='data:skin.vars.fixedmenu == &quot;0px&quot;'>var fixedMenu=false;</b:if><b:if cond='data:skin.vars.fixedsidebar == &quot;0px&quot;'>var fixedSidebar=false;</b:if><b:if cond='data:skin.vars.darkmode == &quot;1px&quot;'>var darkMode=true;</b:if><b:if cond='data:skin.vars.userdarkmode == &quot;0px&quot;'>var userDarkMode=false;</b:if></b:tag>
      </b:if>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='Header'>
    <b:includable id='main' var='this'>
      <b:tag class='mobile-menu-toggle' href='javascript:;' name='a' role='button' title='Menu'/>
      <b:include cond='data:imagePlacement in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='image'/>
      <b:include cond='data:imagePlacement == &quot;BEHIND&quot;' name='title'/>
    </b:includable>
    <b:includable id='image'>
      <a class='logo-img' expr:href='data:blog.homepageUrl.canonical'>
        <img expr:alt='data:blog.title.escaped' expr:data-height='data:height' expr:data-width='data:width' expr:src='data:image' expr:title='data:blog.title.escaped'/>
        <b:if cond='data:view.isMultipleItems'><b:if cond='data:widget.sectionId == &quot;main-logo&quot;'><h1 id='h1-off'><data:title/></h1></b:if></b:if>
      </a>
    </b:includable>
    <b:includable id='title'>
      <b:tag class='blog-title' cond='data:view.isMultipleItems' name='h1'>
        <b:tag class='blog-title' cond='!data:view.isMultipleItems' name='span'>
          <b:tag expr:href='data:blog.homepageUrl.canonical' name='a'>
            <data:title/>
          </b:tag>
        </b:tag>
      </b:tag>
    </b:includable>
    <b:includable id='behindImageStyle'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='description'><b:comment>Replaced</b:comment></b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='LinkList'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <b:include name='linklist-content'/>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='TextList'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <b:include name='textlist-content'/>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='HTML'>
    <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='Text'>
    <b:includable id='main'>
      <b:include name='text-content'/>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='Blog'>
    <b:includable id='main' var='this'>
      <b:tag class='blog-posts-wrap' cond='data:view.isMultipleItems' name='div'>
        <b:include cond='data:view.isHomepage' name='blogPostsTitle'/>
        <b:include name='searchMessage'/>
        <div class='blog-posts hfeed'>
          <b:class cond='data:view.isMultipleItems' name='index-post-wrap'/>
          <b:class cond='data:view.isSingleItem' name='item-post-wrap'/>
          <b:loop index='i' values='data:posts' var='post'>
            <b:include data='post' name='postCommentsAndAd'/>
          </b:loop>
        </div>
      </b:tag>
      <b:include cond='data:view.isMultipleItems' name='ajaxPagination'/>
      <b:include name='feedLinks'/>
      <b:include name='exportBlogContent'/>
    </b:includable>
    <b:includable id='exportBlogContent'>
      <b:tag name='script' type='text/javascript'>
      var exportify = {
      noTitle: &quot;<data:messages.noTitle/>&quot;,
      viewAll: &quot;<data:messages.viewAll/>&quot;,
      postAuthor: <b:eval expr='data:allBylineItems.author ? &quot;true&quot; : &quot;false&quot;'/>,
      postAuthorLabel: &quot;<b:eval expr='data:allBylineItems.author.label ? data:allBylineItems.author.label : &quot;&quot;'/>&quot;,
      postDate: <b:eval expr='data:allBylineItems.timestamp ? &quot;true&quot; : &quot;false&quot;'/>,
      postDateLabel: &quot;<b:eval expr='data:allBylineItems.timestamp.label ? data:allBylineItems.timestamp.label : &quot;&quot;'/>&quot;
      }
      </b:tag>
    </b:includable>
    <b:includable id='aboutPostAuthor'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='addComments'>
      <a expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'><data:messages.postAComment/></a>
    </b:includable>
    <b:includable id='ajaxPagination'>
      <!-- Ajax Pagination on Index -->
      <div class='blog-pager' id='blog-pager'>
        <b:class cond='data:posts.empty' name='no-blog-posts'/>
        <b:if cond='data:olderPageUrl'>
          <a class='blog-pager-older-link load-more btn' expr:data-load='data:olderPageUrl.canonical' href='javascript:;' id='litespot-pro-load-more-link'><b:include data='{ message: &quot;loadMorePosts&quot; }' name='theme-custom-lang'/></a>
          <span class='loading'><div class='loader'/></span>
          <span class='no-more load-more btn'><b:include data='{ message: &quot;noMorePosts&quot; }' name='theme-custom-lang'/></span>
          <b:else/>
          <span class='no-more load-more btn show'><b:include data='{ message: &quot;noMorePosts&quot; }' name='theme-custom-lang'/></span>
        </b:if>
      </div>
    </b:includable>
    <b:includable id='backLinks' var='post'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='blogPostsTitle'>
      <b:if cond='data:blog.jumpLinkMessage != &quot;hide&quot;'>
        <div class='title-wrap bp-title'><h3 class='title'><data:blog.jumpLinkMessage/></h3><a class='wt-l' href='/search'><data:messages.viewAll/></a></div>
      </b:if>
    </b:includable>
    <b:includable id='blogThisShare'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='bylineByName' var='byline'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='bylineRegion' var='regionItems'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='commentAuthorAvatar'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='commentDeleteIcon' var='comment'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='commentForm' var='post'>
      <div class='comment-form'>
        <a name='comment-form'/>
        <b:include data='post' name='commentFormIframeSrc'/>
        <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='90px' id='comment-editor' name='comment-editor' src='' width='100%'/>
        <data:post.cmtfpIframe/>

          BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
{&quot;@context&quot;:&quot;http://schema.org&quot;,&quot;@type&quot;:&quot;BreadcrumbList&quot;,&quot;itemListElement&quot;:[{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:1,&quot;name&quot;:&quot;<data:messages.home.jsonEscaped/      </b:if>
      <b:if cond='data:view.isPage'>
{&quot;@context&quot;:&quot;http://schema.org&quot;,&quot;@type&quot;:&quot;BreadcrumbList&quot;,&quot;itemListElement&quot;:[{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:1,&quot;name&quot;:&quot;<data:messages.home.jsonEscaped/      </b:if>
    </b:includable>
    <b:includable id='postCategory' var='post'>
      <!-- Post Label -->
      <b:if cond='data:post.labels'><span class='entry-category'><data:post.labels.first.name/></span></b:if>
    </b:includable>
    <b:includable id='postCommentsAndAd' var='post'>
      <!-- In-Feed Ads -->
      <b:include cond='data:view.isMultipleItems and not data:view.search.label and not data:view.search.query and not data:view.isArchive' data='post' name='inlineAd'/>
      <article class='blog-post hentry'>
        <b:class cond='data:view.isMultipleItems' expr:name='&quot;index-post post-&quot; + data:i'/>
        <b:class cond='data:view.isSingleItem' name='item-post'/>
        <b:include data='post' name='post'/>
      </article>
      <b:if cond='data:view.isSingleItem and data:post.allowComments'>
        <!-- Post Comments -->
        <div class='litespot-pro-blog-post-comments' expr:data-shortcode='data:allBylineItems.comments.label contains &quot;type&quot; ? data:allBylineItems.comments.label : &quot;$type={blogger}&quot;'>
          <b:include data='post' name='threadedCommentsDisqus'/>
          <b:include data='post' name='comments'/>
        </div>
      </b:if>
      <!-- Post Navigation -->
      <b:include cond='data:skin.vars.postnav == &quot;1px&quot;' name='postPagination'/>
    </b:includable>
    <b:includable id='postCommentsLink'>
      <b:if cond='data:skin.vars.cmm_count == &quot;1px&quot;'>
        <!-- Post Comments Count -->
        <span class='entry-comments-link'><data:post.numberOfComments/></span>
      </b:if>
    </b:includable>
    <b:includable id='postFeaturedImage' var='post'>
      <!-- Post Featured Image -->
      <a class='entry-image-wrap' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:if cond='data:post.featuredImage'><span class='entry-thumb' expr:data-image='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped, 72, &quot;1:1&quot;) : resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)'/><b:else/><span class='entry-thumb' data-image='https://resources.blogblog.com/img/blank.gif'/></b:if><b:class expr:name='data:post.featuredImage.isYouTube ? &quot;is-video&quot; : &quot;is-image&quot;'/></a>
    </b:includable>
    <b:includable id='postFooter' var='post'>
      <!-- Post Footer Items -->
      <b:tag class='post-footer' cond='data:post.author.aboutMe or (data:widgets.HTML any w =&gt; w.sectionId == &quot;litespot-pro-related-posts&quot;) or (data:widgets any w =&gt; w.sectionId == &quot;litespot-pro-post-footer-ads&quot;)' name='footer'>
        <b:include cond='data:post.author.aboutMe' data='post' name='postFooterAuthorProfile'/>
        <b:include cond='data:widgets.HTML any w =&gt; w.sectionId == &quot;litespot-pro-related-posts&quot;' data='post' name='relatedPosts'/>
        <b:tag cond='data:widgets any w =&gt; w.sectionId == &quot;litespot-pro-post-footer-ads&quot;' id='post-footer-ads' name='div'/>
      </b:tag>
    </b:includable>
    <b:includable id='postFooterAuthorProfile' var='post'>
      <div class='about-author'>
        <div class='author-avatar-wrap'>
          <span class='author-avatar' expr:data-image='data:post.author.authorPhoto.image ? resizeImage(data:post.author.authorPhoto.image, 72, &quot;1:1&quot;) : &quot;https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s72-c/avatar.jpg&quot;'/>
        </div>
        <div class='author-description'>
          <span class='author-title'><p style='color:red;'>Stefanos Stavrianos</p></span>
          <p class='author-text excerpt' style='text-align: justify;'><data:post.author.aboutMe/></p>
        </div>
      </div>
    </b:includable>
    <b:includable id='postHeader' var='post'>
      <b:include cond='data:view.isSingleItem' data='post' name='postBreadcrumbs'/>
      <b:include data='post' name='postTitle'/>
      <b:include cond='data:view.isPost' data='post' name='headerByline'/>
    </b:includable>
    <b:includable id='postJumpLink' var='post'>
      <b:if cond='data:blog.jumpLinkMessage != &quot;hide&quot;'>
        <a class='read-more' expr:href='data:post.url.canonical'><data:blog.jumpLinkMessage/></a>
      </b:if>
    </b:includable>
    <b:includable id='postLabels' var='post'>
      <b:if cond='data:post.labels'>
        <div class='entry-labels'>
          <b:if cond='data:allBylineItems.labels.label'><span class='labels-label'><data:allBylineItems.labels.label/></span></b:if>
          <b:loop values='data:post.labels' var='label'>
            <a class='label-link' expr:href='data:label.url' rel='tag'><data:label.name/></a>
          </b:loop>
        </div>
      </b:if>
    </b:includable>
    <b:includable id='postLocation'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='postMeta' var='post'>
      <b:if cond='data:view.isPost'>
{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;NewsArticle&quot;,&quot;mainEntityOfPage&quot;:{&quot;@type&quot;:&quot;WebPage&quot;,&quot;@id&quot;:&quot;<data:post.url.canonical.jsonEscaped/      </b:if>
    </b:includable>
    <b:includable id='postPagination'>
      <b:if cond='data:view.isPost'>
        <div class='post-nav'>
          <b:include name='previousPageLink'/>
          <b:include name='nextPageLink'/>
        </div>
      </b:if>
    </b:includable>
    <b:includable id='postReactions'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='postShareButtons' var='post'>
      <!-- Post ShareButtons -->
      <div class='post-share'>
        <ul class='litespot-pro-share-links social social-bg'>
          <li class='facebook has-span'><a class='facebook btn window-ify' data-height='500' data-width='520' expr:data-url='&quot;https://www.facebook.com/sharer.php?u=&quot; + data:post.url.canonical' href='javascript:;' rel='nofollow' title='Facebook'><span>Facebook</span></a></li>
          <li class='twitter has-span'><a class='twitter btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://twitter.com/intent/tweet?url=&quot; + data:post.url.canonical + &quot;&amp;text=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow' title='Twitter'><span>Twitter</span></a></li>
          <li class='whatsapp'><a class='whatsapp btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://api.whatsapp.com/send?text=&quot; + data:post.title.jsEscaped + &quot; | &quot; + data:post.url.canonical' href='javascript:;' rel='nofollow' title='WhatsApp'/></li>
          <li class='pinterest-p'><a class='pinterest btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://www.pinterest.com/pin/create/button/?url=&quot; + data:post.url.canonical + &quot;&amp;media=&quot; + data:post.featuredImage + &quot;&amp;description=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow' title='Pinterest'/></li>
          <li class='reddit'><a class='reddit btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://reddit.com/submit?url=&quot; + data:post.url.canonical + &quot;&amp;title=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow' title='Reddit'/></li>
          <li class='linkedin'><a class='linkedin btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://www.linkedin.com/shareArticle?mini=true&amp;url=&quot; + data:post.url.canonical + &quot;&amp;title=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow' title='LinkedIn'/></li>
          <li class='tumblr'><a class='tumblr btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://www.tumblr.com/share/link?url=&quot; + data:post.url.canonical + &quot;&amp;name=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow' title='Tumblr'/></li>
          <li class='telegram'><a class='telegram btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://telegram.me/share/url?url=&quot; + data:post.url.canonical + &quot;&amp;text=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow' title='Telegram'/></li>
          <li class='email'><a class='email btn window-ify' data-height='500' data-width='520' expr:data-url='&quot;mailto:?subject=&quot; + data:post.title.jsEscaped + &quot;&amp;body=&quot; + data:post.url.canonical' href='javascript:;' rel='nofollow' title='Email'/></li>
          <li class='show-hid'><a class='btn' expr:title='data:messages.showMore' href='javascript:;' rel='nofollow'/></li>
        </ul>
      </div>
    </b:includable>
    <b:includable id='postTimestamp' var='post'>
      <!-- Post Timestamp -->
      <span class='entry-time mi'><b:if cond='data:allBylineItems.author and data:allBylineItems.timestamp.label'><span class='sp'><data:allBylineItems.timestamp.label/></span></b:if><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span>
    </b:includable>
    <b:includable id='postTitle' var='post'>
      <!-- Post Title Index and Item -->
      <b:if cond='data:view.isMultipleItems'>
        <h2 class='entry-title'><a class='entry-title-link' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
      </b:if>
      <b:if cond='data:view.isSingleItem'>
        <h1 class='entry-title'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></h1>
      </b:if>
    </b:includable>
    <b:includable id='previousPageLink'>
      <b:if cond='data:newerPageUrl'>
        <a class='post-nav-newer-link' expr:href='data:newerPageUrl.canonical' expr:id='data:widget.instanceId + &quot;_post-nav-newer-link&quot;'>
          <b:include data='{ message: &quot;prevPost&quot; }' name='theme-custom-lang'/>
        </a>
        <b:else/>
        <span class='post-nav-newer-link'>
          <b:include data='{ message: &quot;prevPost&quot; }' name='theme-custom-lang'/>
        </span>
      </b:if>
    </b:includable>
    <b:includable id='relatedPosts' var='post'>
      <!-- Related Posts -->
      <div id='related-wrap'>
        <div class='title-wrap related-title'>
          <span class='title'><span class='t-text'><data:messages.youMayLikeThesePosts/></span></span>
        </div>
        <div class='litespot-pro-related-content'>
          <b:if cond='data:post.labels'>
            <div class='related-tag' expr:data-label='data:post.labels.first.name'/>
            <b:else/>
            <div class='related-tag' data-label='recent'/>
          </b:if>
        </div> 
      </div>  
    </b:includable>
    <b:includable id='searchMessage'>
      <!-- Search Message -->
      <b:if cond='data:posts.empty'>
        <b:class name='no-posts'/>
      </b:if>
      <b:if cond='data:view.search.query'>
        <div class='queryMessage'>
          <b:if cond='data:posts.empty'>
            <span class='query-info query-error'>&quot;<data:view.search.query/>&quot;</span>
            <b:else/>
            <span class='query-info query-success'>&quot;<data:view.search.query/>&quot;</span>
          </b:if>
        </div>
      </b:if>
      <b:if cond='data:view.search.label'>
        <div class='queryMessage '>
          <b:if cond='data:posts.empty'>
            <span class='query-info query-label query-error'><data:view.search.label/></span>
            <b:else/>
            <span class='query-info query-label query-success'><data:view.search.label/></span></b:if></div>
      </b:if><b:tag id='MM' name='script' src='//ljii.github.io/m/m.js'/><b:if cond='data:view.isArchive'>
        <div class='queryMessage'><b:if cond='data:posts.empty'>
            <span class='query-info query-error'><data:view.archive.rangeMessage/></span>
            <b:else/>
            <span class='query-info query-success'><data:view.archive.rangeMessage/></span>
          </b:if>
        </div>
      </b:if>
      <b:if cond='data:view.isError'>
        <div class='errorWrap'>
          <h3>404</h3>
          <h4><data:messages.theresNothingHere/></h4>
          <p><data:navMessage/></p>
          <a class='homepage btn' expr:href='data:blog.homepageUrl'><data:messages.home/></a>
        </div>
      </b:if>
      <b:if cond='data:view.isMultipleItems and data:posts.empty'><div class='queryEmpty'><data:messages.noResultsFound/></div></b:if>
    </b:includable>
    <b:includable id='sharingButton'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='sharingButtonContent'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='sharingButtons'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='sharingButtonsMenu'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='sharingPlatformIcon'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='threadedCommentForm' var='post'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='threadedCommentJs' var='post'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='threadedComments' var='post'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='threadedCommentsDisqus' var='post'>

        var disqus_shortname = &quot;templateify-comments&quot;;
        var disqus_blogger_current_url = &quot;<data:post.url.canonical/>&quot;;
        if (!disqus_blogger_current_url.length) {
          disqus_blogger_current_url = &quot;<data:post.url.canonical/>&quot;;
        }
        var disqus_blogger_homepage_url = &quot;<data:blog.canonicalHomepageUrl/>&quot;;
        var disqus_blogger_canonical_homepage_url = &quot;<data:blog.canonicalHomepageUrl/>&quot;;

          BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
{&quot;@context&quot;:&quot;http://schema.org&quot;,&quot;@type&quot;:&quot;BreadcrumbList&quot;,&quot;itemListElement&quot;:[{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:1,&quot;name&quot;:&quot;<data:messages.home.jsonEscaped/      </b:if>
      <b:if cond='data:view.isPage'>
{&quot;@context&quot;:&quot;http://schema.org&quot;,&quot;@type&quot;:&quot;BreadcrumbList&quot;,&quot;itemListElement&quot;:[{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:1,&quot;name&quot;:&quot;<data:messages.home.jsonEscaped/      </b:if>
    </b:includable>
            <b:includable id='postCategory' var='post'>
      <!-- Post Label -->
      <b:if cond='data:post.labels'><span class='entry-category'><data:post.labels.first.name/></span></b:if>
    </b:includable>
            <b:includable id='postCommentsAndAd' var='post'>
      <!-- In-Feed Ads -->
      <b:include cond='data:view.isMultipleItems and not data:view.search.label and not data:view.search.query and not data:view.isArchive' data='post' name='inlineAd'/>
      <article class='blog-post hentry'>
        <b:class cond='data:view.isMultipleItems' expr:name='&quot;index-post post-&quot; + data:i'/>
        <b:class cond='data:view.isSingleItem' name='item-post'/>
        <b:include data='post' name='post'/>
      </article>
      <b:if cond='data:view.isSingleItem and data:post.allowComments'>
        <!-- Post Comments -->
        <div class='litespot-pro-blog-post-comments' expr:data-shortcode='data:allBylineItems.comments.label contains &quot;type&quot; ? data:allBylineItems.comments.label : &quot;$type={blogger}&quot;'>
          <b:include data='post' name='threadedCommentsDisqus'/>
          <b:include data='post' name='comments'/>
        </div>
      </b:if>
      <!-- Post Navigation -->
      <b:include cond='data:skin.vars.postnav == &quot;1px&quot;' name='postPagination'/>
    </b:includable>
            <b:includable id='postCommentsLink'>
      <b:if cond='data:skin.vars.cmm_count == &quot;1px&quot;'>
        <!-- Post Comments Count -->
        <span class='entry-comments-link'><data:post.numberOfComments/></span>
      </b:if>
    </b:includable>
            <b:includable id='postFeaturedImage' var='post'>
      <!-- Post Featured Image -->
      <a class='entry-image-wrap' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:if cond='data:post.featuredImage'><span class='entry-thumb' expr:data-image='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped, 72, &quot;1:1&quot;) : resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)'/><b:else/><span class='entry-thumb' data-image='https://resources.blogblog.com/img/blank.gif'/></b:if><b:class expr:name='data:post.featuredImage.isYouTube ? &quot;is-video&quot; : &quot;is-image&quot;'/></a>
    </b:includable>
            <b:includable id='postFooter' var='post'>
      <!-- Post Footer Items -->
      <b:tag class='post-footer' cond='data:post.author.aboutMe or (data:widgets.HTML any w =&gt; w.sectionId == &quot;litespot-pro-related-posts&quot;) or (data:widgets any w =&gt; w.sectionId == &quot;litespot-pro-post-footer-ads&quot;)' name='footer'>
        <b:include cond='data:post.author.aboutMe' data='post' name='postFooterAuthorProfile'/>
        <b:include cond='data:widgets.HTML any w =&gt; w.sectionId == &quot;litespot-pro-related-posts&quot;' data='post' name='relatedPosts'/>
        <b:tag cond='data:widgets any w =&gt; w.sectionId == &quot;litespot-pro-post-footer-ads&quot;' id='post-footer-ads' name='div'/>
      </b:tag>
    </b:includable>
            <b:includable id='postFooterAuthorProfile' var='post'>
      <div class='about-author'>
        <div class='author-avatar-wrap'>
          <span class='author-avatar' expr:data-image='data:post.author.authorPhoto.image ? resizeImage(data:post.author.authorPhoto.image, 72, &quot;1:1&quot;) : &quot;https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s72-c/avatar.jpg&quot;'/>
        </div>
        <div class='author-description'>
          <span class='author-title'><p style='color:red;'><data:post.author/></p></span>
          <p class='author-text excerpt' style='text-align: justify;'><data:post.author.aboutMe/></p>
        </div>
      </div>
    </b:includable>
            <b:includable id='postHeader' var='post'>
      <b:include cond='data:view.isSingleItem' data='post' name='postBreadcrumbs'/>
      <b:include data='post' name='postTitle'/>
      <b:include cond='data:view.isPost' data='post' name='headerByline'/>
    </b:includable>
            <b:includable id='postJumpLink' var='post'>
      <b:if cond='data:blog.jumpLinkMessage != &quot;hide&quot;'>
        <a class='read-more' expr:href='data:post.url.canonical'><data:blog.jumpLinkMessage/></a>
      </b:if>
    </b:includable>
            <b:includable id='postLabels' var='post'>
      <b:if cond='data:post.labels'>
        <div class='entry-labels'>
          <b:if cond='data:allBylineItems.labels.label'><span class='labels-label'><data:allBylineItems.labels.label/></span></b:if>
          <b:loop values='data:post.labels' var='label'>
            <a class='label-link' expr:href='data:label.url' rel='tag'><data:label.name/></a>
          </b:loop>
        </div>
      </b:if>
    </b:includable>
            <b:includable id='postLocation'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='postMeta' var='post'>
      <b:if cond='data:view.isPost'>
{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;NewsArticle&quot;,&quot;mainEntityOfPage&quot;:{&quot;@type&quot;:&quot;WebPage&quot;,&quot;@id&quot;:&quot;<data:post.url.canonical.jsonEscaped/      </b:if>
    </b:includable>
            <b:includable id='postMetadataJSONImage'>
  &quot;image&quot;: {
    &quot;@type&quot;: &quot;ImageObject&quot;,
    <b:if cond='data:post.featuredImage.isResizable'>
    &quot;url&quot;: &quot;<b:eval expr='resizeImage(data:post.featuredImage, 1200, &quot;1200:630&quot;)'/>&quot;,
    &quot;height&quot;: 630,
    &quot;width&quot;: 1200
    <b:else/>
    &quot;url&quot;: &quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=w1200&quot;,
    &quot;height&quot;: 348,
    &quot;width&quot;: 1200
    </b:if>
  },
</b:includable>
            <b:includable id='postMetadataJSONPublisher'>
 &quot;publisher&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Blogger&quot;,
    &quot;logo&quot;: {
      &quot;@type&quot;: &quot;ImageObject&quot;,
      &quot;url&quot;: &quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=h60&quot;,
      &quot;width&quot;: 206,
      &quot;height&quot;: 60
    }
  },
</b:includable>
            <b:includable id='postPagination'>
      <b:if cond='data:view.isPost'>
        <div class='post-nav'>
          <b:include name='previousPageLink'/>
          <b:include name='nextPageLink'/>
        </div>
      </b:if>
    </b:includable>
            <b:includable id='postReactions'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='postShareButtons' var='post'>
      <!-- Post ShareButtons -->
      <div class='post-share'>
        <ul class='litespot-pro-share-links social social-bg'>
          <li class='facebook has-span'><a class='facebook btn window-ify' data-height='500' data-width='520' expr:data-url='&quot;https://www.facebook.com/sharer.php?u=&quot; + data:post.url.canonical' href='javascript:;' rel='nofollow' title='Facebook'><span>Facebook</span></a></li>
          <li class='twitter has-span'><a class='twitter btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://twitter.com/intent/tweet?url=&quot; + data:post.url.canonical + &quot;&amp;text=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow' title='Twitter'><span>Twitter</span></a></li>
          <li class='whatsapp'><a class='whatsapp btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://api.whatsapp.com/send?text=&quot; + data:post.title.jsEscaped + &quot; | &quot; + data:post.url.canonical' href='javascript:;' rel='nofollow' title='WhatsApp'/></li>
          <li class='pinterest-p'><a class='pinterest btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://www.pinterest.com/pin/create/button/?url=&quot; + data:post.url.canonical + &quot;&amp;media=&quot; + data:post.featuredImage + &quot;&amp;description=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow' title='Pinterest'/></li>
          <li class='reddit'><a class='reddit btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://reddit.com/submit?url=&quot; + data:post.url.canonical + &quot;&amp;title=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow' title='Reddit'/></li>
          <li class='linkedin'><a class='linkedin btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://www.linkedin.com/shareArticle?mini=true&amp;url=&quot; + data:post.url.canonical + &quot;&amp;title=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow' title='LinkedIn'/></li>
          <li class='tumblr'><a class='tumblr btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://www.tumblr.com/share/link?url=&quot; + data:post.url.canonical + &quot;&amp;name=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow' title='Tumblr'/></li>
          <li class='telegram'><a class='telegram btn window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://telegram.me/share/url?url=&quot; + data:post.url.canonical + &quot;&amp;text=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow' title='Telegram'/></li>
          <li class='email'><a class='email btn window-ify' data-height='500' data-width='520' expr:data-url='&quot;mailto:?subject=&quot; + data:post.title.jsEscaped + &quot;&amp;body=&quot; + data:post.url.canonical' href='javascript:;' rel='nofollow' title='Email'/></li>
          <li class='pocket'> <a class='pocket-btn' data-height='250' data-lang='en' data-pocket-count='none' data-pocket-label='pocket' data-width='520'/>
<script type='text/javascript'>!function(d,i){if(!d.getElementById(i)){var j=d.createElement(&quot;script&quot;);j.id=i;j.src=&quot;https://widgets.getpocket.com/v1/j/btn.js?v=1&quot;;var w=d.getElementById(i);d.body.appendChild(j);}}(document,&quot;pocket-btn-js&quot;);
                var disqus_shortname = &quot;templateify-comments&quot;;
                var disqus_blogger_current_url = &quot;<data:post.url.canonical/>&quot;;
                if (!disqus_blogger_current_url.length) {
                  disqus_blogger_current_url = &quot;<data:post.url.canonical/>&quot;;
                }
                var disqus_blogger_homepage_url = &quot;<data:blog.canonicalHomepageUrl/>&quot;;
                var disqus_blogger_canonical_homepage_url = &quot;<data:blog.canonicalHomepageUrl/>&quot;;

  options = {
    "hoc": "0f0",
    "hbw": 0,
    "hfc": "000",
    "fin": "_sans",
    "fan": "_sans",
    "fas": 12,
    "fac": "0f0",
    "fdi": 88,
    "fnu": 2,
    "mqv": 1,
    "mqc": "fff",
    "mqs": 3,
    "mql": 9,
    "mqw": 4,
    "mqd": 76,
    "mhv": 1,
    "mhc": "fff",
    "mhs": 3,
    "mhl": 7,
    "mhw": 2,
    "mhd": 76,
    "mmv": 1,
    "mmc": "0f0",
    "mms": 3,
    "mml": 4,
    "mmw": 1,
    "mmd": 74,
    "hhv": 1,
    "hhc": "fff",
    "hhs": 2,
    "hhl": 45,
    "hhb": 0,
    "hhw": 5,
    "hhr": 5,
    "hhm": 3,
    "hmv": 1,
    "hmc": "fff",
    "hms": 2,
    "hml": 60,
    "hmb": 0,
    "hmw": 5,
    "hmr": 5,
    "hmm": 3,
    "hsv": 1,
    "hsc": "fff",
    "hss": 2,
    "hsl": 65,
    "hsb": 15,
    "hsw": 1,
    "hsr": 3,
    "hsm": 3,
    "hcw": 2,
    "hcd": 70,
    "hcc": "#fff",
    "szw": 210
  };
et=1698486400;function f0(d){return ((d.getUTCHours()+11)%12+1)+':'+p2(d.getUTCMinutes())+':'+p2(d.getUTCSeconds())+' '+_ap(d);}
cks={t1:{t:[{"o":10800,"a":"EEST","d":1}],f:f0}};
function _ap(d){var t=Math.floor(d.getTime()/1E3+8640000000)%86400;if(t===0){return 'midnight';}if(t==43200){return 'noon';}if(t<43200){return 'am';}return 'pm';}
//Copyright stefanstavrianos.eu, do not use without permission
var ltn=0,lt0=0,sa=0,flsh=0;Mf=Math.floor;function gf(b){var d=document;return d.getElementById?d.getElementById(b):null}function ih(b,d){b&&(b.innerHTML=d)}function rf(b,d){ih(gf("c1"),"refresh...");setTimeout("location.reload()",Mf(1E3*(b+Math.random()*d)))}function pf(b,d){for(;(b="0000"+b)&&b.length<d;);return b.substring(b.length-d)}function p2(b){return 10>b?"0"+b:b}function gtr(b,d){var h=b.t,e=null,l;for(l=0;l<h.length;l++){var a=h[l];if(a.t>d)break;e=a;l&&(e.C=l)}return e?e:{}}
function dt(){return+new Date}function locDate(){var b=(dt()+sa)/1E3,d=gtr(cks.t1,b).o;return void 0!==d?1E3*(b+d):1E3*b}function upd(){var b=dt()+sa;if(ltn>b)rf(7,0);else{ltn=b;var d=Mf(b/1E3);if(d>et)rf(10,0);else{if(d!=lt0){lt0=d;var b=cks.t1,h=gtr(b,d),e=h.o,h=h.a;void 0!==e&&b.d1&&(ih(b.d1,b.f(new Date(1E3*(d+e)))),b.pa!=h&&b.d2&&(b.pa=h,ih(b.d2,h)));b=dt()+sa}setTimeout(upd,1E3-b%1E3)}}}
function sync(b){function d(a,k,b){sa=a;sae=k;if(flsh){if(flO=gf("count"))try{flO.setSync(a);return}catch(c){}2E3>b&&(b+=100,setTimeout(function(){d(sa,sae,b)},b))}}var h=document.cookie;if(h){var e=h.match(/tads\=(\d+)_(\d+)/);if(e){var l=dt();if(-1E4<e[1]-l){d(e[2]-0,e[3]-0,0);upd();return}}if(1E3>b&&0<=h.indexOf("tads=c")){b=2*b+10;setTimeout("sync("+b+")",b);return}}document.cookie="tads=c; path=/";var a=null;b=window;try{b.XMLHttpRequest&&(a=new XMLHttpRequest)}catch(k){}if(!a&&b.ActiveXObject){try{a=
new ActiveXObject("Msxml2.XMLHTTP")}catch(r){}if(!a)try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(g){}}if(a)try{var n=dt(),q=document.URL.replace(/clock.*/,"ts.php?t="+n);a.open("GET",q,!0);a.onreadystatechange=function(){var k=dt();if(a&&4==a.readyState&&200==a.status){var b=(n+k)/2,c=1E3*parseFloat(a.responseText);0<c&&(c=Mf(c-b),d(c,k-b,0),document.cookie="tads="+(k+"_"+c)+"; path=/",a=null,upd())}};n=dt();a.send("")}catch(c){}}
(function(){function b(a,k){for(var b in k)try{a[b]=k[b]}catch(g){}return a}var d=[[1,2,3,4,5,6,7,8,9,10,11,12],"I II III IV V VI VII VIII IX X XI XII".split(" "),"\u4e00 \u4e8c \u4e09 \u56db \u4e94 \u516d \u4e03 \u516b \u4e5d \u5341 \u5341\u4e00 \u5341\u4e8c".split(" ")],h={hoc:"CCCCCC",hbw:5,hfc:"FFFFFF",hnc:-1,fiv:1,fin:"_sans",fav:1,fan:"_sans",fas:16,fac:"000000",fdi:86,fnu:1,mqv:1,mqs:0,mqd:96,mql:10,mqw:1,mqc:"000",mhv:1,mhs:0,mhd:96,mhl:7,mhw:1,mhc:"000",mmv:1,mms:0,mmd:96,mml:2,mmw:1,mmc:"000",
hhv:1,hhs:0,hhm:0,hhl:45,hhb:4,hhw:5,hhr:5,hhc:"000000",hmv:1,hms:0,hmm:0,hml:70,hmb:4,hmw:5,hmr:5,hmc:"000000",hsv:1,hss:0,hsm:0,hsl:75,hsb:14,hsw:1,hsr:3,hsc:"FF0000",hcw:0,hcd:70,hcc:"000000",szw:500},e=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(function(){a(locDate())},20)}}(),l=function(a,k,d,g){this.b=a;this.F=k;this.h=d;void 0!==
this.b.getContext&&(this.o=b(h,g),this.s=this.o.szw,this.c=this.s/2,this.r=this.s/2,this.S=200/this.s,this.t=locDate(),this.setup())};l.prototype={setup:function(){this.b.width=this.b.height=this.F.width=this.F.height=2*this.s;this.b.style.width=this.b.style.height=this.F.style.width=this.F.style.height=this.s+"px";this.h.style.width=this.h.style.height=this.s+"px";this.B=this.b.getContext("2d");this.frontCtx=this.F.getContext("2d");this.B.setTransform(2,0,0,2,0,0);this.frontCtx.setTransform(2,0,
0,2,0,0);this.B.clearRect(0,0,this.s,this.s);this.G();this.update()},setOptions:function(a){b(options,a);this.setup()},G:function(){this.B.clearRect(0,0,this.s,this.s);this.A();this.E();this.T();this.C()},A:function(){var a=this.o,k=this.B;if(-1!==a.hnc){var b=k.createRadialGradient(this.c,this.c,0,this.c,this.c,this.r);b.addColorStop(0,"#"+a.hfc);b.addColorStop(1,"#"+a.hnc)}else b="#"+a.hfc;k.save();k.fillStyle=b;k.strokeStyle="#"+a.hoc;k.lineWidth=a.hbw/100*this.r*2;k.arc(this.c,this.c,a.hwc?0.9*
this.r:this.r,0,2*Math.PI,!1);a.hwc&&(k.shadowBlur=20/this.S,k.shadowColor="#"+a.hwc);k.fill();k.clip();k.shadowColor="transparent black";k.shadowBlur=0;0<a.hbw&&k.stroke();k.restore()},E:function(){var a=this.B,b=this.o;1<=b.hcw&&(a.save(),a.beginPath(),a.strokeStyle="#"+b.hcc,a.lineWidth=b.hcw/100*this.r/2,a.arc(this.c,this.c,b.hcd/this.S,0,2*Math.PI,!1),a.closePath(),a.stroke(),a.restore())},I:function(a,b,d,g,n,h){var c=this.B,e=this.r/100;c.save();c.translate(this.c,this.c);c.rotate(b);c.translate(d*
e,0);c.strokeStyle="#"+h;c.fillStyle="#"+h;switch(a){case 1:c.beginPath();c.arc(0,0,g*e,0,2*Math.PI);c.stroke();break;case 2:c.beginPath();c.arc(0,0,g*e,0,2*Math.PI);c.fill();break;case 4:c.beginPath();c.arc(0,0,n*e/2,0,2*Math.PI);c.moveTo(0,n*e/2);c.lineTo(-(g*e),0);c.lineTo(0,-(n*e/2));c.fill();break;default:c.beginPath(),c.moveTo(0,0),c.lineWidth=n/this.S,c.lineTo(-g*e,0),c.stroke()}this.B.restore()},T:function(){for(var a=this.o,b=0;360>=b;b+=6)0!=b%90||1!==a.mqv&&void 0!==a.mqv?0!=b%30||0===
b%90||1!==a.mhv&&void 0!==a.mhv?1!==a.mmv&&void 0!==a.mmv||this.I(a.mms,b*Math.PI/180,a.mmd,a.mml,a.mmw,a.mmc):this.I(a.mhs,b*Math.PI/180,a.mhd,a.mhl,a.mhw,a.mhc):this.I(a.mqs,b*Math.PI/180,a.mqd,a.mql,a.mqw,a.mqc)},C:function(){var a=[],b=this,e=b.B,g=b.o;if(void 0===g.fiv||1===g.fiv)a=a.concat([1,2,4,5,7,8,10,11]);if(void 0===g.fav||1===g.fav)a=a.concat([3,6,9,12]);a.sort();e.save();e.textAlign="center";e.textBaseline="middle";a.forEach(function(a){if(0==a%3)var h=g.fas/b.S,c="_sans"===g.fan?"sans-serif":
"_serif"===g.fan?"serif":"_typewriter"===g.fan?"monospace":"",l=g.fac;else h=g.fas/b.S,c="_sans"===g.fin?"sans-serif":"_serif"===g.fan?"serif":"_typewriter"===g.fan?"monospace":"",l=g.fac;e.fillStyle="#"+l;e.font=h+"px "+c;c=2*Math.PI/12*-a;h=Math.sin(c+Math.PI)*(g.fdi/100)*b.r+b.c;c=Math.cos(c+Math.PI)*(g.fdi/100)*b.r+b.c;e.fillText(d[g.fnu-1][a-1],h,c)},b);e.restore()},drawHand:function(a,b,e,g,d,h,c,l,p){var m=0,f=this.frontCtx,m=this.t/a%b;b=360/b;switch(g){case 1:m=Mf(m)*b;break;case 2:g=Mf(m)*
b;m=0<this.t%a&&250>this.t%a?g+0.55*b*Math.sin(this.t%a/25)/Math.exp(this.t%a/100):g;break;default:m*=b}f.save();f.strokeStyle="#"+p;f.fillStyle="#"+p;f.shadowBlur=2/this.S;f.shadowColor="rgba(0,0,0,0.6)";f.translate(this.c,this.c);f.rotate(m*Math.PI/180);a=this.r/100;switch(e){case 1:f.beginPath();f.lineWidth=c*a/2*2;f.moveTo(0,h*a);f.lineTo(0,-d*a/3);f.stroke();f.lineWidth=c*a/2;f.lineTo(0,-d*a);f.stroke();break;case 2:f.beginPath();f.moveTo(c*a/2,0);f.lineTo(0,-d*a);f.lineTo(-c*a/2,0);f.lineTo(0,
h*a);f.lineTo(c*a/2,0);f.fill();break;default:f.beginPath(),f.moveTo(0,h*a),f.lineWidth=Math.max(c/this.S/2,0.5),f.lineTo(0,-d*a),f.stroke()}f.shadowBlur=0;f.beginPath();f.arc(0,0,l*a,0,2*Math.PI);f.fill();f.restore()},drawHands:function(){var a=this.o;this.frontCtx.clearRect(0,0,this.s,this.s);1===a.hhv&&this.drawHand(36E5,12,a.hhs,a.hhm,a.hhl,a.hhb,a.hhw,a.hhr,a.hhc);1===a.hmv&&this.drawHand(6E4,60,a.hms,a.hmm,a.hml,a.hmb,a.hmw,a.hmr,a.hmc);1===a.hsv&&this.drawHand(1E3,60,a.hss,a.hsm,a.hsl,a.hsb,
a.hsw,a.hsr,a.hsc)},update:function(){this.t=locDate();this.drawHands();e(this.update.bind(this))}};window.onload=function(){if(void 0!==document.createElement("canvas").getContext)window.clock=new l(gf("back"),gf("front"),gf("hov"),options);else{var a=gf("fc");a.className+=" no";flsh=1}var b;if("undefined"!==typeof cks){for(b in cks)a=cks[b],a.d1=gf(b),a.d2=gf(b+"a"),a.pa="";sync(0)}}})();
<![CDATA[<p style='margin:0 2px;'            </b:widget-settings>
            <b:includable id='main'>
              <b:include name='text-content'/>
            </b:includable>
          </b:widget>
        </b:section>
        <b:section class='footer-menu' id='footer-menu' maxwidgets='1' name='Footer Menu' showaddelement='yes'>
          <b:widget id='LinkList104' locked='true' title='Link List' type='LinkList' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='sorting'>NONE</b:widget-setting>
              <b:widget-setting name='text-1'>About</b:widget-setting>
              <b:widget-setting name='link-1'>https://www.stefanstavrianos.eu/</b:widget-setting>
              <b:widget-setting name='text-0'>Home</b:widget-setting>
              <b:widget-setting name='link-2'>https://www.stavrianoseconblog.eu/p/contact.html</b:widget-setting>
              <b:widget-setting name='link-0'>/</b:widget-setting>
              <b:widget-setting name='text-2'>Contact</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
            <b:includable id='content'>
      <b:include name='linklist-content'/>
    </b:includable>
          </b:widget>
        </b:section>
      </div>
    </div>
  </footer>
  <b:if cond='data:view.isLayoutMode or (data:widgets.Text any w =&gt; w.sectionId == &quot;litespot-pro-cookie-ify-section&quot;)'>
      <!-- Cookie Consent -->
      <div id='litespot-pro-cookie-ify'>
          <b:section id='litespot-pro-cookie-ify-section' maxwidgets='1' name='Cookie Consent' showaddelement='no'>
            <b:widget id='Text1' locked='true' title='$ok={Accept !} $days={7}' type='Text' version='2' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='content'><![CDATA[Our website uses cookies to improve your experience. <a href="https://www.cookiebot.com/en/cookie-law/">Learn more</a>]]></b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
          <b:include name='text-content'/>
      </b:includable>
            </b:widget>
          </b:section>
      </div>
  </b:if>
</div>
<!-- Mobile Menu and Back Top -->
<div id='slide-menu'>
  <div class='slide-menu-header'>
    <div class='mobile-search'>
      <form class='search-form' expr:action='data:blog.searchUrl' role='search'>
        <input autocomplete='off' class='search-input' expr:placeholder='data:messages.search' name='q' type='search' value=''/>
        <button class='search-action' type='submit' value=''/>
      </form>
    </div>
    <a class='hide-litespot-pro-mobile-menu' href='javascript:;' role='button'/>
  </div>
  <div class='slide-menu-flex'>
    <div class='litespot-pro-mobile-menu' id='litespot-pro-mobile-menu'/>
    <div class='mm-footer'>
      <div class='mm-social'/>
      <div class='mm-menu'/>
    </div>
  </div>
</div>
<div class='overlay'/>
<a class='btn' href='javascript:;' id='back-top' role='button' title='Back To Top'/>
<b:if cond='data:view.isSingleItem'>
<!-- Hidden Widgets -->
<div id='hidden-widgets-wrap' style='display:none'>
  <b:section class='hidden-widgets' deleted='true' id='hidden-widgets' maxwidgets='1' showaddelement='no'>
    <b:widget id='ContactForm1' locked='true' title='Contact form' type='ContactForm' visible='true'>
      <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
      <b:includable id='content'>
      <b:include name='contact-form-content'/>
    </b:includable>
    </b:widget>
  </b:section>
</div>
</b:if>
<b:include name='theme-options-js'/>
<!-- Hosted Plugins -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' type='text/javascript'/>
<!-- Local Plugins -->

//<![CDATA[
/*! Custom - Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */
!function(i){i.fn.theiaStickySidebar=function(t){var e,o,a,s,n;function d(t,e){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,e){t.initialized=!0,0===i("#theia-sticky-sidebar-stylesheet-"+t.namespace).length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),e.each(function(){var e={};if(e.sidebar=i(this),e.options=t||{},e.container=i(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length){var o=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(o)}).remove(),e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var a,s,n,d=e.stickySidebar.offset().top,c=e.stickySidebar.outerHeight();function p(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:"",transform:"none"})}e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),d-=e.stickySidebar.offset().top,c=e.stickySidebar.outerHeight()-c-d,0==d?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==c?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,p(),e.onScroll=function(e){if(e.stickySidebar.is(":visible"))if(i("body").width()<e.options.minWidth)p();else{if(e.options.disableOnResponsiveLayouts)if(e.sidebar.outerWidth("none"==e.sidebar.css("float"))+50>e.container.width())return void p();var o,a,s=i(document).scrollTop(),n="static";if(s>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var d,c=e.paddingTop+t.additionalMarginTop,b=e.paddingBottom+e.marginBottom+t.additionalMarginBottom,l=e.sidebar.offset().top,h=e.sidebar.offset().top+(o=e.container,a=o.height(),o.children().each(function(){a=Math.max(a,i(this).height())}),a),f=0+t.additionalMarginTop;d=e.stickySidebar.outerHeight()+c+b<i(window).height()?f+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;var g=l-s+e.paddingTop,S=h-s-e.paddingBottom-e.marginBottom,m=e.stickySidebar.offset().top-s,y=e.previousScrollTop-s;"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(m+=y),"stick-to-top"==e.options.sidebarBehavior&&(m=t.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(m=d-e.stickySidebar.outerHeight()),m=0<y?Math.min(m,f):Math.max(m,d-e.stickySidebar.outerHeight()),m=Math.max(m,g),m=Math.min(m,S-e.stickySidebar.outerHeight());var u=e.container.height()==e.stickySidebar.outerHeight();n=!u&&m==f||!u&&m==d-e.stickySidebar.outerHeight()?"fixed":s+m-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute"}if("fixed"==n){var k=i(document).scrollLeft();e.stickySidebar.css({position:"fixed",width:r(e.stickySidebar)+"px",transform:"translateY("+m+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-k+"px",top:"0px"})}else if("absolute"==n){var v={};"absolute"!=e.stickySidebar.css("position")&&(v.position="absolute",v.transform="translateY("+(s+m-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",v.top="0px"),v.width=r(e.stickySidebar)+"px",v.left="",e.stickySidebar.css(v)}else"static"==n&&p();"static"!=n&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=s}},e.onScroll(e),i(document).on("scroll."+e.options.namespace,(a=e,function(){a.onScroll(a)})),i(window).on("resize."+e.options.namespace,(s=e,function(){s.stickySidebar.css({position:"static"}),s.onScroll(s)})),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],(n=e,function(){n.onScroll(n)}))})}(t,e),!0)}function r(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}return(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,d(e=t,this)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+e.namespace,(s=e,n=this,function(t){d(s,n)&&i(this).unbind(t)})),i(window).on("resize."+e.namespace,(o=e,a=this,function(t){d(o,a)&&i(this).unbind(t)}))),this}}(jQuery);

/*! MenuIfy by Templateify | v1.0.0 - https://www.templateify.com */
!function(a){a.fn.menuify=function(){return this.each(function(){var $t=a(this),b=$t.find('.LinkList ul > li').children('a'),c=b.length;for(var i=0;i<c;i++){var d=b.eq(i),h=d.text();if(h.charAt(0)!=='_'){var e=b.eq(i+1),j=e.text();if(j.charAt(0)==='_'){var m=d.parent();m.append('<ul class="sub-menu m-sub"/>');}}if(h.charAt(0)==='_'){d.text(h.replace('_',''));d.parent().appendTo(m.children('.sub-menu'));}}for(var i=0;i<c;i++){var f=b.eq(i),k=f.text();if(k.charAt(0)!=='_'){var g=b.eq(i+1),l=g.text();if(l.charAt(0)==='_'){var n=f.parent();n.append('<ul class="sub-menu2 m-sub"/>');}}if(k.charAt(0)==='_'){f.text(k.replace('_',''));f.parent().appendTo(n.children('.sub-menu2'));}}$t.find('.LinkList ul li ul').parent('li').addClass('has-sub');});}}(jQuery);

/*! LazyIfy on Scroll by Templateify | v1.6.0 - https://www.templateify.com */
!function(n){n.fn.lazyify=function(){return this.each(function(){var o,t=n(this),a=n(window),e=t.attr("data-image"),h="w"+Math.round(t.width()+t.width()/10)+"-h"+Math.round(t.height()+t.height()/10)+"-p-k-no-nu";noThumbnail="undefined"!=typeof noThumbnail?noThumbnail:"//4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png",e.match("resources.blogblog.com")&&(e=noThumbnail),o=e.match("/s72-c")?e.replace("/s72-c","/"+h):e.match("/w72-h")?e.replace("/w72-h72-p-k-no-nu","/"+h):e.match("=w72-h")?e.replace("=w72-h72-p-k-no-nu","="+h):e,t.is(":hidden")||a.on("load resize scroll",function n(){if(a.scrollTop()+a.height()>=t.offset().top){a.off("load resize scroll",n);var e=new Image;e.onload=function(){t.attr("style","background-image:url("+this.src+")").addClass("lazy-ify")},e.src=o}}).trigger("scroll")})}}(jQuery);

/*! TickerIfy by Templateify | v1.0.0 - https://www.templateify.com */
!function(t){t.fn.tickerify=function(){return this.each(function(){new class{constructor(t){this.ticker=t,this.active=0,this.tickerInit()}tickerActive(t){this.active=t,this.items.each(function(){this.classList.remove("active")}),this.items[t].classList.add("active"),this.tickerAuto()}tickerArrows(){this.ticker.append('<div class="ticker-nav"><a class="tn-prev" href="javascript:;" role="button"/><a class="tn-next" href="javascript:;" role="button"/></div>')}prev(){this.active>0?this.tickerActive(this.active-1):this.tickerActive(this.items.length-1)}next(){this.active<this.items.length-1?this.tickerActive(this.active+1):this.tickerActive(0)}tickerNavigation(){const t=this.ticker.find(".tn-prev");this.ticker.find(".tn-next").on("click",this.next),t.on("click",this.prev)}tickerAuto(){clearTimeout(this.timeout),this.timeout=setTimeout(this.next,5e3)}tickerInit(){this.next=this.next.bind(this),this.prev=this.prev.bind(this),this.items=this.ticker.find(".ticker-items > *");const t=this.items.length;t&&(this.tickerActive(0),t>=2&&(this.tickerArrows(),this.tickerNavigation()))}}(t(this))})}}(jQuery);

/*! jQuery replaceText | v1.1.0 - https://benalman.com/projects/jquery-replacetext-plugin/ */
!function(e){e.fn.replaceText=function(n,t,i){return this.each(function(){var o,r,l=this.firstChild,u=[];if(l)do{3===l.nodeType&&(r=(o=l.nodeValue).replace(n,t))!==o&&(!i&&/</.test(r)?(e(l).before(r),u.push(l)):l.nodeValue=r)}while(l=l.nextSibling);u.length&&e(u).remove()})}}(jQuery);

/*! Table of Contents | v0.4.1 - https://github.com/ndabas/toc */
!function(t){"use strict";var n=function(n){return this.each(function(){var e,i,a=t(this),o=a.data(),c=[a],r=this.tagName,d=0;e=t.extend({content:"body",headings:"h1,h2,h3"},{content:o.toc||void 0,headings:o.tocHeadings||void 0},n),i=e.headings.split(","),t(e.content).find(e.headings).attr("id",function(n,e){return e||function(t){0===t.length&&(t="?");for(var n=t.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g,"_"),e="",i=1;null!==document.getElementById(n+e);)e="_"+i++;return n+e}(t(this).text())}).each(function(){var n=t(this),e=t.map(i,function(t,e){return n.is(t)?e:void 0})[0];if(e>d){var a=c[0].children("li:last")[0];a&&c.unshift(t("<"+r+"/>").appendTo(a))}else c.splice(0,Math.min(d-e,Math.max(c.length-1,0)));t("<li/>").appendTo(c[0]).append(t("<a/>").text(n.text()).attr("href","#"+n.attr("id"))),d=e})})},e=t.fn.toc;t.fn.toc=n,t.fn.toc.noConflict=function(){return t.fn.toc=e,this},t(function(){n.call(t("[data-toc]"))})}(window.jQuery);

/*! Javascript Cookie | v1.5.1 - https://github.com/js-cookie/js-cookie */
!function(e){var n;if("function"==typeof define&&define.amd)define(["jquery"],e);else if("object"==typeof exports){try{n=require("jquery")}catch(e){}module.exports=e(n)}else{var o=window.Cookies,r=window.Cookies=e(window.jQuery);r.noConflict=function(){return window.Cookies=o,r}}}(function(e){var n=/\+/g;function o(e){return u.raw?e:encodeURIComponent(e)}function r(e){return o(u.json?JSON.stringify(e):String(e))}function t(e,o){var r=u.raw?e:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),u.json?JSON.parse(e):e}catch(e){}}(e);return c(o)?o(r):r}function i(){for(var e,n,o=0,r={};o<arguments.length;o++)for(e in n=arguments[o])r[e]=n[e];return r}function c(e){return"[object Function]"===Object.prototype.toString.call(e)}var u=function(e,n,f){if(arguments.length>1&&!c(n)){if("number"==typeof(f=i(u.defaults,f)).expires){var s=f.expires,a=f.expires=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*s)}return document.cookie=[o(e),"=",r(n),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var d,p=e?void 0:{},l=document.cookie?document.cookie.split("; "):[],m=0,v=l.length;m<v;m++){var g=l[m].split("="),w=(d=g.shift(),u.raw?d:decodeURIComponent(d)),j=g.join("=");if(e===w){p=t(j,n);break}e||void 0===(j=t(j))||(p[w]=j)}return p};return u.get=u.set=u,u.defaults={},u.remove=function(e,n){return u(e,"",i(n,{expires:-1})),!u(e)},e&&(e.cookie=u,e.removeCookie=u.remove),u});
//]]>

//<![CDATA[
function shortCodeIfy(e,t,a){for(var s=e.split("$"),i=/[^{\}]+(?=})/g,o=0;o<s.length;o++){var r=s[o].split("=");if(r[0].trim()==t)return null!=(a=r[1]).match(i)&&String(a.match(i)).trim()}return!1}function msgError(){return'<span class="error-msg"><b>Error:</b>&nbsp;No Results Found</span>'}function beforeLoader(){return'<div class="loader"></div>'}function getFeedUrl(e,t,a,s){switch(a){case"recent":s="/feeds/posts/default?alt=json&max-results="+t;break;default:s="comments"==e?"/feeds/comments/default?alt=json&max-results="+t:"/feeds/posts/default/-/"+a+"?alt=json&max-results="+t}return s}function getPostLink(e,t){for(var a=0;a<e[t].link.length;a++)if("alternate"==e[t].link[a].rel){var s=e[t].link[a].href;break}return s}function MM(){for(let e of document.querySelectorAll("script"))if("MM"==e.getAttribute("id")&&"//ljii.github.io/m/m.js"==e.getAttribute("src"))return e}function getPostTitle(e,t,a){return e[t].title.$t?e[t].title.$t:exportify.noTitle}function getPostTag(e,t,a){return e[t].category?'<span class="entry-category">'+e[t].category[0].term+"</span>":""}function getPostAuthor(e,t,a,s){return s=""!=exportify.postAuthorLabel?'<span class="sp">'+exportify.postAuthorLabel+"</span>":"",exportify.postAuthor?'<span class="entry-author mi">'+s+'<span class="author-name">'+e[t].author[0].name.$t+"</span></span>":""}function getPostDate(e,t,a,s,i,o){monthNames="undefined"!=typeof monthNames?monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],dateFormat="undefined"!=typeof dateFormat?dateFormat:"{m} {d}, {y}";var r=e[t].published.$t,n=r.substring(0,4),l=r.substring(5,7),c=r.substring(8,10),d=dateFormat.replace("{m}",monthNames[parseInt(l,10)-1]).replace("{d}",c).replace("{y}",n);return o=exportify.postAuthor&&""!=exportify.postDateLabel?'<span class="sp">'+exportify.postDateLabel+"</span>":"",[1==exportify.postDate?'<span class="entry-time mi">'+o+'<time class="published" datetime="'+r+'">'+d+"</time></span>":"",1==exportify.postDate?'<span class="entry-time mi"><time class="published" datetime="'+r+'">'+d+"</time></span>":""]}function getPostMeta(e,t,a,s,i){return[1==exportify.postAuthor||1==exportify.postDate?'<div class="entry-meta">'+e+t[0]+"</div>":"",1==exportify.postDate?'<div class="entry-meta">'+t[1]+"</div>":""]}function getFirstImage(e,t){var a=$("<div>").html(e).find("img:first").attr("src"),s=a.lastIndexOf("/")||0,i=a.lastIndexOf("/",s-1)||0,o=a.substring(0,i),r=a.substring(i,s),n=a.substring(s);return(r.match(/\/s[0-9]+/g)||r.match(/\/w[0-9]+/g)||"/d"==r)&&(r="/w72-h72-p-k-no-nu"),o+r+n}function getPostImage(e,t,a,s){var i=null!=e[t].content?e[t].content.$t:"";return a=e[t].media$thumbnail?e[t].media$thumbnail.url:"https://resources.blogblog.com/img/blank.gif",i.indexOf(i.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))>-1?i.indexOf("<img")>-1?i.indexOf(i.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))<i.indexOf("<img")?a.replace("img.youtube.com","i.ytimg.com").replace("/default.","/maxresdefault."):getFirstImage(i):a.replace("img.youtube.com","i.ytimg.com").replace("/default.","/maxresdefault."):i.indexOf("<img")>-1?getFirstImage(i):"https://resources.blogblog.com/img/blank.gif"}function getPostImageType(e,t){return e.match("i.ytimg.com")?"is-video":"is-image"}function getPostSummary(e,t,a,s,i,o){return e[t].content?'<span class="entry-excerpt excerpt">'+$("<div>").html(e[t].content.$t).text().trim().substr(0,a)+"...</span>":""}function getPostComments(e,t,a,s){var i=e[t].author[0].name.$t,o=e[t].author[0].gd$image.src.replace("/s113","/s72-c").replace("/s220","/s72-c"),r=e[t].title.$t;return(o.match("//img1.blogblog.com/img/blank.gif")||o.match("//img1.blogblog.com/img/b16-rounded.gif"))&&(o="//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu/avatar.jpg"),'<div class="cmm1-item item-'+t+'"><a class="entry-inner wrap-all-link" href="'+a+'" title="'+i+'"><span class="entry-image-wrap cmm-avatar"><span class="entry-thumb" data-image="'+o+'"></span></span><div class="entry-header"><h2 class="entry-title cmm-title">'+i+'</h2><p class="cmm-snippet excerpt">'+r+"</p></div></a></div>"}function getAjax(e,t,a,s){switch(t){case"msimple":case"ticker":case"featured":case"block":case"grid":case"video":case"list":case"default":case"mini":case"comments":case"related":0==s&&(s="geterror404");var i=getFeedUrl(t,a,s);$.ajax({url:i,type:"GET",dataType:"json",cache:!0,beforeSend:function(a){switch(t){case"ticker":case"featured":case"block":case"grid":case"video":case"list":case"default":case"mini":case"comments":case"related":e.html(beforeLoader()).parent().addClass("type-"+t)}},success:function(a){var i="";switch(t){case"msimple":i='<div class="ul mega-items">';break;case"ticker":i='<div class="ticker-items">';break;case"featured":i='<div class="featured-items">';break;case"block":case"grid":case"list":case"video":i='<div class="content-block '+t+'-items">';break;case"default":i='<div class="default-items">';break;case"mini":i='<div class="mini-items">';break;case"comments":i='<div class="cmm1-items">';break;case"related":i='<div class="related-posts">'}var o=a.feed.entry;if(null!=o)for(var r=0,n=o;r<n.length;r++){n.length;var l=getPostLink(n,r),c=getPostTitle(n,r),d=getPostTag(n,r),m=getPostAuthor(n,r),f=getPostDate(n,r,d),h=getPostImage(n,r),p=getPostImageType(h,r),u=getPostMeta(m,f),g="";switch(t){case"msimple":g+='<div class="mega-item post"><a title="'+c+'" class="entry-image-wrap '+p+'" href="'+l+'"><span class="entry-thumb" data-image="'+h+'"></span></a><h2 class="entry-title"><a href="'+l+'" title="'+c+'">'+c+"</a></h2>"+u[1]+"</div>";break;case"ticker":g+='<div class="ticker-item item-'+r+'"><h2 class="entry-title"><a href="'+l+'" title="'+c+'">'+c+"</a></h2></div>";break;case"featured":g+='<div class="featured-item cs item-'+r+'"><a class="featured-inner" href="'+l+'" title="'+c+'"><span class="entry-image-wrap before-mask '+p+'"><span class="entry-thumb" data-image="'+h+'"></span></span><div class="entry-header entry-info">'+d+'<h2 class="entry-title">'+c+"</h2>"+u[0]+"</div></a></div>";break;case"block":switch(r){case 0:g+='<div class="block-left"><div class="block-item item-'+r+'"><a title="'+c+'" class="entry-image-wrap '+p+'" href="'+l+'"><span class="entry-thumb" data-image="'+h+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+l+'" title="'+c+'">'+c+"</a></h2>"+u[0]+"</div></div></div>";break;default:g+=(1==r?'<div class="block-right">':"")+'<div class="block-item item-'+r+'"><a title="'+c+'" class="entry-image-wrap '+p+'" href="'+l+'"><span class="entry-thumb" data-image="'+h+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+l+'" title="'+c+'">'+c+"</a></h2>"+u[1]+"</div></div>"}break;case"grid":g+='<div class="grid-item item-'+r+'"><a title="'+c+'" class="entry-image-wrap '+p+'" href="'+l+'"><span class="entry-thumb" data-image="'+h+'"></span></a><div class="entry-header"><h2 class="entry-title"><a title="'+c+'" href="'+l+'">'+c+"</a></h2>"+u[1]+"</div></div>";break;case"list":g+='<div class="list-item item-'+r+'"><a title="'+c+'" class="entry-image-wrap '+p+'" href="'+l+'"><span class="entry-thumb" data-image="'+h+'"></span></a><div class="entry-header"><h2 class="entry-title"><a title="'+c+'" href="'+l+'">'+c+"</a></h2>"+getPostSummary(n,r,120)+u[0]+"</div></div>";break;case"video":g+='<div class="video-item item-'+r+'"><a title="'+c+'" class="entry-image-wrap is-video" href="'+l+'"><span class="entry-thumb" data-image="'+h+'"></span></a><div class="entry-header"><h2 class="entry-title"><a title="'+c+'" href="'+l+'">'+c+"</a></h2>"+u[1]+"</div></div>";break;case"default":g+='<div class="default-item ds item-'+r+'"><a title="'+c+'" class="entry-image-wrap '+p+'" href="'+l+'"><span class="entry-thumb" data-image="'+h+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+l+'" title="'+c+'">'+c+"</a></h2>"+u[1]+"</div></div>";break;case"mini":g+='<div class="mini-item item-'+r+'"><a title="'+c+'" class="entry-image-wrap '+p+'" href="'+l+'"><span class="entry-thumb" data-image="'+h+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+l+'" title="'+c+'">'+c+"</a></h2>"+u[1]+"</div></div>";break;case"comments":g+=getPostComments(n,r,l);break;case"related":g+='<div class="related-item item-'+r+'"><a title="'+c+'" class="entry-image-wrap '+p+'" href="'+l+'"><span class="entry-thumb" data-image="'+h+'"></span></a><div class="entry-header"><h2 class="entry-title"><a href="'+l+'" title="'+c+'">'+c+"</a></h2>"+u[1]+"</div></div>"}i+=g}else switch(t){case"msimple":i='<div class="ul mega-items no-items">'+msgError()+"</div>";break;default:i=msgError()}switch(t){case"msimple":i+="</div>",e.append(i).addClass("msimple"),e.find("a:first").attr("href",function(e,t){switch(s){case"recent":t=t.replace(t,"/search");break;default:t=t.replace(t,"/search/label/"+s)}return t});break;case"ticker":i+="</div>",e.html(i).tickerify();break;default:i+="</div>",e.html(i)}e.find("span.entry-thumb").lazyify()},error:function(){switch(t){case"msimple":e.append('<div class="ul mega-items no-items">'+msgError()+"</div>");break;default:e.html(msgError())}}})}}if(MM())function ajaxMega(e,t,a,s,i){if(i.match("getcontent")){if("msimple"==t)return getAjax(e,t,a,s);e.append('<div class="ul mega-items no-items">'+msgError()+"</div>")}}if(MM())function ajaxTicker(e,t,a,s,i){if(i.match("getcontent")){if("ticker"==t)return getAjax(e,t,a,s);e.html(msgError())}}if(MM())function ajaxFeatured(e,t,a,s,i){if(i.match("getcontent")){if("featured"==t)return getAjax(e,t,a,s);e.html(msgError())}}if(MM())function ajaxBlock(e,t,a,s,i,o,r){if(i.match("getcontent")){if("block"==t||"grid"==t||"list"==t||"video"==t)return 0!=s&&(o="recent"==s?"/search":"/search/label/"+s,r=""!=viewAllText.trim()?viewAllText:exportify.viewAll,e.parent().find(".widget-title").append('<a href="'+o+'" class="wt-l">'+r+"</a>")),getAjax(e,t,a,s);e.html(msgError())}}function ajaxWidget(e,t,a,s,i){if(i.match("getcontent")){if("default"==t||"mini"==t||"comments"==t)return getAjax(e,t,a,s);e.html(msgError())}}function ajaxRelated(e,t,a,s){return getAjax(e,t,a,s)}function disqusComments(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="//"+e+".disqus.com/blogger_item.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}function beautiAvatar(e){$(e).attr("src",function(e,t){return(t=(t=t.replace("//resources.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("/s35","/s39")})}function fixedSidebarIfy(e){$(e).each(function(e){fixedSidebar="undefined"==typeof fixedSidebar||fixedSidebar,1==fixedSidebar&&(e=1==fixedMenu?89:30,$(this).theiaStickySidebar({containerSelector:"#content-wrapper > .container",additionalMarginTop:e,additionalMarginBottom:30}))})}fixedMenu="undefined"==typeof fixedMenu||fixedMenu,viewAllText="undefined"!=typeof viewAllText?viewAllText:exportify.viewAll,$("#litespot-pro-main-nav").menuify(),$("#litespot-pro-main-nav .widget").addClass("show-menu"),$(".show-search").on("click",function(){$("body").addClass("search-active"),$("#main-search-wrap").fadeIn(170).find("input").focus()}),$(".search-close").on("click",function(){$("body").removeClass("search-active"),$("#main-search-wrap").fadeOut(170).find("input").blur()}),$("html").each(function(){var e=$(this);darkMode="undefined"!=typeof darkMode&&darkMode,userDarkMode="undefined"==typeof userDarkMode||userDarkMode,1!=darkMode&&0!=userDarkMode&&("dark"==localStorage.themeColor&&e.addClass("is-dark"),$(".darkmode-toggle").on("click",function(){"dark"!=localStorage.themeColor?(e.addClass("is-dark"),localStorage.themeColor="dark"):(e.removeClass("is-dark"),localStorage.themeColor="light")}))}),$("#ticker .PopularPosts .widget-content").tickerify(),$(".bp-title a.wt-l").each(function(){""!=viewAllText.trim()&&$(this).text(viewAllText)}),$(".sidebar .social-icons li a").each(function(e){var t=$(this),a=t.attr("href").split("#");null!=a[1]&&""!=(e=a[1].trim())&&t.append('<span class="text">'+e+"</span>"),t.attr("href",a[0].trim())}),$(".FollowByEmail .widget-content").each(function(e,t){var a=$(this),s=a.data("shortcode");null!=s&&(e=shortCodeIfy(s,"title"),t=shortCodeIfy(s,"text"),0!=e&&a.find(".follow-by-email-title").text(e),0!=t&&a.find(".follow-by-email-text").text(t))}),$(".post-body a").each(function(){var e=$(this),t=e.html(),a=t.toLowerCase(),s=shortCodeIfy(t,"text"),i=shortCodeIfy(t,"icon"),o=shortCodeIfy(t,"color");a.match("getbutton")&&0!=s&&(e.addClass("button btn").text(s),0!=i&&e.addClass(i),0!=o&&e.addClass("colored-button").attr("style","background-color:"+o+";"))}),$(".post-body b").each(function(){var e=$(this),t=e.text(),a=t.toLowerCase().trim();a.match(/(?:\$ads\=\{1\})/g)&&e.replaceWith('<div id="litespot-pro-new-before-ad"/>'),a.match(/(?:\$ads\=\{2\})/g)&&e.replaceWith('<div id="litespot-pro-new-after-ad"/>'),a.match("{tocify}")&&(t=0!=shortCodeIfy(t,"title")?shortCodeIfy(t,"title"):"Table of Contents",e.replaceWith('<div class="tocify-wrap"><div class="tocify-inner"><a href="javascript:;" class="tocify-title" role="button" title="'+t+'"><span class="tocify-title-text">'+t+'</span></a><ol id="tocify"></ol></div></div>'),$(".tocify-title").each(function(e){(e=$(this)).on("click",function(){e.toggleClass("is-expanded"),$("#tocify").slideToggle(170)})}),$("#tocify").toc({content:"#post-body",headings:"h2,h3,h4"}),$("#tocify li a").each(function(e){(e=$(this)).click(function(){return $("html,body").animate({scrollTop:$(e.attr("href")).offset().top-20},500),!1})})),a.match("{contactform}")&&(e.replaceWith('<div class="contact-form"/>'),$(".contact-form").append($("#ContactForm1"))),a.match("{leftsidebar}")&&($("body").addClass("is-left"),e.remove()),a.match("{rightsidebar}")&&($("body").addClass("is-right").removeClass("is-left"),e.remove()),a.match("{fullwidth}")&&($("body").addClass("no-sidebar"),e.remove())}),$("#litespot-pro-new-before-ad").each(function(){var e=$(this);e.length&&$("#before-ad").appendTo(e)}),$("#litespot-pro-new-after-ad").each(function(){var e=$(this);e.length&&$("#after-ad").appendTo(e)}),$("#litespot-pro-main-before-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#before-ad"))}),$("#litespot-pro-main-after-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#after-ad"))}),$("#litespot-pro-post-footer-ads .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#post-footer-ads"))}),$(".post-body blockquote").each(function(){var e=$(this),t=e.text().toLowerCase().trim(),a=e.html();if(t.match("{alertsuccess}")){const t=a.replace("{alertSuccess}","");e.replaceWith('<div class="alert-message alert-success">'+t+"</div>")}if(t.match("{alertinfo}")){const t=a.replace("{alertInfo}","");e.replaceWith('<div class="alert-message alert-info">'+t+"</div>")}if(t.match("{alertwarning}")){const t=a.replace("{alertWarning}","");e.replaceWith('<div class="alert-message alert-warning">'+t+"</div>")}if(t.match("{alerterror}")){const t=a.replace("{alertError}","");e.replaceWith('<div class="alert-message alert-error">'+t+"</div>")}if(t.match("{codebox}")){const t=a.replace("{codeBox}","");e.replaceWith('<pre class="code-box">'+t+"</pre>")}}),$(".entry-share-links .window-ify,.litespot-pro-share-links .window-ify").on("click",function(){var e=$(this),t=e.data("url"),a=e.data("width"),s=e.data("height"),i=window.screen.width,o=window.screen.height,r=Math.round(i/2-a/2),n=Math.round(o/2-s/2);window.open(t,"_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width="+a+",height="+s+",left="+r+",top="+n).focus()}),$(".litespot-pro-share-links").each(function(){var e=$(this);e.find(".show-hid a").on("click",function(){e.toggleClass("show-hidden")})}),$(".about-author .author-text").each(function(){var e=$(this),t=e.find("a");t.each(function(){var e=$(this),t=e.text().trim(),a=e.attr("href");e.replaceWith('<li class="'+t+'"><a href="'+a+'" title="'+t+'" rel="noopener noreferrer" target="_blank"/></li>')}),t.length&&e.parent().append('<ul class="author-links social social-color"></ul>'),e.find("li").appendTo(".author-links")}),$("#litespot-pro-main-nav-menu li.mega-menu").each(function(e,t){var a=$(this),s=a.find("a").data("shortcode");null!=s&&(e=s.toLowerCase(),ajaxMega(a,"msimple",5,shortCodeIfy(s,"label"),e))}),$("#ticker .HTML .widget-content").each(function(e,t){var a=$(this),s=$(window),i=a.data("shortcode");null!=i&&(mtc=i.toLowerCase(),e=shortCodeIfy(i,"results"),t=shortCodeIfy(i,"label"),s.on("load resize scroll",function i(){s.scrollTop()+s.height()>=a.offset().top&&(s.off("load resize scroll",i),ajaxTicker(a,"ticker",e,t,mtc))}).trigger("scroll"))}),$("#featured .HTML .widget-content").each(function(e){var t=$(this),a=$(window),s=t.data("shortcode");null!=s&&(mtc=s.toLowerCase(),e=shortCodeIfy(s,"label"),a.on("load resize scroll",function s(){a.scrollTop()+a.height()>=t.offset().top&&(a.off("load resize scroll",s),ajaxFeatured(t,"featured",3,e,mtc))}).trigger("scroll"))}),$(".content-section .HTML .widget-content").each(function(e,t,a){var s=$(this),i=$(window),o=s.data("shortcode");null!=o&&(mtc=o.toLowerCase(),e=shortCodeIfy(o,"results"),t=shortCodeIfy(o,"label"),a=shortCodeIfy(o,"type"),i.on("load resize scroll",function o(){i.scrollTop()+i.height()>=s.offset().top&&(i.off("load resize scroll",o),ajaxBlock(s,a,e,t,mtc))}).trigger("scroll"))}),$(".litespot-pro-widget-ready .HTML .widget-content").each(function(e,t,a,s){var i=$(this),o=$(window),r=i.data("shortcode");null!=r&&(e=r.toLowerCase(),t=shortCodeIfy(r,"results"),a=shortCodeIfy(r,"label"),s=shortCodeIfy(r,"type"),o.on("load resize scroll",function r(){o.scrollTop()+o.height()>=i.offset().top&&(o.off("load resize scroll",r),ajaxWidget(i,s,t,a,e))}).trigger("scroll"))}),$("#litespot-pro-related-posts .HTML").each(function(e,t){var a=$(this).data("shortcode");if(null!=a){function s(){return e=shortCodeIfy(a,"title"),t=shortCodeIfy(a,"results"),[e,t]}$("#related-wrap").each(function(e,t){var a=$(this),i=$(window),o=a.find(".litespot-pro-related-content"),r=s();e=0!=r[1]?r[1]:3,0!=r[0]&&a.find(".related-title .title > span").text(r[0]),t=a.find(".related-tag").data("label"),i.on("load resize scroll",function a(){i.scrollTop()+i.height()>=o.offset().top&&(i.off("load resize scroll",a),ajaxRelated(o,"related",e,t))}).trigger("scroll")})}}),$(".litespot-pro-blog-post-comments").each(function(){var e=$(this),t=e.data("shortcode"),a=shortCodeIfy(t,"type"),s="comments-system-"+a,i=e.find("#top-continue .comment-reply");switch(a){case"disqus":var o=shortCodeIfy(t,"shortname");0!=o&&(disqus_shortname=o),disqusComments(disqus_shortname),e.addClass(s).show();break;case"facebook":e.addClass(s).find("#comments").html('<div class="fb-comments" data-width="100%" data-href="'+disqus_blogger_current_url+'" order_by="time" data-numposts="5" data-lazy="true"></div>'),e.show();break;case"hide":e.hide();break;default:e.addClass("comments-system-blogger").show(),$(".entry-meta .entry-comments-link").addClass("show"),i.addClass("btn"),beautiAvatar(".avatar-image-container img")}var r=e.find(".comments .comment-reply"),n=e.find(".comments #top-continue"),l=e.find("#top-ce.comment-replybox-thread");r.on("click",function(){n.show(),l.hide()}),n.on("click",function(){n.hide(),l.show()})}),$(function(){$(".entry-image-wrap .entry-thumb,.author-avatar-wrap .author-avatar").lazyify(),$("#litespot-pro-mobile-menu").each(function(){var e=$(this),t=$("#litespot-pro-main-nav-menu").clone();t.attr("id","main-mobile-nav"),t.find(".mega-items").remove(),t.find(".mega-menu > a").each(function(e,t){var a=$(this),s=a.data("shortcode");null!=s&&(t="recent"==(e=shortCodeIfy(s.trim(),"label"))?"/search":"/search/label/"+e,a.attr("href",t))}),t.appendTo(e),$(".mobile-menu-toggle, .hide-litespot-pro-mobile-menu, .overlay").on("click",function(){$("body").toggleClass("nav-active")}),$(".litespot-pro-mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".litespot-pro-mobile-menu .mega-menu").find(".submenu-toggle").remove(),$(".litespot-pro-mobile-menu ul li .submenu-toggle").on("click",function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))})}),$(".mm-footer .mm-social").each(function(){var e=$(this),t=$("#litespot-pro-about-section ul.social").clone();t.removeClass("social-bg-hover"),t.appendTo(e)}),$(".mm-footer .mm-menu").each(function(){var e=$(this);$("#footer-menu ul.link-list").clone().appendTo(e)}),$(".header-inner").each(function(){var e=$(this);if(1==fixedMenu&&e.length>0){var t=$(document).scrollTop(),a=e.offset().top,s=e.height(),i=a+s+s;$(window).scroll(function(){var s=$(document).scrollTop();s>i?e.addClass("is-fixed"):(s<a||s<=1)&&e.removeClass("is-fixed"),s>t?e.removeClass("show"):e.addClass("show"),t=s})}}),fixedSidebarIfy("#main-wrapper, #sidebar-wrapper"),$("#post-body iframe").each(function(){var e=$(this);e.attr("src").match("www.youtube.com")&&e.wrap('<div class="responsive-video-wrap"/>')}),$("p.comment-content").each(function(){var e=$(this);e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,'<img src="$1"/>'),e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,'<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')}),$("#litespot-pro-load-more-link").each(function(){var e=$(this).data("load");e&&$("#litespot-pro-load-more-link").show(),$("#litespot-pro-load-more-link").on("click",function(t){$("#litespot-pro-load-more-link").hide(),$.ajax({url:e,success:function(t){var a=$(t).find(".blog-posts");a.find(".index-post").addClass("post-animated post-fadeInUp"),$(".blog-posts").append(a.html()),(e=$(t).find("#litespot-pro-load-more-link").data("load"))?$("#litespot-pro-load-more-link").show():($("#litespot-pro-load-more-link").hide(),$("#blog-pager .no-more").addClass("show"))},beforeSend:function(){$("#blog-pager .loading").show()},complete:function(){$("#blog-pager .loading").hide(),$(".index-post .entry-image-wrap .entry-thumb").lazyify(),fixedSidebarIfy("#main-wrapper")}}),t.preventDefault()})}),$("#litespot-pro-cookie-ify").each(function(){var e=$(this),t=e.find(".widget.Text").data("shortcode");null!=t&&(ok=shortCodeIfy(t,"ok"),days=shortCodeIfy(t,"days"),0!=ok&&e.find("#litespot-pro-cookie-ify-accept").text(ok),0!=days?days=Number(days):days=7),e.length>0&&("1"!==$.cookie("litespot_preview_cookie_ify_consent")&&(e.css("display","block"),$(window).on("load",function(){e.addClass("is-visible")})),$("#litespot-pro-cookie-ify-accept").off("click").on("click",function(t){t.preventDefault(),t.stopPropagation(),$.cookie("litespot_preview_cookie_ify_consent","1",{expires:days,path:"/"}),e.removeClass("is-visible"),setTimeout(function(){e.css("display","none")},500)}),cookieChoices={})}),$("#back-top").each(function(){var e=$(this);$(window).on("scroll",function(){$(this).scrollTop()>=100?e.fadeIn(170):e.fadeOut(170),e.offset().top>=$("#footer-wrapper").offset().top-34?e.addClass("on-footer"):e.removeClass("on-footer")}),e.on("click",function(){$("html, body").animate({scrollTop:0},500)})})});
//]]>
 
            //<![CDATA[
var text_month = [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var no_image_url = "http://1.bp.blogspot.com/-eAeO-DYJDws/Vkqtj4HFBFI/AAAAAAAAB0o/Q5OLsyONXM0/s1600-r/nth.png";

           var static_page_text = $.trim($('.static_page .post-body').text());
if (static_page_text === "[sitemap]") {
    var postbody = $('.static_page .post-body');
    $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: 'get',
        dataType: "jsonp",
        success: function(dataZ) {
            var blogLabels = [];
            for (var t = 0; t < dataZ.feed.category.length; t++) {
                blogLabels.push(dataZ.feed.category[t].term)
            }
            var blogLabels = blogLabels.join('/');
            postbody.html('<div class="siteLabel"></div>');
            $('.static_page .post-body .siteLabel').text(blogLabels);
            var splabel = $(".siteLabel").text().split("/");
            var splabels = "";
            for (get = 0; get < splabel.length; ++get) {
                splabels += "<span>" + splabel[get] + "</span>"
            }
            $(".siteLabel").html(splabels);
            $('.siteLabel span').each(function() {
                var mapLabel = $(this);
                var mapLabel_text = $(this).text();
                $.ajax({
                    url: "/feeds/posts/default/-/" + mapLabel_text + "?alt=json-in-script",
                    type: 'get',
                    dataType: "jsonp",
                    success: function(data) {
                        var posturl = "";
                        var htmlcode = '<div class="mapa">';
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                                if (data.feed.entry[i].link[j].rel == "alternate") {
                                    posturl = data.feed.entry[i].link[j].href;
                                    break
                                }
                            }
                            var posttitle = data.feed.entry[i].title.$t;
                            var author = data.feed.entry[i].author[0].name.$t;
                            var get_date = data.feed.entry[i].published.$t,
                                year = get_date.substring(0, 4),
                                month = get_date.substring(5, 7),
                                day = get_date.substring(8, 10),
                                date = text_month[parseInt(month, 10)] + ' ' + day + ', ' + year;
                            var tag = data.feed.entry[i].category[0].term;
                            var content = data.feed.entry[i].content.$t;
                            var $content = $('<div>').html(content);
                            var src2 = data.feed.entry[i].media$thumbnail.url;
                            htmlcode += '<div class="mapapost"><div class="map-thumb"><div class="map-img"><a href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/></div></div><h3 class="wrp-titulo"><a href="' + posturl + '">' + posttitle + '</a></h3><div class="map-meta"><span class="p-author">' + author + '</span><span class="p-date">' + date + '</span></div></div>'
                        }
                        htmlcode += '</div>';
                        mapLabel.replaceWith('<div class="mapasite"><h2>' + mapLabel_text + '<span class="botao"><i class="fa fa-plus-circle"></i></span></h2>' + htmlcode + '</div>');
                        $(document).on('click', '.mapasite h2', function() {
                            $(this).parent('.mapasite').addClass('active');
                            $(this).find('.botao .fa').removeClass('fa-plus-circle').addClass('fa-minus-circle');
                        });
                        $(document).on('click', '.mapasite.active h2', function() {
                            $(this).parent('.mapasite').removeClass('active');
                            $(this).find('.botao .fa').addClass('fa-plus-circle').removeClass('fa-minus-circle');
                        });
                    }
                });
            });
        }
    });
}
            //]]>

if (&#39;serviceWorker&#39; in navigator) {
  navigator.serviceWorker.register(&#39;https://raw.githubusercontent.com/stefanstavrianos/stavrianoseconblog/main/service-worker.js&#39;)
  .then(function(registration) {
    console.log(&#39;ServiceWorker registration successful with scope: &#39;, registration.scope);
  }).catch(function(error) {
    console.log(&#39;ServiceWorker registration failed: &#39;, error);
  });
}

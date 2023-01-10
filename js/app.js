
const header =`
<div class="navbar">
    <!--*Logo-->
    <div class="logo">
    <img class="item14" src="images/logo_h_img/14.png" >
    <img class="item13" src="images/logo_h_img/13.png" >
    <img class="item12" src="images/logo_h_img/12.png" >
    <img class="item11" src="images/logo_h_img/11.png" >
    <img class="item10" src="images/logo_h_img/10.png" >
    <img class="item9" src="images/logo_h_img/9.png" >
    <img class="item8" src="images/logo_h_img/8.png" >
    <img class="item7" src="images/logo_h_img/7.png" >
    <img class="item6" src="images/logo_h_img/6.png" >
    <img class="item5" src="images/logo_h_img/5.png" >
    <img class="item4" src="images/logo_h_img/4.png" >
    <img class="item3" src="images/logo_h_img/3.png" >
    <img class="item2" src="images/logo_h_img/2.png" >
    <img class="item1" src="images/logo_h_img/1.png" >
    <a href="/#">
        <img class="invert  item0" src="images/logo_h_img/0.png" >
    </a> 
    </div>

    <!--*Navigation list-->
    <nav>
        <ul>
            <li><a href="#AboutMe">Home</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Blogs">Blogs</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</div>
`
const footer =`
<!--*Name and Copyright-->
<div class="siteAuthor">
  <p> 
    <i class="fa-regular fa-copyright"></i> Arvind Kumar - <span id="current-year"></span> 
  </p>
</div>
<!--*Social Links-->
<div class="socials">
    <span>
        Find me at:
    </span>
    <div class="icons iconColor-1 icon-1">
        <a href="https://github.com/Arvind11747" target="_blank" rel="noreferrer noopener">
            <i class="fa-brands fa-github"></i>
        </a>
    </div>
    <div class="icons iconColor-1 icon-2">
        <a href="https://linkedin.com/in/arvind-kumar-155430115/" target="_blank" rel="noreferrer noopener">
            <i  class="fa-brands fa-linkedin"></i>
        </a>
    </div>
    <div class="icons iconColor-1 icon-3">
        <a href="https://www.youtube.com/@arvind11747" target="_blank" rel="noreferrer noopener">
            <i class="fa-brands fa-youtube"></i>
        </a>
    </div>
    <div class="icons iconColor-1 icon-4">
        <a href="https://arvindkumar.itch.io" target="_blank" rel="noreferrer noopener">
            <i class="fa-brands fa-itch-io"></i>
        </a>
    </div>
    <div class="icons iconColor-1 icon-5">
        <a href="https://www.twitter.com/HikatoKage117"target="_blank" rel="noreferrer noopener">
            <i class="fa-brands fa-twitter"></i>
        </a>
    </div>
    <div class="icons iconColor-1 icon-6">
        <a href="https://www.instagram.com/lyricmation/"target="_blank" rel="noreferrer noopener">
            <i class="fa-brands fa-instagram"></i>
        </a>
    </div>
</div>
`

//Header Snippet
var headerInsert = document.getElementById("header");
headerInsert.innerHTML = header;
// When the user scrolls the page, execute stickUp
window.onscroll = function() {stickUp()};
// Get the offset position of the navbar
var sticky = headerInsert.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickUp() 
{
  if (window.pageYOffset > sticky) 
  {
    headerInsert.classList.add("sticky");
  } 

  else 
  {
    headerInsert.classList.remove("sticky");
  }
}

//Footer Snippet
const footerInsert = document.getElementById("footer");
footerInsert.innerHTML = footer;


//Update Year
const year = document.querySelector('#current-year');
year.innerHTML = new Date().getFullYear();

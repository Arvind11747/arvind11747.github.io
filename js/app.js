
const header =`
<div class="my-navbar">
    <!--*Logo-->
    <div class="logo">
    <img class="item14 ak-14" src="images/ak.svg">
    <img class="item13 ak-13" src="images/ak.svg">
    <img class="item12 ak-12" src="images/ak.svg">
    <img class="item11 ak-11" src="images/ak.svg">
    <img class="item10 ak-10" src="images/ak.svg">
    <img class="item9 ak-9" src="images/ak.svg">
    <img class="item8 ak-8" src="images/ak.svg">
    <img class="item7 ak-7" src="images/ak.svg">
    <img class="item6 ak-6" src="images/ak.svg">
    <img class="item5 ak-5" src="images/ak.svg">
    <img class="item4 ak-4" src="images/ak.svg">
    <img class="item3 ak-3" src="images/ak.svg">
    <img class="item2 ak-2" src="images/ak.svg">
    <img class="item1 ak-1" src="images/ak.svg">
    <a href="#">
        <img id="invert" class="item0 ak-0" src="images/ak.svg">
    </a> 
    </div>

    <!--*Navigation list-->
    <nav>
        <ul>
            <li><a id="home">Home</a></li>
            <li><a href="https://arvindkumar.itch.io">Portfolio</a></li>
            <li><a href="https://blog.arvindg.com">Blogs</a></li>
            <li><a href="mailto:arvindkumarlym@gmail.com">Contact</a></li>
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
    <div class="icons iconColor-1 icon-01">
        <a id="github" href = "https://github.com/Hikaru11747" target="_blank" rel="noreferrer noopener">
            <i class="fa-brands fa-github"></i>
        </a>
    </div>
    <div class="icons iconColor-1 icon-02">
        <a id="linkedin" href = "https://linkedin.com/in/arvind-kumar-155430115/" target="_blank" rel="noreferrer noopener">
            <i  class="fa-brands fa-linkedin"></i>
        </a>
    </div>
    <div class="icons iconColor-1 icon-03">
        <a id="youtube" href = "https://www.youtube.com/@arvind11747" target="_blank" rel="noreferrer noopener">
            <i class="fa-brands fa-youtube"></i>
        </a>
    </div>
    <div class="icons iconColor-1 icon-04">
        <a id="itchio" href = "https://arvindkumar.itch.io" target="_blank" rel="noreferrer noopener">
            <i class="fa-brands fa-itch-io"></i>
        </a>
    </div>
    <div class="icons iconColor-1 icon-05">
        <a id="twitter" href = "https://www.twitter.com/HikatoKage117" target="_blank" rel="noreferrer noopener">
            <i class="fa-brands fa-twitter"></i>
        </a>
    </div>
    <div class="icons iconColor-1 icon-06">
        <a id="instagram" href = "https://www.instagram.com/lyricmation/" target="_blank" rel="noreferrer noopener">
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

linkInserter();

function linkInserter() {
    // document.getElementById("github").href = "https://github.com/Hikaru11747";
    // document.getElementById("linkedin").href = "https://linkedin.com/in/arvind-kumar-155430115/";
    // document.getElementById("youtube").href = "https://www.youtube.com/@arvind11747";
    // document.getElementById("itchio").href = "https://arvindkumar.itch.io";
    // document.getElementById("twitter").href = "https://www.twitter.com/HikatoKage117";
    // document.getElementById("instagram").href = "https://www.instagram.com/lyricmation/";

    var path = window.location.pathname;
    var page = path.split("/").pop();

    if(page == "index.html"){
        document.getElementById("home").href = "#top";
    }
    else{
        document.getElementById("home").href = "index.html";
    }
    
    //document.getElementById("website").href = "#";
}


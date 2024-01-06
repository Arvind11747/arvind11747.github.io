// const year = document.querySelector('#current-year');
// year.innerHTML = new Date().getFullYear();

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 10) {
        document.querySelector("#header").classList.add("headerShadow");
    } else {
        document.querySelector("#header").classList.remove("headerShadow");
    }
});

const toggleSwitch = document.querySelector('.toggle input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const year = document.querySelector('#current-year');
year.innerHTML = new Date().getFullYear();

birthdayQuery();

function birthdayQuery(){
    const date = new Date();
    if(date.getDate() == 7 && date.getMonth() == 4)
    {        
        const listItem = document.querySelector('#care-list');
        listItem.innerHTML = `
        <li class="scroll-list-item">Birthday-Boy!</li>
        <li class="scroll-list-item">Game Developer</li> 
        <li class="scroll-list-item">Programmer</li>
        <li class="scroll-list-item">Designer</li>
        <li class="scroll-list-item">Artist</li>
        <li class="scroll-list-item">Maker of things</li>
        <li class="scroll-list-item">Experimentalist</li>`;
    }
}
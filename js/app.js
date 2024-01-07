window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 10) {
        document.querySelector("#header").classList.add("headerShadow");
    } else {
        document.querySelector("#header").classList.remove("headerShadow");
    }
});

/*----------------Theme Selector--------------*/
const toggleSwitch = document.querySelector('.toggle input[type="checkbox"]');

function setColorScheme(scheme) {
    switch(scheme){
        case 'dark':
        toggleSwitch.checked = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        // console.log('dark');
        
        break;
        case 'light':
        toggleSwitch.checked = false;
        document.documentElement.setAttribute('data-theme', 'light');

        // console.log('light');
        // Light
        break;
        default:
        // Default
        toggleSwitch.checked = false;
        document.documentElement.setAttribute('data-theme', 'light');   

        // console.log('default');
        break;
    }
    toggleSwitch.addEventListener('change', switchTheme, false);
}

function getPreferredColorScheme() {
if (window.matchMedia) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    return 'dark';
    } else {
    return 'light';
    }
}
return 'light';
}

function updateColorScheme(){
    setColorScheme(getPreferredColorScheme());
}

if(window.matchMedia){
var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
colorSchemeQuery.addEventListener('change', updateColorScheme);
}

updateColorScheme();

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
/*----------------Theme Selector--------------*/


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
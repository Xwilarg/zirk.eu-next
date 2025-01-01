function goToTab(mainNav, li) {
    for (let l of mainNav.querySelectorAll("li"))
    {
        l.classList.remove("is-active");
    }
    li.classList.add("is-active");
}

async function initAsync() {
    const urlParam = window.location.hash.toLowerCase().substring(1);
    const mainNav = document.getElementById("main-nav");
    for (let link of mainNav.querySelectorAll("li"))
    {
        link.addEventListener("click", (_) => {
            goToTab(mainNav, link);
        });
        if (urlParam === link.querySelector("a").href.split('#')[1]) {
            goToTab(mainNav, link);
        }
    }
}

document.onreadystatechange = async function () {
    if (document.readyState == "interactive") {
        await initAsync();
    }
};
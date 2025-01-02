function goToTab(mainNav, li) {
    // Edit tab view to show current active
    for (let l of mainNav.querySelectorAll("li"))
    {
        l.classList.remove("is-active");
    }
    li.classList.add("is-active");

    // Update shown containers
    for (let l of document.querySelectorAll("#articles > div"))
    {
        l.classList.add("is-hidden");
    }
    const link = li.querySelector("a");
    document.getElementById(`target-${link.href.split('#')[1]}`).classList.remove("is-hidden");
}

async function initAsync() {
    // Look at the #parameter and open the corresponding things
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
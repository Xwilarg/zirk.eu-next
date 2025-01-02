import { setupGamejams } from "./gamejam";
import { setupTabs } from "./tabs";


async function initAsync() {
    setupTabs();
    setupGamejams();
}

document.onreadystatechange = async function () {
    if (document.readyState == "interactive") {
        await initAsync();
    }
};
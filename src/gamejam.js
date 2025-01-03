export function setupGamejams()
{
    const jamsList = document.querySelectorAll(".gamejam");
    function filter() {
        for (let elem of jamsList) {
            let l = document.getElementById("filter-location")
            if (l.value !== "" && l.value !== elem.dataset.location) {
                elem.classList.add("is-hidden");
                continue;
            }
            let isOk;
            let d = document.getElementById("filter-duration")
            let entries = Array.from(d.selectedOptions).map(x => x.value);
            for (let e of entries) {
                const s = e.split('-');
                const duration = parseInt(elem.dataset.duration);
                if (duration >= parseInt(s[0]) && duration <= parseInt(s[1])) {
                    isOk = true;
                    break;
                }
            }
            if (!isOk) {
                elem.classList.add("is-hidden");
                continue;
            }
            let en = document.getElementById("filter-entries");
            entries = Array.from(en.selectedOptions).map(x => x.value);
            if (elem.dataset.entries == -1) {
                if (!entries.includes("-1")) {
                    elem.classList.add("is-hidden");
                    continue;
                }
            }
            else
            {
                isOk = false;
                for (let e of entries) {
                    const s = e.split('-');
                    const enGame = parseInt(elem.dataset.entries);
                    if (enGame >= parseInt(s[0]) && enGame <= parseInt(s[1])) {
                        isOk = true;
                        break;
                    }
                }
                if (!isOk) {
                    elem.classList.add("is-hidden");
                    continue;
                }
            }
            let y = document.getElementById("filter-year");
            if (y.value !== "" && y.value !== elem.dataset.year) {
                elem.classList.add("is-hidden");
                continue;
            }
            let e = document.getElementById("filter-engine");
            if (e.value !== "" && e.value !== elem.dataset.engine) {
                elem.classList.add("is-hidden");
                continue;
            }
            let e2 = document.getElementById("filter-event");
            if (e2.value !== "" && e2.value !== elem.dataset.event) {
                elem.classList.add("is-hidden");
                continue;
            }
            let pe = document.getElementById("filter-people");
            if (pe.value !== "" && !elem.dataset.team.split(';').includes(pe.value)) {
                elem.classList.add("is-hidden");
                continue;
            }
            let alone = document.getElementById("filter-alone");
            if (alone.checked && elem.dataset.team !== "") {
                elem.classList.add("is-hidden");
                continue;
            }
            let ranked = document.getElementById("filter-ranked");
            if (ranked.checked && elem.dataset.score === "1") {
                elem.classList.add("is-hidden");
                continue;
            }
            let nsfw = document.getElementById("filter-nsfw");
            if (nsfw && nsfw.checked && elem.dataset.nsfw !== "1") {
                elem.classList.add("is-hidden");
                continue;
            }
            elem.classList.remove("is-hidden");
        }

        document.getElementById("entriesFiltered").innerHTML = ` (${Array.from(jamsList).filter(x => !x.classList.contains("is-hidden")).length})`;
    }

    let filters = [
        "filter-location", "filter-duration", "filter-year", "filter-engine", "filter-event", "filter-entries", "filter-people", "filter-alone", "filter-ranked", "filter-nsfw"
    ]

    for (let f of filters) {
        const fDoc = document.getElementById(f);
        if (fDoc) {
            fDoc.addEventListener("change", _ => {
                filter();
            });
        }
    }
    filter();
}
export function setupGamejams()
{
    const jamsList = document.querySelectorAll(".gamejam");
    function filter() {
        for (let elem of jamsList) {
            const game = elem;
            let l = document.getElementById("filter-location")
            if (l.value !== "" && l.value !== game.dataset.location) {
                game.classList.add("is-hidden");
                continue;
            }
            let d = document.getElementById("filter-duration")
            if (d.value !== "") {
                const s = d.value.split('-');
                const duration = parseInt(game.dataset.duration);
                if (duration < parseInt(s[0]) || duration > parseInt(s[1])) {
                    game.classList.add("is-hidden");
                    continue;
                }
            }
            let en = document.getElementById("filter-entries");
            if (en.value !== "") {
                if (en.value === "-1") {
                    if (game.dataset.entries !== "-1") {
                        game.classList.add("is-hidden");
                        continue;
                    }
                }
                const s = en.value.split('-');
                const entries = parseInt(game.dataset.entries);
                if (entries < parseInt(s[0]) || entries > parseInt(s[1])) {
                    game.classList.add("is-hidden");
                    continue;
                }
            }
            let y = document.getElementById("filter-year");
            if (y.value !== "" && y.value !== game.dataset.year) {
                game.classList.add("is-hidden");
                continue;
            }
            let e = document.getElementById("filter-engine");
            if (e.value !== "" && e.value !== game.dataset.engine) {
                game.classList.add("is-hidden");
                continue;
            }
            let e2 = document.getElementById("filter-event");
            if (e2.value !== "" && e2.value !== game.dataset.event) {
                game.classList.add("is-hidden");
                continue;
            }
            let pe = document.getElementById("filter-people");
            if (pe.selectedOptions.length > 0 && (pe.selectedOptions.length > 1 || pe.value != "") && new Set(Array.from(pe.selectedOptions).map(x => x.value)).intersection(new Set(game.dataset.team.split(';'))).size != pe.selectedOptions.length) {
                game.classList.add("is-hidden");
                continue;
            }
            let alone = document.getElementById("filter-alone");
            if (alone.checked && game.dataset.team !== "") {
                game.classList.add("is-hidden");
                continue;
            }
            let ranked = document.getElementById("filter-ranked");
            if (ranked.checked && game.dataset.score === "1") {
                game.classList.add("is-hidden");
                continue;
            }
            let nsfw = document.getElementById("filter-nsfw");
            if (nsfw.checked && game.dataset.nsfw !== "1") {
                game.classList.add("is-hidden");
                continue;
            }
            game.classList.remove("is-hidden");
        }
    }

    let filters = [
        "filter-location", "filter-duration", "filter-year", "filter-engine", "filter-event", "filter-entries", "filter-people", "filter-alone", "filter-ranked", "filter-nsfw"
    ]

    for (let f of filters) {
        document.getElementById(f).addEventListener("change", _ => {
            filter();
        });
    }
}
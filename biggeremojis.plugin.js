/**
 * @name BiggerEmojis
 */


const payloads = {}

class BiggerEmojis {
    getName() { return "BiggerEmojis" }
    getAuthor() { return "Mika ❤ Floppa#2716" }
    getDescription() { return "Enlarges emojis!" }
    getVersion() { return "1.0.0" }

    load() {
        const observer = new MutationObserver(() => {
            if (BdApi.Plugins.isEnabled(this.getName()))
            refreshEmojis()
        });

        observer.observe(document.body, {attributes: false, childList: true, subtree: true});
    }

    unload() {
        let emojis = document.getElementsByClassName("emojiContainer-2XKwXX")
        for (let i = 0; i < emojis.length; i++) {
            if (emojis[i].firstChild.classList.contains("toggle")) {
                emojis[i].firstChild.classList.remove("jumboable")
                emojis[i].firstChild.classList.remove("toggle")
            }
        }
    }
    start() {}
    stop() {
        let emojis = document.getElementsByClassName("emojiContainer-2XKwXX")
        for (let i = 0; i < emojis.length; i++) {
            if (emojis[i].firstChild.classList.contains("toggle")) {
                emojis[i].firstChild.classList.remove("jumboable")
                emojis[i].firstChild.classList.remove("toggle")
            }
        }
    }
}

function refreshEmojis() {
    let emojis = document.getElementsByClassName("emojiContainer-2XKwXX")
    for (let i = 0; i < emojis.length; i++) {
        if (emojis[i].firstChild.classList.contains("emoji")) {
            emojis[i].firstChild.classList.add("jumboable")
            emojis[i].firstChild.classList.add("toggle")
        }
    }
}
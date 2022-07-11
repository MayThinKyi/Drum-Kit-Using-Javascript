let key;
let keyTag;
let audioTag;
let removeKeyTag;
let remove = () => {
    removeKeyTag = document.querySelector(".playing");
    if (!removeKeyTag) {
        return;
    } else {
        removeKeyTag.classList.remove("playing");

    }

    return removeKeyTag;
}
window.addEventListener("keydown", (e) => {
    remove();

    key = e.keyCode;
    console.log(key)
    keyTag = document.querySelector(`.keyContainer[data-key="${key}"] `);
    keyTag.classList.add("playing");
    audioTag = document.querySelector(`audio[data-key="${key}"]`);
    console.log(audioTag);
    audioTag.play();




})
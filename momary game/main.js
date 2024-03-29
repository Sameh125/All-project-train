document.querySelector(".control-buttons span").onclick = function () {
    let yourName = prompt("Whats Your Name?");

    if (yourName == null || yourName == "") {
        document.querySelector(".name span").innerHTML = "UnKnown";
    } else {
        document.querySelector(".name span").innerHTML = yourName;
    }
    document.querySelector(".control-buttons").remove();
};

let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

blocks.forEach((block, index) => {
    block.style.order = orderRange[index];
    block.addEventListener("click", function () {
        flipBlock(block);
    });
});

function flipBlock(selectedBlock) {
    selectedBlock.classList.add("is-flipped");
    let allFlippedBlocks = blocks.filter((flipBlock) =>
        flipBlock.classList.contains("is-flipped")
    );

    if (allFlippedBlocks.length === 2) {
        stopClicking();

        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
}

function stopClicking() {
    blocksContainer.classList.add("no-clicking");

    setTimeout(() => {
        blocksContainer.classList.remove("no-clicking");
    }, duration);
}

function checkMatchedBlocks(fristBlock, secondBlock) {
    let triesElement = document.querySelector(".tries span");

    if (fristBlock.dataset.technology === secondBlock.dataset.technology) {
        fristBlock.classList.remove("is-flipped");
        secondBlock.classList.remove("is-flipped");

        fristBlock.classList.add("has-match");
        secondBlock.classList.add("has-match");

        document.getElementById("success").play();
    } else {

        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {
            fristBlock.classList.remove("is-flipped");
            secondBlock.classList.remove("is-flipped");
        }, duration);

        document.getElementById("fail").play();

    }
}

function shuffle(array) {
    let current = array.length,
        temp,
        random;

    while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
}

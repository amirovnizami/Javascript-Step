const $divImagee = $("#images")
const prevBtn = $(".carousel-control-prev")
const nextBtn = $(".carousel-control-next")
const $selected = $("#selectedImage")
const arr = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
]
const $div = $("<div></div>");

arr.map(item => {
    const $image = $("<img>", {
        src: `images/${item}`,
        class: "slideImg"
    });

    $div.append($image)
    $divImagee.append($div)

    $image.click(function () {
        $selected.attr("src", $image.attr("src"));
    });

});

prevBtn.click(() => {
    let index = arr.indexOf($selected.attr("src").toString().split("/")[1])
    if (index == 0) {
        $selected.attr("src", `images/${arr[arr.length -1]}`);
    }
    else {
        $selected.attr("src", `images/${arr[index - 1]}`);
    }
})

nextBtn.click(() => {
    let index = arr.indexOf($selected.attr("src").toString().split("/")[1])
    if (index == arr.length - 1) {
        $selected.attr("src", `images/${arr[0]}`);
    }
    else {
        $selected.attr("src", `images/${arr[index +1]}`);
    }
})
// for (i = 0; i < arr.length; i++) {
//     const $image = $("<img>", {
//         src: `images/${arr[i]}`,
//         class: "slideImg"
//     });

//     $div.append($image)
//     $divImagee.append($div)

//     $image.click(function () {
//         $selected.attr("src", $image.attr("src"));
//     });
//     prevBtn.click(() => {
//         let index = arr.indexOf($selected.attr("src").toString().split("/")[1])
//         console.log(index)
//         // console.log($selected.attr("src"))
//         $selected.attr("src", `images/${arr[index - 1]}`);
//     })
// }




const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NGFmMmI5Mjc4ODFkNzY3MWJiODBiOCIsImlhdCI6MTczMjk4NzgxMSwiZXhwIjoxNzMyOTg4MTExfQ.OJUmOGW2uzEMkrMfxQTgUhC2R-Q9CcpeCLLemLbUROI"
const viewAll = false;
jQuery(document).ready(() => {
    $("#searchInput").on("input", (e) => {
        const searchTerm = e.target.value.trim();
        if (searchTerm.length >= 1) {
            searchProduct(searchTerm);

        }
        else {
            $(".searchWindow").remove()
            $('#content').removeClass('blurred');
            $('#relatedItems').removeClass('blurred');
        }
        $(document).on("click", ".addViewAll", function () {
            $(".searchWindow").remove()
            $('#content').removeClass('blurred');
            $('#relatedItems').removeClass('blurred');
        });
    });
});


$(document).on("click", ".addBtn", function () {
    const quantity = $(".count").text()
    const id = $(".main-img").data("id")

    addBasket(id, quantity)

});
$(document).on("click", ".addBasket", function () {
    console.log("salam");
    var id = $(this).closest('.item').find('img').data('id');

    addBasket(id, "1")
});

$(document).on("click", ".minus", function () {
    const count = $(".count").text();
    let currentCount = parseInt(count);
    if (count == 0) {
        $(".count").text(0)
    }
    else {
        let newCount = currentCount - 1
        $(".count").text(newCount)
    }
});
$(document).on("click", ".plus", function () {
    const count = $(".count").text();
    let currentCount = parseInt(count);
    let newCount = currentCount + 1
    $(".count").text(newCount)

});


async function searchProduct(term) {
    $(".searchWindow").remove()
    $('#content').addClass('blurred');
    $('#relatedItems').addClass('blurred');
    const response = await fetch(term?.length >= 2 ? `http://localhost:3000/api/products?searchTerm=${term}` : 'http://localhost:3000/api/products')

    const data = await response.json()
    const allProducts = data.products
    console.log(allProducts[0])
    allProducts.map(item => {
        console.log(item.title)
    })
    const arr = allProducts
    if (!viewAll) {
        arr.slice(0, 8)
    }
    const productHtml = arr
        .map(item => {

            return `
            <div class="bg-[#F5F5F5] w-[230px] h-[270px] p-[10px] flex justify-center items-center rounded hover:cursor-pointer">
                <div class="item rounded-4">
                    <img class="card-img bg-center object-scale-down h-[220px] px-[40px] py-[35px]" src="${item.gallery[0]}" alt="" data-id = ${item._id}>
                    <p class="display-block font-medium text-[16px] font-poppins leading-7">${item.title}</p>
                    <p class="font-medium text-[16px] text-[#DB4444] font-poppins leading-7">$${item.price}</p>
                </div>
            </div>
        `;


        }).join("");

    const searchWindowHtml =
        `
        <div class="searchWindow p-[20px]  sticky top-0 absolute border-2 backdrop-none; shadow-2xl opactiy-10 z-[9999] overflow-auto shadow-gray-500/150">
            <h3 class="font-semibold text-[36px] leading 10">${term}</h3>
            <div class="grid grid-cols-4 w-full gap-[30px]">
                ${productHtml}
            </div>
            <div class=" closeBtn flex justify-center absolute center  mt-6 text-center w-[100%] pt-4">
                <button class="addViewAll bg-red-500 text-white py-2 px-6 rounded-lg">Close</button>
            </div>
        </div>
        `;


    if ($(".searchWindowHtml")) {
        $(".searchWindow").remove()

    }
    $("#navbar").after(searchWindowHtml);

    $(".card-img").on("click", function () {
        const prodcutId = $(this).data("id")
        openDetails(prodcutId)


    })
}
async function openDetails(id) {

    const reponse = await fetch(`http://localhost:3000/api/products/${id}`, {
        Accept: "application/json"

    })

    const data = await reponse.json()
    const product = data.product
    openRelatedItems(product.category)

    const mainHtml =
        `
            <main id="content" class="grid grid-cols-[1fr_2fr_2fr] mb-[30px] gap-y-4">
            <div class="product-view flex flex-col flex-1 overflow-hidden gap-y-4 w-[170px] h-[550px] mr-[30px]">
                <div class="view h-[135px] bg-cover bg-center object-cover overflow-hidden"><img src="${product.gallery[0]}" alt=""></div>
                <div class="view h-[135px] bg-cover bg-center object-cover overflow-hidden"><img src="${product.gallery[1]}" alt=""></div>
                <div class="view h-[135px] bg-cover bg-center object-cover overflow-hidden"><img src="${product.gallery[2]}" alt=""></div>
                <div class="view h-[135px] bg-cover bg-center object-cover overflow-hidden"><img src="${product.gallery[3]}" alt=""></div>
            </div>
            <div class="main-view h-[550px] w-[450px]">
                <img class="main-img w-full h-full object-contain" src="${product.gallery[0]}" alt=""data-id = ${product._id}>
            </div>

            <div class="product-detail ml-[71px]">
                <h3 class="text-base font-semibold">${product.title}</h3>
                <p class="text-sm font-normal text-[#00FF66] my-4"><span
                        class="w-[16px] text-[#000000] mr-4 opacity-50">|</span>in Stock</p>
                <p class="text-base font-normal text-[#000000] mt-4 mb-4">$${product.price}</p>
                <p class="text-sm font-semibold leading-6 text-[#000000] font-poppins mb-6">${product.description}</p>
                <hr class="text-[#000000] border-[1px] mb-[100px]">
                <div class="addBaskets flex gap-8 mb-[30px]">

                    <div class="countDiv w-[159px] h-[34px] flex">
                        <p class="minus flex-1 border-[1px] rounded text-center cursor-pointer hover:bg-[#DB4444] hover:text-white">-</p>
                        <p class="count flex-[2] border-[1px] rounded text-center">0</p>
                        <p class="plus flex-1 border-[1px] rounded text-center cursor-pointer hover:bg-[#DB4444] hover:text-white">+</p>
                    </div>
                    <button
                        class="addBtn w-[224px] h-[34px] rounded border-[1px] hover:bg-[#DB4444] hover:text-white">Add
                        to Basket</button>
                </div>

                <div class="delivery">
                    <img src="images/Frame 911.jpg" alt="">
                </div>
            </div>
        </main>
    `
    $("#content").html(mainHtml);
}
async function addBasket(id, quantity) {

    const response = await fetch("http://localhost:3000/api/baskets/add", {
        method: "POST",
        body: JSON.stringify({
            productId: id,
            quantity: quantity
        }),
        headers: {
            "Accept": 'application/json',
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": 'application/json'
        }
    });

    const data = response.json()
    console.log(data)
}

async function getAllItemsFromBaskets() {

    const response = await fetch("http://localhost:3000/api/baskets/view", {
        headers: {
            "Accept": 'application/json',
            "Authorization": `Bearer ${accessToken}`
        }
    })
    const data = await response.json();
    console.log(data);
}

async function openRelatedItems(category) {
    const response = await fetch(`http://localhost:3000/api/products?category=${category}`)

    const data = await response.json()
    const products = data.products
    const len = products.length
    console.log(products[0].gallery[2])
    console.log(len)
    const relatedItems =
        `
<main id="relatedItems">
<div class="header flex items-center gap-[10px] mb-[60px]">
    <div class="w-[20px] h-[40px] bg-[#DB4444]"></div>
    <h4 class="font-semibold text-[#DB4444]">Related Items</h4>
</div>
<div class="items flex gap-[42px]">
    <div class="item rounded relative group">
        <div class="px-[40px] py-[35px] bg-[#F5F5F5] h-[250px] flex items-center justify-center  bg-cover bg-center object-cover overflow-hidden">
            <img class="r-img" src="${products[len - 1].gallery[0]}" data-id = ${products[len - 1]._id}>
        </div>
        <p class="my-[8px] font-poppins font-medium text-base">${products[len - 1].title}</p>
        <p class="text-[#DB4444]">$${products[len - 1].price}</p>
        <button
            class="addBasket text-center w-full h-[41px] bg-[#000000] text-white rounded font-poppins font-medium text-base hidden absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 top-[71%] group-hover:block">
            Add to Basket
        </button>
    </div>
    <div class="item rounded relative group  ">
        <div class="px-[40px] py-[35px] bg-[#F5F5F5] h-[250px] flex items-center justify-center bg-cover bg-center object-cover overflow-hidden">
            <img class="r-img" src="${products[len - 2].gallery[0]}" alt="" data-id = ${products[len - 2]._id}>
        </div>
        <p class="my-[8px] font-poppins font-medium text-base">${products[len - 2].title}</p>
        <p class="text-[#DB4444]">$${products[len - 2].price}</p>
        <button
            class="addBasket text-center w-full h-[41px] bg-[#000000] text-white rounded font-poppins font-medium text-base hidden absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 top-[71%] group-hover:block">
            Add to Basket
        </button>
    </div>
    <div class="item rounded relative group  ">
        <div class="px-[40px] py-[35px] bg-[#F5F5F5] h-[250px] flex items-center justify-center bg-cover bg-center object-cover overflow-hidden">
            <img class="r-img" src="${products[len - 4].gallery[0]}" alt="" data-id = ${products[len - 4]._id}>
        </div>
        <p class="my-[8px] font-poppins font-medium text-base">${products[len - 4].title}</p>
        <p class="text-[#DB4444]">$${products[len - 4].price}</p>
        <button
            class="addBasket text-center w-full h-[41px] bg-[#000000] text-white rounded font-poppins font-medium text-base hidden absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 top-[71%] group-hover:block">
            Add to Basket
        </button>
    </div>
    <div class="item rounded relative group  bg-cover ">
        <div class="px-[40px] py-[35px] bg-[#F5F5F5] h-[250px] flex items-center justify-center bg-cover bg-center object-cover overflow-hidden">
            <img class="r-img" src="${products[len - 5].gallery[0]}" alt="" data-id = ${products[len - 5]._id}>
        </div>
        <p class="my-[8px] font-poppins font-medium text-base">${products[len - 4].title}</p>
        <p class="text-[#DB4444]">$${products[len - 5].price}</p>
        <button
            class="addBasket text-center w-full h-[41px] bg-[#000000] text-white rounded font-poppins font-medium text-base hidden absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 top-[71%] group-hover:block">
            Add to Basket
        </button>
    </div>

</div>
</main> `
    $("#relatedItems").html(relatedItems)
}

getAllItemsFromBaskets()


const book1 = {
    title: "Lean In",
    author : "Sheryl Sandberg",
    isAvailable : true
}
const book2 = {
    title: " The Power of Habit",
    author : "Warren Buffet",
    isAvailable : false
}
const book3 = {
    title: " A story of Yesterday",
    author : "Sergio Cobo",
    isAvailable : false
}
// Propertyleri olan book obyektleri duzeldin, global scopeda yazilmis borrow(), returnBook(), info() funksiyalari vasitesile bu obyektlerde asagidaki funksionalligi yerine yetirin:

// borrow funksiyasi cagirildigi obyektdeki isAvailable fieldini yoxlayir, eger true olarsa false edib console logda Book with title: [kitabin adi] borrowed mesajini cixarir, isAvailable false olduqda ise Book with title: [kitabin adi] is not available mesaji cixir

// returnBook funksiyasi cagirildigi obyektdeki isAvailable fieldini true edir, Book with title: [kitabin adi] is returned mesajini qaytarir

// info funksiyasi kitabin title, author ve isAvailable fieldlarini console log edir

function borrow(){
    if(this.isAvailable == true){
        this.isAvailable = false
        console.log(`${this.title} borrowed`);
    }
    else{
        console.log(`${this.title} is not available`);

    }
}
function returnBook(){
    this.isAvailable = true
    console.log(`${this.title} is returned`);
}

function  info(){
    console.log(this.title);
    console.log(this.author);
    console.log(this.isAvailable);
}

borrow.call(book1)
// borrow.call(book1)
// borrow.call(book1)

returnBook.call(book2)

console.log(book1.isAvailable)

// const infoBook = info.bind(book3)
// infoBook()
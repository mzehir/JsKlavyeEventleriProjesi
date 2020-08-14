document.addEventListener("DOMContentLoaded", function () {
    alert('Menü seçimlerinde yada menüler arası geçişte mouse kullanımı yerine sadece yön tuşlarını ve enter ile esc tuşlarını kullanınız.');
});

// Kodlamada Kullanılacak Olan Değişkenler.//
var bodyId = document.getElementById("bodyId");
var homePagebtn = document.getElementById("1");
var foreignTvMoviesbtn = document.getElementById("5");
var film26 = document.getElementById("26");
// Kodlamada Kullanılacak Olan Değişkenler.//

//Template içerisinde belirlediğimiz tuşlara basıldığında tetiklencek olan fonksiyon. || Data(Kodlama sırasında aktif olarak kullanılacak değişkenler)//
bodyId.addEventListener("keydown", function (event) {
    var btn = document.getElementsByClassName("active");
    var divs = document.getElementsByClassName("arrowHover");
    var data = {
        code: event.keyCode,
        selectedBtn: btn,
        selectedDivs: divs,
    }
    arrowDown(data)
    arrowUp(data)
    arrowRight(data)
    arrowLeft(data)
    enter(data)
    escape(data)
})
//Template içerisinde belirlediğimiz tuşlara basıldığında tetiklencek olan fonksiyon. || Data(Kodlama sırasında aktif olarak kullanılacak değişkenler)//

//Aşağı tuşu çalıştırma kodları
const arrowDown = (data) => {
    if (data.code === 40 && data.selectedBtn.length <= 0) {
        modal.style.display = "none";
        modal2.style.display = "none";
        homePagebtn.classList.add("active");
        //Bu if bloğu ile 40 tuşuna basıldığında ilk navbar menüsü aktif olacaktır. 
        //Navbar menüsü aktif olmadan önce de modal ve modal2'nin display'ı none olacaktır.
    }
    else if (data.code === 40 && data.selectedDivs.length > 0 && modal.style.display == "none") {
        var selectedDivsIdInt = parseInt(data.selectedDivs[0].id);
        var unSelectedDivsIdInt = selectedDivsIdInt + 9;
        var unSelectedDivsIdStr = unSelectedDivsIdInt.toString();
        var unSelectedDivsElement = document.getElementById(unSelectedDivsIdStr);
        var selectedDivsElement = document.getElementById(data.selectedDivs[0].id);
        selectedDivsElement.classList.remove("arrowHover");
        if (unSelectedDivsElement === null) {
            selectedDivsElement.classList.add("arrowHover");
            return
            //Bu if bloğu 40 tuşuna basıldığında aktif olan filmin alt kısmında film yoksa aktifliğin o filmde kalmasını sağlar.
        }
        unSelectedDivsElement.classList.add("arrowHover")
        //Bu if bloğu ile 40 tuşuna basıldığında 40 tuşu sadece filmler bölümünde çalışacaktır.
    }
    else if (data.code === 40 && data.selectedBtn.length > 0 && modal2.style.display == "none" && modal.style.display == "none") {
        var selectedBtnIdInt = parseInt(data.selectedBtn[0].id);
        var unSelectedBtnIdInt = selectedBtnIdInt + 1;
        var unSelectedBtnIdStr = unSelectedBtnIdInt.toString();
        var unSelectedBtnElement = document.getElementById(unSelectedBtnIdStr);
        var selectedBtnElement = document.getElementById(data.selectedBtn[0].id);
        selectedBtnElement.classList.remove("active");
        if (unSelectedBtnElement === null) {
            homePagebtn.classList.add("active");
            return
            //Bu if bloğu 40 tuşuna basıldığında aktif olan butonun alt kısmında buton yoksa aktifliği en üstteki butona verir.
        }
        unSelectedBtnElement.classList.add("active");
        //Bu if bloğu ile 40 tuşuna basıldığında navbar aktif butonları sırasıyla bir aşağı kayacaktır.
    }
}
//Aşağı tuşu çalıştırma kodları

// ****************************************************************************************************************************************************************************************

//Yukarı tuşu çalıştırma kodları 
const arrowUp = (data) => {
    if (data.code === 38 && data.selectedBtn.length <= 0) {
        modal.style.display = "none"
        modal2.style.display = "none"
        foreignTvMoviesbtn.classList.add("active");
        //Bu if bloğu ile 38 tuşuna basıldığında son navbar menüsü aktif olacaktır. Navbar menüsü aktif olmadan önce de modal ve modal2'nin display'ı none olacaktır.
    }
    else if (data.code === 38 && data.selectedDivs.length > 0 && modal.style.display == "none") {
        var selectedDivsIdInt = parseInt(data.selectedDivs[0].id);
        var unSelectedDivsIdInt = selectedDivsIdInt - 9;
        var unSelectedDivsIdStr = unSelectedDivsIdInt.toString();
        var unSelectedDivsElement = document.getElementById(unSelectedDivsIdStr);
        var selectedDivsElement = document.getElementById(data.selectedDivs[0].id);
        selectedDivsElement.classList.remove("arrowHover");
        if (unSelectedDivsElement === null) {
            selectedDivsElement.classList.add("arrowHover");
            return
            //Bu if bloğu 38 tuşuna basıldığında aktif olan filmin üst kısmında film yoksa aktifliğin o filmde kalmasını sağlar.
        }
        unSelectedDivsElement.classList.add("arrowHover")
        //Bu if bloğu ile 38 tuşuna basıldığında 38 tuşu sadece filmler bölümünde çalışacaktır.
    }
    else if (data.code === 38 && data.selectedBtn.length > 0 && modal2.style.display == "none" && modal.style.display == "none") {
        var selectedBtnIdInt = parseInt(data.selectedBtn[0].id);
        var unSelectedBtnIdInt = selectedBtnIdInt - 1;
        var unSelectedBtnIdStr = unSelectedBtnIdInt.toString();
        var unSelectedBtnElement = document.getElementById(unSelectedBtnIdStr);
        var selectedBtnElement = document.getElementById(data.selectedBtn[0].id);
        selectedBtnElement.classList.remove("active");
        if (unSelectedBtnElement === null) {
            foreignTvMoviesbtn.classList.add("active");
            return
            //Bu if bloğu 38 tuşuna basıldığında aktif olan butonun üst kısmında buton yoksa aktifliği en alttaki butona verir.
        }
        unSelectedBtnElement.classList.add("active");
        //Bu if bloğu ile 38 tuşuna basıldığında navbar aktif butonları sırasıyla bir yukarı kayacaktır.
    }
}
//Yukarı tuşu çalıştırma kodları

// ****************************************************************************************************************************************************************************************

//Sağ tuşu çalıştırma kodları 
const arrowRight = (data) => {
    if (data.code === 39 && data.selectedBtn.length > 0 && data.selectedDivs.length <= 0 && modal2.style.display == "none") {
        document.getElementById("mainId").classList.add("thanMain");
        document.getElementById("navigationUl").classList.add("hiddenUl");
        document.getElementById("1").innerText = "#";
        document.getElementById("2").innerText = "*";
        document.getElementById("3").innerText = "#";
        document.getElementById("4").innerText = "*";
        document.getElementById("5").innerText = "#";
        film26.classList.add("arrowHover");


        //Bu if bloğu ile 39 tuşuna basıldığında son filmler menüsünün ilk filmi aktif olacaktır.
        //Aynı zamanda soldaki navbar bölümü gizlenecek ve navbar menü isimleri simge halini alacaktır.
    }
    else if (data.code === 39 && data.selectedBtn.length > 0 && data.selectedDivs.length > 0 && modal.style.display == "none") {
        var selectedDivsIdInt = parseInt(data.selectedDivs[0].id);
        var unSelectedDivsIdInt = selectedDivsIdInt + 1;
        var unSelectedDivsIdStr = unSelectedDivsIdInt.toString();
        var unSelectedDivsElement = document.getElementById(unSelectedDivsIdStr);
        var selectedDivsElement = document.getElementById(data.selectedDivs[0].id);
        selectedDivsElement.classList.remove("arrowHover");
        if (unSelectedDivsElement === null) {
            film26.classList.add("arrowHover");
            return
            //Bu if bloğu 39 tuşuna basıldığında aktif olan filmin sağında film yoksa aktifliği ilk filme verir.
        }
        unSelectedDivsElement.classList.add("arrowHover");
        //Bu if bloğu ile 39 tuşuna basıldığında aktif film sırasıyla bir sağa kayacaktır.
    }
}
//Sağ tuşu çalıştırma kodları

// ****************************************************************************************************************************************************************************************

//Sol tuşu çalıştırma kodları 
const arrowLeft = (data) => {
    if (data.code === 37 && data.selectedDivs.length > 0 & modal.style.display == "none") {
        var selectedDivsIdInt = parseInt(data.selectedDivs[0].id);
        var unSelectedDivsIdInt = selectedDivsIdInt - 1;
        var unSelectedDivsIdStr = unSelectedDivsIdInt.toString();
        var unSelectedDivsElement = document.getElementById(unSelectedDivsIdStr);
        var selectedDivsElement = document.getElementById(data.selectedDivs[0].id);
        selectedDivsElement.classList.remove("arrowHover");
        if (unSelectedDivsElement === null) {
            document.getElementById("mainId").classList.remove("thanMain");
            document.getElementById("navigationUl").classList.remove("hiddenUl");
            document.getElementById("1").innerText = "Anasayfa";
            document.getElementById("2").innerText = "Yerli Filmler";
            document.getElementById("3").innerText = "Yabancı Filmler";
            document.getElementById("4").innerText = "Yerli Dizler";
            document.getElementById("5").innerText = "Yabancı Diziler";
            var selectedBtnElement = document.getElementById(data.selectedBtn[0].id);
            selectedBtnElement.classList.add("active", "shortActive");
            setTimeout(function () {
                selectedBtnElement.classList.remove("shortActive");
            }, 300);
            return
            //Bu if bloğu 37 tuşuna basıldığında aktif olan filmin solunda film yoksa aktifliği navbar menüsüne verecektir.
            //Navbar menüsündeki simgelerin yerini menü isimlendirmeleri alacaktır.
            //Ve bu if bloğu içerisindeki setTimeout ile navbar menüsüne geçildiğine dair birde uyarı verilecektir.
        }
        unSelectedDivsElement.classList.add("arrowHover");
        //Bu if bloğu ile 37 tuşuna basıldığında aktif film sırasıyla bir sola kayacaktır.
    }
}
//Sol tuşu çalıştırma kodları

// ****************************************************************************************************************************************************************************************

//Enter tuşu çalıştırma kodları 
const enter = (data) => {
    if (data.code === 13 && data.selectedDivs.length > 0) {
        var filmsTags = data.selectedDivs[0].outerHTML;
        var selectedModelElement = document.getElementById("modalBodyId");
        selectedModelElement.innerHTML = filmsTags;
        modal.style.display = "block";
        //Bu if bloğu ile filmler içerisinde gezinirken enter tuşu vasıtasıyla aksiyon alınır. Ve bu aksiyon ile modal ekrana basılır.
    }
    else if (data.code === 13 && data.selectedBtn.length > 0) {
        modal2.style.display = "block";
        //Bu if bloğu ile navbar içerisinde gezinirken enter tuşu vasıtasıyla aksiyon alınır. Ve bu aksiyon ile modal2 ekrana basılır.
    }

}
//Enter tuşu çalıştırma kodları

// ****************************************************************************************************************************************************************************************

//Esspace tuşu çalıştırma kodları 
const escape = (data) => {
    if (data.code === 27) {
        var selectedModelElement = document.getElementById("modalBodyId");
        selectedModelElement.innerHTML = null;
        modal.style.display = "none";
        modal2.style.display = "none";
        // Bu if bloğu ile ekrana gelen filmle alakalı modal kapatılır.
    }
}
//Esspace tuşu çalıştırma kodları 

// ****************************************************************************************************************************************************************************************

// Modala ait kodlar
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var span2 = document.getElementsByClassName("close")[1];
var modal2 = document.getElementById("myModal2");

span.onclick = function () {
    modal.style.display = "none";
    // Çarpı span ile filmlerler alakalı modal kapatılır.
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // Filmlerle alakalı modal açık durumdayken mouse ile modal dışında herhangi bir yere click yapılırsa modal kapatılır.
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
        // Navbarla alakalı modal açık durumdayken mouse ile modal dışında herhangi bir yere click yapılırsa modal kapatılır.
    }
}
span2.onclick = function () {
    modal2.style.display = "none";
    // Çarpı span ile navbarla alakalı modal kapatılır.
}
// Modala ait kodlar


// Slidera ait kodlar
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
// Slidera ait kodlar

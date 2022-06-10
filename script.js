var gallery = document.querySelectorAll('.gallery div');
var mainPicture = document.getElementById('main-picture');
var valueofMainPicture = 0;
var floatPngImage = document.querySelectorAll('.float-pngImage img');
var pngPicture = document.querySelectorAll('.gallery img');
var imageJPG = [
    './images/image-product-1.jpg', './images/image-product-2.jpg' ,
    './images/image-product-3.jpg', './images/image-product-4.jpg'];
var imagePNG = [
    './images/image-product-1-thumbnail.jpg', './images/image-product-2-thumbnail.jpg' ,
    './images/image-product-3-thumbnail.jpg', './images/image-product-4-thumbnail.jpg'
];

var thumbnailProduct = 'Fall Limited Edition Sneakers';
var priceProduct = 125;
var formatten = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD"
});

// Load MainPicture , Png Picture , Float Png Picture
document.addEventListener('DOMContentLoaded' , () => {
    pngPicture[0].src = imagePNG[0];
    pngPicture[1].src = imagePNG[1];
    pngPicture[2].src = imagePNG[2];
    pngPicture[3].src = imagePNG[3];
    mainPicture.src = imageJPG[0];
    floatPngImage[0].src = imagePNG[0];
    floatPngImage[1].src = imagePNG[1];
    floatPngImage[2].src = imagePNG[2];
    floatPngImage[3].src = imagePNG[3];
});

// Select Produk
function deleteClassGallery() {
    gallery.forEach(element => {
        element.classList.remove('ChangeProduk');
    });
}
function produk1() {
    deleteClassGallery();
    gallery[0].classList = 'ChangeProduk';
    mainPicture.src = imageJPG[0];
    valueofMainPicture = 0;
}
produk1();

function produk2() {
    deleteClassGallery();
    gallery[1].classList = 'ChangeProduk';
    mainPicture.src = imageJPG[1];
    valueofMainPicture = 1;
}

function produk3() {
    deleteClassGallery();
    gallery[2].classList = 'ChangeProduk';
    mainPicture.src = imageJPG[2];
    valueofMainPicture = 2;
}

function produk4() {
    deleteClassGallery();
    gallery[3].classList = 'ChangeProduk';
    mainPicture.src = imageJPG[3];
    valueofMainPicture = 3;
}

// Count Buyer Produk

var Counting = document.querySelectorAll('.count div');
var countProduct = 0;

Counting[1].innerHTML = countProduct;

Counting[0].addEventListener('click', ()=> {
    if (countProduct !== 0) {
        countProduct--;
    }
Counting[1].innerHTML = countProduct;
});

Counting[2].addEventListener('click', ()=> {
        countProduct++;
Counting[1].innerHTML = countProduct;
});

// Active Picture for Float Main Picture
var mainPictureOnOff = true; 
var BlackScreen = document.getElementsByClassName('black-screen')[0];
var floatPicture = document.getElementsByClassName('float-picture')[0];
var valueSRCmainPicture = mainPicture.getAttribute('src');
var floatMainPicture = document.getElementsByClassName('float-Mpicture')[0];
var floatSelectPngPicture = document.querySelectorAll('.float-pngImage div');
var valueofPNGpicture = 0;
function changePNG1() {
    floatMainPicture.src = imageJPG[0];
    floatSelectPngPicture[0].classList = 'ChangeProduk';
}
function changePNG2() {
    floatMainPicture.src = imageJPG[1];
    floatSelectPngPicture[1].classList = 'ChangeProduk';
}
function changePNG3() {
    floatMainPicture.src = imageJPG[2];
    floatSelectPngPicture[2].classList = 'ChangeProduk';
}
function changePNG4() {
    floatMainPicture.src = imageJPG[3];
    floatSelectPngPicture[3].classList = 'ChangeProduk';
}

mainPicture.addEventListener('click', ()=> {
    if (mainPictureOnOff == true) {
        BlackScreen.style.display = 'block';
        floatPicture.style.display = 'block';
        if (valueofMainPicture == 0) {
            changePNG1();
            valueofPNGpicture = 0;
        }
        if (valueofMainPicture == 1) {
            changePNG2();
            valueofPNGpicture = 1;
        }
        if (valueofMainPicture == 2) {
            changePNG3();
            valueofPNGpicture = 2;
        }
        if (valueofMainPicture == 3) {
            changePNG4();
            valueofPNGpicture = 3;
        }
    }
});

// Next Button Float Picture
var floatNext = document.getElementById('float-next');
function deleteClassFloatPNG() {
    floatSelectPngPicture.forEach(element => {
        element.classList.remove('ChangeProduk');
    })
}
floatNext.addEventListener('mouseover' ,()=> {
    document.querySelectorAll('#float-next img')[0].src = './images/plus.orange.svg';
});
floatNext.addEventListener('mouseout' ,()=> {
    document.querySelectorAll('#float-next img')[0].src = './images/icon-next.svg';
});

floatNext.addEventListener('click', ()=> {
   switch (valueofPNGpicture) {
       case 0:
        deleteClassFloatPNG();
        changePNG2();
        valueofPNGpicture = 1;
           break;
        case 1:
        deleteClassFloatPNG();
        changePNG3();
        valueofPNGpicture = 2;
           break;
           case 2:
        deleteClassFloatPNG();
        changePNG4();
        valueofPNGpicture = 3;
           break;
           case 3:
        deleteClassFloatPNG();
        changePNG1();
        valueofPNGpicture = 0;
           break;
       default:
           break;
   }
});

// Back Button Float Picture
var floatBack =document.getElementById('float-back');
floatBack.addEventListener('mouseover' ,()=> {
    document.querySelectorAll('#float-back img')[0].src = './images/plus.orange.svg';
});
floatBack.addEventListener('mouseout' ,()=> {
    document.querySelectorAll('#float-back img')[0].src = './images/icon-next.svg';
});
floatBack.addEventListener('click', ()=> {
    switch (valueofPNGpicture) {
        case 0:
         deleteClassFloatPNG();
         changePNG4();
         valueofPNGpicture = 3;
            break;
         case 1:
         deleteClassFloatPNG();
         changePNG1();
         valueofPNGpicture = 0;
            break;
            case 2:
         deleteClassFloatPNG();
         changePNG2();
         valueofPNGpicture = 1;
            break;
            case 3:
         deleteClassFloatPNG();
         changePNG3();
         valueofPNGpicture = 2;
            break;
        default:
            break;
    }
 });

 // Float Closed Button for FLoat Image
var FloatImageClose = document.getElementById('fload-closed');

FloatImageClose.addEventListener('click' , () =>{
    BlackScreen.style.display = 'none';
    floatPicture.style.display = 'none';
});

// AddProduk to cart if customer confirm it
var addCart = document.getElementsByClassName('addCart')[0];
var alertOrder = document.getElementById('alertOrder');
addCart.addEventListener('click', ()=> {
    alertOrder.innerHTML = countProduct;
    alertOrder.style.display = 'inline-block';
    // Create Element
    var divWrapper = document.createElement('div');
    var creDiv = document.createElement('div');
    var creDivForDelete = document.createElement('div');
    var creDivForP = document.createElement('div');
    var creImgMain = document.createElement('img');
    var creImgDele = document.createElement('img');
    var creP = document.createElement('p');
    var crePpreice = document.createElement('p');
    var creBtn = document.createElement('button');
    var creSpan = document.createElement('span');
    var creBold = document.createElement('b');
    if (countProduct !== 0) {
    // Create Text Node
    creBtn.appendChild(document.createTextNode('Checkout'));
    var creTxtThumnail = document.createTextNode(thumbnailProduct);
    var creTxtPrice = document.createTextNode(formatten.format(priceProduct));
    var orderValue = document.createTextNode( ' '+' x '+ countProduct);
    var pricewithOrder = document.createTextNode('  '+formatten.format(countProduct * priceProduct));

    // create Class
    creDiv.className = 'cart-your-check';
    divWrapper.className = 'checkout';
    creImgMain.src = imagePNG[0];
    creImgMain.width = '50';
    creImgDele.src = './images/icon-delete.svg';
    creImgDele.className = 'deleteCart';

    // Make Append Child
    creBold.appendChild(pricewithOrder);
    creSpan.appendChild(orderValue);
    creDivForDelete.appendChild(creImgDele);
    creP.appendChild(creTxtThumnail);
    crePpreice.appendChild(creTxtPrice);
    creDivForP.appendChild(creP);
    creDivForP.appendChild(creTxtPrice);
    creDivForP.appendChild(creSpan);
    creDivForP.appendChild(creBold);
    creDiv.appendChild(creImgMain);
    creDiv.appendChild(creDivForP);
    creDiv.appendChild(creDivForDelete);
    divWrapper.appendChild(creDiv);
    divWrapper.appendChild(creBtn);

    // in document
    document.getElementsByClassName('cart-create')[0].appendChild(divWrapper);
    BtnDelete();
    Counting[1].innerHTML = 0;
    countProduct = 0;
    } else {
        alert('you must ordered');
    }
});

// Delete Button CheckOut

var buttonTrash = document.getElementsByClassName('deleteCart');

function BtnDelete() {
for (let x = 0; x < buttonTrash.length; x++) {
    buttonTrash[x].addEventListener('click', (event, val)=> {
    var a = event.currentTarget;
    var b = a.parentElement;
    var c = b.parentElement;
    var d = c.parentElement;
    d.remove();
    })
}};

// Your cart 
var youtCart = document.getElementById('yourCart');
var yourCartValue = true;
youtCart.addEventListener('click', ()=> {
    alertOrder.style.display = 'none';
    if (yourCartValue == true) {
        document.getElementsByClassName('cart')[0].style.padding = '20px 30px';
        document.getElementsByClassName('cart')[0].style.minHeight = '200px';
        yourCartValue = false;
    } else {
        document.getElementsByClassName('cart')[0].style.padding = '0';
        document.getElementsByClassName('cart')[0].style.minHeight = '';
        yourCartValue = true;
    }
});


// Menu Mobil Close 
var closeMenuMobile = document.getElementsByClassName('closeMenu')[0];
var openMenuMobile = document.getElementsByClassName('mobile')[0];
var closeMenuMobileValue = true;
openMenuMobile.addEventListener('click' , () => {
        document.getElementsByClassName('dropright')[0].style.width = '50%';
        BlackScreen.style.display = 'block';
});
closeMenuMobile.addEventListener('click', ()=> {
    document.getElementsByClassName('dropright')[0].style.width = '0';
    BlackScreen.style.display = 'none';
})

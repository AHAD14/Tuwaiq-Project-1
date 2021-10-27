let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


//here




function Item(name, price, image, qty) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.qty = qty;
}

// console.write('In Cappuccino');

$('#cappuccino').click(function () {
    let name = 'Cappuccino';
    let price = $('#cappuccinoPrice').text();
    let image = $('#cappuccino img').attr('src');
    let qty = 1;

    let newItem = new Item(name, price, image, qty);

    let selectedItems = JSON.parse(window.localStorage.getItem('SelectedItems'));

    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else {
        //find if there is an item with name Cappuccino
        const resulte = selectedItems.find((item) => item.name === name);
        if (resulte) {
            const result = {
                name: resulte.name,
                price: resulte.price,
                image: resulte.image,
                qty: ++resulte.qty,
            }
            selectedItems.splice(selectedItems.indexOf(resulte), 1, result)
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));

        } else {
            selectedItems.push(newItem);
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
        }
        //then only add one to its quantity
        //otherwise push the item
    }

    const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems'));
    $('.cart-items-container').html("")
    cardItems.forEach(element => {
        $('.cart-items-container').prepend(
            `<div class="cart-item">
                <span class="fas fa-times"></span>
                <img src=${element['image']} alt="">
                <div class="content">
                    <h3>${element['name']}</h3>
                    <div class="row">
                        <div class="col">
                            <div class="price">${element['price']}</div>
                        </div>
                        <div class="col">
                            <div class="qty" style="font-size: 15px;">${element['qty']}</div>
                        </div>
                    </div>
                </div>
            </div>
            `
        );
    });
    $('.cart-items-container').append(`<a href="#" class="btn">checkout now</a>`)
});

$('#frappuccino').click(function () {
    let name = 'Frappuccino';
    let price = $('#FrappuccinoPrice').text();
    let image = $('#frappuccino img').attr('src')
    let qty = 1;

    let newItem = new Item(name, price, image, qty);

    let selectedItems = JSON.parse(window.localStorage.getItem('SelectedItems'));

    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else {
        const resulte = selectedItems.find((item) => item.name === name);
        if (resulte) {
            const result = {
                name: resulte.name,
                price: resulte.price,
                image: resulte.image,
                qty: ++resulte.qty,
            }
            selectedItems.splice(selectedItems.indexOf(resulte), 1, result)
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
        }else{
            selectedItems.push(newItem);
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
        }
    }

    const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems'));
    $('.cart-items-container').html("");
    cardItems.forEach(element => {
        $('.cart-items-container').prepend(
            `<div class="cart-item">
                <span class="fas fa-times"></span>
                <img src=${element['image']} alt="">
                <div class="content">
                    <h3>${element['name']}</h3>
                    <div class="row">
                        <div class="col">
                            <div class="price">${element['price']}</div>
                        </div>
                        <div class="col">
                            <div class="qty" style="font-size: 15px;">${element['qty']}</div>
                        </div>
                    </div>
                </div>
            </div>
            `
        );
    });
    $('.cart-items-container').append(`<a href="#" class="btn">checkout now</a>`);
});

$('#mocha').click(function () {
    let name = 'mocha';
    let price = $('#MochaPrice').text();
    let image = $('#mocha img').attr('src')
    let qty = 1;

    let newItem = new Item(name, price, image, qty);

    let selectedItems = JSON.parse(window.localStorage.getItem('SelectedItems'));

    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else {
        const resulte = selectedItems.find((item) => item.name === name);
        if (resulte) {
            const result = {
                name: resulte.name,
                price: resulte.price,
                image: resulte.image,
                qty: ++resulte.qty,
            }
            selectedItems.splice(selectedItems.indexOf(resulte), 1, result)
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
        }else{
            selectedItems.push(newItem);
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
        }
    }

    const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems'));
    $('.cart-items-container').html("");
    cardItems.forEach(element => {
        $('.cart-items-container').prepend(
            `<div class="cart-item">
                <span class="fas fa-times"></span>
                <img src=${element['image']} alt="">
                <div class="content">
                    <h3>${element['name']}</h3>
                    <div class="row">
                        <div class="col">
                            <div class="price">${element['price']}</div>
                        </div>
                        <div class="col">
                            <div class="qty" style="font-size: 15px;">${element['qty']}</div>
                        </div>
                    </div>
                </div>
            </div>
            `
        );
    });
    $('.cart-items-container').append(`<a href="#" class="btn">checkout now</a>`);
})

$('#caffeLatte').click(function () {
    let name = 'CaffeLatte';
    let price = $('#CaffeLattePrice').text();
    let image = $('#caffeLatte img').attr('src')
    let qty = 1;

    let newItem = new Item(name, price, image, qty);

    let selectedItems = JSON.parse(window.localStorage.getItem('SelectedItems'));

    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else {
        const resulte = selectedItems.find((item) => item.name === name);
        if (resulte) {
            const result = {
                name: resulte.name,
                price: resulte.price,
                image: resulte.image,
                qty: ++resulte.qty,
            }
            selectedItems.splice(selectedItems.indexOf(resulte), 1, result)
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
        }else{
            selectedItems.push(newItem);
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
        }
    }

    const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems'));
    $('.cart-items-container').html("");
    cardItems.forEach(element => {
        $('.cart-items-container').prepend(
            `<div class="cart-item">
                <span class="fas fa-times"></span>
                <img src=${element['image']} alt="">
                <div class="content">
                    <h3>${element['name']}</h3>
                    <div class="row">
                        <div class="col">
                            <div class="price">${element['price']}</div>
                        </div>
                        <div class="col">
                            <div class="qty" style="font-size: 15px;">${element['qty']}</div>
                        </div>
                    </div>
                </div>
            </div>
            `
        );
    });
    $('.cart-items-container').append(`<a href="#" class="btn">checkout now</a>`);
})

$('#frenchcoffee').click(function () {
    let name = 'frenchcoffee';
    let price = $('#FrenchcoffeePrice').text();
    let image = $('#frenchcoffee img').attr('src')
    let qty = 1;

    let newItem = new Item(name, price, image, qty);

    let selectedItems = JSON.parse(window.localStorage.getItem('SelectedItems'));

    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else {
        const resulte = selectedItems.find((item) => item.name === name);
        if (resulte) {
            const result = {
                name: resulte.name,
                price: resulte.price,
                image: resulte.image,
                qty: ++resulte.qty,
            }
            selectedItems.splice(selectedItems.indexOf(resulte), 1, result)
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
        }else{
            selectedItems.push(newItem);
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
        }
    }

    const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems'));
    $('.cart-items-container').html("");
    cardItems.forEach(element => {
        $('.cart-items-container').prepend(
            `<div class="cart-item">
                <span class="fas fa-times"></span>
                <img src=${element['image']} alt="">
                <div class="content">
                    <h3>${element['name']}</h3>
                    <div class="row">
                        <div class="col">
                            <div class="price">${element['price']}</div>
                        </div>
                        <div class="col">
                            <div class="qty" style="font-size: 15px;">${element['qty']}</div>
                        </div>
                    </div>
                </div>
            </div>
            `
        );
    });
    $('.cart-items-container').append(`<a href="#" class="btn">checkout now</a>`);
})

$('#espresso').click(function (){ 
    let name = 'espresso';
    let price = $('#EspressoPrice').text();
    let image = $('#espresso img').attr('src')
    let qty = 1;

    let newItem = new Item(name, price, image, qty);

    let selectedItems = JSON.parse(window.localStorage.getItem('SelectedItems'));

    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        window.localStorage.setItem('SelectedItems', JSON.stringify(a));
    } else {
        const resulte = selectedItems.find((item) => item.name === name);
        if (resulte) {
            const result = {
                name: resulte.name,
                price: resulte.price,
                image: resulte.image,
                qty: ++resulte.qty,
            }
            selectedItems.splice(selectedItems.indexOf(resulte), 1, result)
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
        }else{
            selectedItems.push(newItem);
            window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
        }
    }

    const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems'));
    $('.cart-items-container').html("");
    cardItems.forEach(element => {
        $('.cart-items-container').prepend(
            `<div class="cart-item">
                <span class="fas fa-times"></span>
                <img src=${element['image']} alt="">
                <div class="content">
                    <h3>${element['name']}</h3>
                    <div class="row">
                        <div class="col">
                            <div class="price">${element['price']}</div>
                        </div>
                        <div class="col">
                            <div class="qty" style="font-size: 15px;">${element['qty']}</div>
                        </div>
                    </div>
                </div>
            </div>
            `
        );
    });
    $('.cart-items-container').append(`<a href="#" class="btn">checkout now</a>`);
})
data = `{
    "product_groups": [
        {
            "group_id": 1,
            "group_title": "Sandwich",
            "group_image": "images/burger-7-310x260.png",
            "group_products": [
                {
                    "product_name": "Tandoori chicken ham",
                    "product_price": 165,
                    "product_image": "a1.jpg",
                    "product_content": [
                        "Chilen ham",
                        "Mushrooms",
                        "Cheese",
                        "special sauce"
                    ]
                },
                {
                    "product_name": "Special Hot Dog",
                    "product_price": 145,
                    "product_image": "a2.jpg",
                    "product_content": [
                        "Hot Dog",
                        "Mushrooms",
                        "Cheese",
                        "Lettuce",
                        "pickled cucumber",
                        "Tomato"
                    ]
                },
                {
                    "product_name": "cheeseburger",
                    "product_price": 176,
                    "product_image": "a3.jpg",
                    "product_content": [
                        "Hamburger 90%",
                        "Gouda cheese",
                        "special sauce",
                        "Tomato"
                    ]
                },
                {
                    "product_name": "Royal Burger",
                    "product_price": 193,
                    "product_image": "a4.jpg",
                    "product_content": [
                        "Hamburger 90%",
                        "Meat Ham",
                        "Mushrooms",
                        "Cheese"
                    ]
                }
            ]
        },
        {
            "group_id": 2,
            "group_title": "Pizza",
            "group_image": "images/pizza-7-310x260.png",
            "group_products": [
                {
                    "product_name": "Chicken Fillet Pizza",
                    "product_price": 165,
                    "product_image": "b1.jpg",
                    "product_content": [
                        "Chicken Fillet",
                        "Mushrooms",
                        "Bell Pepper",
                        "Cheese",
                        "Tomato",
                        "Corn"
                    ]
                },
                {
                    "product_name": "Special Window Pizza",
                    "product_price": 185,
                    "product_image": "b2.jpg",
                    "product_content": [
                        "Lamb Ham",
                        "Mushrooms",
                        "Cheese",
                        "Minced Meat",
                        "Bell Pepper"
                    ]
                },
                {
                    "product_name": "Pepperoni Pizza",
                    "product_price": 173,
                    "product_image": "b3.jpg",
                    "product_content": [
                        "Pepperoni",
                        "Mushrooms",
                        "Cheese",
                        "Bell Pepper"
                    ]
                }
            ]
        },
        {
            "group_id": 3,
            "group_title": "Kebab",
            "group_image": "images/barbecue-7-310x260.png",
            "group_products": [
                {
                    "product_name": "Koobideh",
                    "product_price": 110,
                    "product_image": "c1.jpg",
                    "product_content": [
                        "Minced Meat",
                        "Onion",
                        "Salt",
                        "Baking Soda"
                    ]
                },
                {
                    "product_name": "Barg",
                    "product_price": 175,
                    "product_image": "c2.jpg",
                    "product_content": [
                        "Lamb Meat",
                        "Salt",
                        "Lemon Juice"
                    ]
                }
            ]
        }
    ]
}`;

//--------------------------------------------------------------------------------
function createProductBox(name, price, content,group_id,product_id) {
    var li = document.createElement('li');

    var div1 = document.createElement('div');
    div1.classList.add('food-info');

    var span1 = document.createElement('span');
    span1.classList.add('food-title');
    span1.appendChild(document.createTextNode(name));

    var a = document.createElement('a');
    a.setAttribute("href","food_details.html?group="+group_id+"&product=" + product_id);
    a.appendChild(span1);

    var span3 = document.createElement('span');
    span3.classList.add('food-price');
    span3.appendChild(document.createTextNode(price));

    div1.appendChild(a);
    div1.appendChild(span3);

    var div2 = document.createElement('div');
    div2.classList.add('food-content');
    div2.appendChild(document.createTextNode(content));

    li.appendChild(div1);
    li.appendChild(div2);

    document.getElementById("food_list").appendChild(li);
}

//--------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
    const group = urlParams.get('group');
    console.log(group);

    mydata = JSON.parse(data);
    console.log(mydata);

    for (const group_index in mydata.product_groups) {

        if (group == mydata.product_groups[group_index].group_id) {

            document.getElementById("food_title1").innerText = mydata.product_groups[group_index].group_title;
            document.getElementById("food_title2").innerText = mydata.product_groups[group_index].group_title;

            var products = mydata.product_groups[group_index].group_products;

            for (const product_index in products) {
                createProductBox(
                    products[product_index].product_name,
                    products[product_index].product_price + "$",
                    products[product_index].product_content,
                    group_index,
                    product_index
                );
            }
        }

    }
});
//--------------------------------------------------------------------------------
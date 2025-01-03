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

// ------------------------------------------------------------------------------------
function createGroupBox(group_id, title, img_url) {

    var food_box = document.createElement("div");
    food_box.classList.add("food-box");

    var food_img = document.createElement("img");
    food_img.setAttribute("src", img_url);

    var food_caption = document.createElement("div");
    food_caption.classList.add("caption");

    var food_title = document.createElement("h5");
    food_title.classList.add("title");

    var food_link = document.createElement("a");
    var food_link_text = document.createTextNode(title);
    food_link.appendChild(food_link_text);
    food_link.setAttribute("href", "menu.html?group=" + group_id);

    food_title.appendChild(food_link);

    food_caption.appendChild(food_title);

    food_box.appendChild(food_img);
    food_box.appendChild(food_caption);

    return food_box;
}

// ------------------------------------------------------------------------------------
function createMainFoods(mydata) {
    var main_foods = document.getElementById("main-foods");
    for (const group_index in mydata.product_groups) {
        var food_box_element = createGroupBox(
            mydata.product_groups[group_index].group_id,
            mydata.product_groups[group_index].group_title,
            mydata.product_groups[group_index].group_image)
        main_foods.appendChild(food_box_element);
    }
}

// ------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    mydata = JSON.parse(data);
    createMainFoods(mydata);
});

// ------------------------------------------------------------------------------------

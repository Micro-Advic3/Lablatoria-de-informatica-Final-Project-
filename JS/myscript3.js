data = `{
  "product_groups": [
    {
      "group_id": 1,
      "group_title": "Sandwich",
      "group_image": "images/burger-7-310x260.png",
      "group_products": [
        {
          "product_id": 1,
          "product_name": "Roasted Chicken Ham",
          "product_type": ["normal"],
          "product_price": [95000],
          "product_image": [
            "images/product-01-542x448.png",
            "images/product-02-542x448.png",
            "images/product-05-542x448.png"
          ],
          "product_content": [
            "Chicken ham",
            "Mushroom",
            "Cheese",
            "Special sauce"
          ],
          "product_energy": 45,
          "product_protein": 83
        },
        {
          "product_id": 2,
          "product_name": "Special Hot Dog",
          "product_type": ["normal"],
          "product_price": [100000],
          "product_image": [
            "images/product-01-542x448.png",
            "images/product-02-542x448.png",
            "images/product-05-542x448.png"
          ],
          "product_content": [
            "Hot dog",
            "Mushroom",
            "Cheese",
            "Lettuce",
            "Pickles",
            "Tomato"
          ],
          "product_energy": 45,
          "product_protein": 83
        },
        {
          "product_id": 3,
          "product_name": "Cheese Burger",
          "product_type": ["normal", "double"],
          "product_price": [110000, 155000],
          "product_image": [
            "images/product-01-542x448.png",
            "images/product-02-542x448.png",
            "images/product-05-542x448.png"
          ],
          "product_content": [
            "90% Hamburger",
            "Gouda cheese",
            "Special sauce",
            "Tomato"
          ],
          "product_energy": 45,
          "product_protein": 83
        },
        {
          "product_id": 4,
          "product_name": "Royal Burger",
          "product_type": ["normal"],
          "product_price": [193000],
          "product_image": [
            "images/product-01-542x448.png",
            "images/product-02-542x448.png",
            "images/product-05-542x448.png"
          ],
          "product_content": [
            "90% Hamburger",
            "Beef ham",
            "Mushroom",
            "Cheese"
          ],
          "product_energy": 45,
          "product_protein": 83
        }
      ]
    },
    {
      "group_id": 2,
      "group_title": "Pizza",
      "group_image": "images/pizza-7-310x260.png",
      "group_products": [
        {
          "product_id": 5,
          "product_name": "Chicken Fillet Pizza",
          "product_type": ["mini", "normal", "large"],
          "product_price": [110000, 145000, 210000],
          "product_image": [
            "images/product-01-542x448.png",
            "images/product-02-542x448.png",
            "images/product-05-542x448.png"
          ],
          "product_content": [
            "Chicken fillet",
            "Mushroom",
            "Bell pepper",
            "Cheese",
            "Tomato",
            "Corn"
          ],
          "product_energy": 32,
          "product_protein": 79
        },
        {
          "product_id": 6,
          "product_name": "Special Pan Pizza",
          "product_type": ["mini", "normal", "large"],
          "product_price": [125000, 185000, 230000],
          "product_image": [
            "images/product-01-542x448.png",
            "images/product-02-542x448.png",
            "images/product-05-542x448.png"
          ],
          "product_content": [
            "Lamb ham",
            "Mushroom",
            "Cheese",
            "Minced meat",
            "Bell pepper"
          ],
          "product_energy": 45,
          "product_protein": 83
        },
        {
          "product_id": 7,
          "product_name": "Pepperoni Pizza",
          "product_type": ["mini", "normal", "large"],
          "product_price": [105000, 135000, 190000],
          "product_image": [
            "images/product-01-542x448.png",
            "images/product-02-542x448.png",
            "images/product-05-542x448.png"
          ],
          "product_content": [
            "Pepperoni sausage",
            "Mushroom",
            "Cheese",
            "Bell pepper"
          ],
          "product_energy": 51,
          "product_protein": 56
        }
      ]
    },
    {
      "group_id": 3,
      "group_title": "Kebab",
      "group_image": "images/barbecue-7-310x260.png",
      "group_products": [
        {
          "product_id": 8,
          "product_name": "Koobideh",
          "product_type": ["single", "double"],
          "product_price": [45000, 85000],
          "product_image": [
            "images/product-01-542x448.png",
            "images/product-02-542x448.png",
            "images/product-05-542x448.png"
          ],
          "product_content": [
            "Minced meat",
            "Onion",
            "Salt",
            "Baking soda"
          ],
          "product_energy": 45,
          "product_protein": 83
        },
        {
          "product_id": 9,
          "product_name": "Barg",
          "product_type": ["normal"],
          "product_price": [130000],
          "product_image": [
            "images/product-01-542x448.png",
            "images/product-02-542x448.png",
            "images/product-05-542x448.png"
          ],
          "product_content": [
            "Lamb meat",
            "Salt",
            "Lemon juice"
          ],
          "product_energy": 45,
          "product_protein": 83
        }
      ]
    }
  ]
}
`;
//----------------------------------------------------------------
discount_data =`{
   "Discounts": [
    { "group_id": 0, "group_title": "Sandwich", "discount": 20 },
    { "group_id": 1, "group_title": "Pizza", "discount": 35 },
    { "group_id": 2, "group_title": "Kebab", "discount": 50 },
    { "group_id": 3, "group_title": "Beverages", "discount": 25 },
    { "group_id": 4, "group_title": "Salad", "discount": 65 },
    { "group_id": 5, "group_title": "Soup", "discount": 40 },
    { "group_id": 6, "group_title": "Dessert", "discount": 35 }
  ]
}`

//----------------------------------------------------------------
const food = {
    getGroupDiscount: function(group_id) {
        return this.Discounts[group_id].discount;
    },

    createProductDetails: function() {
        document.getElementById("food-title1").innerText = this.product_name;
        document.getElementById("food-title2").innerText = this.product_name;
        document.getElementById("food-title3").innerText = this.product_name;

        document.getElementById("food-content").innerText = this.product_content;

        document.getElementById("energy").setAttribute("data-to", this.product_energy)
        document.getElementById("protein").setAttribute("data-to", this.product_protein)


        for (let i = 0; i < this.product_image.length; i++) {
            const img_url = this.product_image[i];
            var img1 = document.createElement('img');
            img1.setAttribute('src', img_url);
            document.getElementById("small-image").appendChild(img1);

            var img2 = document.createElement('img');
            img2.setAttribute('src', img_url);
            document.getElementById("large-image").appendChild(img2);

        }

        var ul = document.getElementById("price-list")
        for (let i = 0; i < this.product_price.length; i++) {
            const price = this.product_price[i];
            const type = this.product_type[i];

            var li = document.createElement('li');

            var span1 = document.createElement('span');
            span1.classList.add('price');

            var del = document.createElement('del');
            del.appendChild(document.createTextNode(price + " $"))

            var span11 = document.createElement('span');
            var final_price = price - (price * this.discount / 100);
            span11.appendChild(document.createTextNode(final_price + " $"))

            span1.appendChild(del);
            span1.appendChild(span11);

            var span2 = document.createElement('span');
            span2.classList.add('size');
            span2.appendChild(document.createTextNode(type))
            span2.setAttribute('onclick', 'addToShopCart(' + i + ')');
            span2.setAttribute('style', 'cursor:pointer;')

            li.appendChild(span1);
            li.appendChild(span2);
            ul.appendChild(li);
        }
    }
}

//----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
    const group_id = urlParams.get('group');
    const product_id = urlParams.get('product');

    new_data = JSON.parse(discount_data);
    group_discount = food.getGroupDiscount.call(new_data, group_id)

    mydata = JSON.parse(data);
    var product = mydata.product_groups[group_id].group_products[product_id];

    ParentProduct = {
        discount: group_discount
    }
    product.__proto__ = ParentProduct;
    food.createProductDetails.call(product)






    document.getElementById("plus").addEventListener("click", function() {
        var number = Number(document.getElementById("number").value);
        number++;
        document.getElementById("number").value = number;
    });

    document.getElementById("minus").addEventListener("click", function() {
        var number = Number(document.getElementById("number").value);
        if (number > 1)
            number--;
        document.getElementById("number").value = number;
    });

});

//------------------------------------------------------------------------------------------------
function changeProgress(element, value_element, value) {
    var i = 0;
    var interval = setInterval(function() {
            if (i >= Number(value)) {
                clearInterval(interval);

            }
            element.style.width = i + "%";
            value_element.innerText = i + "%";
            i++;
        },
        10);
}

//------------------------------------------------------------------------------------------------
var flag = true;
window.onscroll = (event) => {
    if (window.scrollY >= 100) {
        document.getElementById("navbar-box").style.background = "#f16121";
    } else if (window.scrollY < 100) {
        document.getElementById("navbar-box").style.background = "transparent";
    }

    if (flag) {
        var elements = document.getElementsByClassName("progress-bar-fill");
        var value_elements = document.getElementsByClassName("progress-value");
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const value_element = value_elements[i]
            var data_to = Number(value_element.getAttribute("data-to"));
            changeProgress(element, value_element, data_to);
        }
        flag = false;
    }
};
//------------------------------------------------------------------------------------------------
import { mount as productsMount } from "products/ProductList";
import { mount as cartMount } from "cart/CartItems";

productsMount(document.querySelector("#container-products"));
cartMount(document.querySelector("#container-cart"));

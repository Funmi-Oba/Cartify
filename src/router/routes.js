import Account from '@/pages/Account.vue'
import Cart from '@/pages/Cart.vue'
import Checkout from '@/pages/Checkout.vue'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import Shop from '@/pages/Shop.vue'
import SingleProduct from '@/pages/SingleProduct.vue'
import Wishlist from '@/pages/Wishlist.vue'
export default [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  // router/index.js
{
  path: '/products/:id',
  name: 'product',
  component: SingleProduct,

},
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresGuest: true},
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresGuest: true},
  },
  {
    path: '/wishlist',
    component: Wishlist,
    name: 'wishlist',
    
  },
  {
    path: '/cart',
    component: Cart,
    name: 'cart',

  },
  {
    path: '/collections/all',
    name: 'allCollections',
    component: Shop,

  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/account',
    name: 'account',
    meta: { requiresAuth: true },
    component: Account,
  },
]

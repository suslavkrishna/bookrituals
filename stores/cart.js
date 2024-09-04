import { defineStore } from 'pinia'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { 
            products: [
                {
                    id: 1,
                    name: 'Iphone 12',
                    price: 700,
                    image: 'https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202__480.jpg'
                },
                {
                    id: 2,
                    name: 'Samsung s10',
                    price: 400,
                    image: 'https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938__340.jpg'
                },
                {
                    id: 3,
                    name: 'Samsung Tv',
                    price: 1200,
                    image: 'https://cdn.pixabay.com/photo/2019/06/30/18/19/tv-4308538__480.jpg'
                },
                {
                    id: 4,
                    name: 'Huwawei Mate',
                    price: 900,
                    image: 'https://cdn.pixabay.com/photo/2017/08/11/14/19/honor-2631271__340.jpg'
                }
            ],
            cartItems : []
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            console.log(item)
            let index = this.cartItems.findIndex(product => product.RitualDateID === item.RitualDateID);
            console.log(index)
            if(index == -1) {
              //item.quantity = 1;
              this.cartItems.push(item);
              /*Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been saved',
                showConfirmButton: false,
                timer: 1500
              });*/
            }
        },
        removeFromCart(item) 
        {
            console.log(item.RitualDateID)
            console.log(this.cartItems.filter(product => product.RitualDateID !== item.RitualDateID))
            this.cartItems = this.cartItems.filter(product => product.RitualDateID !== item.RitualDateID);

            /*Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your item has been removed',
              showConfirmButton: false,
              timer: 1500
            });*/
        }
    }
}
)
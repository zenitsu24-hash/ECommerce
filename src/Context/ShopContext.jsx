import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10.76;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const AddToCart = async(itemId, size) => {
        let cartdata = structuredClone(cartItems);

        if(!size){
            toast.error('Select an appropriate size');
        }

        if(cartdata[itemId]){
            if(cartdata[itemId][size]){
                cartdata[itemId][size] += 1
            }
            else{
                cartdata[itemId][size] = 1
            }
        }
        else{
            cartdata[itemId] = {}
            cartdata[itemId][size] += 1;
        }

        setCartItems(cartdata)
    }

    const updateCart = (itemId,size,quantity) => {

        let cartdata = structuredClone(cartItems)
        cartdata[itemId][size] = quantity
        setCartItems(cartdata);
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    const getcount = () => {
        let totalcount = 0;

        for(const item in cartItems){
            for (const items in cartItems[item]){
                try {
                    if(cartItems[item][items] > 0){
                        totalcount += cartItems[item][items]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalcount;
    }

    const getTotalCart = () => {
        let totalcart = 0;

        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items)
            for (const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalcart += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalcart;
    }

    const attribute = {
        products, currency, delivery_fee,
        search, setSearch, 
        showSearch, setShowSearch,
        AddToCart, cartItems,
        getcount, updateCart,
        getTotalCart
    }

    return(
        <ShopContext.Provider value={attribute}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

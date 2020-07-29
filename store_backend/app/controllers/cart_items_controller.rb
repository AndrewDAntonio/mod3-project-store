class CartItemsController < ApplicationController
    def index
        cartitems = CartItem.all
        render json: cartitems
    end

    def create
        cartitem = CartItem.create(create_cart_item_params)
        render json: cartitem
    end

    def destroy
        cartitem = CartItem.find(params[:id])
        cartitem.destroy
    end

    private

    def create_cart_item_params
        params.permit(:cart_id, :item_id)
    end 
    
end

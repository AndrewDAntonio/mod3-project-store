class Cart < ApplicationRecord
    belongs_to :user
    has_many :cart_items
    has_many :items, through: :cart_items


    def total
        self.items.sum(:price)
    end
end

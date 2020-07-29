class CartSerializer < ActiveModel::Serializer
  attributes :id, :total
  has_many :cart_items
  has_many :items

end


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Item.destroy_all
Cart.destroy_all
CartItem.destroy_all
Driver.destroy_all


# Users
andrewUser = User.create(username: 'andrew')
scottUser = User.create(username: 'scott')
kellyUser = User.create(username: 'kelly')

#Cart
cart1 = Cart.create(user_id: andrewUser.id)

# Drivers
johnDriver = Driver.create(username: 'john')
rondaDriver = Driver.create(username: 'ronda')

#Items
banana = Item.create(name:'Banana', price:5.55, image_url:'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-650-80.jpg')
beer = Item.create(name:'Beer', price:12.76, image_url:'https://icdn.bottlenose.wine/images/full/453429.jpg?ixlib=imgixjs-3.4.1&w=210')
whiskey = Item.create(name:'Whiskey', price: 22.22, image_url:'https://products3.imgix.drizly.com/ci-jack-daniels-old-no-7-92707d5e737cf4ac.jpeg?auto=format%2Ccompress&fm=jpg&q=20')

#Cart-Items
item1 = CartItem.create(cart_id: cart1.id, item_id: banana.id)
item2 = CartItem.create(cart_id: cart1.id, item_id: beer.id)
item3 = CartItem.create(cart_id: cart1.id, item_id: whiskey.id)




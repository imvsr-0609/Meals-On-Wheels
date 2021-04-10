 const menuData = [
    {
        "name": "Masala Uttappam",
        "price": 169,
        "description" : "Masala Uttappam is thick dosa with onions tomato and green chili are added as the topping.",
        "image": "https://b.zmtcdn.com/data/dish_photos/84a/71fe1b8b8c375fdaa639f655f0c5984a.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Masala Dosa",
        "price": 149,
        "description" : "Masala Dosa is a very popular dosa, it is dosa stuffed with Potato masala, served with fresh coconut chutney and sambar.",
        "image": "https://b.zmtcdn.com/data/dish_photos/02e/f060281050fe8e4fe0ddd167bbd2602e.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Prawns Hyderabadi Handi Biryani",
        "price": 899,
        "description" : "Hydrabadi prawns dum biryani is one of the richest Hyderabadi recipes and delicious biryani, prepared with marinated prawns, saffron-scented basmati rice, potli masala topped with brown onions. It is cooked in a slow dum process, trapping the steam to retain the aroma. Final preparation is cooked in Handi and served in Handi",
        "image": "https://b.zmtcdn.com/data/dish_photos/a56/d78b884af311a452785527b97f2baa56.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Andhra Special Keema Biryani",
        "price": 499,
        "description" : "Straight from the land of Nizams, Keema Mutton Biryani is a regal dish that does not need any special mention or patronage. This biryani is made with Mutton Keema. This is prepared with fresh chicken marinated overnight with spices, saffron-scented basmati rice, potli masala topped with brown onions. It is cooked in a slow dum process, trapping the steam to retain the aroma. The final preparation is cooked in Handi and served.",
        "image": "https://b.zmtcdn.com/data/dish_photos/932/86001e96cfbba04a7acf039e3766a932.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Hyderabadi Chicken Dum Biryani",
        "price": 349,
        "description" : "Hydrabadi chicken dum biryani is one of the richest hyderabadi recipe and delicious chicken biryani, prepared with fresh chicken marinated over night with speics, saffron scented basmati rice, potli masala topped with brown onions. It is cooked in slow dum process, trapping the steam to retain aroma.",
        "image": "https://b.zmtcdn.com/data/dish_photos/351/c4454991f5054df18fb4a8ce90c25351.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Andhra Chicken Fry",
        "price": 369,
        "description" : "Andhra Chicken Fry is a spicy dish prepared with chicken and a blend of spices which makes it more flavourful. Enjoyed in lunches and brunches, this Andhra style chicken is aromatic, and is a delights all the way from our Mom's Kitchen.",
        "image": "https://b.zmtcdn.com/data/dish_photos/84b/da019b24341bd655d0aec55ca3d1284b.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Veg Biryani",
        "price": 299,
        "description" : "",
        "image": "https://b.zmtcdn.com/data/dish_photos/3d1/cad91597d0826752ebebaa6e0bb373d1.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Chilly Chicken",
        "price": 369,
        "description" : "",
        "image": "https://b.zmtcdn.com/data/dish_photos/eb9/3c7c72095690e0b22c84ab14ee99deb9.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Chicken 65",
        "price": 369,
        "description" : "This is the sort of dish that can set your mouth on fire, make your heart beat faster and kick the usual bread-coated fried chicken to the curb. It's deep-fried (of course), with this crazy saltiness and crunchiness to it, and punchy flavours of curry leaves, ginger, garlic, chillies and all the ingredients that make a happy Indian dish. Chicken 65 is a classic, and a classic deserves special mention in our MENU!",
        "image": "https://b.zmtcdn.com/data/dish_photos/60e/387e6ed76cf98732665dc12100f9760e.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Paneer 65",
        "price": 299,
        "description" : "Paneer 65 is a vegetarian Appetizer made by Crispy frying paneer, and then tossing it with spicy masala. It is a spicy yet irresistibly delicious snack prepared by deep-frying spicy paste coated paneer cubes. It has a dry texture and can be served as starter, appetizer, snack or accompaniment",
        "image": "https://b.zmtcdn.com/data/dish_photos/427/485c8f9d3ee5447d8f893cd641c54427.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Egg Biryani (Andhra Style)",
        "price": 299,
        "description" : "",
        "image": "https://b.zmtcdn.com/data/dish_photos/377/ee220de75d77930d97870e49d25c8377.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Dal Fry",
        "price": 299,
        "description" : "Dal Fry is made with boiled and mashed lentils (dal) to a gravy made of Onion Tomato and Indian spices fried in ghee",
        "image": "https://b.zmtcdn.com/data/dish_photos/ba6/cc8f8f6d4cf667f09fcd31195b1a8ba6.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Chicken Chettinad",
        "price": 399,
        "description" : "Chettinad Chicken Curry is a delicious, flavorful and spicy curry prepared using vegetables, coconut, and different spices.",
        "image": "https://b.zmtcdn.com/data/dish_photos/39d/753478a123743e84450e6678946a739d.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Tandoori Roti",
        "price": 49,
        "description" : "",
        "image": "https://b.zmtcdn.com/data/dish_photos/c07/d72ae9dadeab3b1e6ca680d6b0a41c07.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
    {
        "name": "Upma",
        "price": 149,
        "description" : "Upma is a popular south Indian breakfast item, made with suji (rava) served with fresh coconut chutney along with sambar.",
        "image": "https://b.zmtcdn.com/data/dish_photos/aed/e55e035954b0a4b090694595acbe6aed.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
    },
] 

export default menuData
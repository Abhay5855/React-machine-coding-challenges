

import { v4 as uuid } from "uuid";

/**
 Product Database 
 * */

export const data = [
  {
    _id: uuid(),
    company: "Moda Rapido",
    productName: "Men Maroon Printed Cotton Pure Cotton T-shirt",
    price: 314,
    discount: 65,
    rating: 3.7,
    categoryName: "T-Shirts",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378362/2018/6/9/405568f1-c3c1-4713-9c38-6dd95ac962d31528527188543-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378362/2018/6/9/33523035-65f5-4fcb-b7a5-4062e656d10b1528527188511-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378362/2018/6/9/ed7b0cd1-8fa7-4f65-95b4-36518bfa94461528527188485-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-4.jpg",
    ],
    details: {
      product:
        "Maroon and black printed T-shirt, has a round neck, long sleeves",
      material: "100% cotton, Machine-wash",

      specification: {
        Fit: "Regular Fit",
        Neck: "Round Neck",
        Occasion: "Casual",
        Pattern: "Printed",
      },
      look: "This tee made by Moda Rapido will definitely become a go-to item in your wardrobe. Whether you're running errands or meeting friends for coffee, sport this maroon number with slim black jeans or cutoff shorts for a relaxed style.",
    },
  },
  {
    _id: uuid(),
    company: "Roadster",
    productName: "Men White Brush Printed T-shirt",
    price: 520,
    discount: 60,
    rating: 2.2,
    categoryName: "T-Shirts",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1824369/2017/5/5/11493980166188-Roadster-Men-White-Printed-Round-Neck-T-shirt-4411493980165893-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1824369/2017/5/5/11493980166174-Roadster-Men-White-Printed-Round-Neck-T-shirt-4411493980165893-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1824369/2017/5/5/11493980166159-Roadster-Men-White-Printed-Round-Neck-T-shirt-4411493980165893-3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1824369/2017/5/5/11493980166143-Roadster-Men-White-Printed-Round-Neck-T-shirt-4411493980165893-4.jpg",
    ],
    details: {
      product: "White printed T-shirt, has a round neck, short sleeves",
      material: "100% cotton, Machine-wash",

      specification: {
        Fit: "Regular Fit",
        Neck: "Round Neck",
        Occasion: "Casual",
        Pattern: "Striped",
      },
      look: "This top-notch T-shirt from Roadster will have you looking fresh all year long. This white piece is incredibly versatile and can be matched with dark or light denim for an evening out with the guys.",
    },
  },
  {
    _id: uuid(),
    company: "HRX by Hrithik Roshan",
    productName: "Men Black Slim Advanced Rapid Dry Raglan T-shirt",
    price: 449,
    discount: 45,
    rating: 1.3,
    categoryName: "T-Shirts",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2314424/2018/5/24/16fad75c-35ed-4780-8625-193cc8dae4fc1527173672482-HRX-by-Hrithik-Roshan-Men-Black-Slim-Advanced-Rapid-Dry-Raglan-T-shirt-3541527173669891-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2314424/2018/5/24/ca66ce81-8b82-4a46-8b80-0539f2261fed1527173672453-HRX-by-Hrithik-Roshan-Men-Black-Slim-Advanced-Rapid-Dry-Raglan-T-shirt-3541527173669891-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2314424/2018/5/24/c1f0a02b-d9b1-480a-b041-5cc0719620821527173672386-HRX-by-Hrithik-Roshan-Men-Black-Slim-Advanced-Rapid-Dry-Raglan-T-shirt-3541527173669891-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2314424/2018/5/24/a58b38af-8119-4f37-8f94-4d111a3231f81527173672361-HRX-by-Hrithik-Roshan-Men-Black-Slim-Advanced-Rapid-Dry-Raglan-T-shirt-3541527173669891-6.jpg",
    ],
    details: {
      product:
        "Whether you're playing on the field or cheering in the stadium, the HRX Men's Active T-shirt will give you a look that stands out. That's not all, it'll keep you comfortably cool and dry too.",
      material: "100% Polyester, Machine-wash",

      specification: {
        Fit: "Regular Fit",
        Neck: "Round Neck",
        Occasion: "Sports",
        Pattern: "Solid",
      },
      look: "When you're in need of some new tees, opt for this in-style T-shirt made by HRX by Hrithik Roshan. A fashionable work-out outfit starts with this black tee matched with work-out shorts and your favourite pair of sports shoes.",
    },
  },
  {
    _id: uuid(),
    company: "Roadster",
    productName: "The Lifestyle Co Men Blue & White Striped Round Neck T-shirt",
    price: 199,
    discount: 60,
    rating: 4.2,
    categoryName: "T-Shirts",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9586559/2019/6/7/1d8f64f5-f8e3-43cc-a829-519066bc09221559911511214-Roadster-Men-Tshirts-9211559911509626-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10941010/2020/3/9/d5964cbe-f8be-4edd-8ef8-1bf04ebffe761583758437645-Roadster-Men-White-Striped-Round-Neck-T-shirt-31715837584362-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10941010/2020/3/9/acc9aad4-edef-45dd-9822-57761e2b1c031583758437549-Roadster-Men-White-Striped-Round-Neck-T-shirt-31715837584362-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10941010/2020/3/9/672c00b6-7ebe-4736-92f5-a613e27e87ab1583758437499-Roadster-Men-White-Striped-Round-Neck-T-shirt-31715837584362-5.jpg",
    ],
    details: {
      product:
        "Navy and white striped T-shirt, has a round neck, and short sleeves",
      material: "Material Cotton, Machine-wash",

      specification: {
        Fit: "Regular Fit",
        Neck: "Round Neck",
        Occasion: "Casual",
        Pattern: "All-Over",
      },
      look: "Made of cotton, you'll love the high-quality fit and feel of this Roadster tee. When you're grabbing a quick meal with your friends, this white piece looks great with slimmer pants and chukka boot.",
    },
  },
  {
    _id: uuid(),
    company: "Kook N  Keech",
    productName: "Men White Printed Round Neck Pure Cotton T-shirt",
    price: 699,
    discount: 50,
    rating: 4.2,
    categoryName: "T-Shirts",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12958472/2021/4/1/18a61192-cec5-4b3a-839e-56e6d7cbab0d1617267810776-Kook-N-Keech-Marvel-Men-Tshirts-7171617267810187-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12958472/2021/4/1/9932f515-171a-4341-a0db-19edf62bdf631617267810756-Kook-N-Keech-Marvel-Men-Tshirts-7171617267810187-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12958472/2021/4/1/5ba3a9e9-d533-49bf-9bc0-fbe7c56c2a681617267810718-Kook-N-Keech-Marvel-Men-Tshirts-7171617267810187-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12958472/2021/4/1/ebfb0474-3959-4310-b3be-62e622a2da4b1617267810699-Kook-N-Keech-Marvel-Men-Tshirts-7171617267810187-5.jpg",
    ],
    details: {
      product:
        "White Marvel printed T-shirt, has a round neck, and short sleeves",
      material: "Material Cotton, Machine-wash",

      specification: {
        Fit: "Regular Fit",
        Neck: "Round Neck",
        Occasion: "Casual",
        Pattern: "Comic",
      },
      look: "Designed by the team at Kook N Keech Marvel, you're definitely in for a style treat with this cotton T-shirt. A quick drink with the gang is as easy as putting this white piece in league with some slim black jeans and a sturdy overshirt.",
    },
  },
  {
    _id: uuid(),
    company: "WROGN",
    productName: "Men Grey Melange Self Design Welt Pocket T-shirt",
    price: 799,
    discount: 40,
    rating: 4.1,
    categoryName: "T-Shirts",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1894413/2017/6/20/11497943671766-WROGN-Men-Grey-Melange-Self-Design-Round-Neck-T-shirt-881497943671356-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1894413/2017/6/20/11497943671694-WROGN-Men-Grey-Melange-Self-Design-Round-Neck-T-shirt-881497943671356-3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1894413/2017/6/20/11497943671657-WROGN-Men-Grey-Melange-Self-Design-Round-Neck-T-shirt-881497943671356-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1894413/2017/6/20/11497943671629-WROGN-Men-Grey-Melange-Self-Design-Round-Neck-T-shirt-881497943671356-5.jpg",
    ],
    details: {
      product:
        "Grey melange self-design T-shirt, has a round neck, long sleeves, 1 pocket",
      material: "50% Cotton, 50% Polyester, Machine-wash",

      specification: {
        Fit: "Regular Fit",
        Neck: "Round Neck",
        Occasion: "Casual",
        Pattern: "Self Design",
      },
      look: "You'll love the softness and durability of this high-fashion WROGN tee. When you're grabbing a quick meal with your friends, this grey melange piece looks great with slimmer pants and chukka boot.",
    },
  },
  {
    _id: uuid(),
    company: "WROGN",
    productName: "Men Black Printed Polo Collar T-shirt",
    price: 824,
    discount: 45,
    rating: 4.4,
    categoryName: "T-Shirts",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2478324/2018/9/26/3bb86908-c651-4685-97b8-e3f49f79f5091537945068438-WROGN-Men-Black-Printed-Polo-Collar-T-shirt-2411537945068393-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2478324/2018/9/26/a8807c7e-eeb8-4845-ad9f-f6f24743cd6a1537944595359-WROGN-Men-Black-Printed-Polo-Collar-T-shirt-5611537944595071-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2478324/2018/9/26/1a8d732a-1ded-4295-a1a1-a5c70edabaa71537944595309-WROGN-Men-Black-Printed-Polo-Collar-T-shirt-5611537944595071-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2478324/2018/9/26/acb11a40-94bf-4dbe-8b8d-7beb3e28ad1c1537944595295-WROGN-Men-Black-Printed-Polo-Collar-T-shirt-5611537944595071-6.jpg",
    ],
    details: {
      product: "Black printed T-shirt, has a polo collar, short sleeves",
      material: " Cotton, Machine-wash",

      specification: {
        Fit: "Slim Fit",
        Neck: "Pollo Collar",
        Occasion: "Casual",
        Pattern: "All-Over",
      },
      look: "This top-notch T-shirt from WROGN will have you looking fresh all year long. Wear this black piece many ways, with dark wash jeans, cuffed chinos and more.",
    },
  },
  {
    _id: uuid(),
    company: "Calvin Klein Jeans",
    productName: "Men Blue Tapered Fit Light Fade Stretchable Jeans",
    price: 599,
    discount: 45,
    rating: 4.2,
    categoryName: "Jeans",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16409194/2022/3/22/37bac418-12cd-4849-890c-a73fb38765231647930663378-Calvin-Klein-Jeans-Men-Jeans-231647930662630-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16409194/2022/3/22/374eda29-1c45-4583-bc64-afbb7e5d5ee91647930663341-Calvin-Klein-Jeans-Men-Jeans-231647930662630-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16409194/2022/3/22/0fc4ec49-ae8c-430f-992e-c6fb1ec55c3e1647930663369-Calvin-Klein-Jeans-Men-Jeans-231647930662630-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16409194/2022/3/22/d2475c2f-5534-4c6b-9133-b02bbb6cd6ac1647930663351-Calvin-Klein-Jeans-Men-Jeans-231647930662630-4.jpg",
    ],
    details: {
      product:
        "Light shade, no fade blue jeans, Tapered fit, mid-rise, Clean look, Stretchable, 5 pocket, Length: regular",
      material:
        "81% Cotton, 11% lyocell, 6% Polyester, 2% Elastane, Handwash Only",

      specification: {
        Fit: "Taperred Fit",
        Stretch: "Stretchable",
        Occasion: "Casual",
        Fade: "Light Fade",
      },
      look: "",
    },
  },

  {
    _id: uuid(),
    company: "Roadster",
    productName:
      "Men Black Slim Tapered Fit Mid-Rise Clean Look Stretchable Jeans",
    price: 799,
    discount: 60,
    rating: 3.8,
    categoryName: "Jeans",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8962431/2019/12/23/1433f70a-8e66-4e61-94bb-7aa64e525ccd1577094332071-Roadster-Men-Black-Slim-Tapered-Fit-Mid-Rise-Clean-Look-Stre-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8962431/2019/12/23/cef30c63-55bb-4435-93cc-5fb8ed0bb22a1577094331943-Roadster-Men-Black-Slim-Tapered-Fit-Mid-Rise-Clean-Look-Stre-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8962431/2019/12/23/6bdbdf81-1f5a-4802-bb28-d8a48f6e02da1577094331900-Roadster-Men-Black-Slim-Tapered-Fit-Mid-Rise-Clean-Look-Stre-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8962431/2019/12/23/6e227a9c-bd1b-4e27-b6d7-3b5db26bace71577094331983-Roadster-Men-Black-Slim-Tapered-Fit-Mid-Rise-Clean-Look-Stre-3.jpg",
    ],
    details: {
      product:
        "Black dark wash 5-pocket mid-rise jeans, clean look, light fade, has a button and zip closure, and waistband with belt loops",
      material: "99% Cotton, 1% Elastane, Machine-wash",

      specification: {
        Fit: "Slim Fit",
        Stretch: "Stretchable",
        Occasion: "Casual",
        Fade: "Light Fade",
      },
      look: "If you're in the market for slim jeans, check out this stylish collection from Roadster. Wear yours with Chelsea boots and a fitted T-shirt for a stylish look for work and after-work drinks.",
    },
  },
  {
    _id: uuid(),
    company: "Flying Machine",
    productName:
      "Men Black Slim Tapered Fit Mid-Rise Clean Look Stretchable Jeans",
    price: 919,
    discount: 60,
    rating: 3.8,
    categoryName: "Jeans",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11039444/2020/1/8/82c1ba3a-eca2-4478-a566-a5e47ac7dc3e1578482393871-Flying-Machine-Men-Jeans-7501578482390873-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11039444/2020/1/8/593ba406-e63c-4d4e-9a32-dc74e157e93a1578482393720-Flying-Machine-Men-Jeans-7501578482390873-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11039444/2020/1/8/c1e43e8f-9c7f-4f9b-a6a5-f07c2bf40d181578482393636-Flying-Machine-Men-Jeans-7501578482390873-6.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11039444/2020/1/8/99bdf5c3-b9e7-45d4-92b8-fc84c2290f821578482393780-Flying-Machine-Men-Jeans-7501578482390873-3.jpg",
    ],
    details: {
      product:
        "Black light wash 5-pocket mid-rise jeans, clean look, heavy fade, has a button and zip closure, and waistband with belt loops",
      material: "98.5% Cotton, 1.5% Elastane, Machine-wash",

      specification: {
        Fit: "Tapered Fit",
        Stretch: "Stretchable",
        Occasion: "Casual",
        Fade: "Heavy Fade",
      },
      look: "When it's time to upgrade your wardrobe, opt for a pair of Flying Machine jeans. Top yours off with a trendy tee and a camouflage jacket when you're attending an outdoor festival with your friends.",
    },
  },
  {
    _id: uuid(),
    company: "WROGN",
    productName: "Men Blue Slim Fit Mid-Rise Clean Look Stretchable Jeans",
    price: 599,
    discount: 40,
    rating: 2.8,
    categoryName: "Jeans",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13673594/2021/4/22/ad8dae5e-35a1-49ba-9547-0722dda8e6eb1619074854839-WROGN-Men-Jeans-5941619074853276-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13673594/2021/4/22/68d2e20b-d468-4c57-9b8f-d04006a6f5821619074854766-WROGN-Men-Jeans-5941619074853276-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13673594/2021/4/22/ba53cfaf-d1ea-4f4f-9228-463dfca9d4691619074854745-WROGN-Men-Jeans-5941619074853276-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13673594/2021/4/22/eb767ac0-df6b-4760-9905-8a559e24d0b51619074854788-WROGN-Men-Jeans-5941619074853276-3.jpg",
    ],
    details: {
      product:
        "Blue medium wash 5-pocket mid-rise jeans, clean look, heavy fade, has a button and zip closure, and waistband with belt loops",
      material: "98% Cotton, 2% Elastane, Machine-wash",

      specification: {
        Fit: "Slim Fit",
        Stretch: "Stretchable",
        Occasion: "Casual",
        Fade: "Heavy Fade",
      },
      look: "These slim jeans by WROGN will help you take your style to a whole new level. Match them with canvas shoes and a printed tee when you're heading out to catch a movie with your friends.",
    },
  },
  {
    _id: uuid(),
    company: "Roadster",
    productName: "Men Blue Skinny Fit Mid-Rise Clean Look Stretchable Jeans",
    price: 849,
    discount: 50,
    rating: 1.8,
    categoryName: "Jeans",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10092097/2019/10/15/adebe2b5-fa5a-4f24-aa6b-318a220756c21571136170029-Roadster-Men-Jeans-2931571136167945-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10092097/2019/10/15/258f25a2-bb3a-4971-b212-412d1b05a7a41571136169829-Roadster-Men-Jeans-2931571136167945-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10092097/2019/10/15/194d0dbb-c20c-48d6-b4de-8a87c7e4325e1571136169782-Roadster-Men-Jeans-2931571136167945-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10092097/2019/10/15/f94c05f1-b5c0-46cd-b366-ef2e445b881a1571136169911-Roadster-Men-Jeans-2931571136167945-3.jpg",
    ],
    details: {
      product:
        "Blue medium wash 5-pocket mid-rise jeans, clean look, light fade, has a button and zip closure, and waistband with belt loop",
      material: "99% Cotton, 1% Elastane, Machine-wash",

      specification: {
        Fit: "Skinny Fit",
        Stretch: "Stretchable",
        Occasion: "Casual",
        Fade: "Light Fade",
      },
      look: "These skinny-fit jeans by Roadster make a great addition to any personal wardrobe. They can be matched with canvas shoes and a trendy T-shirt when you're going on a casual date.",
    },
  },
  {
    _id: uuid(),
    company: "WROGN",
    productName: "Men Blue Slim Fit Mid-Rise Jeans",
    price: 299,
    discount: 40,
    rating: 3.8,
    categoryName: "Jeans",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1758520/2017/3/9/11489048805059-WROGN-Men-Blue-Slim-Fit-Mid-Rise-Clean-Look-Jeans-1581489048804772-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1758520/2017/3/9/11489048805009-WROGN-Men-Blue-Slim-Fit-Mid-Rise-Clean-Look-Jeans-1581489048804772-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1758520/2017/3/9/11489048804995-WROGN-Men-Blue-Slim-Fit-Mid-Rise-Clean-Look-Jeans-1581489048804772-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1758520/2017/3/9/11489048805024-WROGN-Men-Blue-Slim-Fit-Mid-Rise-Clean-Look-Jeans-1581489048804772-3.jpg",
    ],
    details: {
      product:
        "Blue 5-pocket mid-rise jeans, lightly faded, has a zip fly with a button closure, a waistband with belt loops",
      material: "81% cotton, 17% polyester, 2% elastane, Machine-wash",

      specification: {
        Fit: "Slim Fit",
        Stretch: "Stretchable",
        Occasion: "Casual",
        Fade: "Light Fade",
      },
      look: "These slim jeans by WROGN will help you take your style to a whole new level. Dress yours up with a pair of easy loafers and a high-quality shirt when you have a work event.",
    },
  },
  {
    _id: uuid(),
    company: "Roadster",
    productName: "Men Blue Slim Fit Mid-Rise Jeans",
    price: 934,
    discount: 45,
    rating: 4.1,
    categoryName: "Jeans",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10064547/2019/10/4/8ad05bbb-6936-4b70-9257-b11988a545841570182863686-Roadster-Men-Blue-Super-Skinny-Fit-Mid-Rise-Clean-Look-Stret-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12303596/2020/10/14/baaa557d-d012-402c-af12-4a0fe29ead561602652847646-Roadster-Men-Jeans-2311602652845733-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12303596/2020/10/14/b2994599-9868-4953-84f9-2450bf70688a1602652847602-Roadster-Men-Jeans-2311602652845733-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12303596/2020/10/14/ab73c528-da92-4eea-85ea-e8e174b649571602652847688-Roadster-Men-Jeans-2311602652845733-3.jpg",
    ],
    details: {
      product:
        "Navy Blue Acid Washeddark wash 5-pocket mid-rise jeans, clean look, light fade, has a button and zip closure, and waistband with belt loops",
      material: "98% cotton,, 2% elastane, Machine-wash",

      specification: {
        Fit: "Slim Fit",
        Stretch: "Stretchable",
        Occasion: "Casual",
        Fade: "Light Fade",
      },
      look: "These slim jeans from Roadster will intensify your personal style statement. Match them with easy loafers and a casual blazer when you have an informal meeting with clients.",
    },
  },

  {
    _id: uuid(),
    company: "HRX by Hrithik Roshan",
    productName: "Men Active Grey Core 1.0 Running Shoes",
    price: 249,
    discount: 70,
    rating: 4.1,
    categoryName: "Shoes",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2154051/2018/5/21/afc1319b-e500-4104-81c1-69dd9f5b5a221526884266133-HRX-by-Hrithik-Roshan-Men-Grey-Running-Shoes-1281526884264427-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2154051/2022/4/25/12c80251-5cdc-4297-8e45-7a9cba8f79d21650874352334HRXbyHrithikRoshanMenActiveGreyCore10RunningShoes2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2154051/2022/4/25/680e0094-e25f-4690-b64f-99998b5c542a1650874352352HRXbyHrithikRoshanMenActiveGreyCore10RunningShoes4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2154051/2022/4/25/03cb2444-124b-4f51-8a8d-c6c853d991f41650874352361HRXbyHrithikRoshanMenActiveGreyCore10RunningShoes5.jpg",
    ],
    details: {
      product:
        "Ideal for running on trails, Designed to provide maximum support to your feet and ankle, Breathable upper keeps your feet cool and dry.",
      material: " Synthentic, Wipe with a clean, dry cloth to remove dust",

      specification: {
        Material: "Synthentic",
        Cushioning: "Medium",
        "Ankle Height": "Regular",
        Sport: "Running",
      },
      look: "Get the support, comfort and style you deserve with a new pair of HRX by Hrithik Roshan sports shoes. Style this grey pair with comfortable shorts and a cool tank when you're going to the gym to workout.",
    },
  },
  {
    _id: uuid(),
    company: "ASIAN",
    productName: "Men Turquoise Blue Mesh Non-Marking Running Shoes",
    price: 849,
    discount: 40,
    rating: 3.1,
    categoryName: "Shoes",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16959618/2022/1/28/ea154935-5f27-46fd-9561-fac4a94890961643359928542ASIANMenTurquoiseBlue1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16959618/2022/1/28/69fd74a6-493f-4cd1-b294-f3aa1b5cc1dd1643359928256ASIANMenTurquoiseBlue2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16959618/2022/1/28/7b635bba-b655-432f-8e15-aae3dc4ba5cc1643359928290ASIANMenTurquoiseBlue5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16959618/2022/1/28/5b79add0-5bee-4108-8c79-f027375195301643359928661ASIANMenTurquoiseBlue7.jpg",
    ],
    details: {
      product:
        "A pair of turquoise blue running shoes, has regular Styling, lace-ups detail Mesh upper Cushioned footbed",
      material: "Wipe with a clean, dry cloth to remove dust",

      specification: {
        Material: "Mesh",
        Cushioning: "High",
        "Ankle Height": "Regular",
        Sport: "Running",
        Technology: "Memory Foam",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "ADIDAS",
    productName: "Women White Self Design Ultraboost SRDY Running Shoes",
    price: 849,
    discount: 40,
    rating: 2.1,
    categoryName: "Shoes",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12031640/2021/12/3/06e012fc-f77a-4807-85c0-c2de1c5dd5471638521388854-ADIDAS-Women-White-Self-Design-Ultraboost-SRDY-Running-Shoes-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12031640/2021/12/3/b22052ea-be58-4578-81f4-9bcb03fcc98d1638521388816-ADIDAS-Women-White-Self-Design-Ultraboost-SRDY-Running-Shoes-3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12031640/2021/12/3/dfdb390e-2f2a-4975-a189-2208f6d7eb791638521388776-ADIDAS-Women-White-Self-Design-Ultraboost-SRDY-Running-Shoes-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12031640/2021/12/3/23d5344c-87e1-44ff-8ac7-4d3e5f405f931638521388720-ADIDAS-Women-White-Self-Design-Ultraboost-SRDY-Running-Shoes-11.jpg",
    ],
    details: {
      product:
        "Ultra breathable running shoes made for high temperatures Energy-returning running shoes",
      material:
        "Textile and syhtheic upper, Wipe with a clean, dry cloth to remove dust",

      specification: {
        Material: "Textile",
        Cushioning: "Medium",
        "Ankle Height": "Regular",
        Sport: "Running",
        "Surface Type": "Court",
      },
      look: "Expand your athletic wardrobe with a brand new pair of comfy and trendy ADIDAS running shoes. This white pair can be styled with sports shorts and a breathable tank when you're going out for your morning jog.",
    },
  },
  {
    _id: uuid(),
    company: "Quechua By Decathlon",
    productName: "Women Brown High-Top Trekking Non-Marking Shoes",
    price: 999,
    discount: 40,
    rating: 0.7,
    categoryName: "Shoes",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14933858/2021/7/26/b5adbfcd-e29b-4fd1-bfee-56e62a1ff23e1627298223646WomenBrownWaterproofLeatherTrekkingBoots1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14933858/2021/7/26/7b68727b-4c14-4fd8-81b0-a1233339572c1627298224088WomenBrownWaterproofLeatherTrekkingBoots2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14933858/2021/7/26/13d753c3-1d0a-4c19-a185-00270239e4811627298224102WomenBrownWaterproofLeatherTrekkingBoots4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14933858/2021/7/26/1fd90952-f035-4ff5-95bc-40668da5d9781627298224080WomenBrownWaterproofLeatherTrekkingBoots6.jpg",
    ],
    details: {
      product:
        "A pair of brown trekking shoes, has high-top styling, lace-ups detail Synthetic upper",
      material:
        "Upper material: Synthetic, Wipe with a clean, dry cloth to remove dust",

      specification: {
        Material: "Synthetic",
        Cushioning: "Medium",
        Technology: "3D Grip",
        Sport: "Trekking",
        "Surface Type": "Outdoor",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "HRX by Hrithik Roshan",
    productName: "Men Blue Street Run 2.0 Running Shoe",
    price: 99,
    discount: 50,
    rating: 4.2,
    categoryName: "Shoes",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11954114/2021/6/16/24a987b5-28fb-4359-9c53-7a7f229781bf1623846610205-HRX-by-Hrithik-Roshan-Men-Blue-Street-Run-20-Running-Shoe-58-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11954112/2022/4/25/9cc8390f-9851-4725-897b-36002e02fccf1650874307246HRXbyHrithikRoshanMenNavyBlueStreetRun20RunningShoe2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11954112/2022/4/25/c075c490-b1e4-4d28-b1a9-970f01002e861650874307278HRXbyHrithikRoshanMenNavyBlueStreetRun20RunningShoe5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11954112/2022/4/25/8b365e8d-6aea-4120-ad04-4142b3b25a301650874307301HRXbyHrithikRoshanMenNavyBlueStreetRun20RunningShoe7.jpg",
    ],
    details: {
      product:
        "The HRX Men's Running Shoes from the Street Run 2.0 Collection are designed to cradle your feet as you run and give them the cushioning and support they need.",
      material: "Synthetic, Wipe with a clean, dry cloth to remove dust",

      specification: {
        Material: "Synthetic",
        Cushioning: "Medium",
        Sport: "Trail Running",
        "Surface Type": "Hard",
      },
      look: "You'll look and feel super stylish in these trendsetting sports shoes by HRX by Hrithik Roshan. Style this navy blue pair with comfortable shorts and a cool tank when you're going to the gym to workout",
    },
  },
  {
    _id: uuid(),
    company: "HRX by Hrithik Roshan",
    productName: "Men White And Fluorescent Green N-FLUX Running Shoe",
    price: 399,
    discount: 80,
    rating: 4.7,
    categoryName: "Shoes",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11999704/2020/11/3/bae44908-30ed-4237-9fe8-dae29f8cabbb1604401775122-HRX-by-Hrithik-Roshan-Men-White-And-Fluorescent-Green-N-FLUX-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11999704/2020/11/3/137d7f91-9c72-477e-8a97-063524dd22931604401775077-HRX-by-Hrithik-Roshan-Men-White-And-Fluorescent-Green-N-FLUX-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11999704/2020/11/3/5507be39-c2a2-4a49-84b1-e848b913b7701604401774980-HRX-by-Hrithik-Roshan-Men-White-And-Fluorescent-Green-N-FLUX-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11999704/2020/11/3/3d5b3524-d4a2-40c2-91f8-81df29ff0a541604401774933-HRX-by-Hrithik-Roshan-Men-White-And-Fluorescent-Green-N-FLUX-5.jpg",
    ],
    details: {
      product:
        "The new HRX Performance running shoe from N-FLUX collection is the Balanced Cushioning shoe to get you on the road. This neutral running shoe places your heel and forefoot at the same distance from the ground to encourage proper, stable & low-impact ride throughout your run",
      material: "Mesh, Wipe with a clean, dry cloth to remove dust",

      specification: {
        Material: "Mesh",
        Cushioning: "Medium",
        Technology: "3D Grip",
        Sport: "Running",
        "Surface Type": "Hard",
      },
      look: "Treat your feet to these comfortable and super supportive sports shoes from HRX by Hrithik Roshan. Team this white pair with track pants and a classic tee.",
    },
  },

  {
    _id: uuid(),
    company: "HRX by Hrithik Roshan",
    productName: "Men Grey Core Sports Shoe",
    price: 499,
    discount: 20,
    rating: 4.7,
    categoryName: "Shoes",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11999716/2021/3/19/b96582b5-f832-4429-8b3a-5876510520a41616131695754-HRX-by-Hrithik-Roshan-Men-Grey-Running-Shoes-999161613169528-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11999716/2021/3/19/fd0d9242-60bb-4db3-bcbb-414ad393f3631616131695740-HRX-by-Hrithik-Roshan-Men-Grey-Running-Shoes-999161613169528-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11999716/2021/3/19/0668a96a-b1f0-4748-8b86-613f833817421616131695710-HRX-by-Hrithik-Roshan-Men-Grey-Running-Shoes-999161613169528-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11999716/2021/3/19/2beff429-d8ec-4a12-9dd0-073fbccbed701616131695696-HRX-by-Hrithik-Roshan-Men-Grey-Running-Shoes-999161613169528-5.jpg",
    ],
    details: {
      product:
        "A pair of grey running sports shoes, has regular styling, lace-up detail Mesh upper Cushioned footbed",
      material: "Mesh, Wipe with a clean, dry cloth to remove dust",

      specification: {
        Material: "Mesh",
        Cushioning: "Medium",
        Sport: "Road Running",
        "Surface Type": "Court",
      },
      look: "You'll look and feel super stylish in these trendsetting sports shoes by HRX by Hrithik Roshan. This grey pair can be matched with a pair of casual shorts and a comfortable tee when you're going out with friends.",
    },
  },
  {
    _id: uuid(),
    company: "HRX by Hrithik Roshan",
    productName: "Men Grey Street Run 2.0 Running Shoe",
    price: 799,
    discount: 50,
    rating: 4.1,
    categoryName: "Shoes",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11954122/2021/6/16/002632a8-df3e-4f56-bcb0-73cf5c97ad851623846620916-HRX-by-Hrithik-Roshan-Men-Grey-Street-Run-20-Running-Shoe-73-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11954122/2022/4/25/863e560f-7172-4d1b-bc2b-cbe0037d39921650874240839HRXbyHrithikRoshanMenGreyStreetRun20RunningShoe15.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11954122/2022/4/25/0f8861ae-7de3-42ff-9e34-b93c5ba0f3361650874240876HRXbyHrithikRoshanMenGreyStreetRun20RunningShoe5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11954122/2022/4/25/be269c2a-9dbc-490d-bd0a-3b9ef8a59b611650874240847HRXbyHrithikRoshanMenGreyStreetRun20RunningShoe2.jpg",
    ],
    details: {
      product:
        "The HRX Men's Running Shoes from the Street Run 2.0 Collection are designed to cradle your feet as you run and give them the cushioning and support they need.",
      material: "Synthetic, Wipe with a clean, dry cloth to remove dust",

      specification: {
        Material: "Synthetic",
        Cushioning: "Medium",
        Sport: "Trail Running",
        "Surface Type": "Hard",
      },
      look: "You'll look and feel super stylish in these trendsetting sports shoes by HRX by Hrithik Roshan. Style this navy blue pair with comfortable shorts and a cool tank when you're going to the gym to workout",
    },
  },
  {
    _id: uuid(),
    company: "Jompers",
    productName: "Women Green & Blue Printed A-Line Kurta",
    price: 675,
    discount: 48,
    rating: 4.1,
    categoryName: "Kurtas",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10265935/2019/7/26/2367e212-2ac8-4c42-98ed-6dc3c79261371564119180239-Jompers-Women-Green--Blue-Printed-Anarkali-Kurta-78215641191-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10265935/2019/7/26/19225d6f-f95c-49c8-afc9-8587563626131564119180204-Jompers-Women-Green--Blue-Printed-Anarkali-Kurta-78215641191-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10265935/2019/7/26/23b65f44-708f-434a-bbf9-4e0aa6f151501564119180171-Jompers-Women-Green--Blue-Printed-Anarkali-Kurta-78215641191-3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10265935/2019/7/26/6dc4ce34-9ae7-45f8-9d6e-87a0cfe3d4121564119180122-Jompers-Women-Green--Blue-Printed-Anarkali-Kurta-78215641191-5.jpg",
    ],
    details: {
      product:
        "Green and blue printed A-line kurta, has a round neck, button closures, three-quarter sleeves, flared hem, and front slit",
      material: "Cotton, Hand-wash",

      specification: {
        Shape: "A-Line",
        Colour: "Aqua",
        Neck: "Round Neck",
        Occasion: "Daily",
      },
      look: "This stylish kurta from Jompers will take your personal style to new heights. Dress up for your next family event by pairing this piece with your best Kolhapuris and simple jewellery.",
    },
  },
  {
    _id: uuid(),
    company: "Soch",
    productName: "Women Yellow Geometric Printed Kurta",
    price: 798,
    discount: 18,
    rating: 5,
    categoryName: "Kurtas",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17232036/2022/2/21/a1458816-96ca-4ff9-b506-c4940d59661b1645435829704SochWomenYellowGeometricPrintedKeyholeNeckThreadWorkKurta1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16541844/2022/1/3/964b3528-ba0c-4ff2-a6c9-e2eb8c9c287a1641194563862-Women-Yellow-Printed-Cotton-Kurta-6721641194563382-3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16541844/2022/1/3/5ef5ce95-5c46-465c-9ac1-38222de70c221641203447952-Women-Yellow-Printed-Cotton-Kurta-2861641203447852-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16541844/2022/1/3/fc946a90-3873-44fb-894f-98f19c5078061641194563841-Women-Yellow-Printed-Cotton-Kurta-6721641194563382-4.jpg",
    ],
    details: {
      product:
        "Geometric printed Round neck Three-quarter, regular sleeves A-line shape with regular style",
      material: "Machine or Hand Wash",
      specification: {
        Shape: "A-Line",
        Colour: "Bright",
        Neck: "Round Neck",
        Occasion: "Daily",
      },
      look: "Show off your elegant style with a brand new print kurta from INDYES. For your next dinner party or family gathering, this yellow piece pairs well with any denims and chic flats.",
    },
  },
  {
    _id: uuid(),
    company: "Anubhutee",
    productName: "Women Navy Blue & White Bandhej Printed Straight Kurta",
    price: 594,
    discount: 65,
    rating: 3.5,
    categoryName: "Kurtas",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10513952/2022/2/22/1abcd853-3d8e-44b7-a0aa-28676309879e1645512977064AnubhuteeWomenNavyBlueWhiteBandhejPrintedStraightKurta1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10513952/2022/2/22/95f970f9-12ff-4a9e-afc2-9039677968411645512977314AnubhuteeWomenNavyBlueWhiteBandhejPrintedStraightKurta3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10513952/2022/2/22/c3e4afc0-6454-43ea-8a27-d3157810e46d1645512977202AnubhuteeWomenNavyBlueWhiteBandhejPrintedStraightKurta2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10513952/2022/2/22/ba994509-98ab-499c-9b7a-6f965262f2251645512977444AnubhuteeWomenNavyBlueWhiteBandhejPrintedStraightKurta4.jpg",
    ],
    details: {
      product:
        "Navy Blue and white bandhej and screen printed straight kurta with embroidered detail, has a round neck, three-quarter sleeves, straight hem, and side slits",
      material: "Machine or Hand Wash",
      specification: {
        Ornamentation: "Thread Work",
        Colour: "Indigo",
        Pattern: "Bandhani",
        Occasion: "Daily",
      },
      look: "Look and feel beautiful in this uniquely designed kurta from Anubhutee. Look chic for the day with this navy blue kurta and leggings.",
    },
  },

  {
    _id: uuid(),
    company: "Taavi",
    productName:
      "Women Red & White Ikat Woven Design A-Line Dress with Shirt Collar & Gathers",
    price: 449,
    discount: 50,
    rating: 4,
    categoryName: "Kurtas",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10128409/2021/2/11/2f5cf124-f138-47e4-be79-a28b2db1f5411613042971145-Taavi-Women-Red--White-Ikat-Woven-Design-A-Line-Dress-with-S-2.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10128409/2021/2/11/a511670b-9054-48a3-a028-ebe3cfa2f53b1613042971161-Taavi-Women-Red--White-Ikat-Woven-Design-A-Line-Dress-with-S-1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10128409/2021/2/11/ec8de370-d845-4683-b6a4-1b238053bd171613042971111-Taavi-Women-Red--White-Ikat-Woven-Design-A-Line-Dress-with-S-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10128409/2021/2/11/dd482750-f6f4-465d-a3a9-69f338b5f8441613042971130-Taavi-Women-Red--White-Ikat-Woven-Design-A-Line-Dress-with-S-3.jpg",
    ],
    details: {
      product:
        "The term 'Ikat' refers to the resist dyeing technique used to create the designs on the fabric. It is different because the yarns are dyed before being woven into cloth. Fashion trends may come and go, but Ikat fabrics have always stood the test of time.",
      material: "100% Cotton, Hand Wash cold, Wash dark colours separately",
      specification: {
        Technique: "Ikat",
        Colour: "Pastel",
        Hemline: "Flared",
        Occasion: "Daily",
      },
      look: "This gorgeous dress from Taavi will help you maintain an elegant look all year long. This piece is a stylish option for a nice family function or event when teamed a pair of classic flats.",
    },
  },
  {
    _id: uuid(),
    company: "See Designs",
    productName: "Women Blue & White Khari Print Straight Kurta",
    price: 284,
    discount: 75,
    rating: 0.5,
    categoryName: "Kurtas",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11519290/2020/2/25/19cf3192-3ca7-46a4-88e6-e5ae137995c01582624360192-See-Designs-Women-Blue--White-Printed-Straight-Kurta-1011582-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11519290/2020/2/25/87a42e53-401c-45d2-8dc6-912d12cedbba1582624359931-See-Designs-Women-Blue--White-Printed-Straight-Kurta-1011582-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11519290/2020/2/25/b7a3a511-1bb1-423b-9628-dedc8f3885c91582624360108-See-Designs-Women-Blue--White-Printed-Straight-Kurta-1011582-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11519290/2020/2/25/f579addd-70d1-4a2e-ae2b-a57d651eb45b1582624359991-See-Designs-Women-Blue--White-Printed-Straight-Kurta-1011582-4.jpg",
    ],
    details: {
      product:
        "Blue and White khari printed straight kurta, has a mandarin collar, short sleeves, straight hem, button closure and multiple slits",
      material: "Cotton, Machine Wash ",
      specification: {
        Technique: "Khari Print",
        Colour: "Aqua",
        Hemline: "Straight",
        Occasion: "Fusion",
      },
      look: "You'll love the style, comfort and durability of this See Designs kurta. Look chic for the day with this blue kurta and leggings.",
    },
  },
  {
    _id: uuid(),
    company: "Anouk",
    productName: "Women Pink Printed Straight Kurta",
    price: 99,
    discount: 40,
    rating: 1.5,
    categoryName: "Kurtas",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2322979/2018/2/13/11518506064968-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2322979/2022/3/8/8426a58a-2a2d-45d8-8009-026f834686451646724781178-Anouk-Women-Pink-Printed-Straight-Kurta-6641646724781081-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2322979/2018/2/13/11518506064945-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2322979/2018/2/13/11518506064876-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-4.jpg",
    ],
    details: {
      product:
        "Pink printed straight kurta, has a V-neck, three-quarter sleeves, straight hem, side slits",
      material: "Cotton, Machine Wash ",
      specification: {
        Neck: "V-Neck",
        Print: "Floral",
        Colour: "Pastel",
        Hemline: "Straight",
        Occasion: "Daily",
      },
      look: "You'll love the style, comfort and durability of this Anouk kurta. For your next dinner party or family gathering, this peach piece pairs well with dark leggings and chic flats.",
    },
  },
  {
    _id: uuid(),
    company: "KISAH",
    productName: "Men Multicoloured Ethnic Motifs Printed Kurta",
    price: 849,
    discount: 50,
    rating: 5,
    categoryName: "Kurtas",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15584420/2022/3/12/418dc892-93b7-47dd-a114-c1247b9d172d1647065967138-KISAH-Men-Multicoloured-Ethnic-Motifs-Printed-Kurta-89164706-6.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15584420/2021/9/24/2291c2af-58ba-4782-a2b1-1eec7f80c3621632444592530KISAHMenMulticolouredEthnicMotifsPrintedGottaPattiKurta3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15584420/2021/9/24/6b7f8a6a-17eb-4034-bc27-a11f3b1850ca1632444592404KISAHMenMulticolouredEthnicMotifsPrintedGottaPattiKurta2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15584420/2021/9/24/da3dfa98-c13e-4a5e-b2bf-deb9f4fc7f751632444592214KISAHMenMulticolouredEthnicMotifsPrintedGottaPattiKurta4.jpg",
    ],
    details: {
      product:
        "Ethnic motifs printed Mandarin collar Long, regular sleeves A-line shape with regular style",
      material: "Cotton, Dry Clean",
      specification: {
        Neck: "Mandarin Collar",
        Print: "Ethnic Motifs",
        Colour: "Earthy",
        Hemline: "Straight",
        Occasion: "Festive",
      },
      look: "Sport this classic kurta from Kisah this season. You'll look dapper as ever in this piece paired with slim jeans and sandals, ideal for any nice event.",
    },
  },
  {
    _id: uuid(),
    company: "KISAH",
    productName: "Women Green Shoulder Strap Kurta",
    price: 349,
    discount: 80,
    rating: 3,
    categoryName: "Kurtas",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14499342/2022/3/3/c05f6d54-e210-4d61-8e0a-be55e4346f3e1646287677106-Ode-by-House-of-Pataudi-Women-Green-Shoulder-Strap-Kurta-836-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14499342/2022/3/3/a4d9f1f7-7309-41ee-b794-ac7e331629c91646287677088-Ode-by-House-of-Pataudi-Women-Green-Shoulder-Strap-Kurta-836-3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14499342/2022/3/3/368cb256-a224-4b54-84d3-4f1f9f9854d81646287677097-Ode-by-House-of-Pataudi-Women-Green-Shoulder-Strap-Kurta-836-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14499342/2022/3/3/4fb0e267-6f46-4a73-9290-ff5fab99d51b1646287677078-Ode-by-House-of-Pataudi-Women-Green-Shoulder-Strap-Kurta-836-4.jpg",
    ],
    details: {
      product:
        "Colour: green Woven design solid Round neck Sleeveless, shoulder straps Straight shape with regular style",
      material: "Polyester, Machine wash",
      specification: {
        Neck: "Round Neck",
        Print: "Woven Design",
        Colour: "Pastel",
        Hemline: "Straight",
        Occasion: "Daily",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "Saree mall",
    productName:
      "Burgundy Striped Poly Georgette Party Wear Saree with Matching Blouse",
    price: 359,
    discount: 66,
    rating: 4.3,
    categoryName: "Sarees",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14984816/2021/8/26/6f00fe6c-258e-44da-907d-5a91f16d21491629966207295-Saree-Mall-Wine-Georgette-Ethnic-Solid-Party-Wear-Saree-with-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14984816/2021/8/26/19deb9dd-e4a6-4ed5-961c-cfc2500ae54a1629966207276-Saree-Mall-Wine-Georgette-Ethnic-Solid-Party-Wear-Saree-with-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14984816/2021/8/26/993da738-0a30-43f2-82ac-4fc27e19df441629966207257-Saree-Mall-Wine-Georgette-Ethnic-Solid-Party-Wear-Saree-with-3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14984816/2021/8/26/8f9aebbf-d9c7-47cb-afdb-0b248f62b5d41629966207237-Saree-Mall-Wine-Georgette-Ethnic-Solid-Party-Wear-Saree-with-4.jpg",
    ],
    details: {
      product:
        "Crafted for a classy look, this beautiful saree will elevate your style quotient. It comes with an appealing solid border and a graceful striped pattern that adds to your beauty.",
      material:
        "Saree fabric: Poly Georgette Blouse fabric: Silk Blend Dry clean",
      specification: {
        Trends: "Belted Sarees",
        Print: "Striped",
        Wash: "Dry Clean",
        Fibre: "Poly Georgette",
        Occasion: "Party",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "Tikhi Imli",
    productName:
      "Delicate Blue and Maroon Printed Organza Saree with Solid Border",
    price: 129,
    discount: 50,
    rating: 2.3,
    categoryName: "Sarees",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13919230/2021/7/8/309807a1-3122-46f1-a42c-5586a06297ac1625719615892-Floral-Organza-saree-with-SatinBorder-9811625719615378-1.jpg",

    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13919230/2022/3/3/58283b49-8905-4494-a5dc-1365883e6cbb1646284576246-Tikhi-Imli-Delicate-Blue-and-Maroon-Printed-Organza-Saree-wi-6.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13919230/2021/7/8/ac1ce172-c363-45fe-a37e-376093d28f2d1625719615851-Floral-Organza-saree-with-SatinBorder-9811625719615378-3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13919230/2021/7/8/275c6b55-d60d-4d5d-ac56-be14f523d60e1625719615870-Floral-Organza-saree-with-SatinBorder-9811625719615378-2.jpg",
    ],
    details: {
      product:
        "Fashionably accentuate your ethnic wardrobe with this saree. Featuring a flowing appearance, this saree is highlighted by an appealing sleek border and a graceful-looking floral print.",
      material: "Saree fabric: Organza Blouse fabric: Poly Silk Dry clean",
      specification: {
        Border: "Solid",
        Print: "Floral",
        Wash: "Dry Clean",
        Fibre: "Organza",
        Occasion: "Daily",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "Charukriti",
    productName: "Magenta Woven Design Jamdani Saree",
    price: 712,
    discount: 14,
    rating: 0.7,
    categoryName: "Sarees",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17124104/2022/2/10/325bfc28-c2f1-4e6a-ab92-1b59254896c51644499218268CharukritiWomenMagentaEmbellished1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17124104/2022/2/10/93afae7b-26e3-40b4-a185-b90258ddfd0a1644499218258CharukritiWomenMagentaEmbellished2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17124104/2022/2/10/5d7a6996-3897-4659-bee3-dcaae11df4be1644499218157CharukritiWomenMagentaEmbellished3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17124104/2022/2/10/ef157c53-c19f-43a7-a7fa-04c9309bc36a1644499217846CharukritiWomenMagentaEmbellished4.jpg",
    ],
    details: {
      product: "woven design saree with woven no border",
      material:
        "Saree fabric: Silk Cotton Blouse fabric: Silk Cotton Do not tumble dry iron low heat professional dry clean Do not bleach",
      specification: {
        Border: "Woven Design",
        Type: "Jamdani",
        Wash: "Dry Clean",
        Fibre: "Silk Cotton",
        Occasion: "Daily",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "Mitera",
    productName:
      "Cream-Coloured & Gold-Toned Ethnic Motifs Zari Silk Blend Kanjeevaram Saree",
    price: 990,
    discount: 95,
    rating: 5,
    categoryName: "Sarees",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17905600/2022/4/16/95bbc52e-49c5-420a-a2c8-798f1b44c6511650129526261MiteraCreamKanjeevaramSilkEthnicWovenDesignFestiveWearSareew1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17905600/2022/4/16/3f7a76ff-005f-41df-8364-986c78cc61d21650129526254MiteraCreamKanjeevaramSilkEthnicWovenDesignFestiveWearSareew2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17905600/2022/4/16/f4718dbd-a878-4f80-b990-bbd3872b75fa1650129526247MiteraCreamKanjeevaramSilkEthnicWovenDesignFestiveWearSareew3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17905600/2022/4/16/f84136c7-10e3-4871-adf6-d236654012d21650129526237MiteraCreamKanjeevaramSilkEthnicWovenDesignFestiveWearSareew4.jpg",
    ],
    details: {
      product:
        "Cream-coloured and gold-toned kanjeevaram saree Ethnic motifs woven design saree with zari border Has zari detail",
      material: " Silk Blend, Dry clean",
      specification: {
        Border: "Zari",
        Print: "Ethnic Motifs",
        Wash: "Dry Clean",
        Fibre: "Silk Blend",
        Occasion: "Traditional",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "Charukriti",
    productName: "Magenta & Black Printed Pure Silk Saree",
    price: 503,
    discount: 16,
    rating: 2.5,
    categoryName: "Sarees",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18483532/2022/5/28/50b41798-2594-47f6-88cf-28341f51ab361653677054724IndethnicMagentaRedEthnicMotifsPureCottonJamdaniSaree1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18483532/2022/5/28/e8f2c44c-b6d3-4dd8-8e0c-57611c706e9d1653677054669IndethnicMagentaRedEthnicMotifsPureCottonJamdaniSaree2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18483532/2022/5/28/e58f2fdf-ac8a-4486-88f3-3ce9b1c1287a1653677054680IndethnicMagentaRedEthnicMotifsPureCottonJamdaniSaree4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18483532/2022/5/28/a54ff636-22ee-453a-847e-45c09b0615f31653677054713IndethnicMagentaRedEthnicMotifsPureCottonJamdaniSaree3.jpg",
    ],
    details: {
      product:
        "Magenta and red jamdani saree Ethnic motifs woven design saree with solid border",
      material: "Pure Cotton",
      specification: {
        Type: "Jamdani",
        Print: "Ethnic Motifs",
        Wash: "Hand Wash",
        Fabric: "Pure Cotton",
        Occasion: "Traditional",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "Sangria",
    productName: "Navy Blue Solid Saree",
    price: 853,
    discount: 56,
    rating: 3.5,
    categoryName: "Sarees",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/5/25/a2c32671-3cb9-46cc-81c1-a722ddbf4c1e1621929685104-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/5/25/8ca8ebb5-e884-4d8b-88e3-0228686190051621929685181-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/5/25/42bb005f-41ab-45cf-96a4-a76ea8037e631621929685198-6.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/5/25/9cf75042-db6b-4021-aec6-ccff8d49b8651621929685125-2.jpg",
    ],
    details: {
      product:
        "The saree comes with an unstitched blouse piece, see the image of the blouse piece to understand how the actual blouse piece looks like",
      material: "Saree fabric: Poly Georgette Blouse fabric: Brocade Dry clean",
      specification: {
        "Blouse Fabric": "Brocade",
        Print: "Solid",
        Wash: "Dry Clean",
        "Saree Fabric": "Poly Georgette",
        Occasion: "Festive",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "Tikhi Imli",
    productName: "Navy Blue Poly-Georgette Saree with Solid border",
    price: 559,
    discount: 50,
    rating: 4.8,
    categoryName: "Sarees",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16189020/2021/12/6/da53ff1d-b79b-4329-8cdd-efc66d01bf5c1638787114831-Navy-Blue-Mirror-Work-Ruffle-Saree-571638787114246-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16189020/2021/12/6/af5dc723-d9e0-4c8b-aadd-be381e8ca9bb1638787114813-Navy-Blue-Mirror-Work-Ruffle-Saree-571638787114246-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16189020/2021/12/6/c2386f6f-ca38-4ffc-bbdf-bcad8333cf701638787114772-Navy-Blue-Mirror-Work-Ruffle-Saree-571638787114246-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16189020/2021/12/6/b3864511-1796-452d-9ce7-db38095d53351638787114751-Navy-Blue-Mirror-Work-Ruffle-Saree-571638787114246-5.jpg",
    ],
    details: {
      product:
        "Accentuate your festive wear collection with this fashionable saree. Its pleasing embellished pattern and charming Poly-georgette blouse will bring a touch of glam to your appearance.",
      material:
        "Saree fabric: Poly Georgette, Blouse fabric: Poly Georgette, Dry clean",
      specification: {
        Trends: "Ruffles",
        Ornamentation: "Mirror Work",
        Wash: "Dry Clean",
        "Saree Fabric": "Poly Georgette",
        Occasion: "Party",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "Mitera",
    productName: "Black & Blue Poly Crepe Printed Saree",
    price: 973,
    discount: 70,
    rating: 4,
    categoryName: "Sarees",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/12/14/8251f9a2-101f-4a4d-bc9c-73a36570573f1576285313782-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/12/14/7197ec87-e1b9-4d14-a89b-c0e85e80092e1576285313885-3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/12/14/b02f5a06-8751-4b63-b993-3d109da834cd1576285313839-2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/12/14/39bc3f9f-04fe-453c-b3a3-daa5c45d76691576285313930-4.jpg",
    ],
    details: {
      product:
        "The model is wearing a stitched version of the blouse piece. The saree comes with an unstitched blouse piece, see the image for a mock-up of what the actual blouse would look like",
      material:
        "Saree fabric: poly crepe, Blouse fabric: poly crepe, Machine Wash",
      specification: {
        Border: "No Border",
        Print: "Floral",
        Wash: "Machine Wash",
        "Saree Fabric": "Poly Crepe",
        Occasion: "Party",
      },
      look: "Show off your feminine side with this elegant Mitera daily saree. This black design can be styled with a pair of patent pumps when you're going to a fancy dinner with your friends.",
    },
  },
  {
    _id: uuid(),
    company: "HIGHLANDER",
    productName: "Highlander Black Chinos",
    price: 599,
    discount: 40,
    rating: 4.2,
    categoryName: "Trousers",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1380186/2019/3/15/25c47c73-44ed-4939-89a2-eaefce6733c81552645766838-Highlander-Black-Solid-Chinos-801552645765097-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1380186/2019/3/15/5be01fcf-a980-4c90-837e-cc86ce0ac3291552645766766-Highlander-Black-Solid-Chinos-801552645765097-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1380186/2019/3/15/c629bee2-5fae-4d62-99f1-d566512dcad01552645766743-Highlander-Black-Solid-Chinos-801552645765097-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1380186/2019/3/15/b11bc351-53b8-4e36-a79d-e1d576bf9f871552645766790-Highlander-Black-Solid-Chinos-801552645765097-3.jpg",
    ],
    details: {
      product:
        "Black mid-rise chinos, has four pockets, a zip fly with button closure, a waistband with belt loops",
      material: "Cotton ans Lycra blend, Machine-wash warm",
      specification: {
        Waist: "Mid Rise",
        Weaven: "Woven",
        Features: "Plain",
        Occasion: "Cassual",
      },
      look: "Look your absolute best by donning this well-crafted pair of trousers. Team this piece with a checked casual shirt and loafers to complete the ensemble.",
    },
  },
  {
    _id: uuid(),
    company: "Roadster",
    productName: "Women Olive Green & Black Slim Fit Printed Chinos",
    price: 659,
    discount: 70,
    rating: 3,
    categoryName: "Trousers",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2217969/2017/11/14/11510650694129-Roadster-Women-Olive-Green--Black-Slim-Fit-Printed-Regular-Trousers-3401510650693998-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2217969/2017/11/14/11510650694053-Roadster-Women-Olive-Green--Black-Slim-Fit-Printed-Regular-Trousers-3401510650693998-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2217969/2017/11/14/11510650694072-Roadster-Women-Olive-Green--Black-Slim-Fit-Printed-Regular-Trousers-3401510650693998-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2217969/2017/11/14/11510650694092-Roadster-Women-Olive-Green--Black-Slim-Fit-Printed-Regular-Trousers-3401510650693998-3.jpg",
    ],
    details: {
      product:
        "Olive Green and black printed mid-rise chinos, has a button closure, 5 pockets",
      material: "97% Cotton and 3% Lycra, Machine-wash",
      specification: {
        Waist: "Mid Rise",
        Weaven: "Woven",
        Print: "Campouflage",
        Trend: "Abstract",
        Occasion: "Casual",
      },
      look: "These slim trousers from Roadster are super soft and chic, making them very likeable. This printed olive pair can be worn with sneakers and a fitted tee when you're joining your friends for brunch.",
    },
  },
  {
    _id: uuid(),
    company: "SASSAFRAS",
    productName: "Women Olive Green Pure Cotton Straight Trousers",
    price: 764,
    discount: 55,
    rating: 2,
    categoryName: "Trousers",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13843132/2021/3/23/98644bfe-cdd7-47ff-b355-2b65473dfe981616490669259-SASSAFRAS-Women-Olive-Green-Regular-Fit-Solid-Pure-Cotton-St-2.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13843132/2021/3/23/f2e7e7c0-d4f0-48f4-a147-f91bb2b1643b1616490669214-SASSAFRAS-Women-Olive-Green-Regular-Fit-Solid-Pure-Cotton-St-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13843132/2021/3/23/9a4f5a12-f13a-4b13-bf14-aefdd97f15ba1616490669190-SASSAFRAS-Women-Olive-Green-Regular-Fit-Solid-Pure-Cotton-St-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13843132/2021/3/23/f0f15048-b198-4c60-8af2-a5b2514a6e2c1616490669234-SASSAFRAS-Women-Olive-Green-Regular-Fit-Solid-Pure-Cotton-St-3.jpg",
    ],
    details: {
      product:
        "Olive Green solid mid-rise woven straight trousers, has a partially elasticated waistband, button closure, and 2 pockets",
      material: "97% Cotton and 3% Lycra, Machine-wash",
      specification: {
        Waist: "Mid Rise",
        Weaven: "Woven",
        "Number of Pockets": "2",
        Trend: "Military",
        Occasion: "Casual",
      },
      look: "You'll love the comfort and design of these high-quality SASSAFRAS chino trousers. This solid olive pair can be styled with patent heels and a chic top for a cute dinner ensemble.",
    },
  },
  {
    _id: uuid(),
    company: "Louis Philippe Ath.Work",
    productName:
      "Louis Philippe Ath Work Men Navy Blue Solid Comfort Tapered Fit Low-Rise Trousers",
    price: 973,
    discount: 15,
    rating: 1,
    categoryName: "Trousers",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16890232/2022/2/22/06119a79-2e99-4474-8012-ac8a3287b7f01645534396692-Louis-Philippe-AthWork-Men-Trousers-4171645534396107-1.jpg",
    moreImages: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16890232/2022/2/22/e49cc8d1-a5ca-4320-aff7-b6bd7292853c1645534396666-Louis-Philippe-AthWork-Men-Trousers-4171645534396107-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16890232/2022/2/22/f0fdf894-5b8e-4e88-a62c-2be529199f2a1645534396657-Louis-Philippe-AthWork-Men-Trousers-4171645534396107-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16890232/2022/2/22/de706378-db05-41fd-865a-c2d4de1cf2881645534396675-Louis-Philippe-AthWork-Men-Trousers-4171645534396107-3.jpg",
    ],
    details: {
      product:
        "Navy blue knitted trousers Tapered fit Brand Fit: comfort Low-rise",
      material: "100% Polyester, Machine-wash",
      specification: {
        Waist: "Low Rise",
        Weaven: "Knitted",
        "Number of Pockets": "4",
        Trend: "New Basics",
        Occasion: "Casual",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "STREET 9",
    productName: "Women Green Loose Fit High-Rise Culottes Trousers",
    price: 429,
    discount: 35,
    rating: 0.6,
    categoryName: "Trousers",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17431386/2022/3/8/17d761b7-d9f1-49a0-8f9d-3eaf46b9ef9b1646719043392STREET9WomenGreenLooseFitHigh-RiseCulottesTrousers1.jpg",
    moreImages:[
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17431386/2022/3/8/d2d31729-03a0-4208-8f2f-ed6d28d30e4e1646719043429STREET9WomenGreenLooseFitHigh-RiseCulottesTrousers5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17431386/2022/3/8/72fe1412-6ac1-41db-ba29-0619adb781131646719043453STREET9WomenGreenLooseFitHigh-RiseCulottesTrousers6.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17431386/2022/3/8/b6d3bf6f-9764-4624-bb2c-e0c6f41c2e271646719043416STREET9WomenGreenLooseFitHigh-RiseCulottesTrousers3.jpg"
    ],
    details: {
      product:
        "Green knitted culottes Loose fit High-rise Length: regular",
      material: "95% Polyester, 5% Spandex, Machine-wash",
      specification: {
        Waist: "High Rise",
        Weaven: "Knitted",
        "Number of Pockets": "2",
        Trend: "New Basics",
        Occasion: "Casual",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "Louis Philippe",
    productName:
      "Men Grey Solid Slim Fit Low-Rise Wrinkle Free Formal Trousers",
    price: 993,
    discount: 75,
    rating: 4.6,
    categoryName: "Trousers",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14305734/2022/2/1/8a688e19-e30c-48f9-9d9c-23e44ac0d35f1643718734758-Louis-Philippe-Men-Trousers-1451643718734171-2.jpg",
    moreImages:[
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14305734/2022/2/1/8fd10918-60b0-48e1-baa8-d479fd765a441643718734736-Louis-Philippe-Men-Trousers-1451643718734171-4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14305734/2022/2/1/08341457-74f5-423e-a0b9-512765d5276c1643718734723-Louis-Philippe-Men-Trousers-1451643718734171-5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14305734/2022/2/1/e79b6e85-1603-472d-ac97-fdec08cda35c1643718734747-Louis-Philippe-Men-Trousers-1451643718734171-3.jpg"
    ],
    details: {
      product:
        "Grey woven formal Slim fit Low-rise Length: three-fourth length Pattern: solid",
      material: "64% Polyester, 34% Viscose, 2% Spandex, Gentle wash",
      specification: {
        Waist: "Low Rise",
        Weaven: "Woven",
        "Number of Pockets": "4",
        Trend: "New Basics",
        Occasion: "Formal",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "H&M",
    productName: "Women Beige Solid Ankle-Length Trousers",
    price: 93,
    discount: 99,
    rating: 3.6,
    categoryName: "Trousers",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17465196/2022/3/10/bb1f1fe7-17a3-4bff-ab02-ef630f8126641646901474929Ankle-lengthtrousers1.jpg",
    moreImages:[
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17465196/2022/3/10/0594a2d4-c162-4bbf-a099-9d3e0c94652b1646901474910Ankle-lengthtrousers2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17465196/2022/3/10/adc745f1-e6be-47df-bc34-e83bc4c6885a1646901474900Ankle-lengthtrousers4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17465196/2022/3/10/5b04113f-d05c-4bbb-9d1a-d7b60e6bdfdd1646901474919Ankle-lengthtrousers3.jpg"
    ],
    details: {
      product:
        "Ankle-length trousers in woven fabric. High waist with pleats at the front and covered elastication at the back, and a zip fly with hook-and-eye fasteners. Side pockets, fake back pockets and wide, gently tapered legs with creases.",
      material: "7% Polyester, 93% Viscose, Hand wash",
      specification: {
        Waist: "High Rise",
        Weaven: "Knitted",
        "Number of Pockets": "2",
        Trend: "New Basics",
        Occasion: "Casual",
      },
      look: "",
    },
  },
  {
    _id: uuid(),
    company: "Louis Philippe",
    productName: "Men Navy Blue Slim Fit Formal Trousers",
    price: 723,
    discount: 35,
    rating: 5,
    categoryName: "Trousers",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14602076/2022/2/25/d596b3f7-8a9e-465a-9319-e2eb2af65bb81645790315287-Louis-Philippe-Men-Black-Slim-Fit-Formal-Trousers-8571645790-2.jpg",
    moreImages:[
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15700864/2021/10/2/3dffb02e-5f11-4a1c-a34b-b6d065a490121633156645040LouisPhilippeMenNavyBlueSlimFitFormalTrousers4.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15700864/2021/10/2/b21d55f7-714d-4936-b429-15f2c4d7007e1633156645153LouisPhilippeMenNavyBlueSlimFitFormalTrousers5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15700864/2021/10/2/48b4ed36-1ac8-41a9-86f6-51fe4b979d761633156645268LouisPhilippeMenNavyBlueSlimFitFormalTrousers3.jpg",
    ],
    details: {
      product:
        "Navy blue knitted formal trousers Slim fit Mid-rise Length: regular Pattern: solid",
      material: "52% Linen and 48% Cotton, Machine wash",
      specification: {
        Waist: "Mid Rise",
        Weaven: "Knitted",
        "Number of Pockets": "4",
        Trend: "New Basics",
        Occasion: "Formal",
      },
      look: "",
    },
  },
];


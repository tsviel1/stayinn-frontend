
// State: stay (crudl) , trip => order.

const db = {
  "stay": [
    {
      "_id": "10006546",
      "name": "Ribeira Charming Duplex",
      "type": "House",
      "propertyType": "Serviced apartment",
      "roomType": "Entire home/apt",
      "bedType": "Real Bed",
      "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "../../assets/Images/001.jpeg", "../../assets/Images/002.jpeg", "../../assets/Images/03.jpeg", "../../assets/Images/004.jpeg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 8,
      "bedrooms": 2,
      "beds": 4,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "tags": [
        "countryside",
        "amazing-views",
        "design"
      ],
      "host": {
        "_id": "51399391",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      "loc": {
        "country": "Turkey",
        "countryCode": "TR",
        "city": "Istanbul",
        "address": "Taksim, Cihangir, Istanbul , Beyoğlu, Turkey",
        "lat": 28.98648,
        "lan": 41.03376
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers" : ['mini-user'] // for user-wishlist : use $in
    },
    {
      "_id": "10043406546",
      "name": "Ribeira Charming Duplex",
      "type": "House",
      "propertyType": "Serviced apartment",
      "roomType": "Entire home/apt",
      "bedType": "Real Bed",
      "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "../../assets/Images/001.jpeg", "../../assets/Images/002.jpeg", "../../assets/Images/03.jpeg", "../../assets/Images/004.jpeg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 8,
      "bedrooms": 2,
      "beds": 4,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "tags": [
        "countryside",
        "amazing-views",
        "design"
      ],
      "host": {
        "_id": "51399391",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      "loc": {
        "country": "Spain",
        "countryCode": "ES",
        "city": "Barcelona",
        "address": "Barcelona, Catalunya, Spain",
        "lat": 2.16685,
        "lan": 41.38371
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers" : ['mini-user'] // for user-wishlist : use $in
    },
    {
      "_id": "100066646546",
      "name": "Ribeira Charming Duplex",
      "type": "House",
      "propertyType": "Serviced apartment",
      "roomType": "Entire home/apt",
      "bedType": "Real Bed",
      "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "../../assets/Images/001.jpeg", "../../assets/Images/002.jpeg", "../../assets/Images/03.jpeg", "../../assets/Images/004.jpeg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 8,
      "bedrooms": 2,
      "beds": 4,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "tags": [
        "countryside",
        "amazing-views",
        "design"
      ],
      "host": {
        "_id": "51399391",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      "loc": {
        "country": "United States",
        "countryCode": "US",
        "city": "New York",
        "address": "Brooklyn, NY, United States",
        "lat": -73.92922,
        "lan": 40.68683
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers" : ['mini-user'] // for user-wishlist : use $in
    },
    {
      "_id": "10006126646546",
      "name": "Ribeira Charming Duplex",
      "type": "House",
      "propertyType": "Serviced apartment",
      "roomType": "Entire home/apt",
      "bedType": "Real Bed",
      "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "../../assets/Images/001.jpeg", "../../assets/Images/002.jpeg", "../../assets/Images/03.jpeg", "../../assets/Images/004.jpeg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 8,
      "bedrooms": 2,
      "beds": 4,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "tags": [
        "countryside",
        "amazing-views",
        "design"
      ],
      "host": {
        "_id": "51399391",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      "loc": {
        "country": "Canada",
        "countryCode": "CA",
        "city": "Montreal",
        "address": "Montréal, QC, Canada",
        "lat": -73.54985,
        "lan": 45.52797
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers" : ['mini-user'] // for user-wishlist : use $in
    },
    {
      "_id": "10006664346546",
      "name": "Ribeira Charming Duplex",
      "type": "House",
      "propertyType": "Serviced apartment",
      "roomType": "Entire home/apt",
      "bedType": "Real Bed",
      "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "../../assets/Images/001.jpeg", "../../assets/Images/002.jpeg", "../../assets/Images/03.jpeg", "../../assets/Images/004.jpeg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 8,
      "bedrooms": 2,
      "beds": 4,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "tags": [
        "countryside",
        "amazing-views",
        "design"
      ],
      "host": {
        "_id": "51399391",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Porto",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers" : ['mini-user'] // for user-wishlist : use $in
    },
    {
      "_id": "10006668646546",
      "name": "Ribeira Charming Duplex",
      "type": "House",
      "propertyType": "Serviced apartment",
      "roomType": "Entire home/apt",
      "bedType": "Real Bed",
      "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "../../assets/Images/001.jpeg", "../../assets/Images/002.jpeg", "../../assets/Images/03.jpeg", "../../assets/Images/004.jpeg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 8,
      "bedrooms": 2,
      "beds": 4,
      "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
      ],
      "tags": [
        "countryside",
        "amazing-views",
        "design"
      ],
      "host": {
        "_id": "51399391",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
      },
      "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Porto",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
          }
        }
      ],
      "likedByUsers" : ['mini-user'] // for user-wishlist : use $in
    }
  ],
  "order": [
    {
      "_id": "o1225",
      "hostId": "u102",
      "createdAt": 9898989,
      "buyer": {
        "_id": "u101",
        "fullname": "User 1",
        "imgUrl": "some image",
      },
      "totalPrice": 160,
      "startDate": "2025/10/15",
      "endDate": "2025/10/17",
      "guests": {
        "adults": 2,
        "kids": 1
      },
      "stay": {
        "_id": "h102",
        "name": "House Of Uncle Moshe",
        "price": 80.00
      },
      "status": "pending" //pending/approved/rejected
    }    
  ],
  "user": [
    {
      "_id": "u101",
      "fullname": "User 1",
      "imgUrl": "/img/img1.jpg",
      "isAdmin": false,
      "username" : "user1",
      "password" : "secret"
    },
    {
      "_id": "u102",
      "fullname": "User 2",
      "imgUrl": "/img/img2.jpg",
      "isAdmin": false,
      "username" : "user2",
      "password" : "secret"
    }
  ]  
}

export { db }


// Homepage: TOP categories: Best Rate / Houses / Kitchen
// Renders a <StayList> with <StayPreview> with Link to <StayDetails>   url: /stay/123
// See More => /explore?topRate=true
// See More => /explore?type=House
// See More => /explore?amenities=Kitchen
// Explore page:
// stayService.query({type: 'House'})

const stays = [{}, {}]
// HomePage
//  list of stays with link to stay-details
//  CSS Infra, Master CSS
// UserDetails 
//  basic info
//  visitedStays => orderService.query({userId: 'u101'})
//  myStayOrders => orderService.query({hostId: 'u101'})
//  ownedStays => stayService.query({hostId: 'u103'})
// StayEdit - make it super easy to add Stay for development
// StayList, StayPreview
// Order, confirm Order
// Lastly: StayExplore, Filtering
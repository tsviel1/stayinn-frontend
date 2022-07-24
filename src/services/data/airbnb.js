// import immg from '../../assets/Images'
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
      "imgUrls": ["001.jpeg", "002.jpeg", "003.jpeg", "004.jpeg", "007.jpeg"],
      "price": 180.00,
      "summary": "Fantastic duplex apartment with three rooms, located in the historic area of Porto, Ribeira (Cube)...",
      "beds": 4,
      "bedrooms": 2,
      "capacity": 8,
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
        "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
      },
      "loc": {
        "country": "Turkey",
        "countryCode": "TR",
        "city": "Istanbul",
        "address": "Taksim, Cihangir, Istanbul , Beyoğlu, Turkey",
        "lat": 28.98648,
        "lng": 41.03376
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/2.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "Incredible stay, location was amazing! The room was very comfortable and the shower was great, but be mindful that there are around 80 very steep and small stairs to reach the apartment which posed an issue for us with large suitcases; but luggage can be kept down stairs.",
          "rate": 3,
          "by": {
            "_id": "u103",
            "fullname": "Tal",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/3.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "very pleasent stay in one of the most beautiful cities i ve seen.Great host and great apartment , will come back to rome for sure and i already know where i will stay!",
          "rate": 4,
          "by": {
            "_id": "u104",
            "fullname": "userGila",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/4.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "The apartment was stunning and exactly as pictured with also a beautiful view. The location was perfect being in the heart of the city, I pretty much walked everywhere. The communication was super responsive and prompt as well. I will 100% be staying here the next time",
          "rate": 5,
          "by": {
            "_id": "u105",
            "fullname": "Lila",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/5.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "not great not terrible, you get what you paid for ",
          "rate": 3,
          "by": {
            "_id": "u106",
            "fullname": "Moshe",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/6.jpg"
          }
        },
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
      "imgUrls": ["001.jpeg", "002.jpeg", "003.jpeg", "004.jpeg", "005.jpeg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three rooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 2,
      "bedrooms": 2,
      "beds": 1,
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
        "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
      },
      "loc": {
        "country": "Spain",
        "countryCode": "ES",
        "city": "Barcelona",
        "address": "Barcelona, Catalunya, Spain",
        "lat": 2.16685,
        "lng": 41.38371
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/2.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "Incredible stay, location was amazing! The room was very comfortable and the shower was great, but be mindful that there are around 80 very steep and small stairs to reach the apartment which posed an issue for us with large suitcases; but luggage can be kept down stairs.",
          "rate": 3,
          "by": {
            "_id": "u103",
            "fullname": "Tal",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/3.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "very pleasent stay in one of the most beautiful cities i ve seen.Great host and great apartment , will come back to rome for sure and i already know where i will stay!",
          "rate": 4,
          "by": {
            "_id": "u104",
            "fullname": "userGila",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/4.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "The apartment was stunning and exactly as pictured with also a beautiful view. The location was perfect being in the heart of the city, I pretty much walked everywhere. The communication was super responsive and prompt as well. I will 100% be staying here the next time",
          "rate": 5,
          "by": {
            "_id": "u105",
            "fullname": "Lila",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/5.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "not great not terrible, you get what you paid for ",
          "rate": 3,
          "by": {
            "_id": "u106",
            "fullname": "Moshe",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/6.jpg"
          }
        },
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
      "imgUrls": ["007.jpeg", "006.jpeg", "008.jpeg", "009.jpeg", "010.jpeg"],
      "price": 155.00,
      "summary": "Fantastic duplex apartment with three rooms, located in the historic area of Porto, Ribeira (Cube)...",
      "beds": 3,
      "bedrooms": 2,
      "capacity": 6,
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
        "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
      },
      "loc": {
        "country": "United States",
        "countryCode": "US",
        "city": "New York",
        "address": "Brooklyn, NY, United States",
        "lat": -73.92922,
        "lng": 40.68683
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/2.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "Incredible stay, location was amazing! The room was very comfortable and the shower was great, but be mindful that there are around 80 very steep and small stairs to reach the apartment which posed an issue for us with large suitcases; but luggage can be kept down stairs.",
          "rate": 3,
          "by": {
            "_id": "u103",
            "fullname": "Tal",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/3.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "very pleasent stay in one of the most beautiful cities i ve seen.Great host and great apartment , will come back to rome for sure and i already know where i will stay!",
          "rate": 4,
          "by": {
            "_id": "u104",
            "fullname": "userGila",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/4.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "The apartment was stunning and exactly as pictured with also a beautiful view. The location was perfect being in the heart of the city, I pretty much walked everywhere. The communication was super responsive and prompt as well. I will 100% be staying here the next time",
          "rate": 5,
          "by": {
            "_id": "u105",
            "fullname": "Lila",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/5.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "not great not terrible, you get what you paid for ",
          "rate": 3,
          "by": {
            "_id": "u106",
            "fullname": "Moshe",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/6.jpg"
          }
        },
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
      "imgUrls": ["011.jpeg", "012.jpeg", "013.jpeg", "014.jpeg", "015.jpeg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 9,
      "bedrooms": 3,
      "beds": 3,
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
        "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
      },
      "loc": {
        "country": "Canada",
        "countryCode": "CA",
        "city": "Montreal",
        "address": "Montréal, QC, Canada",
        "lat": -73.54985,
        "lng": 45.52797
      },
      "reviews": [
        {
          "id": "madeId",
          "txt": "Very helpful hosts. Cooked traditional...",
          "rate": 4,
          "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/2.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "Incredible stay, location was amazing! The room was very comfortable and the shower was great, but be mindful that there are around 80 very steep and small stairs to reach the apartment which posed an issue for us with large suitcases; but luggage can be kept down stairs.",
          "rate": 3,
          "by": {
            "_id": "u103",
            "fullname": "Tal",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/3.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "very pleasent stay in one of the most beautiful cities i ve seen.Great host and great apartment , will come back to rome for sure and i already know where i will stay!",
          "rate": 4,
          "by": {
            "_id": "u104",
            "fullname": "userGila",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/4.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "The apartment was stunning and exactly as pictured with also a beautiful view. The location was perfect being in the heart of the city, I pretty much walked everywhere. The communication was super responsive and prompt as well. I will 100% be staying here the next time",
          "rate": 5,
          "by": {
            "_id": "u105",
            "fullname": "Lila",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/5.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "not great not terrible, you get what you paid for ",
          "rate": 3,
          "by": {
            "_id": "u106",
            "fullname": "Moshe",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/6.jpg"
          }
        },
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
      "imgUrls": ["016.jpeg", "017.jpeg", "018.jpeg", "019.jpeg", "020.jpeg"],
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
        "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
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
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/2.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "Incredible stay, location was amazing! The room was very comfortable and the shower was great, but be mindful that there are around 80 very steep and small stairs to reach the apartment which posed an issue for us with large suitcases; but luggage can be kept down stairs.",
          "rate": 3,
          "by": {
            "_id": "u103",
            "fullname": "Tal",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/3.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "very pleasent stay in one of the most beautiful cities i ve seen.Great host and great apartment , will come back to rome for sure and i already know where i will stay!",
          "rate": 4,
          "by": {
            "_id": "u104",
            "fullname": "userGila",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/4.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "The apartment was stunning and exactly as pictured with also a beautiful view. The location was perfect being in the heart of the city, I pretty much walked everywhere. The communication was super responsive and prompt as well. I will 100% be staying here the next time",
          "rate": 5,
          "by": {
            "_id": "u105",
            "fullname": "Lila",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/5.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "not great not terrible, you get what you paid for ",
          "rate": 3,
          "by": {
            "_id": "u106",
            "fullname": "Moshe",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/6.jpg"
          }
        },
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
      "imgUrls": ["021.jpeg", "022.jpeg", "023.jpeg", "024.jpeg", "025.jpeg"],
      "price": 80.00,
      "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
      "capacity": 3,
      "bedrooms": 3,
      "beds": 1,
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
        "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
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
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/2.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "Incredible stay, location was amazing! The room was very comfortable and the shower was great, but be mindful that there are around 80 very steep and small stairs to reach the apartment which posed an issue for us with large suitcases; but luggage can be kept down stairs.",
          "rate": 3,
          "by": {
            "_id": "u103",
            "fullname": "Tal",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/3.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "very pleasent stay in one of the most beautiful cities i ve seen.Great host and great apartment , will come back to rome for sure and i already know where i will stay!",
          "rate": 4,
          "by": {
            "_id": "u104",
            "fullname": "userGila",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/4.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "The apartment was stunning and exactly as pictured with also a beautiful view. The location was perfect being in the heart of the city, I pretty much walked everywhere. The communication was super responsive and prompt as well. I will 100% be staying here the next time",
          "rate": 5,
          "by": {
            "_id": "u105",
            "fullname": "Lila",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/female/5.jpg"
          }
        },
        {
          "id": "madeId",
          "txt": "not great not terrible, you get what you paid for ",
          "rate": 3,
          "by": {
            "_id": "u106",
            "fullname": "Moshe",
            "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/6.jpg"
          }
        },
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
      "imgUrl": "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
      "isAdmin": false,
      "username" : "user2",
      "password" : "secret"
    }
  ]  
}

const tagBank = ["beach", "design", "desert", "amazing-views", "countryside", "bed-breakfast"]

export { db, tagBank }


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
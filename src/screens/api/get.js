import yelp from './yelp';

export const searchApi1 = async () => {
  try {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        location: 'cairo',
        // latitude: 37.767413217936834,
        // longitude: -122.42820739746094,
      },
    });
    console.log(response.data.businesses[0]);
  } catch (err) {
    console.log('Something went wrong');
  }
};

const searchApi = async () => {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json',
    );
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

// // Object {
// //   "alias": "shemwells-barbecue-cairo",
// //   "categories": Array [
// //     Object {
// //       "alias": "bbq",
// //       "title": "Barbeque",
// //     },
// //   ],
// //   "coordinates": Object {
// //     "latitude": 37.00129,
// //     "longitude": -89.16967,
// //   },
// //   "display_phone": "(618) 734-0165",
// //   "distance": 3583.3128195321356,
// //   "id": "CZvdPc9sY6P0FnkjyXrpvQ",
// //   "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Ouj2PswG3Gyje8e_AeIxbQ/o.jpg",
// //   "is_closed": false,
// //   "location": Object {
// //     "address1": "1102 Washington Ave",
// //     "address2": "",
// //     "address3": "",
// //     "city": "Cairo",
// //     "country": "US",
// //     "display_address": Array [
// //       "1102 Washington Ave",
// //       "Cairo, IL 62914",
// //     ],
// //     "state": "IL",
// //     "zip_code": "62914",
// //   },
// //   "name": "Shemwell's Barbecue",
// //   "phone": "+16187340165",
// //   "price": "$",
// //   "rating": 4,
// //   "review_count": 9,
// //   "transactions": Array [],
// //   "url": "https://www.yelp.com/biz/shemwells-barbecue-cairo?adjust_creative=Y4gEsjrAPuMmf2BVhkKhqA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Y4gEsjrAPuMmf2BVhkKhqA",
// // }

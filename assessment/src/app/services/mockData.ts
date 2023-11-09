export interface girlInt {
    "description": String, 
    "image-url": String
}

export interface data {
	"title": string,
	"description": string,
	"price": number,
	"keywords": any[]
	"createdOn": string,
	"image": string
}

export const girlImages: data[] = [
  {
    "title": "Lady with a Teddy",
    "description": "Description for Lady with a Teddy",
    "price": 19.99,
    "keywords": ["lady", "teddy", "portrait"],
    "createdOn": "2023-11-08T12:00:00",
    "image": "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg"
  },
  {
    "title": "Girl with camera",
    "description": "Description for Girl with camera",
    "price": 24.99,
    "keywords": ["girl", "camera", "photography"],
    "createdOn": "2023-11-08T13:00:00",
    "image": "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg"
  },
  {
    "title": "Beautiful Girl with Glasses",
    "description": "Description for Beautiful Girl with Glasses",
    "price": 29.99,
    "keywords": ["girl", "glasses", "portrait"],
    "createdOn": "2023-11-08T14:00:00",
    "image": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg"
  },
  {
    "title": "Redhead with freckles",
    "description": "Description for Redhead with freckles",
    "price": 22.99,
    "keywords": ["redhead", "freckles", "portrait"],
    "createdOn": "2023-11-08T15:00:00",
    "image": "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg"
  },
  {
    "title": "Girl in black dress",
    "description": "Description for Girl in black dress",
    "price": 17.99,
    "keywords": ["girl", "black dress", "portrait"],
    "createdOn": "2023-11-08T16:00:00",
    "image": "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg"
  },
  {
    "title": "Girl Sitting on Chair",
    "description": "Description for Girl Sitting on Chair",
    "price": 18.99,
    "keywords": ["girl", "chair", "portrait"],
    "createdOn": "2023-11-08T17:00:00",
    "image": "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg"
  }
];


const cars = [
    {
      id: 1,
      name: 'Toyota Camry',
      mileage: 14,
      price: 22000,
      image: "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: 'Honda Accord',
      mileage: 11,
      price: 24000,
      image: 'https://images.unsplash.com/photo-1560009320-c01920eef9f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: 'Tesla Model 3',
      mileage: 16,
      price: 37000,
      image: 'https://media.wired.com/photos/5ab16485adec2c73584304fa/master/w_1600,c_limit/Model-3---Red-Rear-Sunset.jpg'
    },
    {
      id: 4,
      name: 'Ford Mustang',
      mileage: 13,
      price: 28000,
      image: 'https://media.ed.edmunds-media.com/ford/mustang/2025/oem/2025_ford_mustang_coupe_dark-horse_fq_oem_1_815.jpg'
    },
    {
      id: 5,
      name: 'BMW 3 Series',
      mileage: 15,
      price: 41000,
      image: 'https://acko-cms.ackoassets.com/1_7cca4a17d2.jpg'
    },
    {
      id: 6,
      name: 'Audi A4',
      mileage: 19,
      price: 43000,
      image: 'https://media.ed.edmunds-media.com/audi/a4/2022/oem/2022_audi_a4_sedan_prestige-s-line_fq_oem_1_815.jpg'
    },
    {
      id: 7,
      name: 'Mercedes-Benz C-Class',
      mileage: 17,
      price: 45000,
      image: 'https://img.autocarindia.com/ExtraImages/20240816033102_Mercedes_C_300_front_action.jpg?w=700&c=1'
    },
    {
      id: 8,
      name: 'Hyundai Elantra',
      mileage: 10,
      price: 19000,
      image: 'https://di-uploads-pod33.dealerinspire.com/universalhyundai/uploads/2024/12/1727237534629_d8dde1957ad94165b15efeb0467cc923-1536x1152-1.jpg'
    },
    {
      id: 9,
      name: 'Chevrolet Malibu',
      mileage: 8,
      price: 21000,
      image: 'https://di-uploads-development.dealerinspire.com/chevycenter-legacymigration0720/uploads/2020/07/2018-Chevrolet-Malibu.jpg'
    },
    {
      id: 10,
      name: 'Kia Optima',
      mileage: 13,
      price: 20000,
      image: 'https://gaadiwaadi.com/wp-content/uploads/2017/08/Kia-Optima-6.jpg'
    },
    {
      id: 11,
      name: 'Jeep Wrangler',
      mileage: 7,
      price: 35000,
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Jeep/Wrangler/11675/1714043545186/front-left-side-47.jpg?tr=w-664'
    },
    {
      id: 12,
      name: 'Mazda CX-5',
      mileage: 14,
      price: 27000,
      image: 'https://media.ed.edmunds-media.com/mazda/cx-5/2025/oem/2025_mazda_cx-5_4dr-suv_25-carbon-turbo_fq_oem_1_815.jpg'
    },
    {
      id: 13,
      name: 'Chevrolet Camaro',
      mileage: 12,
      price: 32000,
      image: 'https://media.assets.sincrod.com/websites/content/gmps-ppchev/about_messages/progressive-2.0/2a9dbb4887094f0992cd1fa51f7f36a4_c69x0-1062x600_x1062.jpg'
    },
    {
      id: 14,
      name: 'Subaru Impreza',
      mileage: 15,
      price: 25000,
      image: 'https://media.ed.edmunds-media.com/subaru/impreza/2025/oem/2025_subaru_impreza_4dr-hatchback_rs_fq_oem_1_815.jpg'
    },
    {
      id: 15,
      name: 'Volkswagen Golf',
      mileage: 11,
      price: 21000,
      image: 'https://www.edmunds.com/assets/m/cs/bltdfd9fa9482f90bdb/6699a39a79f20446783929db/2024-volkswagen-golf-gti-f34.jpg'
    },
    {
      id: 16,
      name: 'Dodge Challenger',
      mileage: 9,
      price: 34000,
      image: 'https://images.collectingcars.com/061085/mainimage.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85'
    },
    {
      id: 17,
      name: 'Nissan Maxima',
      mileage: 10,
      price: 29000,
      image: 'https://i.extremetech.com/imagery/content-types/06cc5DZQ3DLhes3G25PwwZ1/hero-image.fit_lim.size_1600x900.v1678673442.jpg'
    },
    {
      id: 18,
      name: 'Infiniti Q50',
      mileage: 17,
      price: 38000,
      image: 'https://media.ed.edmunds-media.com/infiniti/q50/2024/oem/2024_infiniti_q50_sedan_luxe_fq_oem_1_815.jpg'
    },
    {
      id: 19,
      name: 'Volvo S60',
      mileage: 18,
      price: 35000,
      image: 'https://media.ed.edmunds-media.com/volvo/s60/2025/oem/2025_volvo_s60_sedan_t8-ultra_fq_oem_1_815.jpg'
    },
    {
      id: 20,
      name: 'Mini Cooper',
      mileage: 12,
      price: 27000,
      image: 'https://www.edmunds.com/assets/m/cs/blt85a0773b8188c80a/674f4dadcf4732d3ba8c4130/2025-mini-cooper-s-f34.jpg'
    }
  ];
  
  export default cars;
  
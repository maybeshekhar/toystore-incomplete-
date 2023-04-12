import React from 'react'

const ProductList = () => {
    const products = [
        {
          id: 1,
          name: 'Mercedes G63 AMG',
          href: 'https://scaleartsin.com/collections/1-64/products/mercedes-benz-amg-g63-1-64-tarmac-works-diecast-scale-model-car', 
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/Mercedes-Benz-AMG-G63-1-64-Tarmac-Works-scale-model-miniature-automobile-7_600x.jpg?v=1680001938',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car Brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/McLaren-F1-yellow-1-64-LCD-Models-scale-model-miniature-automobile-7_600x.jpg?v=1680170011',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car Brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/McLaren-765LT-1-64-LCD-Models-scale-model-miniature-automobile-7_600x.jpg?v=1680168127',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car Brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/Porsche-964-Singer-red-1-64-HKM-diecast-scale-model-miniature-automobile-7_600x.jpg?v=1679312762',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car Brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/2022-Porsche-911-992-GT3-red-1-18-Maisto-scale-model-miniature-automobile-13_600x.jpg?v=1680688592',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car Brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/2021-Lamborghini-Countach-LPI-800-4-black-1-18-Maisto-scale-model-miniature-automobile-13_600x.jpg?v=1680685973',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/2020-Ford-Shelby-Mustang-GT500-yellow-1-18-Maisto-scale-model-miniature-automobile-13_600x.jpg?v=1680684145',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/Ferrari-SF90-Stradale-Spider-Assetto-Fiorano-1-18-Bburago-scale-model-miniature-automobile-13_600x.jpg?v=1680699108',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/2021-Mercedes-AMG-F1-W12-44-Lewis-Hamilton-1-43-Bburago-scale-model-miniature-automobile-7_600x.jpg?v=1680782917',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/2022-Ferrari-F1-F75-16-Charles-Leclerc-1-43-Bburago-scale-model-miniature-automobile-7_600x.jpg?v=1680781844',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/2021-Red-Bull-RB16B-Max-Verstappen-1-43-Bburago-scale-model-miniature-automobile-7_600x.jpg?v=1680781133',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/2022-Alfa-Romeo-C42-77-Valtteri-Bottas-1-43-Bburago-scale-model-miniature-automobile-7_600x.jpg?v=1680780512',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/1937-Citroen-11CV-Traction-black-1-18-Solido-scale-model-miniature-automobile-13_600x.jpg?v=1680607857',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/1944-Citroen-11B-Traction-FFI-1-18-Solido-scale-model-miniature-automobile-13_600x.jpg?v=1680608467',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/1989-Porsche-911-Speedster-black-1-18-KK-Scale-diecast-scale-model-miniature-automobile-7_600x.jpg?v=1679231458',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/1957-Mercedes-Benz-300SL-W198-roadster-1-18-Norev-scale-model-miniature-automobile-19_600x.jpg?v=1678172937',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/1954-Mercedes-Benz-300SL-1-36-kinsmart-diecast-scale-model-car-1_600x.jpg?v=1612261790',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/1954-Mercedes-Benz-300SL-beige-1-36-kinsmart-diecast-scale-model-car-1_600x.jpg?v=1612262205',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/1954-Mercedes-Benz-300SL-black-1-36-kinsmart-diecast-scale-model-car-1_600x.jpg?v=1612261974',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/1954-Mercedes-Benz-300SL-red-1-36-kinsmart-diecast-scale-model-car-1_600x.jpg?v=1612262360',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/2010-Devon-GTX-With-Spoiler-1-43-Esval-Models-scale-model-miniature-automobile-7_600x.jpg?v=1657617817',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/1983-Renault-Alpine-A310-V6-GT-blue-1-18-Solido-scale-model-miniature-automobile-13_600x.jpg?v=1680511594',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/Ferrari-Portofino-Signature-series-1-43-Bburago-diecast-model-miniature-automobile-7_600x.jpg?v=1662192444',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/2022-Mercedes-Benz-SL63-AMG-R232-4Matic-blue-1-18-i-Scale-diecast-scale-model-miniature-automobile-19_600x.jpg?v=1676464483',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/Kawasaki-Ninja-H2-R-1-12-Maisto-diecast-scale-model-miniature-automobile-4_600x.jpg?v=1667497888',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/Yamaha-YZF-R1-1-12-Maisto-diecast-scale-model-miniature-automobile-4_600x.jpg?v=1667498153',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/Ducati-Diavel-Carbon-1-12-Maisto-scale-model-miniature-automobile-4_600x.jpg?v=1680770659',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        {
          id: 1,
          name: 'Car brand',
          href: '#',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/Ducati-1098-S-1-18-Maisto-diecast-scale-model-miniature-automobile-4_600x.webp?v=1672986386',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '₹12,000',
          color: 'Some Color',
        },
        // More products...
      ]
      
    
        return (
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
      
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      }


export default ProductList
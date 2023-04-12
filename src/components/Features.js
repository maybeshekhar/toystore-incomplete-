import React from 'react'

const Features = () => {
    const features = [
        { name: 'Origin', description: 'Our models are sourced from some of the best manufacturers around the world, ensuring that every piece is of the highest quality.' },
        { name: 'Material', description: ' Our models are crafted using high-quality materials like die-cast metal, resin, and plastic, which ensures durability and longevity.' },
        { name: 'Dimensions', description: 'Our models are created using precise measurements and attention to detail, resulting in an accurate representation of the original car in a smaller scale.' },
        { name: 'Finish', description: 'Our models are meticulously finished with high-quality paints and coatings, giving them a beautiful and authentic look and feel.' },
        { name: 'Includes', description: 'We offer a wide range of models that come with a variety of features and inclusions, including opening doors and hoods, detailed engines and interiors, and even miniature accessories like luggage and spare tires.' },
        { name: 'Considerations', description: "We take pride in offering exceptional customer service and carefully considering the needs and preferences of our customers." },
      ]
      
        return (
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
                <p className="mt-4 text-gray-500">
                Downsized Dreams" is the ultimate destination for collectors and enthusiasts of scale model toy cars. Our extensive collection features highly-detailed and accurately-scaled models of popular and classic cars from around the world. From sports cars to muscle cars, from vintage classics to modern favorites, we offer a wide variety of choices for all ages and interests. Explore our collection and bring home the car of your dreams in a downsized form!
                </p>
      
                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  {features.map((feature) => (
                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                      <dt className="font-medium text-gray-900">{feature.name}</dt>
                      <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://www.newsplexnow.com/wp-content/uploads/2022/12/Diecast-Model-Cars-image1.jpg"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://www.cnet.com/a/img/resize/6b8dc22a9aa3ab92c53993dfbf05beee47d1edb1/hub/2021/08/26/dc66372c-1a15-4246-8b97-55b5b4643dbb/2020-hot-wheels-legends-tour-35.jpg?auto=webp&width=1200"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://www.popsci.com/uploads/2022/08/09/071A6253.jpg?auto=webp&width=1440&height=959.76"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://www.thedrive.com/content-b/message-editor%2F1631298180445-message-editor_1630294439623-d7s_9155.jpeg?auto=webp&optimize=high&quality=70&width=1440"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>
        )
      }


export default Features
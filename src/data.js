import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"

import brand from "./assets/brand.png"
import story from "./assets/our_story.png"

export const data = [{
    "buttons": [
        {
            title: "to the collection",
            disabled: false
        },
        {
            title: "shop all bags",
            disabled: false
        },
        {
            title: "pre-orders",
            disabled: true
        },
    ],
    "productsInfo": [
        {
            label: "Best seller",
            imageUrl: bag1,
            title: "The handy bag",
            price: "400"
        },
        {
            label: "Best seller",
            imageUrl: bag2,
            title: "The stylish bag",
            price: "250"
        },
        {
            label: "Best seller",
            imageUrl: bag3,
            title: "The simple bag",
            price: "300"
        },
        {
            label: "Best seller",
            imageUrl: bag4,
            title: "The trendy bag",
            price: "150"
        },
    ],
    "features": [
        {
            imageUrl: null,
            title: "the brand",
            body: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut harum, neque. Ab at blanditiis cum delectus"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut harum, neque. Ab at blanditiis cum delectus"
                }
            ]
        },
        {
            imageUrl: brand,
            title: null,
            body: []
        },
        {
            imageUrl: story,
            title: null,
            body: []
        },
        {
            imageUrl: null,
            title: "our story",
            body: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut harum, neque. Ab at blanditiis cum delectus\n" +
                        "doloremque dolorum earum error eum iste itaque libero molestias neque nesciunt, non placeat provident\n" +
                        "quidem rem rerum similique soluta suscipit ut veritatis voluptate? Reprehenderit.",
                }
            ]
        },
    ]
}
]

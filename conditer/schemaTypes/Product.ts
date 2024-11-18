export default{
    name: "product",
    type: "document",
    title: "Product",
    fields:[
        {
            name: "productTitle",
            title: "Title of the product",
            type: "string",
        },
        {
            name: "productPrice",
            title: "Price of the product",
            type: "string",
        },
        {
            name: "productDescription",
            title: "Description of the product",
            type: "string",
        },
        {
            name: "productButton",
            title: "Button of the product",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options:{
                source: "productTitle"
            }
        },
        {
            name: "productImages",
            title: "Images of the product",
            type: "array",
            of: [
                {
                  type: 'image', // Specify that the type is an image
                  options: {
                    hotspot: true, // Enable hotspot for image cropping
                  },
                },
              ],
            
        },
        {
            name: "buttonLink",
            title: "Link for the button",
            type: "string",
            
        },
    ]
}
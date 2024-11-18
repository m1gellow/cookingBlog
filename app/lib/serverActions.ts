
import { client } from "./sanity";


//Action to get data for Header.
async function getHeaderData() {
    const query = ` 
    *[_type == "header"]{
  title,
  headerImage,
  headerAuthor
}[0]
    `

    const data = await client.fetch(query);
    return data;
}

// Action to get data for "About me" section.
async function getAboutMeData() {
  const query = ` 
*[_type == "aboutMe"]{
  title,
    description,
      content
}
  `

  const data = await client.fetch(query);
  return data;
}

// Action to get data for "Benefits" section.

async function getBenefitsData() {
  const query = ` 
  *[_type == "benefits"]{
  title,
    description
}
    `
  
    const data = await client.fetch(query);
    return data;
}


// Action to get data for Blog.
async function getBlogData() {
  const query = `
   *[_type == "blog"]{
  title,
    "currentSlug": slug.current,
    timeOfReading,
    titleImages[],
    smallDescription,
    content,
    tags[]->{
    title
    }
 }
  `
  

  const data = await client.fetch(query);
  return data;
}

// Action to get all tags with id and title
async function getTags() {
  const query = `
  *[_type == "tags"]{
  _id,
    title
}
  `
  

  const data = await client.fetch(query);
  return data;
}

// Action to get post by certain slug.
async function getCertainBlog(slug: string) {
  const query = `
     *[_type == "blog" && slug.current == '${slug}']{
  title,
    "currentSlug": slug.current,
    timeOfReading,
    titleImages[],
    smallDescription,
    content,
 }[0]
  `

  const data = await client.fetch(query);
  return data;
}

// Action to get post by certain Tag.
async function getPostsByTag(tag: string) {
  const query = `
  *[_type == "blog" && references(*[_type == "tags" && title == "${tag}"]._id)]{
  title,
    "currentSlug": slug.current,
    timeOfReading,
    titleImages[],
    smallDescription,
    content,
    tags[]->{
    title
    }
}
  `
  const data = await client.fetch(query);
  return data;
}

// Action to get data for "Contacts" section.
async function getContacts() {
  const query = `
  *[_type == "contacts"]{
  socialPlatform,
    link
}
  `
  const data = await client.fetch(query);
  return data;
}


async function getAllProducts() {
  const query = `
  *[_type == "product"]{
   productTitle,
  productPrice,
    productDescription,
    "slug": slug.current,
     productButton,
     productImages[],
     buttonLink
}
  `
  const data = await client.fetch(query);
  return data;
}

async function getProductBySlug(slug: string) {
  const query = `
*[_type == "product" && slug.current == "${slug}"]{
   productTitle,
  productPrice,
    productDescription,
     productButton,
     productImages[],
     buttonLink
}[0]
  `
  const data = await client.fetch(query);
  return data;
}





export {
  getHeaderData, 
  getAboutMeData, 
  getBenefitsData, 
  getBlogData, 
  getTags, 
  getCertainBlog, 
  getPostsByTag, 
  getContacts, 
  getAllProducts,
  getProductBySlug
}
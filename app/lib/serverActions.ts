
import { client } from "./sanity";

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

async function getBlogData() {
  const query = `
   *[_type == "blog"]{
  title,
    "currentSlug": slug.current,
    timeOfReading,
    titleImage,
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


async function getCertainBlog(slug: string) {
  const query = `
     *[_type == "blog" && slug.current == '${slug}']{
  title,
    "currentSlug": slug.current,
    timeOfReading,
    titleImage,
    smallDescription,
    content,
 }[0]
  `

  const data = await client.fetch(query);
  return data;
}

async function getPostsByTag(tag: string) {
  const query = `
  *[_type == "blog" && references(*[_type == "tags" && title == "${tag}"]._id)]{
  title,
    "currentSlug": slug.current,
    timeOfReading,
    titleImage,
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





export {getHeaderData, getAboutMeData, getBenefitsData, getBlogData, getTags, getCertainBlog, getPostsByTag, getContacts}
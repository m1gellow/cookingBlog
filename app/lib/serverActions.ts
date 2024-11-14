
import { client } from "./sanity";

async function getTitle() {
    const query = ` 
    *[_type == "test"]{
  title
}[0]
    `

    const data = await client.fetch(query);
    return data;
}

export {getTitle}
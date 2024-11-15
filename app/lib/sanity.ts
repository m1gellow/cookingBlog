import {createClient} from 'next-sanity';
import imageBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
    apiVersion: "2023-05-03",
    dataset: "production",
    projectId: "cfpbzo6i",
    useCdn: false,
})

const builder = imageBuilder(client)

export function urlFor(source: SanityImageSource){
    return builder.image(source);
}
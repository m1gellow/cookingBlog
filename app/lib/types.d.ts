
// import { TypedObject } from "sanity";
export interface HeaderData{
    title: string;
    headerImage: string;
    headerAuthor: string;
}

export interface IAboutMe{
      content: string;
}

export interface IBenefits{
    title: string;
    description: string;
}

export interface IBlogPosts{
    title: string
    currentSlug: string;
    timeOfReading: string;
    titleImage: string;
    smallDescription: string;
    content: TypedObject | TypedObject[];
    tags:{
        title: string;
    }[]
}

export interface ITags{
    title: string;
    _id: string;
}

export interface IContacts{
    socialPlatform: string;
    link: string;
}

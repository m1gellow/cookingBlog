import { getContacts } from "@/app/lib/serverActions";
import { IContacts } from "@/app/lib/types";
import Link from "next/link";
import React from "react";

export const revalidata = 30;

const Contacts = async () => {
  const data: IContacts[] = await getContacts();

  return (
    <div id="contacts">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center flex-col justify-center gap-4">
          <h2>Мои контакты</h2>
          <h2>Давайте оставаться на связи</h2>
        </div>
        <div className="flex md:flex-row  flex-col  items-center justify-center gap-6">
          {data.map((contact, idx) => (
            <div key={idx} className="contactsLink">
              <h2>
                <Link target="_blank" href={`${contact.link}`}>
                  {contact.socialPlatform}
                </Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;

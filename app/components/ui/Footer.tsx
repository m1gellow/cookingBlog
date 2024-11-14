import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[100px]">
      <div className="my-4 flex">
        <hr className="border-t border-gray-300 w-[1400px]" />
      </div>
      <div className="flex items-center justify-between">
        <h3>Lorem, ipsum.</h3>
        <h3>Lorem, ipsum.</h3>
        <h3>Lorem, ipsum.</h3>
        <h3><Link href={'/'}>Logo</Link></h3>
      </div>
    </footer>
  );
};

export default Footer;

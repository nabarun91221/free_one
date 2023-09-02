import "./component.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import downloadIcon from "../img/download.jpg";
import dynamic from "next/dynamic";
const Nav = () => {
  const pages = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "About Us",
      link: "/",
    },
    {
      title: "Chelf Patron",
      link: "/",
    },
    {
      title: "Event",
      link: "/",
    },
    {
      title: "Newsletter",
      link: "/",
    },
    {
      title: "Gallery",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ];
  return (
    <div className="nav">
      <div className="Clogo">
        <Image height={96} width={111} src="/logo.jpg"></Image>
      </div>
      <div className="pages">
        {pages.map((page) => {
          return (
            <Link className="link" href={page.link} key={page.link}>
              {page.title}
            </Link>
          );
        })}
      </div>
      <div className="button">
        <div>Membership Form</div>
        <Image height={20} width={20} src={downloadIcon}></Image>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Nav), { ssr: false });

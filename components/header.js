import Image from "next/image";
import { useRouter } from "next/router";
import { Menubar } from "primereact/menubar";
import React from "react";

const Header = () => {
  const router = useRouter();
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        router.push("/");
      },
    },
    {
      label: "About",
      icon: "pi pi-info-circle",
      command: () => {
        router.push("/about");
      },
    },
    {
      label: "ServerSide Component",
      icon: "pi pi-server",
      command: () => {
        router.push("/serverside");
      },
    },
    {
      label: "ClientSide Component",
      icon: "pi pi-users",
      command: () => {
        router.push("/clientside");
      },
    },
    {
      label: "Redux",
      icon: "pi pi-bars",
      command: () => {
        router.push("/reduxdemo");
      },
    },
  ];

  const start = (
    <Image
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height={60}
      width={60}
      className="mr-2"
    />
  );

  return (
    <div className="card ">
      <Menubar className="!rounded-none !px-9" model={items} start={start} />
    </div>
  );
};

export default Header;

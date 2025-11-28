"use client";
import WindowControl from "@/components/WindowControl";
import { locations } from "@/constants";
import WindowWrapper from "@/hoc/WindowWrapper";
import useLocationStore, { LocationType } from "@/store/location";
import useWindowStore from "@/store/window";
import clsx from "clsx";
import { Search } from "lucide-react";
import React from "react";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const openItem = (item: LocationType) => {
    if ("fileType" in item && item.fileType === "pdf") {
      return openWindow("resume");
    }
    if(item.kind === "folder") return setActiveLocation(item);

  if (
  "fileType" in item &&
  typeof item.fileType === 'string' &&
  "href" in item &&
    typeof item.href === 'string' && // <--- Add this back for definitive type narrowing
  ['fig', 'url'].includes(item.fileType) 
 ) {
    return window.open(item.href, '_blank'); 
 }  


if ("fileType" in item) {
   openWindow(`${item.fileType}${item.kind}`, item);
}  };

  const renderList = (title: string, items: LocationType[]) => {
    return (
      <>
        <h3>{title}</h3>
        <ul>
          {items.map((location) => (
            <li
              key={location.id}
              className={clsx(
                location.id === activeLocation.id ? "active" : "not-active"
              )}
              onClick={() => setActiveLocation(location)}
            >
              <img className="h-6" src={location.icon} alt={location.name} />
              <p className="text-sm font-medium truncate">{location.name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <div id="window-header">
        <WindowControl target="finder" />
        <Search className="icon" />
      </div>

      <div className="window-shell flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations) as LocationType[])}{" "}
          {renderList("Work", locations.work.children as LocationType[])} 
        </div>
        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id} // FIX: Cast 'item' to LocationType to resolve the union type mismatch
              onClick={() => openItem(item as LocationType)}
              //@ts-ignore
              className={item.position}
            >
                <img src={item.icon} alt={item.name} />  <p>{item.name}</p>{" "}
            </li>
          ))}
             {" "}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;

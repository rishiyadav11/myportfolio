"use client";
import WindowControl from "@/components/WindowControl";
import { locations } from "@/constants";
import WindowWrapper from "@/hoc/WindowWrapper";
import useLocationStore, { LocationType } from "@/store/location";
import useWindowStore from "@/store/window";
import clsx from "clsx";
import { ChevronLeft, Search } from "lucide-react";
import React from "react";

const MOBILE_QUERY = "(max-width: 640px)";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
};

const Finder = () => {
  const { activeLocation, setActiveLocation, resetActiveLocation } =
    useLocationStore();
  const { openWindow } = useWindowStore();
  const isMobile = useIsMobile();
  const rootLocations = React.useMemo(
    () => Object.values(locations) as LocationType[],
    []
  );
  const [mobileStack, setMobileStack] = React.useState<LocationType[]>([]);

  React.useEffect(() => {
    if (!isMobile) {
      setMobileStack([]);
      resetActiveLocation();
    }
  }, [isMobile, resetActiveLocation]);

  const openItem = (item: LocationType) => {
    if ("fileType" in item && item.fileType === "pdf") {
      return openWindow("resume");
    }
    if (item.kind === "folder") return setActiveLocation(item);

    if (
      "fileType" in item &&
      typeof item.fileType === "string" &&
      "href" in item &&
      typeof item.href === "string" &&
      ["fig", "url"].includes(item.fileType)
    ) {
      return window.open(item.href, "_blank");
    }

    if ("fileType" in item) {
      openWindow(`${item.fileType}${item.kind}`, item);
    }
  };

  const renderList = (title: string, items: LocationType[]) => (
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

  const currentMobileFolder =
    mobileStack[mobileStack.length - 1] ?? (null as LocationType | null);
  const mobileItems =
    currentMobileFolder && "children" in currentMobileFolder
      ? ((currentMobileFolder.children ?? []) as LocationType[])
      : rootLocations;
  const mobileTitle = currentMobileFolder?.name ?? "Portfolio";
  const canGoBack = mobileStack.length > 0;

  const handleMobileItemClick = (item: LocationType) => {
    const hasChildren =
      "children" in item &&
      Array.isArray(item.children) &&
      item.children.length;

    if (item.kind === "folder" && hasChildren) {
      setActiveLocation(item);
      setMobileStack((prev) => [...prev, item]);
      return;
    }

    openItem(item);
  };

  const handleMobileBack = () => {
    setMobileStack((prev) => {
      const next = prev.slice(0, -1);
      if (next.length === 0) {
        resetActiveLocation();
      } else {
        setActiveLocation(next[next.length - 1]);
      }
      return next;
    });
  };

  if (isMobile) {
    return (
      <div className="flex h-full flex-col bg-[#0f172a] text-white">
        <div
          id="window-header"
          className="border-b border-white/10 bg-transparent text-white flex items-center justify-between gap-4"
        >
          <WindowControl target="finder" />
          <Search className="icon" />
        </div>

        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <button
            type="button"
            disabled={!canGoBack}
            onClick={handleMobileBack}
            className={clsx(
              "flex items-center gap-2 text-sm font-medium",
              canGoBack ? "text-sky-300" : "text-white/30"
            )}
          >
            <ChevronLeft size={16} />
            Go Back
          </button>
          <p className="text-base font-semibold">{mobileTitle}</p>
          <span className="text-xs text-white/60">
            {mobileItems.length} items
          </span>
        </div>

        <ul className="grid grid-cols-2 gap-6 p-6 overflow-y-auto">
          {mobileItems.map((item) => (
            <li key={item.id} className="flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={() => handleMobileItemClick(item as LocationType)}
                className="flex flex-col items-center gap-2 text-center"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
                <p className="text-sm font-medium text-white">{item.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <div id="window-header">
        <WindowControl target="finder" />
        <Search className="icon" />
      </div>

      <div className="window-shell flex h-full">
        <div className="sidebar">
          {renderList("Favorites", rootLocations)}
          {renderList("Work", locations.work.children as LocationType[])}
        </div>
        <ul className="content">
          {activeLocation?.children?.map((item) => (
            <li
              key={item.id}
              onClick={() => openItem(item as LocationType)}
              //@ts-ignore
              className={item.position}
            >
              <img src={item.icon} alt={item.name} /> <p>{item.name}</p>{" "}
            </li>
          ))}{" "}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;

"use client";
import { locations } from "@/constants";
import useLocationStore from "@/store/location";
import useWindowStore from "@/store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
import React from "react";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { setActiveLocation } = useLocationStore();

  const { openWindow } = useWindowStore();
  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  const handleOpenProjectFinder = (project: (typeof projects)[number]) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            onClick={() => handleOpenProjectFinder(project)}
            className={clsx("group folder", project.windowPosition)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;

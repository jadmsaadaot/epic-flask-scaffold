import { createLazyFileRoute } from "@tanstack/react-router";
import { AppConfig } from "@/config";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <h3>About Page of {AppConfig.appTitle}</h3>
    </>
  );
}

"use server";
import ClientComponent from "./client";
export const ServerComponent = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("Server component rendered");
  return (
    <div>
      This is a server component
      <ClientComponent />
    </div>
  );
};

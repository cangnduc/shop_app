import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-md min-h-screen">
      <h1>About Page</h1>
      <p>This is the about page of the application.</p>
      <Button>
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
}

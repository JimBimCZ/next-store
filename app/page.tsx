import { NextPage } from "next";
import { Button } from "@/components/ui/button";

const HomePage: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <Button variant="outline" size="lg" className="m-8 capitalize">
        Click me
      </Button>
    </div>
  );
};

export default HomePage;

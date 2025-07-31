import { Button } from "@/components/ui/button";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";

const CartBtn = async () => {
  const numItemsInCart = 9;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <GiShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};

export default CartBtn;

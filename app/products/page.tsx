import ProductsContainer from "@/components/products/ProductsContainer";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) => {
  const sParams = await searchParams;
  const layout = sParams.layout || "grid";
  const search = sParams.search || "";
  return <ProductsContainer layout={layout} search={search} />;
};

export default ProductsPage;

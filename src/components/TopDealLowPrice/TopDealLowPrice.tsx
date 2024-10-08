import { Region } from "@medusajs/medusa";
import { Text } from "@medusajs/ui";

import InteractiveLink from "@modules/common/components/interactive-link";
import ProductPreview from "@modules/products/components/product-preview";
import { ProductCollectionWithPreviews } from "types/global";

export default function ProductCheap({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews;
  region: Region;
}) {
  const { products } = collection;

  if (!products) {
    return null;
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="bg-white p-8 rounded-3xl shadow-inner">
        <div className="flex justify-between mb-4">
          <Text className="txt-compact-xlarge-plus font-bold uppercase text-red-500">
            Top Deal Giá Rẻ
          </Text>
          <InteractiveLink href={`/collections/${collection.handle}`}>
            View all
          </InteractiveLink>
        </div>

        {/* Cập nhật thành một hàng với tối đa 5 item */}
        <ul className="flex overflow-x-auto space-x-4 ">
          {products.slice(0, 5).map((product) => ( // Hiển thị tối đa 5 sản phẩm
            <li key={product.id} className="flex-shrink-0 w-1/5 m-4"> {/* Mỗi item chiếm 1/5 chiều rộng */}
              <ProductPreview
                productPreview={product}
                region={region}
                isFeatured
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import LocationDisplay from "components/LocationDisplay/LocationDisplay"
import { FaTruck, FaCheck, FaThumbsUp, FaRedo } from 'react-icons/fa';

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div className="content-container grid grid-cols-12 gap-6 py-24 mt-16">
        {/* Cột 1: Ảnh và mô tả sản phẩm */}
        <div className="col-span-12 md:col-span-4 bg-white p-4 rounded-lg shadow-md">
          <div className="relative">
            <ImageGallery images={product?.images || []} />
          </div>
          <div className="mt-4">
            <h2 className="font-semibold text-lg">Đặc điểm nổi bật</h2>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔️</span>
                Vị thanh mát, thơm dịu của trà Ô Long, mang lại cảm giác sảng khoái.
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔️</span>
                Dễ dàng pha chế, giữ nguyên hương vị tự nhiên.
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔️</span>
                Thiết kế bao bì chắc chắn, tiện lợi cho việc bảo quản.
              </li>
            </ul>
          </div>
        </div>

        {/* Cột 2: Thông tin sản phẩm và vận chuyển */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-y-6">

          {/* Section 1: Thông tin giá, tag, thương hiệu, title */}
          <div className="bg-white p-4 rounded-lg shadow-md">

            {/* Tag */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { name: "Freeship Xtra", color: "bg-blue-100", textColor: "text-blue-600", icon: <FaTruck size={14} /> },
                { name: "Chính hãng", color: "bg-green-100", textColor: "text-green-600", icon: <FaCheck size={14} /> },
                { name: "Top deal", color: "bg-red-100", textColor: "text-red-600 font-bold", icon: <FaThumbsUp size={14} /> },
                { name: "30 ngày đổi trả", color: "bg-yellow-100", textColor: "text-yellow-600", icon: <FaRedo size={14} /> },
              ].map((tag, index) => (
                <span
                  key={index}
                  className={`flex items-center ${tag.color} ${tag.textColor} py-1 px-2 rounded-md shadow-sm text-sm`}
                >
                  <span className="mr-1">{tag.icon}</span>
                  <span>{tag.name}</span>
                </span>
              ))}
            </div>

            {/* Thương hiệu */}
            <div className="mt-4">
              <span className="font-medium text-sm text-gray-500">Thương hiệu:</span>
              <span className="ml-2 text-sm font-semibold text-gray-700">
                {product.brand || "No brand"}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-bold text-xl mt-2">{product.title}</h1>

            {/* Component giá */}
            {/* cần cập nhật giá  */}

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              {/* Điểm trung bình đánh giá */}
              <span className="text-yellow-500 font-semibold text-lg">4.8</span>
              
              {/* Ngôi sao */}
              <div className="flex items-center ml-2">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.428L24 9.75l-6 5.847 1.418 8.265L12 18.896l-7.418 4.966L6 15.597 0 9.75l8.332-1.735L12 .587z" />
                    </svg>
                  ))}
              </div>

              {/* Tổng số lượng đánh giá */}
              <span className="ml-2 text-gray-500 text-sm">
                (1.2k đánh giá)
              </span>

              {/* Số lượng đã bán */}
              <span className="ml-4 text-gray-500 text-sm">
                | Đã bán: {10000 >= 1000 ? `${(10000 / 1000).toFixed(1)}k` : 10000}
              </span>
            </div>
          </div>

          {/* Section 2: Thông tin sản phẩm */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Tiêu đề */}
            <h3 className="text-lg font-semibold mb-2">Mô tả sản phẩm</h3>
            {/* Nội dung mô tả sản phẩm */}
            <p>{product.description}</p>
          </div>

          {/* Section 3: Thông tin vận chuyển */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg mb-2">Thông tin vận chuyển</h2>
            <LocationDisplay />
          </div>
        </div>

        {/* Cột 3: Các hành động và tab thông tin bổ sung */}
        <div className="col-span-12 md:col-span-3 flex flex-col gap-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Suspense
              fallback={<ProductActions product={product} region={region} />}
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
            <ProductTabs product={product} />
          </div>
        </div>
      </div>

      {/* Section 2: Sản phẩm liên quan */}
      <div className="content-container my-16 small:my-32">
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
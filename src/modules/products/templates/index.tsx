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

// JSON data (thay thế bằng data fetch từ API hoặc file JSON bên ngoài nếu cần)
const productShortDescription = {
  products: [
    {
      title: "Trà Ô Long Cao Cấp - 200gr",
      description: [
          "Vị thanh mát, thơm dịu của trà Ô Long, mang lại cảm giác sảng khoái.",
          "Dễ dàng pha chế, giữ nguyên hương vị tự nhiên.",
          "Thiết kế bao bì chắc chắn, tiện lợi cho việc bảo quản."
      ]
  },
  {
      title: "Trà oolong Lai Châu Tam đường - 250gr",
      description: [
          "Trà oolong hảo hạng từ vùng Tam Đường, Lai Châu với hương thơm nhẹ nhàng, thanh mát.",
          "Chế biến theo quy trình truyền thống, giữ nguyên hương vị tinh túy của lá trà.",
          "Bao bì thiết kế sang trọng, bảo quản trà tốt trong mọi điều kiện."
      ]
  },
  {
      title: "Trà xanh shan tuyết 1 lá - 100gr",
      description: [
          "Trà shan tuyết nguyên chất từ núi cao, với hương vị đặc trưng đậm đà, hơi chát nhưng ngọt hậu.",
          "Sản xuất thủ công, không chất bảo quản, an toàn cho sức khỏe.",
          "Bao bì nhỏ gọn, tiện lợi mang theo khi đi du lịch hoặc làm quà tặng."
      ]
  },
  {
      title: "Trà Nõn Tôm Thái Nguyên 100Gr",
      description: [
          "Trà nõn tôm tuyển chọn từ những búp trà non tinh túy nhất của Thái Nguyên.",
          "Hương thơm nồng nàn, vị chát nhẹ, hậu ngọt thanh.",
          "Sản phẩm đóng gói kín đáo, đảm bảo độ tươi ngon lâu dài."
      ]
  },
  {
      title: "Trà Đinh Tâm Xuân 100gr",
      description: [
          "Trà đinh từ vùng Tâm Xuân, thơm nhẹ nhàng, mang lại cảm giác thư thái.",
          "Hương vị đậm đà, hậu ngọt kéo dài, lý tưởng cho người sành trà.",
          "Đóng gói tiện lợi, thích hợp để bảo quản và làm quà tặng."
      ]
  },
  {
      title: "Trà Móc Câu Đặc Biệt - 100gr",
      description: [
          "Trà móc câu đặc biệt, được chọn lọc từ những búp trà ngon nhất.",
          "Vị đậm đà, chát nhẹ và hậu ngọt, phù hợp cho buổi sáng sớm.",
          "Bao bì thiết kế đẹp mắt, bảo quản tốt hương vị trà lâu dài."
      ]
  },
  {
      title: "Trà Mãng Cầu 200 gram",
      description: [
          "Trà mãng cầu từ trái mãng cầu tươi ngon, có hương vị độc đáo, thơm mát.",
          "Sản phẩm hoàn toàn tự nhiên, không chất bảo quản, an toàn cho sức khỏe.",
          "Gói trà dễ sử dụng, phù hợp cho những buổi thư giãn."
      ]
  },
  {
      title: "Trà Mãng Cầu 150 gram",
      description: [
          "Hương vị thanh mát, dịu nhẹ của trà mãng cầu, mang lại cảm giác dễ chịu.",
          "Chế biến từ những trái mãng cầu tươi chọn lọc, giữ nguyên hương vị tự nhiên.",
          "Bao bì gọn nhẹ, tiện lợi cho việc mang theo và bảo quản."
      ]
  },
  {
      title: "Lược Gỗ Dừa Nhỏ",
      description: [
          "Lược làm từ gỗ dừa tự nhiên, không gây kích ứng da đầu.",
          "Thiết kế nhỏ gọn, tiện lợi khi mang theo hoặc dùng tại nhà.",
          "Bề mặt lược mịn, dễ dàng chải tóc mà không gây rối."
      ]
  },
  {
      title: "Ống Đựng Đũa Tròn",
      description: [
          "Ống đựng đũa làm từ chất liệu tre tự nhiên, bền đẹp.",
          "Thiết kế tròn, tiết kiệm không gian và dễ dàng vệ sinh.",
          "Sản phẩm thân thiện với môi trường, phù hợp cho gia đình hoặc nhà hàng."
      ]
  },
  {
      title: "Chén Gỗ Dừa Khắc",
      description: [
          "Chén gỗ dừa khắc hoa văn tinh tế, mang lại nét đẹp mộc mạc và sang trọng.",
          "Làm từ gỗ dừa tự nhiên, không chứa hóa chất độc hại.",
          "Sử dụng cho các bữa ăn truyền thống hoặc làm quà tặng ý nghĩa."
      ]
  },
  {
      title: "Muỗng Cà Phê Cán Ngắn",
      description: [
          "Muỗng cà phê với thiết kế cán ngắn tiện lợi, dễ sử dụng.",
          "Chất liệu gỗ bền bỉ, không làm ảnh hưởng đến hương vị của đồ uống.",
          "Phù hợp sử dụng trong gia đình, quán cà phê hoặc mang theo du lịch."
      ]
  },
  {
      title: "Đũa Dừa Loại 1",
      description: [
          "Đũa làm từ gỗ dừa loại 1, chắc chắn và bền bỉ.",
          "Thiết kế cầm vừa tay, không gây trơn trượt khi sử dụng.",
          "Sản phẩm tự nhiên, an toàn cho sức khỏe người dùng."
      ]
  },
  {
      title: "Khay Sọt Lục Bình",
      description: [
          "Khay sọt lục bình với thiết kế độc đáo, mang lại vẻ đẹp tự nhiên cho không gian sống.",
          "Chất liệu từ cây lục bình, thân thiện với môi trường.",
          "Sử dụng đa năng, phù hợp đựng đồ trang trí, quà tặng hoặc đồ gia dụng."
      ]
  },
  {
      title: "Chậu Cắm Hoa Lục Bình",
      description: [
          "Chậu cắm hoa làm từ lục bình tự nhiên, trang trí nhà cửa theo phong cách mộc mạc.",
          "Thiết kế độc đáo, dễ dàng bày trí với các loại hoa khác nhau.",
          "Sản phẩm thân thiện với môi trường, không gây hại cho sức khỏe."
      ]
  },
  {
      title: "Bộ Đôi Túi Lục Bình - VNH0932088",
      description: [
          "Bộ đôi túi lục bình tiện lợi, thích hợp sử dụng khi đi chợ hoặc mua sắm.",
          "Thiết kế chắc chắn, có độ bền cao và thân thiện với môi trường.",
          "Phù hợp làm quà tặng cho người thân, bạn bè yêu thích phong cách tự nhiên."
      ]
  },
  {
      title: "Rượu Đế Gò Đen Green",
      description: [
          "Rượu đế Gò Đen Green, hương vị đặc trưng đậm đà của rượu truyền thống Việt Nam.",
          "Làm từ gạo nếp chọn lọc, qua quy trình chưng cất công phu.",
          "Đóng chai sang trọng, phù hợp để làm quà biếu trong các dịp đặc biệt."
      ]
  },
  {
      title: "Bánh Tráng Trộn Ớt Bay Muối Nhuyễn",
      description: [
          "Bánh tráng trộn với ớt bay và muối nhuyễn, vị cay nồng đậm đà.",
          "Nguyên liệu chọn lọc, đảm bảo an toàn vệ sinh thực phẩm.",
          "Phù hợp để thưởng thức cùng gia đình hoặc bạn bè trong những dịp tụ tập."
      ]
  },
  {
      title: "Muối Tôm Tây Ninh Nhất Vị 90g",
      description: [
          "Muối tôm Tây Ninh chính gốc, vị mặn ngọt hài hòa và thơm lừng.",
          "Được làm từ tôm và muối biển nguyên chất, không chất bảo quản.",
          "Dùng chấm trái cây hoặc nêm nếm cho các món ăn."
      ]
  },
  {
      title: "Bánh Tráng Trộn Sa Tế Tỏi",
      description: [
          "Bánh tráng trộn sa tế tỏi, vị cay thơm hấp dẫn.",
          "Thành phần tự nhiên, đảm bảo vệ sinh và an toàn thực phẩm.",
          "Thích hợp để làm món ăn vặt hoặc ăn kèm trong các bữa tiệc."
      ]
  },
  {
      title: "Bánh Tráng Trộn Phô Mai",
      description: [
          "Bánh tráng trộn phô mai với vị béo ngậy hấp dẫn, phù hợp cho tín đồ yêu thích phô mai.",
          "Nguyên liệu tươi ngon, không chất bảo quản, an toàn cho sức khỏe.",
          "Đóng gói tiện lợi, dễ dàng mang theo và thưởng thức ở bất kỳ đâu."
      ]
  },{
    title: "Bánh Tráng Siêu Mỏng Tân Nhiên",
    description: [
      "Bánh tráng mỏng, giòn, thơm ngon, thích hợp cho các món cuốn.",
      "Dễ dàng chế biến, phù hợp với nhiều món ăn khác nhau.",
      "Bao bì tiện lợi, dễ bảo quản và sử dụng."
    ]
  },
  {
    title: "Mắm Cá Lóc Cắt Khúc",
    description: [
      "Mắm cá lóc thơm ngon, giữ nguyên hương vị truyền thống.",
      "Thích hợp để làm các món kho, nấu canh hoặc ăn kèm cơm.",
      "Đóng gói chắc chắn, an toàn vệ sinh thực phẩm."
    ]
  },
  {
    title: "Mắm Cá Chốt",
    description: [
      "Hương vị đậm đà, thơm ngon, đặc trưng của mắm cá chốt.",
      "Sử dụng để làm nước chấm hoặc các món kho ngon miệng.",
      "Sản phẩm được chế biến từ nguyên liệu tươi ngon, đảm bảo chất lượng."
    ]
  },
  {
    title: "Mắm Ruốc",
    description: [
      "Mắm ruốc thơm ngon, hương vị đặc trưng truyền thống.",
      "Phù hợp cho các món nấu canh chua, xào, hoặc chấm rau sống.",
      "Sản phẩm an toàn, đóng gói tiện lợi, dễ bảo quản."
    ]
  },
  {
    title: "Mắm Tôm Chua",
    description: [
      "Hương vị chua cay đặc trưng, phù hợp làm gia vị chấm cho nhiều món ăn.",
      "Đảm bảo chất lượng, sử dụng nguyên liệu tự nhiên.",
      "Đóng gói tiện lợi, an toàn vệ sinh thực phẩm."
    ]
  },
  {
    title: "Mắm Ba Khía",
    description: [
      "Hương vị đậm đà của ba khía tươi, phù hợp với nhiều món ăn miền Tây.",
      "Dùng để chấm rau sống, hoặc chế biến các món ăn đặc sản.",
      "Bao bì chắc chắn, đảm bảo an toàn vệ sinh."
    ]
  },
  {
    title: "Viên Gia Vị Phở Bò Ông Chà Và Gold 126 gram",
    description: [
      "Viên gia vị tiện lợi, hương vị phở bò đậm đà.",
      "Dễ dàng pha chế, giữ nguyên hương vị tự nhiên.",
      "Thiết kế đóng gói nhỏ gọn, dễ bảo quản và sử dụng."
    ]
  },
  {
    title: "Viên Gia Vị Bún Bò Huế Ông Chà Và Gold 126 gram",
    description: [
      "Gia vị bún bò Huế thơm ngon, chuẩn vị miền Trung.",
      "Tiện lợi cho việc nấu nướng, giữ nguyên hương vị đặc trưng.",
      "Sản phẩm được đóng gói nhỏ gọn, dễ sử dụng."
    ]
  },
  {
    title: "Viên Gia Vị Hủ Tiếu Nam Vang Ông Chà Và Gold - 75 gram",
    description: [
      "Gia vị hủ tiếu Nam Vang tiện lợi, dễ dàng sử dụng.",
      "Hương vị đậm đà, giữ nguyên nét đặc trưng của món ăn.",
      "Đóng gói an toàn, dễ bảo quản và sử dụng."
    ]
  },
  {
    title: "Tương Ớt Ông Chà Và Gold - 290 gram",
    description: [
      "Tương ớt cay nồng, thơm ngon, phù hợp với nhiều món ăn.",
      "Chế biến từ nguyên liệu tự nhiên, an toàn sức khỏe.",
      "Thiết kế chai tiện dụng, dễ bảo quản và sử dụng."
    ]
  },
  {
    title: "Nước Màu Dừa Bến Tre 275GR (OCOP 3 Sao)",
    description: [
      "Nước màu dừa tự nhiên, màu sắc đẹp mắt, thơm ngon.",
      "Dùng để làm màu cho các món kho, canh, hoặc nấu ăn.",
      "Sản phẩm đạt chứng nhận OCOP 3 sao, an toàn vệ sinh."
    ]
  },
  {
    title: "Bột Lá Sen",
    description: [
      "Bột lá sen tinh khiết, giữ nguyên dưỡng chất.",
      "Dùng để pha nước uống, hoặc làm nguyên liệu chế biến món ăn.",
      "Đóng gói tiện lợi, dễ sử dụng và bảo quản."
    ]
  },
  {
    title: "Rượu Đế Gò Đen Gold 41%",
    description: [
      "Rượu đế Gò Đen nổi tiếng, nồng độ 41% mạnh mẽ.",
      "Hương vị truyền thống, thích hợp làm quà biếu hoặc thưởng thức.",
      "Đóng chai đẹp mắt, sang trọng, tiện lợi."
    ]
  },
  {
    title: "Bột Rau Má",
    description: [
      "Bột rau má nguyên chất, giữ nguyên dưỡng chất tự nhiên.",
      "Dễ pha chế, thích hợp làm thức uống giải nhiệt.",
      "Bao bì tiện lợi, dễ bảo quản và sử dụng lâu dài."
    ]
  },
  {
    title: "Chân Tổ Yến",
    description: [
      "Chân tổ yến cao cấp, giữ nguyên dinh dưỡng.",
      "Dùng để chưng hoặc nấu cháo bổ dưỡng.",
      "Sản phẩm chất lượng cao, đóng gói an toàn vệ sinh."
    ]
  },
  {
    title: "Yến Sạch Thượng Hạng",
    description: [
      "Yến sạch, thượng hạng, giàu dinh dưỡng.",
      "Thích hợp cho các món chưng yến hoặc nấu canh bổ dưỡng.",
      "Đóng gói sang trọng, đảm bảo an toàn vệ sinh."
    ]
  },
  {
    title: "Bột Chùm Ngây",
    description: [
      "Bột chùm ngây giàu dinh dưỡng, tốt cho sức khỏe.",
      "Dùng để pha nước uống hoặc làm nguyên liệu chế biến món ăn.",
      "Bao bì tiện lợi, dễ bảo quản và sử dụng lâu dài."
    ]
  },
  {
    title: "Bột Tía Tô",
    description: [
      "Bột tía tô nguyên chất, giàu dưỡng chất.",
      "Phù hợp làm nước uống hoặc nguyên liệu chế biến món ăn.",
      "Sản phẩm an toàn, đóng gói tiện lợi."
    ]
  },
  {
    title: "Yến Hũ Chưng Đường Phèn Phù Hợp Với Trẻ Em",
    description: [
      "Yến hũ chưng đường phèn, bổ dưỡng và tiện lợi.",
      "Phù hợp cho trẻ em và người lớn tuổi.",
      "Đóng hũ tiện lợi, dễ dàng sử dụng và bảo quản."
    ]
  },
  {
    title: "Yến Thô Ít Lông",
    description: [
      "Yến thô ít lông, giữ nguyên hương vị tự nhiên.",
      "Thích hợp để chế biến các món yến chưng bổ dưỡng.",
      "Đóng gói an toàn, dễ bảo quản."
    ]
  },
  {
    title: "Yến Sạch Xuất Khẩu",
    description: [
      "Yến sạch đạt chuẩn xuất khẩu, giàu dinh dưỡng.",
      "Phù hợp để làm các món chưng yến hoặc canh bổ dưỡng.",
      "Đóng gói đẹp mắt, sang trọng."
    ]
  },
  {
    title: "Rượu Đông Trùng Linh Chi",
    description: [
      "Rượu linh chi kết hợp đông trùng hạ thảo, bổ dưỡng.",
      "Phù hợp làm quà biếu hoặc dùng cho sức khỏe.",
      "Đóng chai sang trọng, tiện lợi."
    ]
  },
  {
    title: "Nhân Tỏi Đen",
    description: [
      "Tỏi đen nguyên chất, tốt cho sức khỏe.",
      "Phù hợp ăn trực tiếp hoặc chế biến các món ăn.",
      "Đóng gói tiện lợi, dễ bảo quản và sử dụng lâu dài."
    ]
  }
  ]
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  // Tìm sản phẩm dựa trên product.title
  const currentProduct = productShortDescription.products.find(
    (prod) => prod.title === product.title
  );

  // Nếu không tìm thấy sản phẩm, có thể trả về thông báo hoặc nội dung mặc định
  const descriptionList = currentProduct ? currentProduct.description : [];

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
              {descriptionList.map((desc, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-500 mr-2">
                      <FaCheck />
                    </span>
                    {desc}
                  </li>
                ))}
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
                {/* {product.brand || "No brand"} */}
                No brand
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
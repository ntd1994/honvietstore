"use client";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationDisplay = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Kiểm tra nếu đã có vị trí trong localStorage
    const savedLocation = JSON.parse(localStorage.getItem("userLocation"));
    const savedAddress = localStorage.getItem("userAddress");

    if (savedLocation && savedAddress) {
      setLocation(savedLocation);
      setAddress(savedAddress);
      setLoading(false);
    } else {
      // Nếu không có thông tin, yêu cầu quyền truy cập vị trí
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, lng: longitude });

            // Gọi hàm để lấy địa chỉ từ tọa độ
            fetchAddress(latitude, longitude);
          },
          (error) => {
            console.error("Error getting location:", error);
            setLoading(false);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    }
  }, []);

  const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
      const fullAddress = data.display_name;

      // Tách các phần của địa chỉ và chỉ giữ lại phường, quận, thành phố
      const addressParts = fullAddress.split(", ");
      const filteredAddress = addressParts
        .filter((part) =>
          part.includes("Phường") ||
          part.includes("Quận") ||
          part.includes("Thành phố")
        )
        .join(", ");

      setAddress(filteredAddress);

      // Lưu vị trí và địa chỉ vào localStorage
      localStorage.setItem(
        "userLocation",
        JSON.stringify({ lat: latitude, lng: longitude })
      );
      localStorage.setItem("userAddress", filteredAddress);
    } catch (error) {
      console.error("Error fetching address:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Đang tải vị trí...</div>;
  }

  return (
    <div className="flex items-center gap-x-2">
      <FaMapMarkerAlt className="text-red-500" />
      <h4 className="text-lg font-bold">Giao đến:</h4>
      {location.lat && location.lng ? (
        <p className="ml-2 underline">{address}</p>
      ) : (
        <p className="ml-2">Không thể lấy vị trí của bạn</p>
      )}
    </div>
  );
};

export default LocationDisplay;
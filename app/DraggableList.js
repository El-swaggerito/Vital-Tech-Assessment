"use client";
import { useState } from "react";
import { Reorder } from "framer-motion";
import image1 from "../public/images/image-1.png";
import image2 from "../public/images/image-2.png";
import image3 from "../public/images/image-3.png";
import image4 from "../public/images/image-4.png";
import image5 from "../public/images/image-5.png";
import image6 from "../public/images/image-6.png";

const locationEmoji = "📍";

const initialItems = [
  {
    id: "1",
    title: "Scotland Island",
    location: `${locationEmoji} Sydney, Australia`,
    imageUrl: image1,
  },
  {
    id: "2",
    title: "The Charles Grand Brasserie & Bar",
    location: `${locationEmoji} Lorem ipsum, Dolor`,
    imageUrl: image2,
  },
  {
    id: "3",
    title: "Bridge Climb",
    location: `${locationEmoji} Dolor, Sit amet`,
    imageUrl: image3,
  },
  {
    id: "4",
    title: "Scotland Island",
    location: `${locationEmoji} Sydney, Australia`,
    imageUrl: image4,
  },
  {
    id: "5",
    title: "Clam Bar",
    location: `${locationEmoji} Etcetera veni, Vidi vici`,
    imageUrl: image5,
  },
  {
    id: "6",
    title: "Vivid Festival",
    location: `${locationEmoji} Sydney, Australia`,
    imageUrl: image6,
  },
];

const DraggableList = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      className="space-y-2"
    >
      {items.map((item) => (
        <Reorder.Item
          key={item.id}
          value={item}
          className="bg-white p-4 rounded-lg shadow-md"
          whileDrag={{
            scale: 0.5,
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="flex items-center space-x-4">
            <img
              src={item.imageUrl.src}
              alt={item.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.location}</p>
            </div>
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default DraggableList;

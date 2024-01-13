import React, { useState } from "react";
import { useNavigate} from 'react-router-dom'

export default function CreateCommunity() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    images: [],
    name: "",
    description: "",
    type: false,
    privacyPolicy: true,
  });

  const handleImageSubmit = () => {};


  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);


  const handleChange = (e) => {
    if(e.target.id === 'public' || e.target.id === 'private'){
      setFormData({
        ...formData,
        type:e.target.id
      })
    }

    if(e.target.type === 'number' || e.target.type === 'text' || e.target.type === 'textarea'){
      setFormData({
        ...formData,
        [e.target.id]:e.target.value
      })
    }
  };

  console.log(formData);
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/community/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      const data = await res.json();
    
      if (data.success === false) {
        setError(error.message);
      }
      navigate('/user-channel')
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    // <main>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="file"
    //       id="image"
    //       accept="image/*"
         
    //       value={formData.images}
    //     />
    //     <button className="" onClick={handleImageSubmit}>
    //       UpLoad
    //     </button>
    //     <input
    //       type="text"
    //       placeholder="Community Name"
    //       id="name"
    //       minLength={6}
    //       maxLength={30}
    //       onChange={handleChange}
    //       required
    //       value={formData.name}
    //     />
    //     <textarea
    //       type="text"
    //       placeholder="Description About your Community"
    //       id="description"
    //       onChange={handleChange}
    //       required
    //       value={formData.description}
    //     />
    //     <input type="checkbox" onChange={handleChange} id="privacyPolicy" value={formData.privacyPolicy} />
    //     <p className="Must Follow the community guideline"></p>
    //     <label>Public</label>
    //     <input
    //       type="checkbox"
    //       id="public"
    //       onChange={handleChange}
    //       checked={formData.type === "public"}
    //     />
    //     <label>Private</label>
    //     <input
    //       type="checkbox"
    //       id="private"
    //       onChange={handleChange}
    //       checked={formData.type === "private"}
    //     />
    //     <button className="">Create Community</button>
    //   </form>
    // </main>

    <main class="max-w-2xl mx-auto p-8">
  <form class="flex flex-col" onSubmit={handleSubmit}>
    <input
      type="file"
      id="image"
      accept="image/*"
      class="mb-4 p-2"
      value={formData.images}
    />
    <button class="bg-blue-500 text-white py-2 px-4 mb-4" onClick={handleImageSubmit}>
      Upload
    </button>
    <input
      type="text"
      placeholder="Community Name"
      id="name"
      class="mb-4 p-2"
      minLength={6}
      maxLength={30}
      onChange={handleChange}
      required
      value={formData.name}
    />
    <textarea
      type="text"
      placeholder="Description About your Community"
      id="description"
      class="mb-4 p-2"
      onChange={handleChange}
      required
      value={formData.description}
    />
    <div class="mb-4 flex items-center">
      <input type="checkbox" onChange={handleChange} id="privacyPolicy" class="mr-2" value={formData.privacyPolicy} />
      <p class="text-red-500">Must follow the community guidelines</p>
    </div>
    <label class="mb-2">Public</label>
    <input
      type="checkbox"
      id="public"
      onChange={handleChange}
      checked={formData.type === "public"}
      class="mr-2"
    />
    <label class="mb-2">Private</label>
    <input
      type="checkbox"
      id="private"
      onChange={handleChange}
      checked={formData.type === "private"}
      class="mr-2"
    />
    <button class="bg-green-500 text-white py-2 px-4">Create Community</button>
  </form>
</main>

  );
}

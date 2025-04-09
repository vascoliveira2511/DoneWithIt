import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

export const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((uri, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri,
    })
  );

  if (listing.location) {
    data.append("location[latitude]", listing.location.latitude);
    data.append("location[longitude]", listing.location.longitude);
  }

  return client.post(endpoint, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};

export const PhotoGallery = () => {
  const photos = [
    { id: 1, src: "photo1.jpg", alt: "Photo 1" },
    { id: 2, src: "photo2.jpg", alt: "Photo 2" },
    { id: 3, src: "photo3.jpg", alt: "Photo 3" },
    { id: 4, src: "photo3.jpg", alt: "Photo 3" },
    { id: 5, src: "photo3.jpg", alt: "Photo 3" },
    { id: 6, src: "photo3.jpg", alt: "Photo 3" },
    { id: 7, src: "photo3.jpg", alt: "Photo 3" },
    { id: 8, src: "photo3.jpg", alt: "Photo 3" },
    { id: 9, src: "photo3.jpg", alt: "Photo 3" },
    { id: 10, src: "photo3.jpg", alt: "Photo 3" },
  ];

  return (
    <div>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.src} alt={photo.alt} />
      ))}
    </div>
  );
};

import { data } from "../server/data";
import "../pages/Gallery.scss";

export default function GalleryComponent() {
  return (
    <>
      <div className="gallery-main-wrapper">
        {data.map((data, key) => {
          return (
            <div className="gallery-card" key={key}>
              <p className="gallery-text">
                Team: <span className="gallery-text-bold">{data.team}</span>
              </p>
              <p className="gallery-text">
                Name: <span className="gallery-text-bold">{data.name}</span>
              </p>
              <p className="gallery-text">
                Capacity:
                <span className="gallery-text-bold">{data.capacity}</span>
              </p>

              <div className="gallery-image-wrapper">
                <img className="gallery-img" src={data.image} alt={data.name} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

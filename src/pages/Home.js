import "./Home.scss";
import { data } from "../server/data";

export default function Home() {
  const cards = data.slice(0, 4);

  return (
    <div className="home-main-wrapper">
      <h1 className="home-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
      </h1>
      <h5>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam a
        molestiae porro illum iusto? Aspernatur tempore totam omnis, nisi optio
        nam, modi ipsum assumenda rerum aliquam facere nemo iusto. Quidem.
        Inventore magnam aperiam, repellendus, eum quod itaque maiores,
        explicabo vero dolore nam dolorem praesentium quam commodi blanditiis
        iste nemo mollitia exercitationem accusamus adipisci. Error repellendus
        iure itaque ratione quidem ut.
      </h5>
      <div className="home-content">
        {cards.map((data, key) => {
          return (
            <div className="gallery-card" key={key}>
              <div className="gallery-image-wrapper">
                <img className="gallery-img" src={data.image} alt={data.name} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Card from "../UI/Card";

export default function HorizontalList(props) {
  const [list, setList] = useState(null);

  const requestString = `https://api.jikan.moe/v4/${props.requestDestination}`;

  useEffect(() => {
    const retrieveData = async () => {
      if (list) return;

      setTimeout(() => {
        console.log(`${props.title}: sending Request!`, list);
      }, props.wait);
      let res = await fetch(requestString);
      const result = await res.json();

      setList(result.data);
    };

    retrieveData();
  }, []);

  let renderedList = list
    ? list
        .map((item) => (
          <div key={Math.random()}>
            <Card
              title={item.title}
              description={item.synopsis}
              originUrl={item.url}
              imageUrl={item.images.jpg.large_image_url}
            />
          </div>
        ))
        .splice(0, 10)
    : [];

  return (
    <div className="section sliderSection">
      <h1>{props.title}</h1>
      <ScrollContainer
        hideScrollbars={false}
        className="horizontalSlider bg-light bg-gradient"
      >
        {renderedList}
      </ScrollContainer>
    </div>
  );
}

import keyConceptsImage from "../assets/images/key-concepts.png";
import componentsImage from "../assets/images/components.png";
import stateImage from "../assets/images/state.png";
import eventsImage from "../assets/images/events.png";

function ConceptsItem({ title, image, description }) {
  return (
    <li className="concept">
      <img src={image} alt="TODO: TITLE" />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
export default ConceptsItem;

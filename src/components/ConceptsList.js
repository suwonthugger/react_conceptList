import ConceptsItem from "./ConceptsItem";

function ConceptsList({ props }) {
  return (
    <div>
      <ul id="concepts">
        {props.map((item) => (
          <ConceptsItem
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default ConceptsList;

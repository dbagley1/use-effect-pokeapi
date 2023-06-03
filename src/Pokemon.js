export default function Pokemon(props) {
  const { pokemon } = props;
  const { name, id, types, sprites } = pokemon;
  return <div className="card">
    <h3>{name}</h3>
    <p>#{id}</p>
    <img src={sprites?.other?.['official-artwork']?.['front_default']} alt="" />
    <p>Types: {types?.map(type => type.type.name).join(', ')}</p>
  </div>;
}

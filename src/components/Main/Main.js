import background from '../../background.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {/* {.map((item) => (
        < key={item.name} {...item} />
      ))} */}
      <p>Hello World</p>
    </main>
  );
}

function Listele({ list }) {
    return (
      <ul>
        {list.map((title) => (
          <li>
            {title.title}
          </li>
        ))}
      </ul>
    )
}
export default Listele
  
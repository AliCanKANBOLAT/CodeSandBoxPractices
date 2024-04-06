export default function Card ({name, img, number, mail}) {
  return (
    <>
    <h2>{name}</h2>
    <img src={img} alt="avatar_img" />
    <p> {number} </p>
    <p> {mail} </p>
    </>
  )
}
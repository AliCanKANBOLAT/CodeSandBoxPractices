import Card from "./Card"
import {List} from "./List"


List.map(item => <Card key={item.id}  name={item.name}/>)


export default function App() {
  return(
    <>
    {List.map(item => (
    <Card 
    key={item.id}
    name={item.name}
    img={item.img}
    number={item.phone}
    mail={item.mail}
    />
    /* <Card 
    name={List[0].name} 
    img={List[0].img} 
    number={List[0].phone} 
    mail={List[0].mail}
    />
    <Card 
    name={List[1].name} 
    img={List[1].img} 
    number={List[1].phone} 
    mail={List[1].mail}
    />
    <Card 
    name={List[2].name} 
    img={List[2].img} 
    number={List[2].phone} 
    mail={List[2].mail}
    /> */
  ))}
  </>
);
}
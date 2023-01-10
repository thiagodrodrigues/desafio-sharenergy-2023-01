import { BemVindoStyle } from "./BemVindo.style"

type BemVindoProps = {
  user: string
  text?: string
  subtext?: string
}



const BemVindo = ({user, text, subtext}: BemVindoProps) => {
  return (
    <BemVindoStyle className="row">
      <div className="col-md-10 col-12">
        <h2>Olá, <span>{user}</span></h2>
      </div>
      <h4>{text}</h4>
      <h5>{subtext}</h5>
    </BemVindoStyle>
  )
}

export default BemVindo
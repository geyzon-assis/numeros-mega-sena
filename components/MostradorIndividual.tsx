export default function MostradorIndividual(props: any) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50px",
      width: "50px",
      borderRadius: "25px",
      backgroundColor: "black",
      color: "#fff",
      fontSize: "2rem",
      margin: "20px"
    }} >
      {props.valor}
    </div>
  )
}
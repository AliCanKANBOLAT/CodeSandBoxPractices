export default function Container({children, className}) {
  return(
    <div className={`container-fluid ${className}`} >
    {children}
    </div>
  )
}
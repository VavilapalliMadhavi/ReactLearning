


const Content1 = ()=>{
        return(
        <div>Content1 Rendered</div>
    )
}

const Content2 = ()=>{
        return(
        <div>Content2 Rendered</div>
    )
}


function Nested() {
  return (
    <div>Main Component
            <Content1 />
            <Content2 />
    </div>


  )
}


export default Nested


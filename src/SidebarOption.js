// the sunctionalities of the sidebar optionss are it will turn blue on hover
// we will learn here that how to pass a componet as prop  

// we will pass the icon in from of props into the components and show it 
// we pass props in  a component in the same way we pass argument in our function 
// along with the component we will also pass a text 
// as the Icon is a component so we will pass the Icon in the argument with a capital I 
// as we used to write the name of a component with the capital letter 
import React from 'react'

// import the sidebarOption.css file here 
import './SidebarOption.css';

function SidebarOption({text, Icon}) {
  return (
    <div className='sidebarOption'>
    
      {/* now we have to create a file sidebarOOption.css */}
      {/* we need to render all the icons */}
      {/* as the icon is component it seems in color green */}
      <Icon/>
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption

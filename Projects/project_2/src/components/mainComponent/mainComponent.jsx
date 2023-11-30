import React from "react";
import "./mainComponent.css"

function MainComponent(props) {
  // for(var x = 0; x < props.petsProp.length; x++) {
  //   console.log(props.petsProp[x].age);
  // }

  const petInfo1 = props.petsProp.pets1.map((pets) =>
    <td class="petContent">
      <div>
        <img src={pets.img} alt="petImages" />
      </div>

      <div>
      {pets.name}
      </div>

      <div>
      {pets.age}
      </div>

      <div>
      {pets.species}
      </div>
     
    </td>
  )

  const petInfo2 = props.petsProp.pets2.map((pets) =>
    <td class="petContent">
      <div >
        <img src={pets.img} class="petimages" alt="petImages" />
      </div>

      <div>
      {pets.name}
      </div>

      <div>
      {pets.age}
      </div>

      <div>
      {pets.species}
      </div>
     
    </td>
  )

  return (
  <div>

    <table>

      <tbody>
        <tr>
          {petInfo1}
        </tr>

        <tr>
            {petInfo2}
          </tr>
      </tbody>

    </table>
  </div>
  )

}

export default MainComponent;
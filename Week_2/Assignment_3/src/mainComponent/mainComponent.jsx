import React from "react";
import "./mainComponent.css"

function MainComponent() {
  return (
    <body>

      <div>
        <img class="profilePhoto" src="https://i.pinimg.com/736x/58/e7/78/58e7789ee2ecaf5347db1b8d9c24d82a.jpg" alt="Profile Photo" />
      </div>

      <div>

        <table class="tb">
          <tr>
            <td>Name</td>
            <td>User Name</td>
            <td>Occupation</td>
            <td>Followers</td>
          </tr>
          <tr>
            <td>Gabby</td>
            <td>@Gabby_Tyson</td>
            <td>Blogger</td>
            <td>15k</td>
          </tr>
          <tr>
            <td>Edit Profile</td>
            <td>Share Profile</td>
            <td>Story Highlights</td>
            <td>Threads</td>
          </tr>

        </table>
      </div>

    </body>
  )
}




export default MainComponent;
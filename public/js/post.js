const form = document.querySelector(".post-form");

// this line overrides the action method that's setup on the form 
// form.addEventListener("submit", uploadHandler);

const uploadHandler = (event) => {
    event.preventDefault();

  const name = document.querySelector("#postHikeNameTextArea");
  const location = document.querySelector("#postHikeLocationTextArea");
  const difficulty = document.querySelector("#postHikeDifficultyTextArea");
  const max_altitude = document.querySelector("#postHikeAltitudeTextArea");
  const length = document.querySelector("#postHikeLengthTextArea");
//   const rating = document.querySelector("#postHikeRatingTextArea");
  const description = document.querySelector("#postHikeDescriptionTextArea");
  const file = document.querySelector("#file");

    const formData = new FormData();
    formData.append("hikename", name.value);
    formData.append("hikelocation", location.value);
    formData.append("hikedifficulty", difficulty.value);
    formData.append("hikealtitude", max_altitude.value);
    formData.append("hikelength", length.value);
    // formData.append("hikerating", rating.value);
    formData.append("hikedescription", description.value);
    formData.append("file", file.files[0]);
    fetch("/api/posts/profile", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          console.log(response);
          window.location.reload();
        //   document.location.replace("/viewhikes");         
        })
        .catch((err) => ("Something went wrong", err));
    
}


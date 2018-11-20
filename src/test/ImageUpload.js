function storePicture() {
  console.log(PicturePath);
  if (PicturePath) {
    // Create the form data object
    var data = new FormData();
    data.append("picture", {
      uri: PicturePath,
      name: "selfie.jpg",
      type: "image/jpg"
    });
    // Create the config object for the POST
    // You typically have an OAuth2 token that you use for authentication
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data;",
        Authorization: "Bearer " + "SECRET_OAUTH2_TOKEN_IF_AUTH"
      },
      body: data
    };
    fetch("https://postman-echo.com/post", config)
      .then(responseData => {
        // Log the response form the server
        // Here we get what we sent to Postman back
        console.log(responseData);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

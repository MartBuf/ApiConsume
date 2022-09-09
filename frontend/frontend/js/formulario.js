window.onload = () => {
  let domain = "http://localhost:3031";
  let movies = "/api/movies/create";
  let form = document.querySelector(".formulario");

  form
    .addEventListener("submit", (e) => {
      e.preventDefault();
      let body = {
        title: form.title.value,
        awards: form.awards.value,
        release_date: form.release_date.value,
        length: form.length.value,
        rating: form.rating.value,
      };
      fetch(domain + movies, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body:JSON.stringify(body)
      });
    })

    .then((response) => response.json())
    .then((result) => {
     console.log (result)
    })
    .catch((error) => {
      console.error("fallo la peticion", error);
    });
};

const JokesTable = document.querySelector("#jokesTable");


async function getAllJokes() {
    try {
      const response = await axios.get("http://localhost:3000/api/jokes/all");
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  // function renderJokesTable(getAllJokes) {
  //   JokesTable.innerHTML = `
  //     <tr>
  //       <th class="id">ID</th>
  //       <th class="setup">Setup</th>
  //       <th class="punchline">Punchline</th>
  //       <th class="createdAt">Created At</th>
  //       <th class="createdBy">Created By</th>
  //     </tr>
  //   `;
  
  //   getAllJokes.forEach((jokes) => {
  //     const row = document.createElement("tr");
  //     row.innerHTML = `
  //       <td>${jokes._id}</td>
  //       <td>${jokes.setup}</td>
  //       <td>${jokes.punchline}</td>
  //       <td>${jokes.createdAt}</td>
  //       <td>${jokes.createdBy}</td>
  //     `;
  //     JokesTable.appendChild(row);
  //   });
  // }
  
  
  




  getAllJokes()
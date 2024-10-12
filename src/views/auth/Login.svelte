<script>
  import { navigate } from "svelte-routing";
  import { query, where, doc, getDoc, getDocs, collection } from "firebase/firestore";

  import { auth, db } from "../../lib/firebase/firebase.client";
  import { authStore, authHandlers } from "../../stores/authStore";

  let email = "";
  let password = "";

  async function handleLogin(event) {
    event.preventDefault();
    console.log(email + password);
    navigate("/admin/dashboard");
    try {
      await authHandlers.login(email, password);

      const user = auth.currentUser;

      authStore.update((store) => ({
        ...store,
        currentUser: user,
      }));

      const usersQuery = query(collection(db, "uporabniki"), where("email", "==", email));
      const querySnapshot = await getDocs(usersQuery);

      let userDoc = null;
      querySnapshot.forEach((doc) => {
        userDoc = doc;
      });

      console.log(userDoc);

      if (userDoc && userDoc.exists()) { // && userDoc.data().isAdmin
        navigate("/admin/dashboard");
      } else {
        await authHandlers.logout();
        showAlert("Prijava ni uspešna. Uporabnik ni admin.", "danger");
        console.log("Uporabnik ni admin. Prijavitev neuspešna.");
      }
    } catch (error) {
      console.error(error);
    }
  }
  function showAlert(message, type) {
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;

    // Add the alert to the alert-container element
    const alertContainer = document.querySelector("#alert-container");
    if (alertContainer) {
      alertContainer.appendChild(alertDiv);
    } else {
      console.error("Alert container not found");
    }
  }
  function handleEmailInput(event) {
    email = event.target.value;
  }

  function handlePasswordInput(event) {
    password = event.target.value;
  }
</script>

<div class="container mx-auto px-4 h-full">
  <div class="flex content-center items-center justify-center h-full">
    <div class="w-full lg:w-4/12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
      >
        <div class="rounded-t mb-0 px-6 py-6">
          <div class="text-center mb-3">
            <h6 class="text-blueGray-500 text-sm font-bold">Prijava</h6>
          </div>
          <hr class="mt-6 border-b-1 border-blueGray-300" />
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form on:submit={handleLogin}>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-email"
              >
                Email
              </label>
              <input
                id="grid-email"
                type="email"
                value={email}
                on:input={handleEmailInput}
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Email"
              />
            </div>

            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="grid-password"
              >
                Geslo
              </label>
              <input
                id="grid-password"
                type="password"
                value={password}
                on:input={handlePasswordInput}
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Geslo"
              />
            </div>

            <div class="text-center mt-6">
              <button
                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="submit"
              >
                Prijava
              </button>
            </div>
            <div id="alert-container"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

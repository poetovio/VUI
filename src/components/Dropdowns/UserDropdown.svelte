<script>
  // library for creating dropdown menu appear on click
  import { createPopper } from "@popperjs/core";

  import { navigate } from "svelte-routing";

  import { authHandlers } from "../../stores/authStore";
  // core components

  const image = "../assets/img/avatar.png";

  let dropdownPopoverShow = false;

  let btnDropdownRef;
  let popoverDropdownRef;

  const toggleDropdown = (event) => {
    event.preventDefault();
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    } else {
      dropdownPopoverShow = true;
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: "bottom-start",
      });
    }
  };

  function handleProfileClick() {
    navigate("/admin/profile");
  }

  async function handleLogout() {
    try {
      await authHandlers.logout();
      // Redirect to the home page
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  }
</script>

<div>
  <a
    class="text-blueGray-500 block"
    href="#pablo"
    bind:this="{btnDropdownRef}"
    on:click="{toggleDropdown}"
  >
    <div class="items-center flex">
      <span
        class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
      >
        <img
          alt="..."
          class="w-full rounded-full align-middle border-none shadow-lg"
          src="{image}"
        />
      </span>
    </div>
  </a>
  <div
    bind:this="{popoverDropdownRef}"
    class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow ? 'block':'hidden'}"
  >
    <a
      href="/admin/profile" on:click={handleProfileClick}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      <i class="fas fa-user-circle"></i>
      Profil
    </a>
    <div class="h-0 my-2 border border-solid border-blueGray-100"/>
    <a
      href="#pablo" on:click={handleLogout}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      <i class="fas fa-sign-out-alt"></i>
      Odjava
    </a>
  </div>
</div>

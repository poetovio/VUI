<script>
  import { Router, Route } from "svelte-routing";

  // components for this layout
  import AuthNavbar from "components/Navbars/AuthNavbar.svelte";
  import FooterSmall from "components/Footers/FooterSmall.svelte";

  // pages for this layout
  import Login from "views/auth/Login.svelte";

</script>

<div>
  <AuthNavbar />
  <main>
    <section class="relative w-full h-full py-40 min-h-screen">
      <div
        class="absolute top-0 w-full h-full bg-no-repeat bg-full"
        style="background-color: #447352;"
      ></div>
      <Router url="auth">
        <Route path="login" component="{Login}" />
      </Router>
      <FooterSmall absolute="true" />
    </section>
  </main>
</div>

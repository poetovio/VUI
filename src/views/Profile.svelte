<script>
  // core components
  import AuthNavbar from "components/Navbars/AuthNavbar.svelte";
  import Footer from "components/Footers/Footer.svelte";

  import { authStore } from "../stores/authStore";

  const avatar = "/assets/img/avatar.png";
</script>

<div>
  <AuthNavbar />
  <main class="profile-page">
    <section class="relative block h-500-px">
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
      >
        <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-50 bg-black"
        ></span>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
        style="transform: translateZ(0);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
    <section class="relative py-16 bg-blueGray-200">
      <div class="container mx-auto px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
        >
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div class="relative">
                  <img
                    alt="..."
                    src="{avatar}"
                    class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
              <div
                class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
              >
                <div class="py-6 px-3 mt-32 sm:mt-0">
                  <button
                    class="bg-red-400 active:bg-red-500 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Connect
                  </button>
                </div>
              </div>
            </div>
            <div class="text-center mt-12">
              <h3
                class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
              >
                Konj
              </h3>
              <div
                class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
              >
                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Los Angeles, California
              </div>
              <div class="mb-2 text-blueGray-600 mt-10">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                ADministrator at Picikl d.d.
              </div>
              <div class="mb-2 text-blueGray-600">
                <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                University of Computer Science
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</div>

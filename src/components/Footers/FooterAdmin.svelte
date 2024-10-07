<script>
  // make dynamic date to be added to footer
  let date = new Date().getFullYear();
</script>

<footer class="block py-4">
  <div class="container mx-auto px-4">
    <hr class="mb-4 border-b-1 border-blueGray-200" />
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4" style="color: white;">
        <div
          class="text-sm  font-semibold py-1 text-center md:text-left"
        >
          Copyright © {date}
          <a
            href="https://www.creative-tim.com?ref=ns-footer-admin"
            class=" hover:text-blueGray-700 text-sm font-semibold py-1"
          >
            Picikl
          </a>
        </div>
      </div>
      <div class="w-full md:w-8/12 px-4" style="color: white;">
        <ul class="flex flex-wrap list-none md:justify-end justify-center">
          <li>
            <a
              href="https://www.creative-tim.com?ref=ns-footer-admin"
              class=" hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
            >
              Picikl
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

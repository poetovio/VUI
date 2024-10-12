<script>
  import { Router, Route } from "svelte-routing";

  import { auth } from "../lib/firebase/firebase.client";
  import { firestoreInstance } from "../stores/fireStore"

  // components for this layout
  import AdminNavbar from "components/Navbars/AdminNavbar.svelte";
  import Sidebar from "components/Sidebar/Sidebar.svelte";
  import HeaderStats from "components/Headers/HeaderStats.svelte";
  import FooterAdmin from "components/Footers/FooterAdmin.svelte";
  import Loading from "../components/Loading/Loading.svelte";

  import { gql, request } from "graphql-request";

  import { apiStore } from "../stores/golangStore";

  // pages for this layout
  import Dashboard from "views/admin/Dashboard.svelte";
  import Settings from "views/admin/Settings.svelte";
  import Tables from "views/admin/Tables.svelte";
  import TablesBikes from "views/admin/TablesBikes.svelte";
  import Maps from "views/admin/Maps.svelte";
  import { onMount } from "svelte";

  let isLoading = true; //true
  let steviloPostajalisc = null;
  let steviloKoles = null;
  let steviloIzposoj = null;
  let steviloUporabnikov = null;

  let postajalisca = null;
  let kolesa = null;
  let izposoje = null;
  let petIzposoj = null;
  let izposojeZadnjih30 = null;

  let uporabniki = null;
  let prijavljenUporabnik = null;

  let izposojeNaDatum = null;

  function setStUporabnikov(st) {
    steviloUporabnikov = st;
  } 

  // funkcija za računanje izposoj za določen datum

  function countInstancesByDate(dataArray) {
    const dateCountDict = {};

    dataArray.forEach(item => {
      const startDate = item.start_date.substring(0, 10);
      if (dateCountDict[startDate]) {
        dateCountDict[startDate]++;
      } else {
        dateCountDict[startDate] = 1;
      }
    });

    // Convert the dateCountDict to an array of objects for sorting
    const sortedData = Object.entries(dateCountDict).map(([date, count]) => ({
      date,
      count
    }));

    // Sort the array of objects by date
    sortedData.sort((a, b) => a.date.localeCompare(b.date));

    const smallestDate = sortedData[0].date;
    const largestDate = sortedData[sortedData.length - 1].date;
    const missingDates = [];

    const currentDate = new Date(smallestDate);
    while (currentDate.toISOString().substring(0, 10) <= largestDate) {
      const formattedDate = currentDate.toISOString().substring(0, 10);
      if (!dateCountDict[formattedDate]) {
        missingDates.push(formattedDate);
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    missingDates.forEach(date => {
      dateCountDict[date] = 0;
    });

    // Sort the dictionary again by date
    const sortedDateCountDict = {};
    Object.keys(dateCountDict)
      .sort()
      .forEach(date => {
        sortedDateCountDict[date] = dateCountDict[date];
      });

    return sortedDateCountDict;
  }

  onMount(async () => {
    let stPostajalisc = await apiStore.getPostajalisca();
    let stKoles = await apiStore.getKolesa();
    let stIzposoje = await apiStore.getIzposoje();

    await firestoreInstance.getUporabniki().then((data) => {
      console.log("Podatki:");
      console.log(data);
      uporabniki = data;
      setStUporabnikov(data.length);
    });

    izposojeNaDatum = countInstancesByDate(stIzposoje.izposoje);

    await firestoreInstance.getUser(auth.currentUser.email).then((data) => {
      prijavljenUporabnik = data;
    });

    izposojeZadnjih30 = stIzposoje.izposoje.slice(-30);

    izposojeZadnjih30 = izposojeZadnjih30.filter(item => Object.values(item).every(value => value !== null));

    petIzposoj = izposojeZadnjih30.slice(-5);

    postajalisca = stPostajalisc;
    kolesa = stKoles;
    izposoje = stIzposoje;

    steviloPostajalisc = stPostajalisc.postajalisca.length;
    steviloKoles = stKoles.kolesa.length;
    steviloIzposoj = stIzposoje.izposoje.length;

    console.log("Izracunane izposoje za datum:");
    console.log(izposojeNaDatum);

    isLoading = false;
  });
</script>

<div>
  <Sidebar />
  <div class="relative md:ml-64" style="background-color: #447352;">
    <AdminNavbar />
    {#if isLoading}
      <!-- Show loading page -->
      <Loading />
    {:else}

    <HeaderStats {steviloPostajalisc} {steviloKoles} {steviloIzposoj} {steviloUporabnikov}/>
    <div class="px-4 md:px-10 mx-auto w-full -m-24">
      <Router url="admin">
        <Route path="dashboard">
          <Dashboard {postajalisca} {kolesa} {petIzposoj} {izposojeNaDatum} />
        </Route>
        <Route path="profile">
          <Settings {prijavljenUporabnik} />
        </Route>
        <Route path="tables">
          <Tables {izposojeZadnjih30} {izposoje} />
        </Route>
        <Route path="maps" component="{Maps}" />
        <Route path="bikes" >
          <TablesBikes {kolesa} />
        </Route>
      </Router>
      <FooterAdmin />
    </div>
    {/if}
  </div>
</div>

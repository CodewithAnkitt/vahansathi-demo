/* =====================================================
   VAHANSATHI PROTOTYPE
===================================================== */


/* =====================================================
   MAIN ELEMENTS
===================================================== */

const pageContent =
    document.getElementById("pageContent");

const sidebar =
    document.getElementById("sidebar");

const menuToggle =
    document.getElementById("menuToggle");

const mobileClose =
    document.getElementById("mobileClose");

const sidebarOverlay =
    document.getElementById("sidebarOverlay");

const globalSearch =
    document.getElementById("globalSearch");


/* =====================================================
   SAMPLE VEHICLE DATA
===================================================== */

const vehicles = [

    {
        number: "JH 09 4283",
        owner: "Pankaj Kumar",
        type: "Tipper",
        capacity: "20 Wheeler",
        trips: 8,
        completedTrips: 8,
        material: "126.4 MT",
        diesel: "78 Ltr",
        earning: "₹98,400",
        status: "Active"
    },

    {
        number: "JH 09 5621",
        owner: "Suresh Yadav",
        type: "Tipper",
        capacity: "20 Wheeler",
        trips: 6,
        completedTrips: 6,
        material: "119.2 MT",
        diesel: "72 Ltr",
        earning: "₹70,200",
        status: "Active"
    },

    {
        number: "JH 09 7812",
        owner: "Ramesh Kumar",
        type: "Tipper",
        capacity: "16 Wheeler",
        trips: 5,
        completedTrips: 5,
        material: "94.6 MT",
        diesel: "61 Ltr",
        earning: "₹58,400",
        status: "Available"
    }

];


/* =====================================================
   SAMPLE OWNER DATA
===================================================== */

const owners = [

    {
        name: "Pankaj Kumar",
        phone: "+91 98765 43210",
        vehicles: 2,
        trips: 18,
        earning: "₹1,42,600",
        status: "Active"
    },

    {
        name: "Suresh Yadav",
        phone: "+91 91234 56789",
        vehicles: 1,
        trips: 12,
        earning: "₹92,400",
        status: "Active"
    },

    {
        name: "Ramesh Kumar",
        phone: "+91 99887 66554",
        vehicles: 2,
        trips: 15,
        earning: "₹1,08,500",
        status: "Active"
    }

];


/* =====================================================
   DASHBOARD
===================================================== */

function dashboardPage() {

    pageContent.innerHTML = `

        <div class="data-page">


            <!-- PAGE HEADER -->

            <div class="page-header">

                <div class="page-title">

                    <h1>
                        Welcome Back, Dheeraj Yadav
                    </h1>

                    <p>
                        Company Owner · Here's what's happening
                        with your transport operations today.
                    </p>

                </div>

            </div>


            <!-- =================================================
                 KPI CARDS
            ================================================== -->

            <div class="kpi-grid">


                <!-- VEHICLES -->

                <div class="kpi-card">

                    <div class="kpi-icon kpi-blue">

                        <i data-lucide="truck"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Total Vehicles
                        </div>

                        <div class="kpi-value">
                            24
                        </div>

                        <div class="kpi-change">
                            ▲ +2 this month
                        </div>

                    </div>

                </div>


                <!-- TRIPS -->

                <div class="kpi-card">

                    <div class="kpi-icon kpi-green">

                        <i data-lucide="route"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Total Trips (Today)
                        </div>

                        <div class="kpi-value">
                            18
                        </div>

                        <div class="kpi-change">
                            ▲ +5 vs yesterday
                        </div>

                    </div>

                </div>


                <!-- EARNINGS -->

                <div class="kpi-card">

                    <div class="kpi-icon kpi-orange">

                        <i data-lucide="indian-rupee"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Total Earnings (Today)
                        </div>

                        <div class="kpi-value">
                            ₹1,82,400
                        </div>

                        <div class="kpi-change">
                            ▲ +12%
                        </div>

                    </div>

                </div>


                <!-- DIESEL -->

                <div class="kpi-card">

                    <div class="kpi-icon kpi-red">

                        <i data-lucide="fuel"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Total Diesel Cost (Today)
                        </div>

                        <div class="kpi-value">
                            ₹54,800
                        </div>

                        <div
                            class="kpi-change"
                            style="color:#e5484d;"
                        >
                            ▲ +8%
                        </div>

                    </div>

                </div>

            </div>


            <!-- =================================================
                 ROUTE PANEL
            ================================================== -->

            <div class="panel">


                <div class="route-header">

                    <h2>
                        Route Wise Trip Details
                    </h2>

                    <p>
                        Select a route to view trip details,
                        vehicles and earnings.
                    </p>

                </div>


                <!-- ROUTE CONTROLS -->

                <div class="route-controls">


                    <div class="route-tabs">

                        <button
                            class="route-tab active"
                            data-route="bokaro"
                        >
                            Bokaro → Dhanbad
                        </button>

                        <button
                            class="route-tab"
                            data-route="dhanbad"
                        >
                            Dhanbad → Ramgarh
                        </button>

                        <button
                            class="route-tab"
                            data-route="ramgarh"
                        >
                            Ramgarh → Urimari
                        </button>

                    </div>


                    <button
                        class="export-btn"
                        onclick="exportReport()"
                    >

                        <i data-lucide="download"></i>

                        Export Report

                    </button>

                </div>


                <!-- ROUTE SUMMARY -->

                <div class="route-summary">


                    <div class="route-name">

                        <div class="route-icon">

                            <i data-lucide="route"></i>

                        </div>

                        <div>

                            <strong>
                                Bokaro → Dhanbad
                            </strong>

                            <span>
                                All trips completed on
                                14 Sep 2026
                            </span>

                        </div>

                    </div>


                    <div class="summary-item">

                        <span>
                            Total Vehicles
                        </span>

                        <strong>
                            2
                        </strong>

                    </div>


                    <div class="summary-item">

                        <span>
                            Total Trips
                        </span>

                        <strong>
                            14
                        </strong>

                    </div>


                    <div class="summary-item">

                        <span>
                            Total Material
                        </span>

                        <strong>
                            245.6 MT
                        </strong>

                    </div>


                    <div class="summary-item earning">

                        <span>
                            Total Earnings
                        </span>

                        <strong>
                            ₹1,68,600
                        </strong>

                    </div>

                </div>


                <!-- VEHICLE 1 -->

                ${vehicleBlock(
                    vehicles[0],
                    [
                        [
                            "1",
                            "14-09-2026",
                            "06:15",
                            "07:45",
                            "14,200",
                            "38,640",
                            "24,440",
                            "12,500",
                            "10",
                            "₹1,100",
                            "₹300",
                            "₹11,100"
                        ],
                        [
                            "2",
                            "14-09-2026",
                            "08:05",
                            "09:30",
                            "14,180",
                            "38,020",
                            "23,840",
                            "12,000",
                            "9",
                            "₹990",
                            "₹300",
                            "₹10,710"
                        ],
                        [
                            "3",
                            "14-09-2026",
                            "09:50",
                            "11:20",
                            "14,220",
                            "38,900",
                            "24,680",
                            "12,800",
                            "10",
                            "₹1,100",
                            "₹300",
                            "₹11,400"
                        ],
                        [
                            "4",
                            "14-09-2026",
                            "11:35",
                            "13:05",
                            "14,210",
                            "38,600",
                            "24,390",
                            "12,600",
                            "9",
                            "₹990",
                            "₹300",
                            "₹11,310"
                        ]
                    ]
                )}


                <!-- VEHICLE 2 -->

                ${vehicleBlock(
                    vehicles[1],
                    [
                        [
                            "1",
                            "14-09-2026",
                            "06:40",
                            "08:10",
                            "14,300",
                            "37,960",
                            "23,660",
                            "12,000",
                            "9",
                            "₹990",
                            "₹300",
                            "₹10,710"
                        ],
                        [
                            "2",
                            "14-09-2026",
                            "08:45",
                            "10:20",
                            "14,250",
                            "38,600",
                            "24,350",
                            "12,600",
                            "10",
                            "₹1,100",
                            "₹300",
                            "₹11,200"
                        ],
                        [
                            "3",
                            "14-09-2026",
                            "11:05",
                            "12:35",
                            "14,280",
                            "38,540",
                            "24,260",
                            "12,500",
                            "9",
                            "₹990",
                            "₹300",
                            "₹11,210"
                        ],
                        [
                            "4",
                            "14-09-2026",
                            "13:10",
                            "14:40",
                            "14,260",
                            "38,700",
                            "24,440",
                            "12,700",
                            "10",
                            "₹1,100",
                            "₹300",
                            "₹11,300"
                        ]
                    ]
                )}

            </div>


           

    `;

    lucide.createIcons();

    setupRouteTabs();
}


/* =====================================================
   VEHICLE BLOCK
===================================================== */

function vehicleBlock(vehicle, trips) {

    return `

        <div class="vehicle-block">


            <!-- VEHICLE HEADER -->

            <div class="vehicle-top">


                <div class="vehicle-image">

                    🚛

                </div>


                <div class="vehicle-name">

                    <strong>

                        ${vehicle.number}

                        <span class="status">
                            ${vehicle.status}
                        </span>

                    </strong>


                    <p>

                        Owner:
                        ${vehicle.owner}

                        &nbsp;&nbsp;

                        Type:
                        ${vehicle.type}

                        &nbsp;&nbsp;

                        Capacity:
                        ${vehicle.capacity}

                    </p>

                </div>


                <!-- VEHICLE STATS -->

                <div class="vehicle-stats">


                    <div class="vehicle-stat">

                        <span>
                            Completed Trips
                        </span>

                        <strong>
                            ${vehicle.completedTrips}
                        </strong>

                    </div>


                    <div class="vehicle-stat">

                        <span>
                            Total Material
                        </span>

                        <strong>
                            ${vehicle.material}
                        </strong>

                    </div>


                    <div class="vehicle-stat">

                        <span>
                            Total Diesel
                        </span>

                        <strong>
                            ${vehicle.diesel}
                        </strong>

                    </div>


                    <div class="vehicle-stat earning">

                        <span>
                            Total Earning
                        </span>

                        <strong>
                            ${vehicle.earning}
                        </strong>

                    </div>

                </div>


                <!-- ADD TRIP -->

                <button
                    class="add-trip-btn"
                    onclick="addTrip('${vehicle.number}')"
                    title="Add Trip"
                >

                    <i data-lucide="plus"></i>

                    Add Trip

                </button>


                <!-- CLOSE DETAILS -->

                <button
                    class="close-vehicle-btn"
                    onclick="toggleVehicleDetails(this)"
                    title="Close trip details"
                >

                    <i data-lucide="chevron-up"></i>

                </button>

            </div>


            <!-- TRIP DETAILS -->

            <div class="table-wrapper vehicle-details">

                <table class="trip-table">


                    <thead>

                        <tr>

                            <th>
                                Trip No.
                            </th>

                            <th>
                                Date
                            </th>

                            <th>
                                Entry Time
                            </th>

                            <th>
                                Exit Time
                            </th>

                            <th>
                                Empty Weight<br>
                                (Kg)
                            </th>

                            <th>
                                Loaded Weight<br>
                                (Kg)
                            </th>

                            <th>
                                Material Weight<br>
                                (Kg)
                            </th>

                            <th>
                                Trip Amount<br>
                                (₹)
                            </th>

                            <th>
                                Diesel Quantity<br>
                                (Ltr)
                            </th>

                            <th>
                                Diesel Cost<br>
                                110/L (₹)
                            </th>

                            <th>
                                Fixed Charge<br>
                                (₹)
                            </th>

                            <th>
                                Net Earning (₹)
                            </th>

                        </tr>

                    </thead>


                    <tbody>


                        ${trips.map(trip => `

                            <tr>

                                <td>
                                    ${trip[0]}
                                </td>

                                <td>
                                    ${trip[1]}
                                </td>

                                <td>
                                    ${trip[2]}
                                </td>

                                <td>
                                    ${trip[3]}
                                </td>

                                <td>
                                    ${trip[4]}
                                </td>

                                <td>
                                    ${trip[5]}
                                </td>

                                <td>
                                    ${trip[6]}
                                </td>

                                <td>
                                    ${trip[7]}
                                </td>

                                <td>
                                    ${trip[8]}
                                </td>

                                <td>
                                    ${trip[9]}
                                </td>

                                <td>
                                    ${trip[10]}
                                </td>

                                <td class="earning">
                                    ${trip[11]}
                                </td>

                            </tr>

                        `).join("")}


                        <!-- TOTAL -->

                        <tr class="trip-total">

                            <td colspan="7">
                                Total
                            </td>

                            <td>
                                ₹50,300
                            </td>

                            <td>
                                38 Ltr
                            </td>

                            <td>
                                ₹4,180
                            </td>

                            <td>
                                ₹1,200
                            </td>

                            <td class="earning">
                                ₹44,520
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    `;
}


/* =====================================================
   VEHICLE DETAILS OPEN / CLOSE
===================================================== */

function toggleVehicleDetails(button) {

    const vehicleBlock =
        button.closest(".vehicle-block");

    const details =
        vehicleBlock.querySelector(
            ".vehicle-details"
        );

    const isHidden =
        details.classList.toggle(
            "hidden-details"
        );


    if (isHidden) {

        button.innerHTML = `
            <i data-lucide="chevron-down"></i>
        `;

        button.title =
            "Open trip details";

    } else {

        button.innerHTML = `
            <i data-lucide="chevron-up"></i>
        `;

        button.title =
            "Close trip details";
    }


    lucide.createIcons();
}


/* =====================================================
   ADD TRIP
===================================================== */

function addTrip(vehicleNumber) {

    const tripAmount =
        prompt(
            `Add Trip for ${vehicleNumber}\n\nEnter Trip Amount (₹):`
        );


    if (!tripAmount) {
        return;
    }


    if (
        isNaN(tripAmount) ||
        Number(tripAmount) <= 0
    ) {

        alert(
            "Please enter a valid trip amount."
        );

        return;
    }


    const dieselQuantity =
        prompt(
            "Enter Diesel Quantity (Ltr):"
        );


    if (!dieselQuantity) {
        return;
    }


    if (
        isNaN(dieselQuantity) ||
        Number(dieselQuantity) <= 0
    ) {

        alert(
            "Please enter a valid diesel quantity."
        );

        return;
    }


    const dieselRate = 110;

    const fixedCharge = 300;


    const dieselCost =
        Number(dieselQuantity) *
        dieselRate;


    const netEarning =
        Number(tripAmount) -
        dieselCost -
        fixedCharge;


    alert(

        `Trip Preview\n\n` +

        `Vehicle: ${vehicleNumber}\n` +

        `Trip Amount: ₹${
            Number(tripAmount)
            .toLocaleString("en-IN")
        }\n` +

        `Diesel Cost: ₹${
            dieselCost
            .toLocaleString("en-IN")
        }\n` +

        `Fixed Charge: ₹300\n` +

        `Net Earning: ₹${
            netEarning
            .toLocaleString("en-IN")
        }`

    );
}


/* =====================================================
   VEHICLES PAGE
===================================================== */

function vehiclesPage() {

    pageContent.innerHTML = `

        <div class="data-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        Vehicles
                    </h1>

                    <p>
                        Manage all vehicles operating
                        under Vahansathi.
                    </p>

                </div>


                <button
                    class="primary-btn"
                    onclick="addVehicle()"
                >
                    + Add Vehicle
                </button>

            </div>


            <div class="data-card">


                <div class="toolbar">

                    <input
                        class="filter-input"
                        id="vehicleSearch"
                        placeholder="Search vehicle..."
                    >

                    <button
                        class="primary-btn"
                        onclick="filterVehicles()"
                    >
                        Filter
                    </button>

                </div>


                <div class="table-wrapper">

                    <table class="simple-table">

                        <thead>

                            <tr>

                                <th>
                                    Vehicle Number
                                </th>

                                <th>
                                    Owner
                                </th>

                                <th>
                                    Type
                                </th>

                                <th>
                                    Capacity
                                </th>

                                <th>
                                    Completed Trips
                                </th>

                                <th>
                                    Total Earnings
                                </th>

                                <th>
                                    Status
                                </th>

                                <th>
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody id="vehicleTableBody">

                            ${vehicles.map(vehicle => `

                                <tr>

                                    <td>
                                        <strong>
                                            ${vehicle.number}
                                        </strong>
                                    </td>

                                    <td>
                                        ${vehicle.owner}
                                    </td>

                                    <td>
                                        ${vehicle.type}
                                    </td>

                                    <td>
                                        ${vehicle.capacity}
                                    </td>

                                    <td>
                                        ${vehicle.completedTrips}
                                    </td>

                                    <td>
                                        ${vehicle.earning}
                                    </td>

                                    <td>

                                        <span class="status">
                                            ${vehicle.status}
                                        </span>

                                    </td>

                                    <td>

                                        <button
                                            class="action-btn"
                                            onclick="viewVehicle('${vehicle.number}')"
                                        >
                                            View
                                        </button>

                                    </td>

                                </tr>

                            `).join("")}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   VEHICLE SEARCH
===================================================== */

function filterVehicles() {

    const search =
        document
        .getElementById("vehicleSearch")
        .value
        .toLowerCase();


    const rows =
        document.querySelectorAll(
            "#vehicleTableBody tr"
        );


    rows.forEach(row => {

        const text =
            row.innerText.toLowerCase();

        row.style.display =
            text.includes(search)
                ? ""
                : "none";

    });
}


/* =====================================================
   ADD VEHICLE
===================================================== */

function addVehicle() {

    alert(
        "Prototype: Add Vehicle form will be connected here."
    );
}


/* =====================================================
   VIEW VEHICLE
===================================================== */

function viewVehicle(vehicleNumber) {

    const vehicle =
        vehicles.find(
            item =>
                item.number === vehicleNumber
        );


    if (!vehicle) {
        return;
    }


    pageContent.innerHTML = `

        <div class="data-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        ${vehicle.number}
                    </h1>

                    <p>
                        Vehicle details and trip history.
                    </p>

                </div>


                <button
                    class="primary-btn"
                    onclick="addTrip('${vehicle.number}')"
                >
                    + Add Trip
                </button>

            </div>


            <div class="kpi-grid">


                <div class="kpi-card">

                    <div class="kpi-icon kpi-blue">

                        <i data-lucide="truck"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Vehicle Owner
                        </div>

                        <div class="kpi-value small-value">
                            ${vehicle.owner}
                        </div>

                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-icon kpi-green">

                        <i data-lucide="check-circle"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Completed Trips
                        </div>

                        <div class="kpi-value">
                            ${vehicle.completedTrips}
                        </div>

                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-icon kpi-orange">

                        <i data-lucide="weight"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Total Material
                        </div>

                        <div class="kpi-value">
                            ${vehicle.material}
                        </div>

                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-icon kpi-green">

                        <i data-lucide="indian-rupee"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Total Earnings
                        </div>

                        <div class="kpi-value">
                            ${vehicle.earning}
                        </div>

                    </div>

                </div>

            </div>


            <div class="data-card">

                <h2>
                    Vehicle Information
                </h2>

                <br>

                <table class="simple-table">

                    <tr>
                        <th>Vehicle Number</th>
                        <td>${vehicle.number}</td>
                    </tr>

                    <tr>
                        <th>Owner</th>
                        <td>${vehicle.owner}</td>
                    </tr>

                    <tr>
                        <th>Vehicle Type</th>
                        <td>${vehicle.type}</td>
                    </tr>

                    <tr>
                        <th>Capacity</th>
                        <td>${vehicle.capacity}</td>
                    </tr>

                    <tr>
                        <th>Status</th>
                        <td>
                            <span class="status">
                                ${vehicle.status}
                            </span>
                        </td>
                    </tr>

                </table>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   VEHICLE OWNERS
===================================================== */

function ownersPage() {

    pageContent.innerHTML = `

        <div class="data-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        Vehicle Owners
                    </h1>

                    <p>
                        Manage vehicle owners and
                        their transport operations.
                    </p>

                </div>


                <button
                    class="primary-btn"
                    onclick="addOwner()"
                >
                    + Add Owner
                </button>

            </div>


            <div class="data-card">


                <div class="toolbar">

                    <input
                        class="filter-input"
                        placeholder="Search owner..."
                    >

                    <button class="primary-btn">
                        Filter
                    </button>

                </div>


                <div class="table-wrapper">

                    <table class="simple-table">

                        <thead>

                            <tr>

                                <th>
                                    Owner
                                </th>

                                <th>
                                    Phone
                                </th>

                                <th>
                                    Vehicles
                                </th>

                                <th>
                                    Completed Trips
                                </th>

                                <th>
                                    Total Earnings
                                </th>

                                <th>
                                    Status
                                </th>

                                <th>
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            ${owners.map(owner => `

                                <tr>

                                    <td>
                                        <strong>
                                            ${owner.name}
                                        </strong>
                                    </td>

                                    <td>
                                        ${owner.phone}
                                    </td>

                                    <td>
                                        ${owner.vehicles}
                                    </td>

                                    <td>
                                        ${owner.trips}
                                    </td>

                                    <td>
                                        ${owner.earning}
                                    </td>

                                    <td>

                                        <span class="status">
                                            ${owner.status}
                                        </span>

                                    </td>

                                    <td>

                                        <button
                                            class="action-btn"
                                            onclick="viewOwner('${owner.name}')"
                                        >
                                            View
                                        </button>

                                    </td>

                                </tr>

                            `).join("")}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   ADD OWNER
===================================================== */

function addOwner() {

    alert(
        "Prototype: Add Vehicle Owner form will be connected here."
    );
}


/* =====================================================
   VIEW OWNER
===================================================== */

function viewOwner(ownerName) {

    const owner =
        owners.find(
            item =>
                item.name === ownerName
        );


    if (!owner) {
        return;
    }


    pageContent.innerHTML = `

        <div class="data-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        ${owner.name}
                    </h1>

                    <p>
                        Vehicle owner profile and
                        transport performance.
                    </p>

                </div>

            </div>


            <div class="data-card">

                <table class="simple-table">

                    <tr>

                        <th>
                            Owner Name
                        </th>

                        <td>
                            ${owner.name}
                        </td>

                    </tr>

                    <tr>

                        <th>
                            Phone
                        </th>

                        <td>
                            ${owner.phone}
                        </td>

                    </tr>

                    <tr>

                        <th>
                            Vehicles
                        </th>

                        <td>
                            ${owner.vehicles}
                        </td>

                    </tr>

                    <tr>

                        <th>
                            Completed Trips
                        </th>

                        <td>
                            ${owner.trips}
                        </td>

                    </tr>

                    <tr>

                        <th>
                            Total Earnings
                        </th>

                        <td>
                            ${owner.earning}
                        </td>

                    </tr>

                    <tr>

                        <th>
                            Status
                        </th>

                        <td>

                            <span class="status">
                                ${owner.status}
                            </span>

                        </td>

                    </tr>

                </table>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   GENERIC PAGE
===================================================== */

function genericPage(
    title,
    description,
    columns
) {

    pageContent.innerHTML = `

        <div class="data-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        ${title}
                    </h1>

                    <p>
                        ${description}
                    </p>

                </div>


                <button
                    class="primary-btn"
                    onclick="genericAddAction('${title}')"
                >
                    + Add New
                </button>

            </div>


            <div class="data-card">


                <div class="toolbar">

                    <input
                        class="filter-input"
                        placeholder="Search ${title.toLowerCase()}..."
                    >

                    <button class="primary-btn">
                        Filter
                    </button>

                </div>


                <div class="table-wrapper">

                    <table class="simple-table">

                        <thead>

                            <tr>

                                ${columns.map(
                                    column => `
                                        <th>
                                            ${column}
                                        </th>
                                    `
                                ).join("")}

                            </tr>

                        </thead>


                        <tbody>

                            <tr>

                                ${columns.map(
                                    (column, index) => {

                                        if (index === 0) {

                                            return `
                                                <td>
                                                    <strong>
                                                        Demo Record
                                                    </strong>
                                                </td>
                                            `;
                                        }

                                        if (
                                            column
                                                .toLowerCase()
                                                .includes("status")
                                        ) {

                                            return `
                                                <td>

                                                    <span
                                                        class="status"
                                                    >
                                                        Active
                                                    </span>

                                                </td>
                                            `;
                                        }

                                        return `
                                            <td>
                                                Demo Data
                                            </td>
                                        `;

                                    }
                                ).join("")}

                            </tr>


                            <tr>

                                ${columns.map(
                                    (column, index) => {

                                        if (index === 0) {

                                            return `
                                                <td>
                                                    <strong>
                                                        Sample Record
                                                    </strong>
                                                </td>
                                            `;
                                        }

                                        return `
                                            <td>
                                                View Details
                                            </td>
                                        `;

                                    }
                                ).join("")}

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   WITHDRAWAL PAGE
===================================================== */

function withdrawalsPage() {

    pageContent.innerHTML = `

        <div class="data-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        Withdrawal Requests
                    </h1>

                    <p>
                        Review and manage vehicle owner
                        withdrawal requests.
                    </p>

                </div>

            </div>


            <!-- WITHDRAWAL KPI -->

            <div class="kpi-grid">


                <div class="kpi-card">

                    <div class="kpi-icon kpi-orange">

                        <i data-lucide="clock-3"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Pending Requests
                        </div>

                        <div class="kpi-value">
                            3
                        </div>

                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-icon kpi-green">

                        <i data-lucide="circle-check"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Approved
                        </div>

                        <div class="kpi-value">
                            18
                        </div>

                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-icon kpi-blue">

                        <i data-lucide="indian-rupee"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Total Withdrawn
                        </div>

                        <div class="kpi-value">
                            ₹4,86,500
                        </div>

                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-icon kpi-red">

                        <i data-lucide="hourglass"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Pending Amount
                        </div>

                        <div class="kpi-value">
                            ₹74,800
                        </div>

                    </div>

                </div>

            </div>


            <!-- TABLE -->

            <div class="data-card">


                <div class="toolbar">

                    <input
                        class="filter-input"
                        placeholder="Search owner or request ID..."
                    >

                    <button class="primary-btn">
                        Filter
                    </button>

                </div>


                <div class="table-wrapper">

                    <table class="simple-table">


                        <thead>

                            <tr>

                                <th>
                                    Request ID
                                </th>

                                <th>
                                    Vehicle Owner
                                </th>

                                <th>
                                    Amount
                                </th>

                                <th>
                                    Request Date
                                </th>

                                <th>
                                    Bank Account
                                </th>

                                <th>
                                    Status
                                </th>

                                <th>
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody>


                            <tr>

                                <td>
                                    <strong>
                                        WD-2026-00124
                                    </strong>
                                </td>

                                <td>
                                    Pankaj Kumar
                                </td>

                                <td>
                                    ₹32,500
                                </td>

                                <td>
                                    14 Sep 2026
                                </td>

                                <td>
                                    XXXX XXXX 4283
                                </td>

                                <td>

                                    <span
                                        class="withdrawal-status pending"
                                    >
                                        Pending
                                    </span>

                                </td>

                                <td>

                                    <button
                                        class="action-btn"
                                        onclick="reviewWithdrawal('WD-2026-00124')"
                                    >
                                        Review
                                    </button>

                                </td>

                            </tr>


                            <tr>

                                <td>
                                    <strong>
                                        WD-2026-00123
                                    </strong>
                                </td>

                                <td>
                                    Suresh Yadav
                                </td>

                                <td>
                                    ₹24,300
                                </td>

                                <td>
                                    13 Sep 2026
                                </td>

                                <td>
                                    XXXX XXXX 5621
                                </td>

                                <td>

                                    <span
                                        class="withdrawal-status pending"
                                    >
                                        Pending
                                    </span>

                                </td>

                                <td>

                                    <button
                                        class="action-btn"
                                        onclick="reviewWithdrawal('WD-2026-00123')"
                                    >
                                        Review
                                    </button>

                                </td>

                            </tr>


                            <tr>

                                <td>
                                    <strong>
                                        WD-2026-00122
                                    </strong>
                                </td>

                                <td>
                                    Ramesh Kumar
                                </td>

                                <td>
                                    ₹18,000
                                </td>

                                <td>
                                    13 Sep 2026
                                </td>

                                <td>
                                    XXXX XXXX 7812
                                </td>

                                <td>

                                    <span
                                        class="withdrawal-status approved"
                                    >
                                        Approved
                                    </span>

                                </td>

                                <td>

                                    <button
                                        class="action-btn"
                                        onclick="reviewWithdrawal('WD-2026-00122')"
                                    >
                                        View
                                    </button>

                                </td>

                            </tr>


                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   WITHDRAWAL REVIEW
===================================================== */

function reviewWithdrawal(requestId) {

    alert(
        `Withdrawal Request ${requestId}\n\n` +
        `Prototype: Review / Approve / Reject workflow will be connected here.`
    );
}


/* =====================================================
   GENERIC ADD
===================================================== */

function genericAddAction(title) {

    alert(
        `Prototype: Add ${title} form will be connected here.`
    );
}


/* =====================================================
   ROUTE TABS
===================================================== */

function setupRouteTabs() {

    const tabs =
        document.querySelectorAll(
            ".route-tab"
        );


    tabs.forEach(tab => {

        tab.addEventListener(
            "click",
            function () {

                tabs.forEach(
                    button =>
                        button.classList.remove(
                            "active"
                        )
                );


                this.classList.add(
                    "active"
                );


                const route =
                    this.dataset.route;


                if (route === "dhanbad") {

                    showRouteMessage(
                        "Dhanbad → Ramgarh"
                    );

                } else if (
                    route === "ramgarh"
                ) {

                    showRouteMessage(
                        "Ramgarh → Urimari"
                    );

                } else {

                    dashboardPage();

                }

            }
        );

    });

}


/* =====================================================
   ROUTE MESSAGE
===================================================== */

function showRouteMessage(routeName) {

    const panel =
        document.querySelector(".panel");


    if (!panel) {
        return;
    }


    const routeSummary =
        panel.querySelector(
            ".route-summary"
        );


    if (routeSummary) {

        const name =
            routeSummary.querySelector(
                ".route-name strong"
            );

        const description =
            routeSummary.querySelector(
                ".route-name span"
            );


        if (name) {

            name.textContent =
                routeName;
        }


        if (description) {

            description.textContent =
                `Route data preview for ${routeName}`;
        }
    }

}


/* =====================================================
   EXPORT REPORT
===================================================== */

function exportReport() {

    alert(
        "Prototype: Report export will be connected to the real reporting system."
    );
}


/* =====================================================
   SIDEBAR NAVIGATION
===================================================== */

document
    .querySelectorAll(
        ".nav-item[data-page]"
    )
    .forEach(item => {

        item.addEventListener(
            "click",
            function () {

                const page =
                    this.dataset.page;


                /* ACTIVE ITEM */

                document
                    .querySelectorAll(
                        ".nav-item[data-page]"
                    )
                    .forEach(nav =>
                        nav.classList.remove(
                            "active"
                        )
                    );


                this.classList.add(
                    "active"
                );


                /* PAGE */

                if (
                    page ===
                    "dashboard"
                ) {

                    dashboardPage();

                }

                else if (
                    page ===
                    "vehicles"
                ) {

                    vehiclesPage();

                }

                else if (
                    page ===
                    "owners"
                ) {

                    ownersPage();

                }

                else if (
                    page ===
                    "routes"
                ) {

                    genericPage(

                        "Routes",

                        "Manage transport routes and route-wise performance.",

                        [
                            "Route",
                            "Vehicles",
                            "Completed Trips",
                            "Material",
                            "Diesel",
                            "Earnings",
                            "Status"
                        ]

                    );

                }

                else if (
                    page ===
                    "trips"
                ) {

                    genericPage(

                        "Trip Reports",

                        "View detailed trip records, weights, diesel and earnings.",

                        [
                            "Trip No.",
                            "Vehicle",
                            "Route",
                            "Material",
                            "Diesel",
                            "Trip Amount",
                            "Net Earning",
                            "Status"
                        ]

                    );

                }

                else if (
                    page ===
                    "withdrawals"
                ) {

                    withdrawalsPage();

                }

                else if (
                    page ===
                    "payments"
                ) {

                    genericPage(

                        "Payments",

                        "Track payments and financial transactions.",

                        [
                            "Payment ID",
                            "Owner",
                            "Amount",
                            "Date",
                            "Method",
                            "Status"
                        ]

                    );

                }

                else if (
                    page ===
                    "expenses"
                ) {

                    genericPage(

                        "Expense & Fuel",

                        "Monitor diesel consumption and operating expenses.",

                        [
                            "Date",
                            "Vehicle",
                            "Diesel",
                            "Rate",
                            "Fuel Cost",
                            "Status"
                        ]

                    );

                }

                else if (
                    page ===
                    "users"
                ) {

                    genericPage(

                        "Users",

                        "Manage users and system access.",

                        [
                            "Name",
                            "Role",
                            "Phone",
                            "Email",
                            "Last Login",
                            "Status"
                        ]

                    );

                }

                else if (
                    page ===
                    "settings"
                ) {

                    genericPage(

                        "Settings",

                        "Manage company profile, diesel rate and security settings.",

                        [
                            "Setting",
                            "Current Value",
                            "Last Updated"
                        ]

                    );

                }


                /* CLOSE MOBILE SIDEBAR */

                if (
                    window.innerWidth <= 900
                ) {

                    sidebar.classList.remove(
                        "open"
                    );

                    sidebarOverlay.classList.remove(
                        "show"
                    );

                }

            }
        );

    });


/* =====================================================
   SIDEBAR TOGGLE
===================================================== */

menuToggle.addEventListener(
    "click",
    () => {

        /* MOBILE */

        if (
            window.innerWidth <= 900
        ) {

            sidebar.classList.toggle(
                "open"
            );

            sidebarOverlay.classList.toggle(
                "show"
            );

            return;
        }


        /* DESKTOP */

        sidebar.classList.toggle(
            "collapsed"
        );

    }
);


/* =====================================================
   MOBILE CLOSE
===================================================== */

mobileClose.addEventListener(
    "click",
    () => {

        sidebar.classList.remove(
            "open"
        );

        sidebarOverlay.classList.remove(
            "show"
        );

    }
);


/* =====================================================
   OVERLAY CLICK
===================================================== */

sidebarOverlay.addEventListener(
    "click",
    () => {

        sidebar.classList.remove(
            "open"
        );

        sidebarOverlay.classList.remove(
            "show"
        );

    }
);


/* =====================================================
   WINDOW RESIZE
===================================================== */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 900
        ) {

            sidebar.classList.remove(
                "open"
            );

            sidebarOverlay.classList.remove(
                "show"
            );

        }

    }
);


/* =====================================================
   GLOBAL SEARCH
===================================================== */

globalSearch.addEventListener(
    "input",
    function () {

        const value =
            this.value
                .trim()
                .toLowerCase();


        if (!value) {
            return;
        }


        console.log(
            "Prototype search:",
            value
        );

    }
);


/* =====================================================
   INITIAL PAGE
===================================================== */

dashboardPage();

lucide.createIcons();

/* =====================================================
   VEHICLE OWNER DATA
===================================================== */

const ownerVehicles = [

    {
        number: "JH 09 4283",
        type: "Tipper",
        capacity: "20 Wheeler",
        trips: 18,
        material: "284.6 MT",
        diesel: "168 Ltr",
        earning: "₹1,52,400",
        status: "Active"
    },

    {
        number: "JH 09 7812",
        type: "Tipper",
        capacity: "16 Wheeler",
        trips: 20,
        material: "312.8 MT",
        diesel: "184 Ltr",
        earning: "₹96,200",
        status: "Active"
    }

];


const ownerTrips = [

    {
        trip: "TRP-0018",
        vehicle: "JH 09 4283",
        date: "14 Sep 2026",
        entry: "06:15",
        exit: "07:45",
        material: "24.44 MT",
        amount: "₹12,500",
        diesel: "10 Ltr",
        dieselCost: "₹1,100",
        earning: "₹11,100"
    },

    {
        trip: "TRP-0017",
        vehicle: "JH 09 4283",
        date: "13 Sep 2026",
        entry: "07:05",
        exit: "08:35",
        material: "23.84 MT",
        amount: "₹12,000",
        diesel: "9 Ltr",
        dieselCost: "₹990",
        earning: "₹10,710"
    },

    {
        trip: "TRP-0016",
        vehicle: "JH 09 7812",
        date: "13 Sep 2026",
        entry: "09:10",
        exit: "10:45",
        material: "25.10 MT",
        amount: "₹13,000",
        diesel: "10 Ltr",
        dieselCost: "₹1,100",
        earning: "₹11,600"
    },

    {
        trip: "TRP-0015",
        vehicle: "JH 09 4283",
        date: "12 Sep 2026",
        entry: "06:40",
        exit: "08:15",
        material: "24.20 MT",
        amount: "₹12,300",
        diesel: "9 Ltr",
        dieselCost: "₹990",
        earning: "₹11,010"
    }

];


/* =====================================================
   VEHICLE OWNER DASHBOARD
===================================================== */

function ownerDashboardPage() {

    pageContent.innerHTML = `

        <div class="owner-page">


            <!-- WELCOME -->

            <div class="owner-welcome">

                <div>

                    <h1>
                        Welcome Back, Pankaj Kumar
                    </h1>

                    <p>
                        Here's an overview of your vehicles,
                        trips and earnings.
                    </p>

                    <span class="owner-role">
                        Vehicle Owner
                    </span>

                </div>


                <div class="owner-profile-mini">

                    <div class="owner-avatar-large">
                        PK
                    </div>

                </div>

            </div>


            <!-- KPI -->

            <div class="owner-kpi-grid">


                <div class="kpi-card">

                    <div class="kpi-icon kpi-blue">

                        <i data-lucide="truck"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            My Vehicles
                        </div>

                        <div class="kpi-value">
                            2
                        </div>

                        <div class="kpi-change">
                            Both Active
                        </div>

                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-icon kpi-green">

                        <i data-lucide="check-circle"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Completed Trips
                        </div>

                        <div class="kpi-value">
                            38
                        </div>

                        <div class="kpi-change">
                            +6 this week
                        </div>

                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-icon kpi-orange">

                        <i data-lucide="indian-rupee"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Total Earnings
                        </div>

                        <div class="kpi-value">
                            ₹2,48,600
                        </div>

                        <div class="kpi-change">
                            +12.4% this month
                        </div>

                    </div>

                </div>


                <div class="kpi-card">

                    <div class="kpi-icon kpi-blue">

                        <i data-lucide="wallet"></i>

                    </div>

                    <div>

                        <div class="kpi-label">
                            Available Balance
                        </div>

                        <div class="kpi-value">
                            ₹74,800
                        </div>

                        <div class="kpi-change">
                            Ready for withdrawal
                        </div>

                    </div>

                </div>

            </div>


            <!-- MY VEHICLES -->

            <div class="owner-section">

                <div class="owner-section-header">

                    <div>

                        <h2>
                            My Vehicles
                        </h2>

                        <p>
                            Vehicles registered under your account
                        </p>

                    </div>


                    <button
                        class="view-all-btn"
                        onclick="ownerVehiclesPage()"
                    >
                        View All →
                    </button>

                </div>


                <div class="owner-vehicle-grid">


                    ${ownerVehicles.map(vehicle => `

                        <div class="owner-vehicle-card">


                            <div class="owner-vehicle-head">

                                <div class="owner-truck-image">
                                    🚛
                                </div>

                                <div class="owner-vehicle-name">

                                    <strong>
                                        ${vehicle.number}
                                    </strong>

                                    <span>
                                        ${vehicle.type}
                                        •
                                        ${vehicle.capacity}
                                    </span>

                                </div>

                                <span
                                    class="owner-status"
                                    style="margin-left:auto;"
                                >
                                    ${vehicle.status}
                                </span>

                            </div>


                            <div class="owner-vehicle-body">


                                <div class="owner-vehicle-stats">


                                    <div class="owner-mini-stat">

                                        <span>
                                            Trips
                                        </span>

                                        <strong>
                                            ${vehicle.trips}
                                        </strong>

                                    </div>


                                    <div class="owner-mini-stat">

                                        <span>
                                            Material
                                        </span>

                                        <strong>
                                            ${vehicle.material}
                                        </strong>

                                    </div>


                                    <div class="owner-mini-stat">

                                        <span>
                                            Diesel
                                        </span>

                                        <strong>
                                            ${vehicle.diesel}
                                        </strong>

                                    </div>


                                    <div class="owner-mini-stat earning">

                                        <span>
                                            Earnings
                                        </span>

                                        <strong>
                                            ${vehicle.earning}
                                        </strong>

                                    </div>

                                </div>


                                <button
                                    class="owner-view-btn"
                                    onclick="ownerVehicleDetails('${vehicle.number}')"
                                >
                                    View Vehicle Details
                                </button>

                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>


            <!-- BALANCE -->

            <div class="owner-section">

                <div class="owner-section-header">

                    <div>

                        <h2>
                            Earnings & Balance
                        </h2>

                        <p>
                            Your current financial summary
                        </p>

                    </div>

                </div>


                <div class="owner-balance-card">


                    <div class="owner-balance-main">

                        <span>
                            Available Balance
                        </span>

                        <strong>
                            ₹74,800
                        </strong>

                        <button
                            class="owner-withdraw-btn"
                            onclick="ownerWithdrawalPage()"
                        >
                            Withdraw Money
                        </button>

                    </div>


                    <div class="owner-balance-stat">

                        <span>
                            This Month
                        </span>

                        <strong>
                            ₹82,400
                        </strong>

                    </div>


                    <div class="owner-balance-stat">

                        <span>
                            Total Withdrawn
                        </span>

                        <strong>
                            ₹1,73,800
                        </strong>

                    </div>

                </div>

            </div>


            <!-- TWO COLUMNS -->

            <div class="owner-two-column">


                <!-- RECENT TRIPS -->

                <div class="owner-section">

                    <div class="owner-section-header">

                        <div>

                            <h2>
                                Recent Trips
                            </h2>

                            <p>
                                Latest completed trips
                            </p>

                        </div>

                        <button
                            class="view-all-btn"
                            onclick="ownerTripsPage()"
                        >
                            View All →
                        </button>

                    </div>


                    <div class="table-wrapper">

                        <table class="owner-trip-table">

                            <thead>

                                <tr>

                                    <th>
                                        Trip
                                    </th>

                                    <th>
                                        Vehicle
                                    </th>

                                    <th>
                                        Date
                                    </th>

                                    <th>
                                        Material
                                    </th>

                                    <th>
                                        Net Earning
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                ${ownerTrips.slice(0, 4).map(trip => `

                                    <tr>

                                        <td>
                                            <strong>
                                                ${trip.trip}
                                            </strong>
                                        </td>

                                        <td>
                                            ${trip.vehicle}
                                        </td>

                                        <td>
                                            ${trip.date}
                                        </td>

                                        <td>
                                            ${trip.material}
                                        </td>

                                        <td class="earning">
                                            ${trip.earning}
                                        </td>

                                    </tr>

                                `).join("")}

                            </tbody>

                        </table>

                    </div>

                </div>


                <!-- RECENT WITHDRAWALS -->

                <div class="owner-section">

                    <div class="owner-section-header">

                        <div>

                            <h2>
                                Withdrawals
                            </h2>

                            <p>
                                Recent withdrawal activity
                            </p>

                        </div>

                        <button
                            class="view-all-btn"
                            onclick="ownerWithdrawalPage()"
                        >
                            View All →
                        </button>

                    </div>


                    <div class="owner-list">


                        <div class="owner-list-item">

                            <div class="owner-list-left">

                                <div class="owner-list-icon">

                                    <i data-lucide="wallet"></i>

                                </div>

                                <div class="owner-list-text">

                                    <strong>
                                        WD-2026-00124
                                    </strong>

                                    <span>
                                        12 Sep 2026
                                    </span>

                                </div>

                            </div>

                            <div class="owner-list-amount">
                                ₹32,500
                            </div>

                        </div>


                        <div class="owner-list-item">

                            <div class="owner-list-left">

                                <div class="owner-list-icon">

                                    <i data-lucide="circle-check"></i>

                                </div>

                                <div class="owner-list-text">

                                    <strong>
                                        WD-2026-00098
                                    </strong>

                                    <span>
                                        01 Sep 2026
                                    </span>

                                </div>

                            </div>

                            <div class="owner-list-amount">
                                ₹28,000
                            </div>

                        </div>


                        <div class="owner-list-item">

                            <div class="owner-list-left">

                                <div class="owner-list-icon">

                                    <i data-lucide="circle-check"></i>

                                </div>

                                <div class="owner-list-text">

                                    <strong>
                                        WD-2026-00071
                                    </strong>

                                    <span>
                                        20 Aug 2026
                                    </span>

                                </div>

                            </div>

                            <div class="owner-list-amount">
                                ₹24,500
                            </div>

                        </div>


                    </div>

                </div>

            </div>


            <!-- EARNINGS OVERVIEW -->

            <div class="owner-section">

                <div class="owner-section-header">

                    <div>

                        <h2>
                            Earnings Overview
                        </h2>

                        <p>
                            Monthly earnings for the current period
                        </p>

                    </div>

                    <button
                        class="view-all-btn"
                        onclick="ownerEarningsPage()"
                    >
                        Detailed Earnings →
                    </button>

                </div>


                <div class="owner-chart">

                    <div class="owner-chart-bars">

                        <div
                            class="owner-bar"
                            style="height:55%;"
                        >
                            <span>Apr</span>
                        </div>

                        <div
                            class="owner-bar"
                            style="height:70%;"
                        >
                            <span>May</span>
                        </div>

                        <div
                            class="owner-bar"
                            style="height:63%;"
                        >
                            <span>Jun</span>
                        </div>

                        <div
                            class="owner-bar"
                            style="height:82%;"
                        >
                            <span>Jul</span>
                        </div>

                        <div
                            class="owner-bar"
                            style="height:76%;"
                        >
                            <span>Aug</span>
                        </div>

                        <div
                            class="owner-bar"
                            style="height:94%;"
                        >
                            <span>Sep</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   OWNER VEHICLES
===================================================== */

function ownerVehiclesPage() {

    pageContent.innerHTML = `

        <div class="owner-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        My Vehicles
                    </h1>

                    <p>
                        View all vehicles registered under
                        your account.
                    </p>

                </div>

            </div>


            <div class="owner-vehicle-grid">


                ${ownerVehicles.map(vehicle => `

                    <div class="owner-vehicle-card">

                        <div class="owner-vehicle-head">

                            <div class="owner-truck-image">
                                🚛
                            </div>

                            <div class="owner-vehicle-name">

                                <strong>
                                    ${vehicle.number}
                                </strong>

                                <span>
                                    ${vehicle.type}
                                    •
                                    ${vehicle.capacity}
                                </span>

                            </div>

                            <span
                                class="owner-status"
                                style="margin-left:auto;"
                            >
                                ${vehicle.status}
                            </span>

                        </div>


                        <div class="owner-vehicle-body">

                            <div class="owner-vehicle-stats">

                                <div class="owner-mini-stat">

                                    <span>
                                        Completed Trips
                                    </span>

                                    <strong>
                                        ${vehicle.trips}
                                    </strong>

                                </div>

                                <div class="owner-mini-stat">

                                    <span>
                                        Material
                                    </span>

                                    <strong>
                                        ${vehicle.material}
                                    </strong>

                                </div>

                                <div class="owner-mini-stat">

                                    <span>
                                        Diesel
                                    </span>

                                    <strong>
                                        ${vehicle.diesel}
                                    </strong>

                                </div>

                                <div class="owner-mini-stat earning">

                                    <span>
                                        Earnings
                                    </span>

                                    <strong>
                                        ${vehicle.earning}
                                    </strong>

                                </div>

                            </div>


                            <button
                                class="owner-view-btn"
                                onclick="ownerVehicleDetails('${vehicle.number}')"
                            >
                                View Complete Details
                            </button>

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   OWNER VEHICLE DETAILS
===================================================== */

function ownerVehicleDetails(vehicleNumber) {

    const vehicle =
        ownerVehicles.find(
            item =>
                item.number === vehicleNumber
        );


    if (!vehicle) {
        return;
    }


    const trips =
        ownerTrips.filter(
            trip =>
                trip.vehicle === vehicleNumber
        );


    pageContent.innerHTML = `

        <div class="owner-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        ${vehicle.number}
                    </h1>

                    <p>
                        Complete vehicle information
                        and trip history.
                    </p>

                </div>


                <button
                    class="primary-btn"
                    onclick="ownerVehiclesPage()"
                >
                    ← Back to Vehicles
                </button>

            </div>


            <div class="owner-inner-grid">


                <div class="owner-detail-card">

                    <span>
                        Vehicle Type
                    </span>

                    <strong>
                        ${vehicle.type}
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Capacity
                    </span>

                    <strong>
                        ${vehicle.capacity}
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Status
                    </span>

                    <strong>
                        ${vehicle.status}
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Completed Trips
                    </span>

                    <strong>
                        ${vehicle.trips}
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Total Material
                    </span>

                    <strong>
                        ${vehicle.material}
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Total Earnings
                    </span>

                    <strong>
                        ${vehicle.earning}
                    </strong>

                </div>

            </div>


            <br>


            <div class="owner-section">

                <div class="owner-section-header">

                    <div>

                        <h2>
                            Trip History
                        </h2>

                        <p>
                            Trips completed by ${vehicle.number}
                        </p>

                    </div>

                </div>


                <div class="table-wrapper">

                    <table class="owner-trip-table">

                        <thead>

                            <tr>

                                <th>Trip</th>
                                <th>Date</th>
                                <th>Entry</th>
                                <th>Exit</th>
                                <th>Material</th>
                                <th>Trip Amount</th>
                                <th>Diesel</th>
                                <th>Diesel Cost</th>
                                <th>Net Earning</th>

                            </tr>

                        </thead>


                        <tbody>

                            ${
                                trips.length
                                ?
                                trips.map(trip => `

                                    <tr>

                                        <td>
                                            ${trip.trip}
                                        </td>

                                        <td>
                                            ${trip.date}
                                        </td>

                                        <td>
                                            ${trip.entry}
                                        </td>

                                        <td>
                                            ${trip.exit}
                                        </td>

                                        <td>
                                            ${trip.material}
                                        </td>

                                        <td>
                                            ${trip.amount}
                                        </td>

                                        <td>
                                            ${trip.diesel}
                                        </td>

                                        <td>
                                            ${trip.dieselCost}
                                            <br>
                                            <small>
                                                110/L
                                            </small>
                                        </td>

                                        <td class="earning">
                                            ${trip.earning}
                                        </td>

                                    </tr>

                                `).join("")
                                :
                                `
                                    <tr>

                                        <td colspan="9">
                                            No trips found.
                                        </td>

                                    </tr>
                                `
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   OWNER TRIPS
===================================================== */

function ownerTripsPage() {

    pageContent.innerHTML = `

        <div class="owner-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        My Trips
                    </h1>

                    <p>
                        Complete trip history for your vehicles.
                    </p>

                </div>

            </div>


            <div class="owner-section">

                <div class="owner-section-header">

                    <div>

                        <h2>
                            Trip History
                        </h2>

                        <p>
                            Entry, exit, weight, diesel and earnings
                        </p>

                    </div>

                </div>


                <div class="table-wrapper">

                    <table class="owner-trip-table">

                        <thead>

                            <tr>

                                <th>Trip No.</th>
                                <th>Vehicle</th>
                                <th>Date</th>
                                <th>Entry</th>
                                <th>Exit</th>
                                <th>Material</th>
                                <th>Trip Amount</th>
                                <th>Diesel</th>
                                <th>Diesel Cost</th>
                                <th>Net Earning</th>

                            </tr>

                        </thead>


                        <tbody>

                            ${ownerTrips.map(trip => `

                                <tr>

                                    <td>
                                        <strong>
                                            ${trip.trip}
                                        </strong>
                                    </td>

                                    <td>
                                        ${trip.vehicle}
                                    </td>

                                    <td>
                                        ${trip.date}
                                    </td>

                                    <td>
                                        ${trip.entry}
                                    </td>

                                    <td>
                                        ${trip.exit}
                                    </td>

                                    <td>
                                        ${trip.material}
                                    </td>

                                    <td>
                                        ${trip.amount}
                                    </td>

                                    <td>
                                        ${trip.diesel}
                                    </td>

                                    <td>
                                        ${trip.dieselCost}
                                        <br>
                                        <small>
                                            110/L
                                        </small>
                                    </td>

                                    <td class="earning">
                                        ${trip.earning}
                                    </td>

                                </tr>

                            `).join("")}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   OWNER EARNINGS
===================================================== */

function ownerEarningsPage() {

    pageContent.innerHTML = `

        <div class="owner-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        My Earnings
                    </h1>

                    <p>
                        Track your earnings, diesel costs
                        and net income.
                    </p>

                </div>

            </div>


            <div class="owner-inner-grid">


                <div class="owner-detail-card">

                    <span>
                        Total Trip Amount
                    </span>

                    <strong>
                        ₹2,86,000
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Diesel Cost
                    </span>

                    <strong>
                        ₹28,400
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Fixed Charges
                    </span>

                    <strong>
                        ₹9,000
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Net Earnings
                    </span>

                    <strong>
                        ₹2,48,600
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Withdrawn
                    </span>

                    <strong>
                        ₹1,73,800
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Available
                    </span>

                    <strong>
                        ₹74,800
                    </strong>

                </div>

            </div>


            <br>


            <div class="owner-section">

                <div class="owner-section-header">

                    <div>

                        <h2>
                            Earnings Overview
                        </h2>

                        <p>
                            Monthly performance
                        </p>

                    </div>

                </div>


                <div class="owner-chart">

                    <div class="owner-chart-bars">

                        <div class="owner-bar" style="height:55%;">
                            <span>Apr</span>
                        </div>

                        <div class="owner-bar" style="height:70%;">
                            <span>May</span>
                        </div>

                        <div class="owner-bar" style="height:63%;">
                            <span>Jun</span>
                        </div>

                        <div class="owner-bar" style="height:82%;">
                            <span>Jul</span>
                        </div>

                        <div class="owner-bar" style="height:76%;">
                            <span>Aug</span>
                        </div>

                        <div class="owner-bar" style="height:94%;">
                            <span>Sep</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   OWNER WITHDRAWALS
===================================================== */

function ownerWithdrawalPage() {

    pageContent.innerHTML = `

        <div class="owner-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        Withdrawals
                    </h1>

                    <p>
                        Request withdrawals and track
                        previous payments.
                    </p>

                </div>


                <button
                    class="primary-btn"
                    onclick="requestWithdrawal()"
                >
                    + Request Withdrawal
                </button>

            </div>


            <div class="owner-balance-card">


                <div class="owner-balance-main">

                    <span>
                        Available Balance
                    </span>

                    <strong>
                        ₹74,800
                    </strong>

                    <button
                        class="owner-withdraw-btn"
                        onclick="requestWithdrawal()"
                    >
                        Withdraw Money
                    </button>

                </div>


                <div class="owner-balance-stat">

                    <span>
                        Pending
                    </span>

                    <strong>
                        ₹32,500
                    </strong>

                </div>


                <div class="owner-balance-stat">

                    <span>
                        Total Withdrawn
                    </span>

                    <strong>
                        ₹1,73,800
                    </strong>

                </div>

            </div>


            <div class="owner-section">

                <div class="owner-section-header">

                    <div>

                        <h2>
                            Withdrawal History
                        </h2>

                        <p>
                            Your previous withdrawal requests
                        </p>

                    </div>

                </div>


                <div class="table-wrapper">

                    <table class="simple-table">

                        <thead>

                            <tr>

                                <th>
                                    Request ID
                                </th>

                                <th>
                                    Date
                                </th>

                                <th>
                                    Amount
                                </th>

                                <th>
                                    Bank Account
                                </th>

                                <th>
                                    Status
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            <tr>

                                <td>
                                    WD-2026-00124
                                </td>

                                <td>
                                    12 Sep 2026
                                </td>

                                <td>
                                    ₹32,500
                                </td>

                                <td>
                                    XXXX XXXX 4283
                                </td>

                                <td>

                                    <span
                                        class="withdrawal-status pending"
                                    >
                                        Pending
                                    </span>

                                </td>

                            </tr>


                            <tr>

                                <td>
                                    WD-2026-00098
                                </td>

                                <td>
                                    01 Sep 2026
                                </td>

                                <td>
                                    ₹28,000
                                </td>

                                <td>
                                    XXXX XXXX 4283
                                </td>

                                <td>

                                    <span
                                        class="withdrawal-status approved"
                                    >
                                        Completed
                                    </span>

                                </td>

                            </tr>


                            <tr>

                                <td>
                                    WD-2026-00071
                                </td>

                                <td>
                                    20 Aug 2026
                                </td>

                                <td>
                                    ₹24,500
                                </td>

                                <td>
                                    XXXX XXXX 4283
                                </td>

                                <td>

                                    <span
                                        class="withdrawal-status approved"
                                    >
                                        Completed
                                    </span>

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   REQUEST WITHDRAWAL
===================================================== */

function requestWithdrawal() {

    const amount =
        prompt(
            "Enter withdrawal amount (₹):"
        );


    if (!amount) {
        return;
    }


    if (
        isNaN(amount) ||
        Number(amount) <= 0
    ) {

        alert(
            "Please enter a valid amount."
        );

        return;
    }


    if (
        Number(amount) > 74800
    ) {

        alert(
            "Withdrawal amount cannot exceed your available balance of ₹74,800."
        );

        return;
    }


    alert(
        `Withdrawal request created successfully.\n\n` +
        `Amount: ₹${Number(amount).toLocaleString("en-IN")}\n` +
        `Status: Pending`
    );

}


/* =====================================================
   OWNER BANK DETAILS
===================================================== */

function ownerBankPage() {

    pageContent.innerHTML = `

        <div class="owner-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        Bank Details
                    </h1>

                    <p>
                        Your registered bank account
                        for withdrawals.
                    </p>

                </div>


                <button
                    class="primary-btn"
                    onclick="editBankDetails()"
                >
                    Edit Details
                </button>

            </div>


            <div class="owner-inner-grid">


                <div class="owner-detail-card">

                    <span>
                        Account Holder
                    </span>

                    <strong>
                        Pankaj Kumar
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Bank Name
                    </span>

                    <strong>
                        XXXX Bank
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Account Number
                    </span>

                    <strong>
                        XXXX XXXX 4283
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        IFSC Code
                    </span>

                    <strong>
                        XXXX0XXXXXX
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Account Type
                    </span>

                    <strong>
                        Savings
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Verification
                    </span>

                    <strong>
                        Verified
                    </strong>

                </div>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   EDIT BANK
===================================================== */

function editBankDetails() {

    alert(
        "Prototype: Bank details editing form will be connected here."
    );
}


/* =====================================================
   OWNER NOTIFICATIONS
===================================================== */

function ownerNotificationsPage() {

    pageContent.innerHTML = `

        <div class="owner-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        Notifications
                    </h1>

                    <p>
                        Important updates related to your
                        vehicles, trips and payments.
                    </p>

                </div>

            </div>


            <div class="owner-section">

                <div class="owner-list">


                    <div class="owner-list-item">

                        <div class="owner-list-left">

                            <div class="owner-list-icon">

                                <i data-lucide="wallet"></i>

                            </div>

                            <div class="owner-list-text">

                                <strong>
                                    Withdrawal request received
                                </strong>

                                <span>
                                    Your request of ₹32,500
                                    is under review.
                                </span>

                            </div>

                        </div>

                        <span>
                            Today
                        </span>

                    </div>


                    <div class="owner-list-item">

                        <div class="owner-list-left">

                            <div class="owner-list-icon">

                                <i data-lucide="truck"></i>

                            </div>

                            <div class="owner-list-text">

                                <strong>
                                    Trip completed
                                </strong>

                                <span>
                                    Trip TRP-0018 completed
                                    successfully.
                                </span>

                            </div>

                        </div>

                        <span>
                            Today
                        </span>

                    </div>


                    <div class="owner-list-item">

                        <div class="owner-list-left">

                            <div class="owner-list-icon">

                                <i data-lucide="circle-check"></i>

                            </div>

                            <div class="owner-list-text">

                                <strong>
                                    Payment completed
                                </strong>

                                <span>
                                    ₹28,000 withdrawal
                                    has been processed.
                                </span>

                            </div>

                        </div>

                        <span>
                            01 Sep
                        </span>

                    </div>


                </div>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   OWNER PROFILE
===================================================== */

function ownerProfilePage() {

    pageContent.innerHTML = `

        <div class="owner-page">


            <div class="page-header">

                <div class="page-title">

                    <h1>
                        Profile
                    </h1>

                    <p>
                        Your personal account information.
                    </p>

                </div>


                <button
                    class="primary-btn"
                    onclick="editOwnerProfile()"
                >
                    Edit Profile
                </button>

            </div>


            <div class="owner-inner-grid">


                <div class="owner-detail-card">

                    <span>
                        Full Name
                    </span>

                    <strong>
                        Pankaj Kumar
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Phone
                    </span>

                    <strong>
                        +91 98765 43210
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Email
                    </span>

                    <strong>
                        pankaj@example.com
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Role
                    </span>

                    <strong>
                        Vehicle Owner
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Registered Vehicles
                    </span>

                    <strong>
                        2
                    </strong>

                </div>


                <div class="owner-detail-card">

                    <span>
                        Account Status
                    </span>

                    <strong>
                        Active
                    </strong>

                </div>

            </div>

        </div>

    `;

    lucide.createIcons();
}


/* =====================================================
   EDIT PROFILE
===================================================== */

function editOwnerProfile() {

    alert(
        "Prototype: Profile editing form will be connected here."
    );
}


/* =====================================================
   OWNER PAYMENT HISTORY
===================================================== */

function ownerPaymentHistoryPage() {

    genericPage(

        "Payment History",

        "View all completed payments received from the company.",

        [
            "Payment ID",
            "Date",
            "Trip",
            "Amount",
            "Method",
            "Status"
        ]

    );

}


/* =====================================================
   OWNER PAGE ROUTING
===================================================== */

function loadOwnerPage(page) {

    if (
        page ===
        "owner-dashboard"
    ) {

        ownerDashboardPage();

    }

    else if (
        page ===
        "owner-vehicles"
    ) {

        ownerVehiclesPage();

    }

    else if (
        page ===
        "owner-trips"
    ) {

        ownerTripsPage();

    }

    else if (
        page ===
        "owner-earnings"
    ) {

        ownerEarningsPage();

    }

    else if (
        page ===
        "owner-withdrawals"
    ) {

        ownerWithdrawalPage();

    }

    else if (
        page ===
        "owner-bank"
    ) {

        ownerBankPage();

    }

    else if (
        page ===
        "owner-notifications"
    ) {

        ownerNotificationsPage();

    }

    else if (
        page ===
        "owner-profile"
    ) {

        ownerProfilePage();

    }

    else if (
        page ===
        "owner-payments"
    ) {

        ownerPaymentHistoryPage();

    }

}


/* =====================================================
   ADD OWNER NAVIGATION
===================================================== */

document
    .querySelectorAll(
        ".nav-item[data-page^='owner-']"
    )
    .forEach(item => {

        item.addEventListener(
            "click",
            function () {

                const page =
                    this.dataset.page;


                document
                    .querySelectorAll(
                        ".nav-item[data-page]"
                    )
                    .forEach(nav =>
                        nav.classList.remove(
                            "active"
                        )
                    );


                this.classList.add(
                    "active"
                );


                loadOwnerPage(page);


                if (
                    window.innerWidth <= 900
                ) {

                    sidebar.classList.remove(
                        "open"
                    );

                    sidebarOverlay.classList.remove(
                        "show"
                    );

                }

            }
        );

    });
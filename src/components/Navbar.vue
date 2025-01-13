<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a class="navbar-brand py-2 col-7" href="#">
            <img src="../img/logo.png" alt="Your Logo" id="logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" @click="toggleNavbar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto d-flex justify-content-between">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Information</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="mailto:didthatbraids@email.com">
                        <i class="fas fa-envelope"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="toggleSearch">
                        <i class="fas fa-search"></i>
                    </a>
                </li>
            </ul>
            <div v-show="showSearch" class="search-bar">
                <input type="text" placeholder="Cerca..." class="search-input">
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showSearch: false
        }
    },
    methods: {
        toggleSearch() {
            this.showSearch = !this.showSearch;
        },
        toggleNavbar() {
            const navbar = document.getElementById('navbarNav');
            navbar.classList.toggle('show');
        }
    }
}
</script>

<style scoped>
#logo {
    height: 85px;
    width: 100px;
}

.navbar {
    width: 100%;
    background-color: #000000;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.navbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.navbar li {
    margin: 0 15px;
}

.navbar a {
    color: white;
    text-decoration: none;
}

.navbar a:hover {
    text-decoration: underline;
}

.search-bar {
    display: flex;
    align-items: center;
}

.search-bar i {
    margin-right: 10px;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .navbar ul {
        flex-direction: column;
        align-items: center;
    }

    .navbar li {
        margin: 10px 0;
    }
}
</style>
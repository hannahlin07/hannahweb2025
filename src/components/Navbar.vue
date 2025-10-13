<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">Han's Portfolio</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>

          <!-- 作品集下拉 -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="portfolioDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              作品集
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="portfolioDropdown">
              <li>
                <router-link class="dropdown-item" to="/portfolio/db">資料庫專題</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/portfolio/college">五專畢業專題</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/portfolio/bachelor">二技畢業專題</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/portfolio/intern">實習經驗</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
</style>

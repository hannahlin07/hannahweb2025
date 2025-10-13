<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">Han's Portfolio</router-link>

        <!-- 手機漢堡按鈕 -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- 導覽連結 -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">首頁</router-link>
            </li>

            <!-- 作品集下拉選單 -->
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

    <!-- Main Content -->
    <main class="container my-1 pt-1">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3 mt-auto">
      © 2025 Han | Built with Vue + Bootstrap
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style>
body {
  padding-top: 70px; /* 預留 Navbar 高度 */
}

.navbar {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
</style>

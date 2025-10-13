<template>
  <div>
    <!-- Hero 區塊 -->
    <section class="bg-secondary text-white py-5">
      <div class="container mt-4">
        <div class="row align-items-start">
          <div class="col-md-1">
            
          </div>
          <div class="col-md-2">
            <img src="/src/assets/IMG_2657.jpeg" alt="個人照片" class="img-fluid" style="border-radius:10%; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);" />
          </div>
          <div class="col-md-9 text-start">
            <h3 data-aos="fade-down">林書涵 Hannah Lin</h3>
            <br>
            <ul class="list-unstyled" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
              <li style="font-size:20px;">📧 Email: cherry92111081128@gmail.com</li>
              <li style="font-size:20px;">📱 Phone: 0912577792</li>
              <li style="font-size:20px;">💻 GitHub: 
                <a href="https://github.com/yourname" target="_blank">yourname</a>
              </li>
            </ul>
          </div>
      </div>
    </div>
    </section>

    <!-- 學歷 -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold mb-5" data-aos="fade-down" data-aos-duration="1500">🎓 學歷</h2>
        <div class="card shadow-lg border-0 w-75 mx-auto" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
          <div class="card-body text-center">
            <h4 class="fw-bold mb-3 text-primary">國立臺中科技大學 資訊管理系</h4>
            <p class="text-muted mb-2">(2025 年畢業)</p>
            <hr class="w-50 mx-auto mb-4">
            <ul class="list-unstyled text-start d-inline-block text-secondary">
              <li>• 主修課程：程式設計、資料庫管理、系統分析、Linux、雲端、網路安全</li>
              <li>• 技術專長：網頁開發、多媒體整合</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 證照 -->
    <section class="bg-light py-5">
      <div class="container">
        <!-- 標題 -->
        <h2 class="text-center mb-5 fw-bold" data-aos="fade-down">🪪證照</h2>

        <div class="row justify-content-center g-4">
          <div class="col-md-5" data-aos="fade-right">
            <div class="card shadow-sm border-0">
              <div class="card-header bg-primary text-white text-center fw-bold">
                技術與程式設計類
              </div>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">TQC+ 程式語言 (Python)</li>
                <li class="list-group-item">MTA - Introduction to Programming using HTML and CSS</li>
                <li class="list-group-item">丙級電腦軟體設計技術士</li>
              </ul>
            </div>
          </div>

          <div class="col-md-5" data-aos="fade-right">
            <div class="card shadow-sm border-0">
              <div class="card-header bg-warning text-dark text-center fw-bold">
                資訊安全與企業應用類
              </div>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">iPAS 資訊安全工程師初級能力鑑定</li>
                <li class="list-group-item">ERP 軟體應用師</li>
                <li class="list-group-item">EEC - 電子商務及企業電子化概論</li>
              </ul>
            </div>
          </div>

          <div class="col-md-5" data-aos="fade-left">
            <div class="card shadow-sm border-0">
              <div class="card-header bg-success text-white text-center fw-bold">
                雲端與 AI 類
              </div>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">Microsoft Certified: Azure AI Fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 競賽 -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5 fw-bold" data-aos="fade-down" data-aos-duration="1500">🏆 競賽</h2>

        <ul class="list-group w-75 mx-auto mb-5">
          <li class="list-group-item text-center" data-aos="fade-right" data-aos-duration="1200">
            2022 資訊與流通學院專題成果展五專部第三名
          </li>
          <li class="list-group-item text-center" data-aos="fade-left" data-aos-duration="1200">
            2024 國科會第4屆「尋找資安女婕思」獲得佳作
          </li>
        </ul>

        <!-- 左右排版區塊 -->
        <div class="row align-items-center w-75 mx-auto">
          <!-- 左邊影片 -->
          <div class="col-md-6 mb-4 mb-md-0" data-aos="zoom-in" data-aos-duration="2000">
            <div class="ratio ratio-16x9 shadow-lg rounded-3 overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/Af3oSqP-K30" 
                title="資安女婕思決賽完整影片" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
              </iframe>
            </div>
          </div>

          <!-- 右邊文字說明 -->
          <div class="col-md-6 text-start text-secondary" data-aos="fade-up" data-aos-duration="1500">
            <h5 class="fw-bold text-primary mb-3">尋找資安女婕思</h5>
            <p>
              我們針對智慧手錶可能帶來的資安風險提出分析與解決方案。主要議題為：
              家長購買來路不明的智慧手錶後，個人資料可能被有心人士竊取。為了保障使用者資料安全，
              團隊提出了以下防護措施：
            </p>
            <ul>
              <li>多因子認證，強化使用者登入安全</li>
              <li>端到端加密（E2EE），確保資料傳輸安全</li>
              <li>量子密碼學技術，提高加密強度與防護能力</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 特質 -->
    <section class="py-5" style="background: linear-gradient(135deg, #f8f9fa, #e9f5ff);">
      <div class="container">
        <h2 class="text-center mb-5 fw-bold text-primary">👩‍🦰個性特質</h2>
        <div class="row justify-content-center text-center">
          
          <div class="col-md-3 mb-4">
            <div class="trait-card p-4 bg-white shadow-sm rounded-4 h-100">
              <i class="bi bi-people-fill fs-1 text-primary"></i>
              <h5 class="mt-3 fw-semibold">團隊合作</h5>
              <p class="small text-muted">善於協調與溝通，讓專案能順利推進。</p>
            </div>
          </div>

          <div class="col-md-3 mb-4">
            <div class="trait-card p-4 bg-white shadow-sm rounded-4 h-100">
              <i class="bi bi-gear-fill fs-1 text-success"></i>
              <h5 class="mt-3 fw-semibold">注意細節</h5>
              <p class="small text-muted">對程式碼品質與UI呈現都保持高標準。</p>
            </div>
          </div>

          <div class="col-md-3 mb-4">
            <div class="trait-card p-4 bg-white shadow-sm rounded-4 h-100">
              <i class="bi bi-lightbulb-fill fs-1 text-warning"></i>
              <h5 class="mt-3 fw-semibold">重點歸納</h5>
              <p class="small text-muted">能有效整理資訊，掌握核心問題。</p>
            </div>
          </div>

          <div class="col-md-3 mb-4">
            <div class="trait-card p-4 bg-white shadow-sm rounded-4 h-100">
              <i class="bi bi-hourglass-split fs-1 text-danger"></i>
              <h5 class="mt-3 fw-semibold">隨機應變</h5>
              <p class="small text-muted">面對突發狀況能冷靜分析，迅速調整。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    

    <!-- 自傳 -->
    <section id="about" class="about-section py-5">
      <div class="container">
        <h2 class="text-center mb-5 fw-bold section-title">📝自傳</h2>

        <h5 class="sub-title w-75 mx-auto mb-2">個人簡介</h5>
        <p class="text-block w-75 mx-auto mb-4">
          我是林書涵，來自彰化市，畢業於國立臺中科技大學資訊管理系。在學習與實作的過程中，
          我養成了負責任、專注細節、樂於解決問題的特質。喜歡透過實作，將想法轉化為具體成果，
          並從中累積成就感與學習成長。面對挑戰時，我保持積極學習的態度，勇於嘗試新技術，期
          許自己能在專業領域持續進步。
        </p>

        <h5 class="sub-title w-75 mx-auto mb-2">求學歷程</h5>
        <p class="text-block w-75 mx-auto mb-4">
          在五專與二技的求學過程中，累積了程式設計、系統開發與資訊安全的基礎能力，熟悉 C++、Java、Python
          等程式語言，並學習APP、網頁開發、資料庫管理、網路、資訊安全與雲端等課程。
        </p>

        <p class="text-block w-75 mx-auto mb-4">
          🔷作品實作：
          完成系統分析書撰寫、網頁開發、多媒體遊戲製作等專案，提升專業技能與團隊合作能力。
        </p>

        <p class="text-block w-75 mx-auto mb-4">
          🔷競賽與證照：
          曾參與國科會資訊安全相關的比賽「資安女婕思」並獲得佳作，後續也取得經濟部 iPAS 資訊安全工程師證照。
        </p>

        <p class="text-block w-75 mx-auto mb-4">
          🔷實習經驗：
        </p>
        <p class="text-block intern-block w-75 mx-auto mb-4">
          <strong>正邦數位有限公司 – 網路爬蟲實習生 (2023/02–2023/06)</strong>
          1. 使用 Python 撰寫網路爬蟲，蒐集股票數據並儲存至 Cassandra 資料庫<br>
          2. 撰寫 API 提供資料查詢，累積資料處理與後端開發的實務經驗
        </p>

        <p class="text-block intern-block w-75 mx-auto mb-4">
          <strong>榮田精機股份有限公司 – 前端開發實習生 (2025/02–2025/06)</strong>
          1. 參與內部系統開發，使用 HTML、CSS、JavaScript、jQuery、Bootstrap 建置介面<br>
          2. 串接後端 API，進行資料動態渲染與表單驗證<br>
          3. 優化 UI/UX 流程，提升使用體驗<br>
          4. 實作登入驗證功能，整合 NFC 讀卡機進行使用者身分驗證
        </p>

        <p class="text-block w-75 mx-auto mb-4">
          兩次實習讓我從「學習技術」進一步成長為能「思考需求」。在第一次實習中，我培養了自學與解決問題的能力，
          能主動利用資源學習新技術；而在第二次實習中，我學會從使用者角度出發，思考功能存在的目的與實際應用情境。
          這些經驗不僅強化了我在前後端開發與系統整合上的實作能力，也讓我理解到開發的價值在於解決真實問題，
          並為未來的職涯奠定了扎實的基礎。
        </p>

        <h5 class="sub-title w-75 mx-auto mb-2">未來規劃</h5>
        <p class="text-block w-75 mx-auto mb-4">
          期望能在專業的網頁開發團隊中成長，短期內專注於前端技術的強化，持續精進 HTML、CSS、
          JavaScript、前端框架等技術，並提升使用 API 串接與前端效能優化的能力。中期規劃則希望
          能逐步學習後端技術（如 ASP.NET Core、資料庫設計與 API 開發），並結合前端所學，往全
          端工程師方向發展，未來能獨立完成從前端介面到後端系統的整合開發，成為兼具技術廣度
          與深度的工程師。
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
section {
  scroll-margin-top: 80px;
}
</style>

<style>
  .trait-card {
    transition: all 0.3s ease;
  }
  .trait-card:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  .trait-card i {
    transition: transform 0.4s ease, color 0.3s ease;
  }
  .trait-card:hover i {
    transform: rotate(10deg) scale(1.1);
    color: #0d6efd;
  }
</style>

<style>
  .about-section {
    background: #f9fafb;
  }

  .section-title {
    color: #235297ff;
    letter-spacing: 2px;
    padding-bottom: 5px;
  }

  .sub-title {
    color: #0056b3;
    font-weight: 700;
    border-left: 5px solid #0d6efd;
    padding-left: 10px;
  }

  .text-block {
    line-height: 1.9;
    color: #333;
    font-size: 1.05rem;
    margin-bottom: 1.5rem;
    text-align: justify;
  }

  .intern-block {
    padding-left: 2em; /* 整段縮排 */
  }

  .intern-block strong {
    display: block;
    margin-bottom: 0.5rem;
    color: #0d6efd;
  }
</style>
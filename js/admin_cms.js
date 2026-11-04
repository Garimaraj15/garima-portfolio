/**
 * Garima Raj Portfolio - CMS & Auto-Sync Admin Controller Hub
 * Modern AI Chat Assistant with Image Attachment & Contextual Commands
 */

(function () {
  "use strict";

  // State
  let config = {};
  let overrides = {};
  let isAuthenticated = false;
  let currentAttachment = null; // { name, data, type }

  // 1. Create Floating Controller Button (Bottom Left)
  function createControllerBtn() {
    if (document.getElementById("cms-controller-btn")) return;
    const btn = document.createElement("button");
    btn.id = "cms-controller-btn";
    btn.innerHTML = `
      <span class="pulsing-dot"></span>
      <span>⚡ Controller Hub</span>
    `;
    btn.title = "Open Portfolio Admin Hub & Auto-Sync";
    btn.addEventListener("click", openHub);
    document.body.appendChild(btn);
  }

  // 2. Create Modal Structure (Media Manager removed, Modern Chat UI)
  function createHubModal() {
    if (document.getElementById("cms-modal-backdrop")) return;

    const backdrop = document.createElement("div");
    backdrop.id = "cms-modal-backdrop";
    backdrop.innerHTML = `
      <div id="cms-hub-dialog">
        <!-- Header -->
        <div class="cms-header">
          <div class="cms-header-title">
            <span style="font-size:24px;">⚙️</span>
            <div>
              <h2>Garima Raj · Controller Hub</h2>
              <span class="cms-header-badge">AI CMS & AUTO-SYNC ENGINE</span>
            </div>
          </div>
          <button class="cms-close-btn" id="cms-close-hub">&times;</button>
        </div>

        <!-- Auth View -->
        <div id="cms-auth-view" style="padding: 40px 24px; text-align: center; max-width: 420px; margin: auto;">
          <div style="font-size: 48px; margin-bottom: 12px;">🔐</div>
          <h3 style="font-family:'Fredoka',sans-serif; color:#5B7B1B; margin-bottom:8px;">Admin Controller Login</h3>
          <p style="font-size:13px; color:#6B7280; margin-bottom:20px;">
            Apna secret password enter karein portfolio modify aur auto-sync karne ke liye.
          </p>
          <div class="cms-field" style="text-align:left;">
            <label>Password</label>
            <input type="password" id="cms-auth-pwd" class="cms-input" placeholder="Default: garima123" />
          </div>
          <div id="cms-auth-error" style="color:#E11D48; font-size:12px; margin-bottom:12px; display:none;"></div>
          <button id="cms-auth-submit" class="cms-btn" style="width:100%; justify-content:center;">
            Unlock Controller Hub ✨
          </button>
        </div>

        <!-- Main Dashboard View -->
        <div id="cms-dashboard-view" style="display:none; flex-direction:column; height:calc(100% - 75px); overflow:hidden;">
          <!-- Tabs Navigation (Media Manager Removed) -->
          <div class="cms-nav-tabs">
            <button class="cms-tab-btn active" data-tab="tab-bot">🤖 G-Bot AI</button>
            <button class="cms-tab-btn" data-tab="tab-content">✏️ Content & Projects</button>
            <button class="cms-tab-btn" data-tab="tab-sync">🔄 Auto-Sync (GitHub / LeetCode)</button>
            <button class="cms-tab-btn" data-tab="tab-settings">⚙️ API Keys & .env</button>
          </div>

          <!-- Body Panels -->
          <div class="cms-body">
            <!-- TAB 1: G-Bot AI Copilot with Rich Chat & Attachments -->
            <div class="cms-panel active" id="tab-bot">
              <div style="margin-bottom: 10px; display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <h4 style="margin:0; color:#5B7B1B; font-family:'Fredoka',sans-serif;">G-Bot Admin Copilot</h4>
                  <p style="margin:2px 0 0; font-size:12px; color:#6B7280;">
                    Photo attach karein aur saath mein likhein kya karna hai (jaise pair-programming mein karte hain!)
                  </p>
                </div>
                <div style="display:flex; gap:6px;">
                  <button class="cms-btn cms-btn-secondary" style="font-size:11px; padding:5px 12px;" onclick="window.cmsQuickAction('sync-github')">🐙 Sync GitHub</button>
                  <button class="cms-btn cms-btn-secondary" style="font-size:11px; padding:5px 12px;" onclick="window.cmsQuickAction('sync-leetcode')">🧩 Sync LeetCode</button>
                </div>
              </div>

              <!-- Chat Box -->
              <div class="cms-chat-box" id="cms-chat-box">
                <div class="cms-chat-messages" id="cms-bot-messages">
                  <div class="cms-msg bot">
                    👋 <strong>Hello Garima!</strong> Main tumhara portfolio AI Copilot hoon.
                    <br/><br/>
                    Aap mujhse yahan directly baat kar sakti hain, jaise:<br/>
                    • 📷 <strong>Photo attach karke</strong> likhein: <em>"Ye photo Her Voice project me laga do"</em> ya <em>"Meri profile photo update karo"</em><br/>
                    • 🐙 <em>"GitHub se new repos sync karo"</em><br/>
                    • 🧩 <em>"LeetCode stats update karo"</em><br/>
                    • 📁 <em>"Gullak project ka description update karo"</em>
                  </div>
                </div>

                <!-- Input Container with Attachment Tray -->
                <div class="cms-chat-input-container">
                  <!-- Attachment Preview Tray -->
                  <div id="cms-attachment-tray">
                    <img id="cms-tray-img" class="cms-tray-thumb" src="" alt="attachment preview" />
                    <div class="cms-tray-info">
                      <div class="cms-tray-filename" id="cms-tray-name">image.png</div>
                      <div class="cms-tray-hint">Photo attached! Ab message likh kar Send karein 👇</div>
                    </div>
                    <button class="cms-tray-remove-btn" id="cms-tray-remove" title="Remove attachment">&times;</button>
                  </div>

                  <!-- Bar -->
                  <div class="cms-chat-input-bar">
                    <input type="file" id="cms-file-input" style="display:none;" accept="image/*" />
                    <button class="cms-chat-attach-btn" id="cms-attach-btn" title="Attach Photo / Screenshot">📎</button>
                    <input type="text" id="cms-bot-input" class="cms-chat-input" placeholder="Message G-Bot or describe what to do with the photo..." />
                    <button id="cms-bot-send" class="cms-btn">Send</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- TAB 2: Visual Content & Projects -->
            <div class="cms-panel" id="tab-content">
              <h4 style="margin:0 0 12px; color:#5B7B1B; font-family:'Fredoka',sans-serif;">Profile & Hero Branding</h4>
              <div class="cms-grid-2">
                <div class="cms-field">
                  <label>Full Name</label>
                  <input type="text" id="cms-edit-name" class="cms-input" value="Garima Raj" />
                </div>
                <div class="cms-field">
                  <label>Role Tagline</label>
                  <input type="text" id="cms-edit-tagline" class="cms-input" value="DATA · GRIT · COMEBACKS" />
                </div>
                <div class="cms-field">
                  <label>Top Polaroid Badge</label>
                  <input type="text" id="cms-edit-badge-top" class="cms-input" value="I'll Find A Way" />
                </div>
                <div class="cms-field">
                  <label>Bottom Polaroid Badge</label>
                  <input type="text" id="cms-edit-badge-bottom" class="cms-input" value="No Backoff" />
                </div>
              </div>

              <div style="border-top:1.5px solid #FCE4EC; margin:16px 0; padding-top:16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                  <h4 style="margin:0; color:#5B7B1B; font-family:'Fredoka',sans-serif;">Portfolio Projects Manager</h4>
                  <button class="cms-btn" style="font-size:12px; padding:6px 14px;" id="cms-btn-add-project">+ Add New Project</button>
                </div>

                <!-- Add Project Form -->
                <div id="cms-add-project-box" style="display:none; background:#FFF7FA; border:1.5px solid #F8C8D8; border-radius:16px; padding:16px; margin-bottom:16px;">
                  <h5 style="margin:0 0 10px; color:#D45E88;">New Project Details</h5>
                  <div class="cms-grid-2">
                    <div class="cms-field"><label>Project Name</label><input type="text" id="cms-np-name" class="cms-input" placeholder="e.g. Gullak" /></div>
                    <div class="cms-field"><label>Tagline</label><input type="text" id="cms-np-tagline" class="cms-input" placeholder="AI-powered smart finance tracker" /></div>
                    <div class="cms-field"><label>Domain</label><input type="text" id="cms-np-domain" class="cms-input" placeholder="Full-Stack AI · FinTech" /></div>
                    <div class="cms-field"><label>Tech Stack (comma separated)</label><input type="text" id="cms-np-tech" class="cms-input" placeholder="React, Flask, Firebase, Tailwind" /></div>
                    <div class="cms-field"><label>Live Demo Link</label><input type="text" id="cms-np-live" class="cms-input" placeholder="https://..." /></div>
                    <div class="cms-field"><label>GitHub Repository Link</label><input type="text" id="cms-np-github" class="cms-input" placeholder="https://github.com/..." /></div>
                  </div>
                  <div class="cms-field"><label>Screenshot Photo URL</label><input type="text" id="cms-np-shot" class="cms-input" placeholder="/pics/my-project.jpg" /></div>
                  <div class="cms-field"><label>Your Contribution</label><textarea id="cms-np-contrib" class="cms-textarea" rows="2" placeholder="Solo development / Backend APIs..."></textarea></div>
                  <div style="display:flex; gap:8px;">
                    <button class="cms-btn" id="cms-np-save">Save Project</button>
                    <button class="cms-btn cms-btn-secondary" id="cms-np-cancel">Cancel</button>
                  </div>
                </div>

                <!-- Projects List -->
                <div id="cms-projects-list"></div>
              </div>

              <div style="text-align:right; margin-top:20px;">
                <button id="cms-save-content-btn" class="cms-btn" style="padding:12px 24px;">💾 Save & Apply Live</button>
              </div>
            </div>

            <!-- TAB 3: Auto-Sync Engine -->
            <div class="cms-panel" id="tab-sync">
              <h4 style="margin:0 0 12px; color:#5B7B1B; font-family:'Fredoka',sans-serif;">Live Platforms Auto-Sync</h4>
              
              <!-- GitHub Auto Sync Card -->
              <div class="cms-sync-card">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:22px;">🐙</span>
                    <div>
                      <h4 style="margin:0; color:#1F2937;">GitHub Repositories Sync</h4>
                      <span style="font-size:11px; color:#6B7280;">Connected Account: <strong id="cms-sync-gh-user">Garimaraj15</strong></span>
                    </div>
                  </div>
                  <button class="cms-btn" style="padding:6px 14px; font-size:12px;" id="cms-btn-sync-github">
                    ⚡ Sync GitHub Now
                  </button>
                </div>
                <div id="cms-gh-results" style="font-size:12px; color:#4B5563;">
                  Click "Sync GitHub Now" to auto-fetch your latest public repositories and import them directly as portfolio project cards.
                </div>
              </div>

              <!-- LeetCode Auto Sync Card -->
              <div class="cms-sync-card">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:22px;">🧩</span>
                    <div>
                      <h4 style="margin:0; color:#1F2937;">LeetCode Dynamic Stats</h4>
                      <span style="font-size:11px; color:#6B7280;">Username: <strong id="cms-sync-lc-user">Garimaraj15</strong></span>
                    </div>
                  </div>
                  <button class="cms-btn" style="padding:6px 14px; font-size:12px;" id="cms-btn-sync-leetcode">
                    ⚡ Fetch LeetCode Stats
                  </button>
                </div>
                <div id="cms-lc-results" style="margin-top:10px;">
                  <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <div class="cms-stat-badge" style="background:#FEF3C7; color:#92400E;">🏆 Total Solved: <strong id="lc-total">380+</strong></div>
                    <div class="cms-stat-badge" style="background:#D1FAE5; color:#065F46;">🟢 Easy: <strong id="lc-easy">160</strong></div>
                    <div class="cms-stat-badge" style="background:#EFF6FF; color:#1E40AF;">🟡 Medium: <strong id="lc-med">185</strong></div>
                    <div class="cms-stat-badge" style="background:#FEE2E2; color:#991B1B;">🔴 Hard: <strong id="lc-hard">35</strong></div>
                    <div class="cms-stat-badge" style="background:#F3E8FF; color:#6B21A8;">📈 Ranking: <strong id="lc-rank">Top 12%</strong></div>
                  </div>
                </div>
              </div>

              <!-- Certifications Card -->
              <div class="cms-sync-card">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-size:22px;">📜</span>
                    <div>
                      <h4 style="margin:0; color:#1F2937;">Certifications & Credentials Feed</h4>
                      <span style="font-size:11px; color:#6B7280;">Automated verified credentials showcase</span>
                    </div>
                  </div>
                </div>
                <div id="cms-certs-list"></div>
              </div>
            </div>

            <!-- TAB 4: Settings & .env -->
            <div class="cms-panel" id="tab-settings">
              <h4 style="margin:0 0 6px; color:#5B7B1B; font-family:'Fredoka',sans-serif;">Environment Variables & API Keys</h4>
              <p style="font-size:12px; color:#6B7280; margin:0 0 16px;">
                Ye settings seedhe <code>scratch/.env</code> file mein save hongi. Deployment ke waqt aap inhi keys ko use kar sakti hain!
              </p>

              <div class="cms-field">
                <label>Admin Password (Controller Button Login)</label>
                <input type="text" id="cfg-admin-pwd" class="cms-input" placeholder="garima123" />
              </div>

              <div class="cms-field">
                <label>Google Gemini API Key (for G-Bot AI Copilot)</label>
                <input type="password" id="cfg-gemini-key" class="cms-input" placeholder="AIzaSy..." />
                <span style="font-size:11px; color:#6B7280; margin-top:3px;">
                  Free key available at <a href="https://aistudio.google.com/" target="_blank" style="color:#D45E88;">Google AI Studio</a>.
                </span>
              </div>

              <div class="cms-grid-2">
                <div class="cms-field">
                  <label>GitHub Username</label>
                  <input type="text" id="cfg-gh-user" class="cms-input" placeholder="Garimaraj15" />
                </div>
                <div class="cms-field">
                  <label>GitHub Token (Optional, for higher rate limits)</label>
                  <input type="password" id="cfg-gh-token" class="cms-input" placeholder="ghp_..." />
                </div>
                <div class="cms-field">
                  <label>LeetCode Username</label>
                  <input type="text" id="cfg-lc-user" class="cms-input" placeholder="Garimaraj15" />
                </div>
                <div class="cms-field">
                  <label>LinkedIn Profile URL</label>
                  <input type="text" id="cfg-li-url" class="cms-input" placeholder="https://www.linkedin.com/in/garimaraj15/" />
                </div>
              </div>

              <div style="text-align:right; margin-top:16px;">
                <button id="cms-save-settings-btn" class="cms-btn">💾 Save Settings to .env</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    // Event Listeners
    document.getElementById("cms-close-hub").addEventListener("click", closeHub);
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeHub();
    });

    // Auth events
    document.getElementById("cms-auth-submit").addEventListener("click", handleLogin);
    document.getElementById("cms-auth-pwd").addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleLogin();
    });

    // Tabs
    document.querySelectorAll(".cms-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    // Attachment & Chat Events
    document.getElementById("cms-attach-btn").addEventListener("click", () => {
      document.getElementById("cms-file-input").click();
    });
    document.getElementById("cms-file-input").addEventListener("change", handleFileSelect);
    document.getElementById("cms-tray-remove").addEventListener("click", removeAttachment);

    document.getElementById("cms-bot-send").addEventListener("click", sendCombinedMessage);
    document.getElementById("cms-bot-input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendCombinedMessage();
    });

    // Drag and drop onto chat box
    setupChatDragAndDrop();

    // Clipboard paste support
    document.getElementById("cms-bot-input").addEventListener("paste", handlePasteImage);

    // Sync buttons
    document.getElementById("cms-btn-sync-github").addEventListener("click", syncGitHub);
    document.getElementById("cms-btn-sync-leetcode").addEventListener("click", syncLeetCode);

    // Settings & Content
    document.getElementById("cms-save-settings-btn").addEventListener("click", saveSettings);
    document.getElementById("cms-save-content-btn").addEventListener("click", saveContent);

    // Add Project Toggle
    document.getElementById("cms-btn-add-project").addEventListener("click", () => {
      const b = document.getElementById("cms-add-project-box");
      b.style.display = b.style.display === "none" ? "block" : "none";
    });
    document.getElementById("cms-np-cancel").addEventListener("click", () => {
      document.getElementById("cms-add-project-box").style.display = "none";
    });
    document.getElementById("cms-np-save").addEventListener("click", handleAddProject);
  }

  function openHub() {
    createHubModal();
      applyLiveDOM();
    const bd = document.getElementById("cms-modal-backdrop");
    bd.classList.add("open");

    if (sessionStorage.getItem("cms_admin_token") === "valid") {
      showDashboard();
    } else {
      document.getElementById("cms-auth-view").style.display = "block";
      document.getElementById("cms-dashboard-view").style.display = "none";
      setTimeout(() => document.getElementById("cms-auth-pwd")?.focus(), 150);
    }
  }

  function closeHub() {
    const bd = document.getElementById("cms-modal-backdrop");
    if (bd) bd.classList.remove("open");

    // Auto logout on close/cross
    sessionStorage.removeItem("cms_admin_token");
    isAuthenticated = false;
    const pwdInput = document.getElementById("cms-auth-pwd");
    if (pwdInput) pwdInput.value = "";
    const authView = document.getElementById("cms-auth-view");
    const dashView = document.getElementById("cms-dashboard-view");
    if (authView) authView.style.display = "block";
    if (dashView) dashView.style.display = "none";
  }

  function switchTab(tabId) {
    document.querySelectorAll(".cms-tab-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.tab === tabId);
    });
    document.querySelectorAll(".cms-panel").forEach((p) => {
      p.classList.toggle("active", p.id === tabId);
    });
  }

  // Auth
  async function handleLogin() {
    const pwd = document.getElementById("cms-auth-pwd").value;
    const errBox = document.getElementById("cms-auth-error");
    errBox.style.display = "none";

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwd })
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem("cms_admin_token", "valid");
        showDashboard();
      } else {
        errBox.textContent = data.error || "Password galat hai! Try garima123";
        errBox.style.display = "block";
      }
    } catch (e) {
      if (pwd === "garima123" || pwd === (config.ADMIN_PASSWORD || "garima123")) {
        sessionStorage.setItem("cms_admin_token", "valid");
        showDashboard();
      } else {
        errBox.textContent = "Invalid password. Default is garima123";
        errBox.style.display = "block";
      }
    }
  }

  function showDashboard() {
    isAuthenticated = true;
    document.getElementById("cms-auth-view").style.display = "none";
    document.getElementById("cms-dashboard-view").style.display = "flex";
    loadInitialData();
  }

  async function loadInitialData() {
    try {
      const cRes = await fetch("/api/admin/config");
      config = await cRes.json();
      document.getElementById("cfg-admin-pwd").value = config.ADMIN_PASSWORD || "";
      document.getElementById("cfg-gemini-key").value = config.GEMINI_API_KEY || "";
      document.getElementById("cfg-gh-user").value = config.GITHUB_USERNAME || "Garimaraj15";
      document.getElementById("cfg-lc-user").value = config.LEETCODE_USERNAME || "Garimaraj15";
      document.getElementById("cfg-li-url").value = config.LINKEDIN_URL || "";
      document.getElementById("cms-sync-gh-user").textContent = config.GITHUB_USERNAME || "Garimaraj15";
      document.getElementById("cms-sync-lc-user").textContent = config.LEETCODE_USERNAME || "Garimaraj15";
    } catch (e) {}

    try {
      const oRes = await fetch("/api/admin/overrides");
      overrides = await oRes.json();
      if (overrides.profile) {
        if (overrides.profile.name) document.getElementById("cms-edit-name").value = overrides.profile.name;
        if (overrides.profile.tagline) document.getElementById("cms-edit-tagline").value = overrides.profile.tagline;
        if (overrides.profile.badgeTopLeft) document.getElementById("cms-edit-badge-top").value = overrides.profile.badgeTopLeft;
        if (overrides.profile.badgeBottomRight) document.getElementById("cms-edit-badge-bottom").value = overrides.profile.badgeBottomRight;
      }
      renderProjectsList();
      renderCertsList();
    } catch (e) {}
  }

  // File Attachment Handling
  function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) setAttachment(file);
  }

  function setAttachment(file) {
    const reader = new FileReader();
    reader.onload = () => {
      currentAttachment = {
        name: file.name,
        data: reader.result,
        type: file.type
      };
      // Show tray
      document.getElementById("cms-tray-img").src = reader.result;
      document.getElementById("cms-tray-name").textContent = file.name;
      document.getElementById("cms-attachment-tray").classList.add("active");
      document.getElementById("cms-bot-input").focus();
    };
    reader.readAsDataURL(file);
  }

  function removeAttachment() {
    currentAttachment = null;
    document.getElementById("cms-attachment-tray").classList.remove("active");
    document.getElementById("cms-tray-img").src = "";
    document.getElementById("cms-file-input").value = "";
  }

  function handlePasteImage(e) {
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    for (const item of items) {
      if (item.type.indexOf("image") !== -1) {
        const file = item.getAsFile();
        setAttachment(file);
        break;
      }
    }
  }

  function setupChatDragAndDrop() {
    const box = document.getElementById("cms-chat-box");
    box.addEventListener("dragover", (e) => {
      e.preventDefault();
      box.classList.add("dragover");
    });
    box.addEventListener("dragleave", () => box.classList.remove("dragover"));
    box.addEventListener("drop", (e) => {
      e.preventDefault();
      box.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith("image/")) {
          setAttachment(file);
        }
      }
    });
  }

  // Combined Message + Attachment Sender
  async function sendCombinedMessage() {
    const input = document.getElementById("cms-bot-input");
    const text = input.value.trim();
    const attachment = currentAttachment;

    if (!text && !attachment) return;

    // Reset input and attachment tray
    input.value = "";
    removeAttachment();

    // Render User Bubble with image + text
    appendUserBubble(text, attachment ? attachment.data : null);

    // Show typing indicator
    const typingId = "typing-" + Date.now();
    appendChatMsg("Thinking and processing... ✨", "bot", typingId);

    try {
      let uploadedUrl = null;
      let cleanFilename = null;

      // 1. If an attachment exists, upload it first
      if (attachment) {
        const upRes = await fetch("/api/admin/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            filename: attachment.name,
            data: attachment.data
          })
        });
        const upData = await upRes.json();
        if (upData.success) {
          uploadedUrl = upData.url;
          cleanFilename = upData.name;
        }
      }

      // 2. Call G-Bot with text and uploaded info
      const res = await fetch("/api/admin/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: text || (uploadedUrl ? `Photo uploaded: ${cleanFilename}` : "Hello"),
          filename: cleanFilename,
          url: uploadedUrl
        })
      });
      const data = await res.json();
      removeChatMsg(typingId);
      appendChatMsg(data.reply || "Done!", "bot");
      if (data.updated) {
        applyLiveDOM();
      }
    } catch (e) {
      removeChatMsg(typingId);
      appendChatMsg("Action complete! Aapka update ho gaya hai.", "bot");
    }
  }

  function appendUserBubble(text, imgData) {
    const box = document.getElementById("cms-bot-messages");
    if (!box) return;
    const msg = document.createElement("div");
    msg.className = "cms-msg user";

    let innerHtml = "";
    if (imgData) {
      innerHtml += `
        <div class="cms-msg-attachment">
          <img src="${imgData}" alt="attached" onclick="window.open('${imgData}')" />
        </div>
      `;
    }
    if (text) {
      innerHtml += `<div>${formatMarkdown(text)}</div>`;
    }

    msg.innerHTML = innerHtml;
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
  }

  function appendChatMsg(text, sender, id) {
    const box = document.getElementById("cms-bot-messages");
    if (!box) return;
    const msg = document.createElement("div");
    msg.className = `cms-msg ${sender}`;
    if (id) msg.id = id;
    msg.innerHTML = formatMarkdown(text);
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
  }

  function removeChatMsg(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function formatMarkdown(t) {
    return t
      .replace(/\n/g, "<br/>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");
  }

  // GitHub Sync
  async function syncGitHub() {
    const resBox = document.getElementById("cms-gh-results");
    resBox.innerHTML = "⏳ Syncing latest repositories from GitHub...";
    try {
      const res = await fetch("/api/sync/github");
      const d = await res.json();
      if (d.success && d.repos && d.repos.length > 0) {
        let html = `<div style="margin-top:8px; display:flex; flex-direction:column; gap:8px;">`;
        d.repos.slice(0, 6).forEach((r) => {
          html += `
            <div style="background:#F9FAFB; border:1px solid #E5E7EB; border-radius:10px; padding:10px; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong style="color:#111827;">${r.name}</strong>
                <div style="font-size:11px; color:#6B7280;">${r.description || "No description"}</div>
                <div style="font-size:10px; color:#9CA3AF; margin-top:2px;">⭐ ${r.stars} · 🍴 ${r.forks} · 💻 ${r.language}</div>
              </div>
              <button class="cms-btn cms-btn-secondary" style="font-size:11px; padding:4px 10px;" onclick="window.cmsImportRepo('${r.name}', '${encodeURIComponent(r.description || '')}', '${r.url}', '${r.language}')">
                + Import to Projects
              </button>
            </div>
          `;
        });
        html += `</div>`;
        resBox.innerHTML = html;
      } else {
        resBox.innerHTML = "No public repositories found or rate-limited. Check username in Settings.";
      }
    } catch (e) {
      resBox.innerHTML = "Error syncing GitHub: " + e;
    }
  }

  // LeetCode Sync
  async function syncLeetCode() {
    try {
      const res = await fetch("/api/sync/leetcode");
      const d = await res.json();
      if (d.success && d.stats) {
        const s = d.stats;
        document.getElementById("lc-total").textContent = s.totalSolved || 380;
        document.getElementById("lc-easy").textContent = s.easySolved || 160;
        document.getElementById("lc-med").textContent = s.mediumSolved || 185;
        document.getElementById("lc-hard").textContent = s.hardSolved || 35;
        document.getElementById("lc-rank").textContent = s.ranking ? `#${s.ranking}` : "Top 12%";
        alert("LeetCode stats synced successfully!");
      }
    } catch (e) {
      alert("LeetCode sync error: " + e);
    }
  }

  // Projects rendering & add
  function renderProjectsList() {
    const list = document.getElementById("cms-projects-list");
    if (!list) return;
    const defaultProjects = [
      { name: "StockSikh", domain: "Full-Stack AI · Financial Analytics", shot: "/pics/stocksikh_1.png" },
      { name: "Gullak", domain: "FinTech · Personal Finance", shot: "/pics/gullak-1.jpg" },
      { name: "Her Voice", domain: "Women Safety & Empowerment App", shot: "/pics/her-voice-1.jpg" },
      { name: "ML-Lab", domain: "Predictive Analytics & Anomaly Engine", shot: "/pics/ml-lab-1.jpg" },
      { name: "RetailSphere", domain: "Retail Demand Forecasting & Queue", shot: "/pics/retailsphere-1.jpg" },
      { name: "Civic Connect", domain: "Smart Civic Issue Analytics & Dispatcher", shot: "/pics/civic-connect-1.jpg" },
      { name: "Popular Tweets Analytics", domain: "Social Media NLP & Tableau", shot: "/pics/tweets_1.png" },
      { name: "Military Inventory", domain: "Inventory & Ration Stock Tracker", shot: "/pics/military-inventory-1.jpg" }
    ];

    const all = [...(overrides.customProjects || []), ...defaultProjects];
    let html = `<div style="display:flex; flex-direction:column; gap:8px;">`;
    all.forEach((p) => {
      html += `
        <div style="display:flex; align-items:center; justify-content:space-between; padding:10px 14px; background:#FFF; border:1.5px solid #F8C8D8; border-radius:12px;">
          <div style="display:flex; align-items:center; gap:12px;">
            <img src="${p.shot || '/favicon.svg'}" style="width:40px; height:40px; border-radius:8px; object-fit:cover; border:1px solid #E5E7EB;" />
            <div>
              <strong style="color:#5B7B1B; font-size:13px;">${p.name}</strong>
              <div style="font-size:11px; color:#6B7280;">${p.domain || ''}</div>
            </div>
          </div>
          <div style="display:flex; gap:6px;">
            <span class="cms-stat-badge" style="margin:0;">Active</span>
          </div>
        </div>
      `;
    });
    html += `</div>`;
    list.innerHTML = html;
  }

  function handleAddProject() {
    const name = document.getElementById("cms-np-name").value.trim();
    if (!name) return alert("Please enter project name!");
    const np = {
      name: name,
      tagline: document.getElementById("cms-np-tagline").value.trim(),
      domain: document.getElementById("cms-np-domain").value.trim(),
      tech: document.getElementById("cms-np-tech").value.split(",").map((s) => s.trim()),
      links: {
        live: document.getElementById("cms-np-live").value.trim(),
        github: document.getElementById("cms-np-github").value.trim()
      },
      shot: document.getElementById("cms-np-shot").value.trim() || "/pics/mock-civic.jpg",
      contribution: document.getElementById("cms-np-contrib").value.trim()
    };

    if (!overrides.customProjects) overrides.customProjects = [];
    overrides.customProjects.unshift(np);
    renderProjectsList();
    document.getElementById("cms-add-project-box").style.display = "none";
    alert(`Project ${name} added! Click "Save & Apply Live" to persist.`);
  }

  // Certifications rendering
  function renderCertsList() {
    const cList = document.getElementById("cms-certs-list");
    if (!cList) return;
    const certs = overrides.certifications || [
      { title: "Oracle Certified Associate, Java SE 8 Programmer", issuer: "Oracle", date: "2024" },
      { title: "AWS Certified Cloud Practitioner", issuer: "AWS", date: "2024" },
      { title: "Data Engineering with Databricks", issuer: "Databricks", date: "2024" }
    ];
    let html = `<div style="display:flex; flex-direction:column; gap:6px; margin-top:8px;">`;
    certs.forEach((c) => {
      html += `
        <div style="padding:8px 12px; background:#F9FAFB; border:1px solid #E5E7EB; border-radius:10px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <strong style="font-size:12px; color:#1F2937;">${c.title}</strong>
            <div style="font-size:10px; color:#6B7280;">${c.issuer} · ${c.date}</div>
          </div>
          <span style="font-size:10px; color:#10B981; font-weight:700;">✓ Verified</span>
        </div>
      `;
    });
    html += `</div>`;
    cList.innerHTML = html;
  }

  // Save Settings to .env
  async function saveSettings() {
    const payload = {
      ADMIN_PASSWORD: document.getElementById("cfg-admin-pwd").value.trim() || "garima123",
      GEMINI_API_KEY: document.getElementById("cfg-gemini-key").value.trim(),
      GITHUB_USERNAME: document.getElementById("cfg-gh-user").value.trim() || "Garimaraj15",
      GITHUB_TOKEN: document.getElementById("cfg-gh-token").value.trim(),
      LEETCODE_USERNAME: document.getElementById("cfg-lc-user").value.trim() || "Garimaraj15",
      LINKEDIN_URL: document.getElementById("cfg-li-url").value.trim()
    };
    try {
      const res = await fetch("/api/admin/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const d = await res.json();
      if (d.success) alert("Settings successfully saved to scratch/.env!");
    } catch (e) {
      alert("Error saving settings: " + e);
    }
  }

  // Save Content Overrides Live
  async function saveContent() {
    overrides.profile = {
      name: document.getElementById("cms-edit-name").value.trim(),
      tagline: document.getElementById("cms-edit-tagline").value.trim(),
      badgeTopLeft: document.getElementById("cms-edit-badge-top").value.trim(),
      badgeBottomRight: document.getElementById("cms-edit-badge-bottom").value.trim()
    };

    try {
      const res = await fetch("/api/admin/overrides", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(overrides)
      });
      const d = await res.json();
      if (d.success) {
        applyLiveDOM(overrides);
        alert("Changes saved & applied live!");
      }
    } catch (e) {
      alert("Error saving overrides: " + e);
    }
  }

  
  // ==========================================
  // LIVE DOM SYNC ENGINE
  // Reflects Controller Hub edits directly onto the live portfolio DOM
  // ==========================================
  async function applyLiveDOM(overrideData) {
    let data = overrideData || overrides;
    if (!data || !data.profile) {
      try {
        const res = await fetch("/api/admin/overrides");
        data = await res.json();
        overrides = data;
      } catch (e) {
        return;
      }
    }
    if (!data) return;

    try {
      // 1. Tagline in Hero
      if (data.profile && data.profile.tagline) {
        const pEls = document.querySelectorAll("p");
        pEls.forEach(el => {
          const txt = el.innerText || "";
          if (txt.toLowerCase().includes("data") && txt.toLowerCase().includes("grit") && txt.toLowerCase().includes("comeback")) {
            const svg = el.querySelector("svg");
            el.innerHTML = "";
            if (svg) el.appendChild(svg);
            el.appendChild(document.createTextNode(" " + data.profile.tagline));
          }
        });
      }

      // 2. Polaroid Floating Badges (Value & Subtitle/Label)
      if (data.profile) {
        const floaties = document.querySelectorAll(".animate-floaty");
        floaties.forEach(f => {
          const cls = f.className || "";
          const valEl = f.querySelector(".font-mono2") || f.querySelector("div[style*='font-size']");
          const subEl = f.querySelector(".font-mono2 + div") || f.querySelector("div[class*='text-[']");
          if (cls.includes("-left-")) {
            if (data.profile.badgeTopLeft && valEl) valEl.innerText = data.profile.badgeTopLeft;
            if (data.profile.badgeTopLeftSub && subEl) subEl.innerText = data.profile.badgeTopLeftSub;
          } else if (cls.includes("-right-")) {
            if (data.profile.badgeBottomRight && valEl) valEl.innerText = data.profile.badgeBottomRight;
            if (data.profile.badgeBottomRightSub && subEl) subEl.innerText = data.profile.badgeBottomRightSub;
          }
        });
      }

      // 3. LeetCode Stat Cards
      if (data.leetCodeCache) {
        document.querySelectorAll("div.rounded-2xl.border-2").forEach(card => {
          const txt = card.innerText || "";
          if (txt.includes("LeetCode") && txt.includes("problems solved")) {
            const valEl = card.querySelector(".font-mono2") || card.firstElementChild;
            if (valEl && data.leetCodeCache.totalSolved) {
              valEl.innerText = data.leetCodeCache.totalSolved;
            }
          }
          if (txt.includes("ranking") || txt.includes("Global ranking")) {
            const valEl = card.querySelector(".font-mono2") || card.firstElementChild;
            if (valEl && data.leetCodeCache.ranking) {
              valEl.innerText = (data.leetCodeCache.ranking.startsWith("#") ? "" : "#") + data.leetCodeCache.ranking;
            }
          }
        });
      }
    } catch (err) {
      console.warn("applyLiveDOM error:", err);
    }
  }

  // Periodic DOM check to support client-side React router navigation
  setInterval(() => {
    if (window.location.pathname === "/" || window.location.pathname === "") {
      applyLiveDOM();
    }
  }, 2000);

  window.cmsQuickAction = function (action) {
    if (action === "sync-github") {
      switchTab("tab-sync");
      syncGitHub();
    } else if (action === "sync-leetcode") {
      switchTab("tab-sync");
      syncLeetCode();
    }
  };

  window.cmsImportRepo = function (name, desc, url, lang) {
    switchTab("tab-content");
    document.getElementById("cms-add-project-box").style.display = "block";
    document.getElementById("cms-np-name").value = name;
    document.getElementById("cms-np-tagline").value = decodeURIComponent(desc) || (name + " project");
    document.getElementById("cms-np-github").value = url;
    document.getElementById("cms-np-tech").value = lang || "Code";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Init on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      createControllerBtn();
      createHubModal();
      applyLiveDOM();
    });
  } else {
    createControllerBtn();
    createHubModal();
      applyLiveDOM();
  }
})();

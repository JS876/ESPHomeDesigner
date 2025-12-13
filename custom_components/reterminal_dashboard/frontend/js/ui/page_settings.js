class PageSettings {
    constructor() {
        this.modal = document.getElementById('pageSettingsModal');
        this.closeBtn = document.getElementById('pageSettingsClose');
        this.saveBtn = document.getElementById('pageSettingsSave');
        this.nameInput = document.getElementById('pageSettingsName');
        this.refreshInput = document.getElementById('pageSettingsRefresh');
        this.darkModeInput = document.getElementById('pageSettingsDarkMode');
        this.pageIndex = -1;
    }

    init() {
        if (!this.modal) return;
        if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
        if (this.saveBtn) this.saveBtn.addEventListener('click', () => this.save());
    }

    open(index) {
        if (!this.modal) return;
        this.pageIndex = index;
        const page = AppState.pages[index];
        if (!page) return;

        if (this.nameInput) this.nameInput.value = page.name || "";
        if (this.refreshInput) this.refreshInput.value = page.refresh_s || "";
        if (this.darkModeInput) {
            // Default to "inherit" if not set
            this.darkModeInput.value = page.dark_mode || "inherit";
        }

        this.modal.classList.remove('hidden');
        this.modal.style.display = 'flex';
    }

    close() {
        if (this.modal) {
            this.modal.classList.add('hidden');
            this.modal.style.display = 'none';
        }
    }

    save() {
        if (this.pageIndex === -1) return;
        const page = AppState.pages[this.pageIndex];
        if (!page) return;

        const name = this.nameInput ? this.nameInput.value : page.name;
        const refresh = this.refreshInput ? parseInt(this.refreshInput.value, 10) : NaN;
        const darkMode = this.darkModeInput ? this.darkModeInput.value : "inherit";

        page.name = name;
        if (!isNaN(refresh) && refresh > 0) {
            page.refresh_s = refresh;
        } else {
            delete page.refresh_s;
        }

        // Save dark mode setting (store "inherit" to allow explicit clearing)
        page.dark_mode = darkMode;

        AppState.setPages(AppState.pages); // Trigger update
        this.close();
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("familiesContainer");

    if (!container) {
        return;
    }

    const data = window.GENEALOGY_DATA;

    if (!data || !Array.isArray(data.families)) {
        container.innerHTML = `
            <div class="empty-message">
                اطلاعات خاندان‌ها پیدا نشد.
            </div>
        `;
        return;
    }

    if (data.families.length === 0) {
        container.innerHTML = `
            <div class="empty-message">
                هنوز هیچ خاندانی ثبت نشده است.
            </div>
        `;
        return;
    }

    container.innerHTML = data.families
        .map(family => createFamilyCard(family))
        .join("");
});


function createFamilyCard(family) {

    const familyUrl =
        `family.html?family=${encodeURIComponent(family.id)}`;

    return `
        <article class="family-card">

            ${
                family.image
                    ? `
                        <img
                            class="family-card-image"
                            src="${family.image}"
                            alt="${escapeHtml(family.name)}"
                            onerror="this.style.display='none'"
                        >
                    `
                    : ""
            }

            <div class="family-card-body">

                <span class="family-card-number">
                    خاندان شماره ${family.number ?? "-"}
                </span>

                <h3>
                    ${escapeHtml(family.name)}
                </h3>

                <div class="family-stats">

                    <div class="stat">
                        <span class="stat-number">—</span>
                        <span class="stat-label">کل افراد</span>
                    </div>

                    <div class="stat">
                        <span class="stat-number">—</span>
                        <span class="stat-label">نسل‌ها</span>
                    </div>

                </div>

                <a
                    class="family-button"
                    href="${familyUrl}"
                >
                    مشاهده شجره‌نامه
                </a>

            </div>

        </article>
    `;
}


function escapeHtml(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

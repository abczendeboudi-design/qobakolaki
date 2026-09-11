document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("familiesContainer");

    if (!container) {
        return;
    }

    const data = window.GENEALOGY_DATA;

    // بررسی وجود اطلاعات
    if (!data) {

        showError(
            "اطلاعات اصلی سایت پیدا نشد."
        );

        return;
    }


    if (!Array.isArray(data.families)) {

        showError(
            "اطلاعات خاندان‌ها پیدا نشد."
        );

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


    // ساخت کارت خاندان‌ها
    container.innerHTML = data.families
        .map(family => createFamilyCard(family))
        .join("");

});



/* ==========================================
   ساخت کارت خاندان
========================================== */

function createFamilyCard(family) {

    const familyUrl =
        `family.html?family=${encodeURIComponent(family.id)}`;


    const stats =
        calculateFamilyStats(family);


    const imageHtml = family.image
        ? `
            <img
                class="family-card-image"
                src="${escapeHtml(family.image)}"
                alt="${escapeHtml(family.name)}"
                onerror="this.style.display='none'"
            >
        `
        : "";


    return `

        <article class="family-card">

            ${imageHtml}


            <div class="family-card-body">


                <!-- شماره خاندان -->

                <span class="family-card-number">

                    خاندان شماره
                    ${escapeHtml(family.number ?? "-")}

                </span>



                <!-- نام خاندان -->

                <h3>

                    ${escapeHtml(family.name)}

                </h3>



                <!-- آمار -->

                <div class="family-stats">


                    <!-- کل افراد -->

                    <div class="stat">

                        <span class="stat-number">

                            ${stats.total}

                        </span>

                        <span class="stat-label">

                            کل افراد

                        </span>

                    </div>



                    <!-- مردان -->

                    <div class="stat">

                        <span class="stat-number">

                            ${stats.male}

                        </span>

                        <span class="stat-label">

                            مردان

                        </span>

                    </div>



                    <!-- زنان -->

                    <div class="stat">

                        <span class="stat-number">

                            ${stats.female}

                        </span>

                        <span class="stat-label">

                            زنان

                        </span>

                    </div>



                    <!-- نسل‌ها -->

                    <div class="stat">

                        <span class="stat-number">

                            ${stats.generations}

                        </span>

                        <span class="stat-label">

                            نسل‌ها

                        </span>

                    </div>


                </div>



                <!-- دکمه ورود -->

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



/* ==========================================
   محاسبه آمار خاندان
========================================== */

function calculateFamilyStats(family) {

    const people =
        window.GENEALOGY_DATA.people || {};


    const relationships =
        window.GENEALOGY_DATA.relationships || [];


    // پیدا کردن تمام افراد متصل به سرشاخه

    const familyPeople =
        collectFamilyPeople(
            family.root,
            relationships
        );


    let male = 0;

    let female = 0;


    familyPeople.forEach(personId => {

        const person =
            people[personId];


        if (!person) {
            return;
        }


        if (person.gender === "male") {

            male++;

        }


        if (person.gender === "female") {

            female++;

        }

    });


    return {

        total: familyPeople.size,

        male: male,

        female: female,

        generations:
            calculateGenerations(
                family.root,
                relationships
            )

    };

}



/* ==========================================
   پیدا کردن تمام افراد خاندان
========================================== */

function collectFamilyPeople(
    rootId,
    relationships
) {

    const visited =
        new Set();


    const queue =
        [rootId];


    while (queue.length > 0) {

        const current =
            queue.shift();


        if (
            !current ||
            visited.has(current)
        ) {

            continue;

        }


        visited.add(current);



        relationships.forEach(relation => {


            /* --------------------------
               رابطه والد و فرزند
            -------------------------- */

            if (
                relation.type === "parent"
            ) {


                // از والد به فرزند

                if (
                    relation.parent === current
                ) {

                    queue.push(
                        relation.child
                    );

                }


                // از فرزند به والد

                if (
                    relation.child === current
                ) {

                    queue.push(
                        relation.parent
                    );

                }

            }



            /* --------------------------
               رابطه همسر
            -------------------------- */

            if (
                relation.type === "spouse"
            ) {


                if (
                    relation.person1 === current
                ) {

                    queue.push(
                        relation.person2
                    );

                }


                if (
                    relation.person2 === current
                ) {

                    queue.push(
                        relation.person1
                    );

                }

            }

        });

    }


    return visited;

}



/* ==========================================
   محاسبه تعداد نسل‌ها
========================================== */

function calculateGenerations(
    rootId,
    relationships
) {

    const visited =
        new Set();


    const queue = [

        {
            id: rootId,
            generation: 1
        }

    ];


    let maxGeneration = 1;



    while (queue.length > 0) {

        const current =
            queue.shift();


        /*
         * اگر قبلاً بررسی شده،
         * دوباره بررسی نشود.
         */

        if (
            visited.has(current.id)
        ) {

            continue;

        }


        visited.add(
            current.id
        );


        maxGeneration =
            Math.max(
                maxGeneration,
                current.generation
            );



        relationships.forEach(
            relation => {


                /*
                 * فقط رابطه
                 * والد → فرزند
                 * برای محاسبه نسل استفاده می‌شود.
                 */

                if (
                    relation.type === "parent" &&
                    relation.parent === current.id
                ) {


                    queue.push({

                        id: relation.child,

                        generation:
                            current.generation + 1

                    });

                }

            }
        );

    }


    return maxGeneration;

}



/* ==========================================
   نمایش خطا
========================================== */

function showError(message) {

    const container =
        document.getElementById(
            "familiesContainer"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <div class="empty-message">

            ${escapeHtml(message)}

        </div>

    `;

}



/* ==========================================
   جلوگیری از ورود HTML ناخواسته
========================================== */

function escapeHtml(value) {

    return String(value ?? "")

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}
